import Image from "next/image"
import { TCartItem, RemoveItemFunc } from "@/contexts/Cart"

interface CartItemProps {
  item: TCartItem
  removeItemHandler: RemoveItemFunc
}
export const CartItem = ({ item, removeItemHandler }: CartItemProps) => {
  const { imageUrl, label, price, id: productId, quantity } = item

  return (
    <div className="group flex min-h-[45px] items-center justify-between gap-4 rounded-md p-1">
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
          className="rounded- group/remove-item flex aspect-square rounded-sm p-1 hover:bg-black/10"
          onClick={() => removeItemHandler(productId)}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

const TrashIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-black/30">
      <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path>
    </svg>
  )
}
