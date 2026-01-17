import { render, screen } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { Quote } from './Quote';

describe("Quote", () => {

    const testProduct1 = {
        id: "1",
        name: "test 1",
        price: {
            base: 300
        },
        img: "/test.png",
        features: [
            "Feat 1",
            "Feat 2"
        ]
    };
    const testProduct2 = {
        id: "2",
        name: "test 2",
        price: {
            base: 200
        },
        img: "/test2.png",
        features: [
            "Feat 1",
            "Feat 2"
        ]
    };
    const testProductArray = [testProduct1, testProduct2];
    const total = testProductArray.reduce((acc, prod) => acc + prod.price.base, 0);


    render(
        <Quote
            key={"1"}
            name={"Helene T."}
            email={"test@h.com"}
            phone={"666 666 666"}
            selectedProducts={testProductArray}
            total={total}
            createdAt={new Date("2026-01-17")}
        />
    )
    it("shows the quote with the correct product information", () => {
        expect(screen.getByText("Helene T.")).toBeInTheDocument();
        expect(screen.getByText("500.00 €")).toBeInTheDocument();
        expect(screen.getByText("test 1")).toBeInTheDocument();
        expect(screen.getByText("test 2")).toBeInTheDocument();
    });
});