import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from "vitest";
import { ProductCard } from './ProductCard';

describe("ProductCard", () => {
    let isAnnual = false;
    const basePrice = 300
    const testProduct = {
        id: "1",
        name: "test",
        price: {
            base: isAnnual ? basePrice * 0.8 : basePrice
        },
        img: "/test.png",
        features: [
            "Feat 1",
            "Feat 2"
        ]
    };
    const testProductArray = [testProduct];
    const mockSetSelectedProducts = vi.fn();

    const renderCard = () => {
        render(
            <ProductCard
                products={testProductArray}
                id={testProduct.id}
                name={testProduct.name}
                price={testProduct.price.base}
                features={testProduct.features}
                src={testProduct.img}
                selectedProducts={[]}
                setSelectedProducts={mockSetSelectedProducts}
                isAnnual={isAnnual}
            />)
    }

    it("shows the card with the correct product information", () => {
        renderCard();
        expect(screen.getByRole("heading")).toHaveTextContent("test");
        expect(screen.getByText("300")).toBeInTheDocument();
        expect(screen.getByText("Feat 1")).toBeInTheDocument();
        expect(screen.getByText("Feat 2")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "/test.png");
    });

    it("updates the price depending on isAnnual", () => {
        isAnnual = true;
        renderCard();
        expect(screen.getByText("240")).toBeInTheDocument();
    });

    it("adds the product when checked", async () => {
        renderCard();
        const user = userEvent.setup();
        await user.click(screen.getByRole("checkbox"));
        expect(mockSetSelectedProducts).toHaveBeenCalled();
        expect(screen.getByText("Added")).toBeInTheDocument();
    });
});