import type { QuoteBlockType } from "../../types"
import { QuoteBlock } from "../QuoteBlock/QuoteBlock"

export function QuoteList({ quotes }: { quotes: QuoteBlockType[] }) {
    return (
        <div className="m-auto flex flex-col gap-2 items-center justify-center w-[80%] text-dark pt-4 border-t-2 border-rgba-grey border-dotted">
            {quotes.map((quote, index) => {
                return (
                    <QuoteBlock
                        key={index}
                        name={quote.name}
                        email={quote.email}
                        phone={quote.phone}
                        selectedProducts={quote.selectedProducts}
                        total={quote.total}
                    />
                )
            })}
        </div>
    )
}