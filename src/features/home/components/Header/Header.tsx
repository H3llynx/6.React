import { Link } from "react-router";
import RightArrow from "../../../../assets/right-arrow.svg?react";
import { Navbar } from "../../../../components/Navbar/Navbar";
import { List } from "../List/List";
import { TextBlock } from "../TextBlock/TextBlock";
import "./Header.css";

export function Header() {
    return (
        <header className="header-home text-dark">
            <Navbar bg="none" />
            <div className="flex flex-col gap-2 my-3 relative z-10 px-2 xl:px-4 items-center md:items-start">
                <div className="mb-2 text-center sm:text-left">
                    <h1 className="font-anton text-4xl text-grey pb-1 dark-stroke">Welcome to Sasha Web Services</h1>
                    <p className="text-xl text-grey">Your all-in-one solution for digital growth.</p>
                </div>
                <div className="flex flex-col gap-1.5 w-[90%] sm:w-[70%] md:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                    <TextBlock>
                        <h2 className="h2-header">Boost Your Online Presence</h2>
                        <p>We specialize in SEO campaigns to rank higher on Google, targeted ads for clicks and conversions, and custom
                            website creation that's fast and mobile-ready.</p>
                        <p className="font-semibold mt-0.5">Select your package from our service cards and get started instantly.</p>
                    </TextBlock>
                    <TextBlock>
                        <h2 className="h2-header">Simple 3-Step Process</h2>
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2 text-red my-1 2xl:px-2">
                            <List step={1}>Choose your service(s)</List>
                            <RightArrow className="right-arrow" />
                            <List step={2}>Review and confirm your order</List>
                            <RightArrow className="right-arrow" />
                            <List step={3}>Launch your campaign with expert support</List>
                        </div>
                        <Link to="/pricing" className="cta self-end">Calculate my plan price</Link>
                    </TextBlock>
                </div>
            </div>
        </header>
    )
}