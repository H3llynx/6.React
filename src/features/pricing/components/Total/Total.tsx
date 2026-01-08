export function Total({ total }: { total: number }) {
    return (
        <div className="font-anton text-xl py-1 px-2 sm:px-4 text-end bg-dark-grey bg-rgba-gradient-3
        bg-size-[200%_100%] shadow-[0_-2px_20px_rgba(0,0,0,0.4)] text-grey dark-stroke
        fixed bottom-0 left-0 w-full animate-[move-overlay_15s_ease-out_infinite]">Total: {total.toFixed(2)} €</div>
    )
}