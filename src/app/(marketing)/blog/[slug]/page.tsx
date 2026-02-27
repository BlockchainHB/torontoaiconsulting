import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      ...(post.image && {
        images: [{ url: post.image, width: 1200, height: 675, alt: post.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.image && { images: [post.image] }),
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  // Get adjacent posts for navigation
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <article>
      <header className="mb-10">
        <Link
          href="/blog"
          className="text-sm text-[#525252] hover:text-[#737373] transition-colors"
        >
          ← back
        </Link>
        <div className="flex items-center gap-3 mt-6 mb-2">
          <time className="text-sm text-[#525252] font-mono">{post.date}</time>
          <span className="text-sm text-[#525252]">·</span>
          <span className="text-sm text-[#525252]">
            {post.readingTime} min read
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white mt-2">
          {post.title}
        </h1>
        {post.image && (
          <div className="mt-6 -mx-6 sm:-mx-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg"
              loading="eager"
            />
          </div>
        )}
        {post.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-xs font-mono text-[#525252] bg-[#111111] px-2 py-0.5 rounded hover:text-white transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Post navigation */}
      <nav className="mt-16 pt-8 border-t border-[#1a1a1a]">
        <div className="flex justify-between gap-8">
          <div className="flex-1">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group block">
                <span className="text-xs text-[#525252] uppercase tracking-wider">
                  ← Previous
                </span>
                <p className="text-sm text-[#737373] group-hover:text-white transition-colors mt-1 line-clamp-1">
                  {prevPost.title}
                </p>
              </Link>
            )}
          </div>
          <div className="flex-1 text-right">
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group block">
                <span className="text-xs text-[#525252] uppercase tracking-wider">
                  Next →
                </span>
                <p className="text-sm text-[#737373] group-hover:text-white transition-colors mt-1 line-clamp-1">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </article>
  );
}
