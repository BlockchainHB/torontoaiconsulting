import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { formatDate } from '@/lib/format-date'
import { getPostBySlug, getAllPostSlugs } from '@/lib/actions'
import { siteUrl } from '@/lib/seo'

export async function generateStaticParams() {
    const posts = await getAllPostSlugs()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return { title: 'Post Not Found' }
    }

    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `${siteUrl}/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.publishedAt,
            url: `${siteUrl}/blog/${slug}`,
            ...(post.image && {
                images: [{ url: post.image, width: 1200, height: 675, alt: post.title }],
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            ...(post.image && { images: [post.image] }),
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        url: `${siteUrl}/blog/${slug}`,
        publisher: {
            '@type': 'Organization',
            name: 'Toronto AI Consulting',
            url: siteUrl,
        },
        ...(post.image && { image: { '@type': 'ImageObject', url: `${siteUrl}${post.image}` } }),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
                <div className="grid max-lg:gap-4 lg:grid-cols-[1fr_auto_1fr]">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/blog/category/${post.category.slug}`}>{post.category.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <article className="max-w-2xl">
                        <header className="mb-8">
                            <time
                                className="text-muted-foreground text-sm"
                                dateTime={new Date(post.publishedAt).toISOString()}>
                                {formatDate(post.publishedAt)}
                            </time>
                            <h1 className="text-foreground mt-6 text-balance text-3xl font-semibold md:text-4xl md:leading-tight">{post.title}</h1>
                        </header>

                        <div className="max-w-2xl">
                            {post.image && (
                                <div className="relative overflow-hidden rounded-xl border shadow shadow-black/5">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={1200}
                                        height={675}
                                        className="aspect-video w-full object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            <div className="mb-12 flex flex-wrap items-center gap-4 border-b py-6">
                                {post.authors.map((author, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[auto_1fr] items-center gap-2">
                                        <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                                            <Image
                                                src={author.image}
                                                alt={author.name}
                                                width={460}
                                                height={460}
                                                className="size-full object-cover"
                                            />
                                        </div>
                                        <span className="text-foreground line-clamp-1 text-sm">{author.name}</span>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="prose prose-slate dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.body }}
                            />
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
