import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { Dialog } from './Dialog';

describe("Dialog", () => {

    it("shows the information about the correct product", () => {
        const testProduct = {
            feature: "test",
            price: 20
        }

        render(
            <Dialog
                feature={testProduct.feature}
                price={testProduct.price}
                close={() => { }}
            />
        );

        const dialog = screen.getByRole("dialog", { hidden: true });

        expect(within(dialog).getByText("Number of tests")).toBeInTheDocument();
        expect(within(dialog).getByText("20 €")).toBeInTheDocument();
    });
});