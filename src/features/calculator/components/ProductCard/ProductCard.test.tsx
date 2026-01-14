// ProductCard.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from "vitest"
import { ProductCard } from './ProductCard'

describe("ProductCard", () => {
    const mockProduct = {
        id: "1",
        name: "Test product",
        price: 299,
        features: ["Feat 1", "Feat 2"],
        src: "/test.jpg"
    }

    const mockProducts = [mockProduct]
    const mockSetSelectedProducts = vi.fn()

    beforeEach(() => {
        mockSetSelectedProducts.mockClear()
    })

    it("adds or remove the product when clicked", async () => {
        const user = userEvent.setup()
        render(
            <ProductCard
                products={mockProducts}
                {...mockProduct}
                selectedProducts={[]}
                setSelectedProducts={mockSetSelectedProducts}
            />
        )
        const checkbox = screen.getByRole("checkbox")
        await user.click(checkbox)
        expect(mockSetSelectedProducts).toHaveBeenCalledWith([mockProduct])
    })
})