import { Switcher } from "../../../../components/Switcher/Switcher";
import { useCalculator } from "../../hooks/useCalculator";

export function CalculatorSwitcher() {

    const { isAnnual, setIsAnnual } = useCalculator();

    return (
        <div className="flex items-center gap-1 pb-2">
            <span className={`text-sm ${!isAnnual ? "text-teel font-medium" : "text-grey-2"}`}>
                Monthly payment
            </span>

            <Switcher
                isEnabled={isAnnual}
                onClick={() => setIsAnnual(!isAnnual)}
            />

            <span className={`text-sm ${isAnnual ? "text-teel font-medium" : "text-grey-2"}`}>
                Yearly paiment
            </span>
        </div>
    )
}