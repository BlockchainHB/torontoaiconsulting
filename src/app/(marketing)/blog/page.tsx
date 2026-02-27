export default function BlogPage() {
    const embeddedChromeOffset = '20rem'

    return (
        <section className="bg-indigo-900/10 pt-14">
            <div className="relative h-[calc(100dvh-3.5rem)] overflow-hidden">
                <iframe
                    src="https://pro-pages.tailark.com/grid-1/blog-one"
                    title="Grid 1 blog one"
                    className="w-full border-0"
                    style={{
                        height: `calc(100% + ${embeddedChromeOffset})`,
                        transform: `translateY(-${embeddedChromeOffset})`,
                        marginBottom: `-${embeddedChromeOffset}`,
                    }}
                />
            </div>
        </section>
    )
}
