"use client"
import { useCart } from "@/contexts/Cart"
import { CartItem } from "./CartItem"

export const Cart = () => {
  const { items, removeItem } = useCart()

  return (
    <div className="mx-4 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl outline outline-1 outline-black/5 sm:m-0 sm:min-w-[360px]">
      <div id="cart-header" className="border-b p-4 shadow-sm">
        <p className="select-none text-lg font-bold">Cart</p>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div id="cart-body" className="flex flex-col">
          {items.length > 0 ? (
            items.map((item) => <CartItem item={item} key={item.id} removeItemHandler={removeItem} />)
          ) : (
            <p className="select-none p-4 text-center text-black/50">Your cart is empty</p>
          )}
        </div>
        <div id="cart-controls" className="flex items-center justify-center pt-0">
          <button
            type="button"
            disabled={items.length < 1}
            className="min-h-[45px] basis-full rounded-md bg-accent-primary font-semibold text-accent-secondary hover:shadow-lg hover:brightness-105 active:scale-[0.99] disabled:opacity-40 disabled:active:scale-100"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
