import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { describe, expect, it } from "vitest";
import { Navbar } from './Navbar';

describe("Navbar", () => {
    const renderNavbar = (props = {}) => {
        return render(
            <BrowserRouter>
                <Navbar {...props} />
            </BrowserRouter>
        )
    }

    it("shows the navigation link", () => {
        renderNavbar()
        expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Calculator" })).toBeInTheDocument()
    });

    it("redirects to the correct page", () => {
        renderNavbar()

        const homeLink = screen.getByRole("link", { name: "Home" })
        const pricingLink = screen.getByRole("link", { name: "Calculator" })

        expect(homeLink).toHaveAttribute("href", "/")
        expect(pricingLink).toHaveAttribute("href", "/calculator")
    });

    it("changes the background gradient when the gradient bg colorful prop is passed", () => {
        const { container } = renderNavbar({ bg: "colorful" })
        const nav = container.querySelector('nav')

        expect(nav).toHaveClass("bg-light-grey")
        expect(nav).toHaveClass("bg-rgba-gradient-2")
    });
});