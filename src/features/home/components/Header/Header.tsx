import { Navbar } from "../../../../components/Navbar/Navbar";
import "./Header.css";

export function Header() {
    return (
        <header className="header-home">
            <Navbar bg="none" />
            <div className="relative z-10">
                <h1 className="font-anton text-4xl cursor-pointer text-grey px-4 pt-3 pb-1 dark-stroke">Welcome to Sasha Web Services</h1>
                <p className="text-xl cursor-pointer text-grey px-4">Your all-in-one solution for digital growth.</p>
            </div>
        </header>
    )
}