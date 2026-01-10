export function Section({ children, bg, padding }: { children: React.ReactNode, bg: "grey" | "dark", padding: string }) {
    return (
        <section className={`${bg === "grey" ? "bg-grey" : "bg-dark-gradient"} ${padding} flex flex-col gap-2 relative h-full items-center`}>
            {children}
        </section>
    )
}