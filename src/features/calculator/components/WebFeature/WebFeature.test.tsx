import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from "vitest";
import { WebFeature } from './WebFeature';

describe("WebFeature", () => {
    const addMock = vi.fn();
    const removeMock = vi.fn();
    const typeFeatureMock = vi.fn();

    const renderFeature = () => {
        render(
            <WebFeature
                name="test"
                price={30}
                remove={removeMock}
                add={addMock}
                feature={1}
                typeFeature={typeFeatureMock}
            />
        )
    };

    it("renders the feature label and value", () => {
        renderFeature();
        expect(screen.getByText("tests:")).toBeInTheDocument();
        expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    });

    it("calls the add function when the + button is pressed", async () => {
        renderFeature();
        const plusBtn = screen.getByLabelText("Add test");
        const user = userEvent.setup();
        await user.click(plusBtn);
        expect(addMock).toHaveBeenCalled();
    });

    it("calls the remove function when the - button is pressed", async () => {
        renderFeature();
        const plusBtn = screen.getByLabelText("Remove test");
        const user = userEvent.setup();
        await user.click(plusBtn);
        expect(removeMock).toHaveBeenCalled();
    });

    it("opens the dialog box and shows the correct props", async () => {
        renderFeature();
        const mockShowModal = vi.fn();
        const user = userEvent.setup();

        const dialog = screen.getByRole("dialog", { hidden: true });
        Object.defineProperty(dialog, "showModal", {
            value: mockShowModal,
            writable: true
        });

        await user.click(screen.getByLabelText("more information about tests"));

        expect(mockShowModal).toHaveBeenCalled();
        expect(screen.getByText("30 €")).toBeInTheDocument();
    });
});