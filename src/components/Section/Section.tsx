export function Section({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col gap-2 bg-grey relative h-full">
            {children}
        </section>
    )
}