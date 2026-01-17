import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from "vitest";
import { WebFeatures } from './WebFeatures';

describe("WebFeatures", () => {
    const mockSetPages = vi.fn();
    const mockSetLanguages = vi.fn();

    it("increases the amount of pages when the corresponding + button is pressed", async () => {
        render(
            <WebFeatures
                pages={1}
                setPages={mockSetPages}
                languages={1}
                setLanguages={mockSetLanguages}
            />
        )
        const plusBtn = screen.getByLabelText("Add page");
        const user = userEvent.setup();
        await user.click(plusBtn);
        expect(mockSetPages).toHaveBeenCalledWith(2);
    });

    it("decreases the amount of pages when the corresponding + button is pressed", async () => {
        render(
            <WebFeatures
                pages={2}
                setPages={mockSetPages}
                languages={2}
                setLanguages={mockSetLanguages}
            />
        )
        const plusBtn = screen.getByLabelText("Remove page");
        const user = userEvent.setup();
        await user.click(plusBtn);
        expect(mockSetPages).toHaveBeenCalledWith(1);
    });

    it("increases the amount of languages when the corresponding + button is pressed", async () => {
        render(
            <WebFeatures
                pages={1}
                setPages={mockSetPages}
                languages={1}
                setLanguages={mockSetLanguages}
            />
        )
        const plusBtn = screen.getByLabelText("Add language");
        const user = userEvent.setup();
        await user.click(plusBtn);
        expect(mockSetLanguages).toHaveBeenCalledWith(2);
    });

    it("decreases the amount of languages when the corresponding + button is pressed", async () => {
        render(
            <WebFeatures
                pages={2}
                setPages={mockSetPages}
                languages={2}
                setLanguages={mockSetLanguages}
            />
        )
        const plusBtn = screen.getByLabelText("Remove language");
        const user = userEvent.setup();
        await user.click(plusBtn);
        expect(mockSetLanguages).toHaveBeenCalledWith(1);
    });
});