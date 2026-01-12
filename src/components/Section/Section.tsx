export function Section({ children, bg, padding }: { children: React.ReactNode, bg?: "dark", padding: string }) {
    return (
        <section className={`${bg === "dark" ? "bg-dark-gradient" : "bg-grey"} ${padding} flex flex-col gap-2 relative h-full items-center`}>
            {children}
        </section>
    )
}