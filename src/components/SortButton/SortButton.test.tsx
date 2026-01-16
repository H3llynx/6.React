import { render, screen } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { SortButton } from './SortButton';

describe("SortButton", () => {
    it("shows the arrow up when the order is ascending", () => {
        render(
            <SortButton
                onClick={() => { }}
                sort="Whatever"
                sortAsc={true}
                isActive={true}
            />
        )

        expect(screen.getByLabelText("ascending")).toBeInTheDocument();
    });
    it("shows the arrow down when the order is descending", () => {
        render(
            <SortButton
                onClick={() => { }}
                sort="Whatever"
                sortAsc={false}
                isActive={true}
            />
        )

        expect(screen.getByLabelText("descending")).toBeInTheDocument();
    });
    it("initially only shows text (until clicked)", () => {
        render(
            <SortButton
                onClick={() => { }}
                sort="Whatever"
                sortAsc={false}
                isActive={false}
            />
        )
        expect(screen.queryByLabelText("ascending")).not.toBeInTheDocument();
        expect(screen.queryByLabelText("descending")).not.toBeInTheDocument();
    });
});