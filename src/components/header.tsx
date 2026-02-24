'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/container'
import { CAL_BOOKING_LINK } from '@/lib/const'

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
]

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        const originalOverflow = document.body.style.overflow

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [isMobileMenuOpen])

    return (
        <header
            role="banner"
            data-state={isMobileMenuOpen ? 'active' : 'inactive'}
            {...(isScrolled && { 'data-scrolled': true })}
            className="fixed inset-x-0 top-0 z-50 bg-indigo-900/10">
            <div className={cn('absolute z-50 w-full transition-all duration-300 max-lg:h-14 max-lg:overflow-hidden', isMobileMenuOpen && 'max-lg:!h-screen max-lg:!overflow-visible bg-background/75 backdrop-blur')}>
                <Container className="backdrop-blur">
                    <div className="relative flex flex-wrap items-center justify-between px-6 lg:px-12 lg:py-5">
                        <div className="max-lg:border-foreground/5 flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isMobileMenuOpen == true ? 'Close Menu' : 'Open Menu'}
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-nav-menu"
                                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden">
                                <Menu
                                    aria-hidden="true"
                                    className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 duration-200"
                                />
                                <X
                                    aria-hidden="true"
                                    className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200"
                                />
                            </button>
                        </div>

                        {/* Desktop nav - CSS hidden on mobile */}
                        <nav
                            aria-label="Primary"
                            className="absolute inset-0 m-auto size-fit max-lg:hidden">
                            <ul className="flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-150">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Mobile nav - CSS hidden on desktop, shown via data-state */}
                        <nav
                            id="mobile-nav-menu"
                            aria-label="Mobile"
                            className="w-full py-6 in-data-[state=inactive]:hidden lg:hidden">
                            <ul className="space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-foreground block text-lg">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="border-transparent shadow-xl shadow-indigo-900/40">
                                    <Link href={CAL_BOOKING_LINK}>
                                        <span>Book a Free Call</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}
