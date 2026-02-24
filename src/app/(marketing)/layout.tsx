import type { Metadata } from 'next'
import Header from '@/components/header'
import FooterSection from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Toronto AI Consulting | AI Consulting for Toronto Businesses',
    description: 'Hands-on AI implementation for small and medium businesses in Toronto. From strategy to automation, we work 1-on-1 with founders to integrate AI tools and workflows that drive real results.',
    keywords: 'ai consulting toronto, ai implementation business, ai tools small business, ai automation toronto, ai workflow consulting, ai for entrepreneurs',
}

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Link
                href="#main-content"
                className="skip-link">
                Skip to Main Content
            </Link>
            <Header />
            <main
                id="main-content"
                role="main"
                className="bg-indigo-900/10">
                {children}
            </main>
            <FooterSection />
        </>
    )
}
