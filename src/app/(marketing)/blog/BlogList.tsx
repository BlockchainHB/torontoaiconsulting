"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface PostItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
  category: "journal" | "guide";
}

export default function BlogList({ posts }: { posts: PostItem[] }) {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "all";
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const filtered =
    activeTab === "all"
      ? posts
      : activeTab === "journal"
        ? posts.filter((p) => p.category === "journal")
        : activeTab === "guides"
          ? posts.filter((p) => p.category === "guide")
          : posts.filter((p) => p.tags.includes(activeTab));

  const journalCount = posts.filter((p) => p.category === "journal").length;
  const guideCount = posts.filter((p) => p.category === "guide").length;

  // Get top tags for guides only (skip category-level tags)
  const tagCounts: Record<string, number> = {};
  posts
    .filter((p) => p.category === "guide")
    .forEach((p) => {
      p.tags
        .filter((t) => !["toronto-ai", "tutorial", "guide"].includes(t))
        .forEach((t) => {
          tagCounts[t] = (tagCounts[t] || 0) + 1;
        });
    });
  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return (
    <div>
      {/* Main tabs - mobile friendly */}
      <div className="flex gap-1 mb-6 bg-[#111111] rounded-lg p-1 w-fit">
        {[
          { key: "all", label: "All", count: posts.length },
          { key: "journal", label: "Journal", count: journalCount },
          { key: "guides", label: "Guides", count: guideCount },
        ].map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === key
                ? "bg-[#1a1a1a] text-white"
                : "text-[#737373] hover:text-white"
            }`}
          >
            {label}
            <span className="ml-1.5 text-xs text-[#525252]">{count}</span>
          </button>
        ))}
      </div>

      {/* Tag filters - only show when on guides or all tab */}
      {(activeTab === "guides" || activeTab === "all") && topTags.length > 0 && (
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
          {topTags.map(([tag, count]) => (
            <button
              key={tag}
              onClick={() =>
                setActiveTab(activeTab === tag ? "guides" : tag)
              }
              className={`text-xs font-mono whitespace-nowrap px-3 py-1.5 rounded-full transition-colors flex-shrink-0 ${
                activeTab === tag
                  ? "text-white bg-[#1a1a1a]"
                  : "text-[#737373] bg-[#111111] hover:text-white"
              }`}
            >
              {tag} ({count})
            </button>
          ))}
        </div>
      )}

      {/* Post list */}
      <div className="space-y-8">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="border-b border-[#1a1a1a] pb-8"
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-center gap-3 mb-1">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded ${
                    post.category === "journal"
                      ? "text-[#a3a3a3] bg-[#1a1a1a]"
                      : "text-[#525252] bg-[#111111]"
                  }`}
                >
                  {post.category === "journal" ? "journal" : "guide"}
                </span>
                <time className="text-sm text-[#525252] font-mono">
                  {post.date}
                </time>
                <span className="text-sm text-[#525252]">·</span>
                <span className="text-sm text-[#525252]">
                  {post.readingTime} min
                </span>
              </div>
              <h2 className="text-lg font-semibold text-white mt-2 group-hover:text-[#a3a3a3] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#737373] mt-2 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="text-[#525252] italic py-8">
            No posts in this category yet.
          </p>
        )}
      </div>

      <p className="text-xs text-[#525252] mt-12 text-center">
        {filtered.length} {filtered.length === 1 ? "post" : "posts"}
      </p>
    </div>
  );
}
