import { Link } from "react-router";
import RightArrow from "../../../../assets/right-arrow.svg?react";
import { Navbar } from "../../../../components/Navbar/Navbar";
import { List } from "../List/List";
import { TextBlock } from "../TextBlock/TextBlock";
import "./Header.css";

export function Header() {
    return (
        <header className="header-home text-dark">
            <Navbar />
            <div className="flex flex-col gap-2 my-3 relative z-10 px-2 xl:px-4 items-center md:items-start">
                <div className="mb-2 text-center sm:text-left">
                    <h1 className="font-anton text-4xl text-grey pb-1 dark-stroke">Sasha Web Services Pricing Tool</h1>
                    <p className="text-xl text-grey">Instantly create professional quotes for your digital services.</p>
                </div>
                <div className="flex flex-col gap-1.5 w-[90%] sm:w-md xl:w-lg 2xl:w-xl">
                    <TextBlock>
                        <h2 className="h2-header">Build Accurate Project Quotes</h2>
                        <p>Use this calculator to price SEO campaigns, ad management, and custom websites
                            based on the real scope of each project..</p>
                        <p className="font-semibold mt-0.5">Adjust pages, features, and add-ons to generate a tailored quote for your client in seconds.</p>
                    </TextBlock>
                    <TextBlock>
                        <h2 className="h2-header">Simple 3-Step Process</h2>
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2 text-red my-1">
                            <List step={1}>Select services (SEO, Ads, Web)</List>
                            <RightArrow className="right-arrow" />
                            <List step={2}>Set pages & languages (web only)</List>
                            <RightArrow className="right-arrow" />
                            <List step={3}>Get a ready-to-share project quote</List>
                        </div>
                        <Link
                            to="/calculator"
                            className="cta self-end"
                            tabIndex={0}
                        >
                            Start quote calculator
                        </Link>
                    </TextBlock>
                </div>
            </div>
        </header>
    )
}