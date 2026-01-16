import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from "vitest";
import { Switcher } from "./Switcher";

describe("Switcher", () => {
    it("shows the thumb on the left when option disabled", () => {
        const { container } = render(
            <Switcher isEnabled={false} onClick={() => { }} />
        )
        const thumb = container.querySelector("span");
        expect(thumb).toHaveClass("translate-x-0");
    });

    it("shows the thumb on the right when option enabled", () => {
        const { container } = render(
            <Switcher isEnabled={true} onClick={() => { }} />
        )
        const thumb = container.querySelector("span");
        expect(thumb).toHaveClass("translate-x-[30px]");
    });

    it("calls the onClick function when clicked", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <Switcher
                isEnabled={false}
                onClick={handleClick}
            />
        )

        const button = screen.getByRole("button");
        await user.click(button);

        expect(handleClick).toHaveBeenCalled()
    })
});