export function Total({ total }: { total: number }) {
    return (
        <div className="font-anton text-2xl py-1 px-2 sm:px-4 text-end text-dark-grey self-end">
            Total: {total.toFixed(2)} €</div>
    )
}