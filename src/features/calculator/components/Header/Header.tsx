import Logo from "../../../../assets/logo.png";
import { Navbar } from "../../../../components/Navbar/Navbar";

export function Header() {
    return (
        <header className="w-screen flex relative z-10">
            <img src={Logo} alt="Sasha Web services"
                className="h-[30vw] sm:h-[22vw] md:h-[13vw] absolute z-20 left-0 sm:left-4" />
            <Navbar bg="colorful" />
        </header>
    )
}