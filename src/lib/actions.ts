'use server'

import {
    getAllPosts as getFilePosts,
    getPostBySlug as getFilePostBySlug,
    getAllSlugs,
    getPostsByCategory,
} from '@/lib/posts'
import { Post, PostWithBody } from '@/types/post'

const DEFAULT_AUTHOR = {
    name: 'Toronto AI Consulting',
    image: '/logo-toronto-ai-consulting.png',
}

function mapCategory(cat: string): { title: string; slug: string } {
    if (cat === 'journal') return { title: 'Journal', slug: 'journal' }
    return { title: 'Guides', slug: 'guides' }
}

function mapPost(post: ReturnType<typeof getFilePosts>[0]): Post {
    return {
        title: post.title,
        description: post.excerpt,
        slug: post.slug,
        href: post.slug,
        publishedAt: post.date,
        date: post.date,
        image: post.image || '',
        category: mapCategory(post.category),
        authors: [DEFAULT_AUTHOR],
    }
}

export async function getInitialPosts(limit: number = 12): Promise<Post[]> {
    return getFilePosts().slice(0, limit).map(mapPost)
}

export async function loadMorePosts(offset: number, limit: number = 9): Promise<Post[]> {
    return getFilePosts().slice(offset, offset + limit).map(mapPost)
}

export async function getTotalPostsCount(): Promise<number> {
    return getFilePosts().length
}

export async function getPostBySlug(slug: string): Promise<PostWithBody | null> {
    const post = await getFilePostBySlug(slug)
    if (!post) return null
    return {
        ...mapPost(post),
        body: post.content,
    }
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
    return getAllSlugs().map((slug) => ({ slug }))
}

export async function getAllPosts(): Promise<Post[]> {
    return getFilePosts().map(mapPost)
}

export async function getCategoryPosts(category: string, limit: number = 9): Promise<Post[]> {
    const cat = category === 'journal' ? 'journal' : 'guide'
    return getPostsByCategory(cat as 'journal' | 'guide')
        .slice(0, limit)
        .map(mapPost)
}

export async function loadMoreCategoryPosts(category: string, offset: number, limit: number = 9): Promise<Post[]> {
    const cat = category === 'journal' ? 'journal' : 'guide'
    return getPostsByCategory(cat as 'journal' | 'guide')
        .slice(offset, offset + limit)
        .map(mapPost)
}

export async function getCategoryPostsCount(category: string): Promise<number> {
    const cat = category === 'journal' ? 'journal' : 'guide'
    return getPostsByCategory(cat as 'journal' | 'guide').length
}

export async function getAllCategories(): Promise<{ title: string; slug: string }[]> {
    return [
        { title: 'Guides', slug: 'guides' },
        { title: 'Journal', slug: 'journal' },
    ]
}
