import DeleteSvg from "../../../../assets/icons/delete.svg?react";
import { SortButton } from "../../../../components/SortButton/SortButton";
import { useCalculator } from "../../hooks/useCalculator";
import { Quote } from "../Quote/Quote";

export function QuoteList() {

    const { query, setQuery, handleSortByName, handleSortByDate,
        handleReset, nameSortAsc, dateSortAsc, activeSort, quotes, filteredQuotes, handleDeleteQuote } = useCalculator();

    return (
        <>
            {quotes.length > 0 &&
                <div className="m-auto text-light-grey flex flex-col gap-2 w-quotes-container pt-4 border-t-2 border-rgba-grey border-dotted">
                    <div className="flex flex-col sm:flex-row gap-1 text-xs font-semibold self-end items-end sm:items-center">
                        <input
                            type="search"
                            value={query}
                            placeholder="Filter by name"
                            aria-label="Filter by name"
                            className="bg-rgba-light border border-grey-2 rounded-lg text-sm p-0.5"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div className="flex flex-1 gap-1">
                            <SortButton
                                onClick={handleSortByName}
                                sort="Name"
                                sortAsc={nameSortAsc}
                                isActive={activeSort === "name"}
                            />
                            <SortButton
                                onClick={handleSortByDate}
                                sort="Date"
                                sortAsc={dateSortAsc}
                                isActive={activeSort === "date"}
                            />
                            <SortButton
                                onClick={handleReset}
                                sort="Reset"
                            />
                        </div>
                    </div>
                    {filteredQuotes.map((quote) => {
                        return (
                            <div className="w-full flex gap-0.5" key={quote.id}>
                                <Quote
                                    id={quote.id}
                                    name={quote.name}
                                    email={quote.email}
                                    phone={quote.phone}
                                    selectedProducts={quote.selectedProducts}
                                    total={quote.total}
                                    createdAt={quote.createdAt}
                                />
                                <button
                                    aria-label="Delete quote"
                                    tabIndex={0}
                                    onClick={() => handleDeleteQuote(quote)}
                                >
                                    <DeleteSvg
                                        className="cursor-pointer text-rgba-light
                                        hover:text-rgba-grey hover:scale-110
                                        active:text-orange" />
                                </button>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}