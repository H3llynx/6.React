import { Checkbox } from "../components/Checkbox/Checkbox";
import CheckboxContent from "../config/checkbox.json";

const checkboxContent = {
    seo: { ...CheckboxContent.seo },
    ads: { ...CheckboxContent.ads },
    web: { ...CheckboxContent.web }
}

export function HomePage() {
    return (
        <>
            <Checkbox title={checkboxContent.seo.title} price={checkboxContent.seo.price} />
            <Checkbox title={checkboxContent.ads.title} price={checkboxContent.ads.price} />
            <Checkbox title={checkboxContent.web.title} price={checkboxContent.web.price} />
        </>
    )
}