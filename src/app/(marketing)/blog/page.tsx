import { BlogFilter, Category } from '@/app/(marketing)/blog/category-filter'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb'
import { BlogListWithPagination } from '@/app/(marketing)/blog/blog-list-with-pagination'
import { loadMorePosts, getInitialPosts, getTotalPostsCount } from '@/lib/actions'
import { siteUrl } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI Consulting Blog | Guides, Automation & AI Strategy',
    description: 'Practical AI guides, automation tutorials, and strategy insights from Toronto AI Consulting. Learn how to implement AI workflows, agents, and tools for your business.',
    alternates: {
        canonical: `${siteUrl}/blog`,
    },
    openGraph: {
        title: 'AI Consulting Blog | Guides, Automation & AI Strategy',
        description: 'Practical AI guides, automation tutorials, and strategy insights from Toronto AI Consulting.',
        url: `${siteUrl}/blog`,
        type: 'website',
    },
}

const PAGE_SIZE = 12

export default async function BlogPage() {
    const [posts, totalCount] = await Promise.all([getInitialPosts(PAGE_SIZE), getTotalPostsCount()])

    const categories: Category[] = Array.from(new Map(posts.filter((post) => post.category).map((post) => [post.category.slug, post.category.title]))).map(([slug, title]) => ({ slug, title }))

    return (
        <>
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="max-w-md">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold">
                        News, insights and more from <strong className="text-foreground font-semibold">Toronto AI Consulting</strong>
                    </h1>
                </div>
            </div>
            <BlogFilter
                categories={categories}
                posts={posts}
            />
            <BlogListWithPagination
                initialPosts={posts}
                totalCount={totalCount}
                loadMoreAction={loadMorePosts}
            />
        </>
    )
}
