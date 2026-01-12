import { render, screen } from '@testing-library/react'
import { describe, expect, it } from "vitest"
import { TextBlock } from './TextBlock'

describe("TextBlock", () => {
    it("shows a block with the children content", () => {
        render(
            <TextBlock>
                <p>Test</p>
            </TextBlock>
        )
        expect(screen.getByText("Test")).toBeInTheDocument()
    })
})