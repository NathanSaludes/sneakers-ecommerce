import product from "@/data/test-data.json"
import { Button } from "./Button"
import { DisplayPrice } from "./DisplayPrice"
import { RetailPrice } from "./RetailPrice"
import { ItemQuantityControls } from "./ItemQuantityControl"
import { CartItemProvider } from "@/contexts/CartItem"

export function fetchProduct(): Promise<typeof product> {
  return new Promise((resolve, reject) => {
    if (product) {
      resolve(product)
    } else {
      reject("Item not found.")
    }
  })
}

export const ProductDetails = async () => {
  const response = await fetchProduct()
  const { brandName, description, discountPercentage, displayPrice, label, retailPrice } = response.data
  return (
    <CartItemProvider>
      <div className="mx-auto py-5 md:py-0">
        {/* DETAILS */}
        <p className="text-accent-primary mb-2 font-semibold uppercase tracking-wider">{brandName}</p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{label}</h1>
        <p className="text-neutral-normal mb-6">{description}</p>
        <div
          id="pricing"
          className="flex flex-wrap items-center justify-between gap-2 gap-x-6 sm:flex-col sm:items-start"
        >
          <DisplayPrice price={displayPrice} percentage={discountPercentage} />
          <RetailPrice price={retailPrice} />
        </div>
        {/* CONTROLS */}
        <div className="controls mt-4 flex flex-col gap-4 min-[425px]:flex-row">
          <ItemQuantityControls />
          <Button>Add To Cart</Button>
        </div>
      </div>
    </CartItemProvider>
  )
}
