import RightArrow from "../../../../assets/right-arrow.svg?react";
import { Navbar } from "../../../../components/Navbar/Navbar";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import { TextBlock } from "../TextBlock/TextBlock";
import "./Header.css";

export function Header() {
    return (
        <header className="header-home text-dark">
            <Navbar bg="none" />
            <div className="flex flex-col gap-1 relative z-10 px-2 xl:px-4 items-center md:items-start">
                <div className="my-3">
                    <h1 className="font-anton text-4xl text-grey pb-1 dark-stroke">Welcome to Sasha Web Services</h1>
                    <p className="text-xl text-grey">Your all-in-one solution for digital growth.</p>
                </div>
                <TextBlock>
                    <h2>Boost Your Online Presence</h2>
                    <p>We specialize in SEO campaigns to rank higher on Google, targeted ads for clicks and conversions, and custom
                        website creation that's fast and mobile-ready.</p>
                    <p className="font-semibold mt-0.5">Select your package from our service cards and get started instantly.</p>
                </TextBlock>
                <TextBlock>
                    <h2>Simple 3-Step Process</h2>
                    <div className="flex text-red my-2 justify-between">
                        <List step={1}>Choose your service(s)</List>
                        <RightArrow className="mt-1 hidden sm:block" />
                        <List step={2}>Review and confirm your order</List>
                        <RightArrow className="mt-1 hidden sm:block" />
                        <List step={3}>Launch your campaign with expert support</List>
                    </div>
                    <Button>Calculate</Button>
                </TextBlock>
            </div>
        </header>
    )
}