import { getPostsByTag, getAllTags } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

type Params = { params: Promise<{ tag: string }> };

export async function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Posts tagged "${tag}"`,
    description: `All blog entries tagged with "${tag}" from Toronto AI Consulting.`,
  };
}

export default async function TagPage({ params }: Params) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const allTags = getAllTags();

  return (
    <div>
      <Link
        href="/blog"
        className="text-sm text-[#525252] hover:text-[#737373] transition-colors"
      >
        ← all entries
      </Link>
      <h1 className="text-2xl font-bold tracking-tight text-white mt-6 mb-2">
        Tagged: {tag}
      </h1>
      <p className="text-[#737373] mb-8">
        {posts.length} {posts.length === 1 ? "entry" : "entries"}
      </p>

      <div className="flex flex-wrap gap-2 mb-12">
        {allTags.map(({ tag: t, count }) => (
          <Link
            key={t}
            href={`/blog/tag/${t}`}
            className={`text-xs font-mono px-3 py-1 rounded-full transition-colors ${
              t === tag
                ? "text-white bg-[#1a1a1a]"
                : "text-[#737373] bg-[#111111] hover:text-white hover:bg-[#1a1a1a]"
            }`}
          >
            {t} ({count})
          </Link>
        ))}
      </div>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-[#1a1a1a] pb-10">
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-center gap-3 mb-1">
                <time className="text-sm text-[#525252] font-mono">
                  {post.date}
                </time>
                <span className="text-sm text-[#525252]">·</span>
                <span className="text-sm text-[#525252]">
                  {post.readingTime} min read
                </span>
              </div>
              <h2 className="text-xl font-semibold text-white mt-1 group-hover:text-[#a3a3a3] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#737373] mt-2">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
