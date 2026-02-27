export default function BlogPage() {
    const embeddedNavOffset = '3.5rem'

    return (
        <section className="pt-14">
            <div className="h-[calc(100dvh-3.5rem)] overflow-hidden">
                <iframe
                    src="https://pro-pages.tailark.com/grid-1/blog-one"
                    title="Grid 1 blog one"
                    className="h-[calc(100%+3.5rem)] w-full -translate-y-14 border-0"
                    style={{ marginBottom: `-${embeddedNavOffset}` }}
                />
            </div>
        </section>
    )
}
