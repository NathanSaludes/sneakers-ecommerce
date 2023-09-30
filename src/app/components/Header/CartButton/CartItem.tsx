import Image from "next/image"
import { TCartItem, RemoveItemFunc } from "@/contexts/Cart"

import TrashIcon from "@/public/images/icon-delete.svg"

interface CartItemProps {
  item: TCartItem
  removeItemHandler: RemoveItemFunc
}
export const CartItem = ({ item, removeItemHandler }: CartItemProps) => {
  const { imageUrl, label, price, id: productId, quantity } = item

  return (
    <div className="group flex min-h-[45px] items-center justify-between gap-4 rounded-md p-1 hover:bg-gray-600/10">
      <div id="cart-item-thumbnail" className="relative shrink-0 select-none self-start">
        <Image
          className="block h-[45px] w-[45px] rounded-md bg-black/20"
          src={imageUrl.url}
          height={45}
          width={45}
          alt=""
        />
      </div>
      <div id="cart-item-details" className="grow">
        <p>{label}</p>
        <p className="inline-flex min-w-max gap-3">
          <span>
            {price.toLocaleString("en-US", { style: "currency", currency: "USD" })} x {quantity}
          </span>
          <span className="font-bold">
            {(price * quantity).toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </span>
        </p>
      </div>
      <div id="cart-item-actions" className="shrink-0">
        <button
          className="flex aspect-square rounded-md p-2 hover:brightness-105"
          onClick={() => removeItemHandler(productId)}
        >
          <Image src={TrashIcon} alt="Remove item from cart" />
        </button>
      </div>
    </div>
  )
}
