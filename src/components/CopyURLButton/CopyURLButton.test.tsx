import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from "vitest";
import { CopyURLButton } from './CopyURLButton';

describe("CopyButton", () => {
    render(
        <CopyURLButton />
    )
    it("copies the url on click", async () => {
        const user = userEvent.setup();
        await user.click(screen.getByRole("button"));
        const text = await navigator.clipboard.readText();
        expect(text).toBe(window.location.href);
    });
});