'use client'

import Header from '@/components/header'
import FooterSection from '@/components/footer'
import { usePathname } from 'next/navigation'

export default function MarketingLayoutShell({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const pathname = usePathname()
    const hideMainHeader = pathname === '/blog' || pathname.startsWith('/blog/')

    return (
        <>
            {!hideMainHeader && <Header />}
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
