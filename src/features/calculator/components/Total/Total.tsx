export function Total({ total }: { total: number }) {
    return (
        <div className="font-anton text-2xl py-1 w-container text-center md:text-end text-dark-grey">
            Total: {total.toFixed(2)} €</div>
    )
}