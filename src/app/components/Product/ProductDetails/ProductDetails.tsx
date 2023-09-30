import { AddToCartButton } from "./AddToCartButton"
import { CartItemProvider } from "@/contexts/CartItem"
import { Product } from "@/lib/fetchProduct"
import { DisplayPrice } from "./DisplayPrice"
import { RetailPrice } from "./RetailPrice"
import { ItemQuantityControls } from "./ItemQuantityControl"

interface Props {
  product: Product
}
export const ProductDetails = ({ product }: Props) => {
  const { brandName, description, discountPercentage, displayPrice, label, retailPrice, productCode } = product.data

  return (
    <CartItemProvider>
      <div className="mx-auto p-5 sm:max-w-md sm:px-0 md:p-0">
        {/* DETAILS */}
        <p className="mb-2 font-semibold uppercase tracking-wider text-accent-primary">{brandName}</p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{label}</h1>
        <p className="mb-6 text-neutral-normal">{description}</p>
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
          <AddToCartButton product={product}>Add To Cart</AddToCartButton>
        </div>
      </div>
    </CartItemProvider>
  )
}
