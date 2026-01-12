import { render, screen } from '@testing-library/react'
import { describe, expect, it } from "vitest"
import { List } from './List'

describe("List", () => {
    it("shows a block with the step", () => {
        render(<List step={1}>Text</List>)
        expect(screen.getByText("1")).toBeInTheDocument()
    })

    it("shows the children content", () => {
        render(<List step={1}>Step description</List>)
        expect(screen.getByText("Step description")).toBeInTheDocument()
    })

})