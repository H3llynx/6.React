import { render, screen } from '@testing-library/react'
import { describe, expect, it } from "vitest"
import { Section } from './Section'

describe("Section", () => {
    it("shows a section with the children content", () => {
        render(
            <Section padding="my2">
                <p>Test</p>
            </Section>
        )

        expect(screen.getByText("Test")).toBeInTheDocument()
    })

    it("changes the background color when the dark bg prop is passed", () => {
        render(
            <Section bg="dark" padding="my2">
                <p>Test</p>
            </Section>
        )

        const section = screen.getByText("Test").parentElement
        expect(section).toHaveClass("bg-dark-gradient")
    })
})