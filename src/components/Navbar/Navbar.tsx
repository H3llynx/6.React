import { NavLink } from "react-router";
import "./Navbar.css";

export function Navbar({ bg }: { bg: "gradient" | "none" }) {
    return (
        <nav className={`${bg === "gradient" ? "bg-light-grey bg-rgba-gradient-2 shadow-[0_5px_20px_rgba(0,0,0,0.2)] bg-size-[200%_100%] animate-[move-overlay_15s_ease-out_infinite]" : "bg-transparent"} flex relative z-10 gap-1.5 py-2 px-2 sm:px-4 items-center justify-end w-screen`}>
            <NavLink to="/" className="nav-li stroke-nav">Home</NavLink>
            <NavLink to="/pricing" className="nav-li stroke-nav">Pricing</NavLink>
        </nav>
    )
}