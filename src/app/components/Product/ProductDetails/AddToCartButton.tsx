"use client"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/contexts/Cart"
import { useCartItem } from "@/contexts/CartItem"
import { Product } from "@/lib/fetchProduct"

interface ButtonProps {
  product: Product
  children?: React.ReactNode
}
export const AddToCartButton = ({ product, children }: ButtonProps) => {
  const { addItem } = useCart()
  const { quantity, reset } = useCartItem()
  const { toast } = useToast()

  const { label, displayPrice, images, productCode } = product.data

  const addItemHandler = () => {
    addItem({
      id: productCode,
      imageUrl: images[0],
      label,
      price: displayPrice,
      quantity,
    })
    reset()
    toast({
      title: `You added ${quantity} new ${quantity > 1 ? "items" : "item"} in your cart!`,
      description: label,
    })
  }

  return (
    <button
      type="button"
      disabled={quantity === 0}
      onClick={addItemHandler}
      id="addToCartButton"
      className="group flex h-[3.2rem] min-w-max grow flex-wrap items-center justify-center gap-4 rounded-lg bg-accent-primary px-8 font-semibold text-accent-secondary transition duration-200 ease-in-out hover:shadow-lg hover:shadow-[#ff7d1a6e] disabled:opacity-30 disabled:shadow-none min-[425px]:max-w-max"
    >
      <i className="inline-flex aspect-square min-w-max max-w-max items-center justify-center">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="fill-accent-secondary">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fillRule="nonzero"
          />
        </svg>
      </i>
      {children}
    </button>
  )
}
