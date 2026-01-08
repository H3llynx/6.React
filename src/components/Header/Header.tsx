import { NavLink } from "react-router";
import Logo from "../../../assets/logo.png";
import "./Header.css";

export function Header() {
    return (
        <header className="w-screen flex">
            <img src={Logo} className="h-[30vw] sm:h-[22vw] md:h-[15vw] absolute left-0 sm:left-4" />
            <nav className="flex py-2 px-2 sm:px-4 items-center justify-end w-screen bg-light-grey
            bg-rgba-gradient-2 gap-1.5 shadow-[0_5px_20px_rgba(0,0,0,0.2)] bg-size-[200%_100%]
            animate-[move-overlay_15s_ease-out_infinite]">
                <NavLink to="/" className="nav-li stroke-nav">Home</NavLink>
                <NavLink to="/pricing" className="nav-li stroke-nav">Pricing</NavLink>
            </nav>
        </header>
    )
}