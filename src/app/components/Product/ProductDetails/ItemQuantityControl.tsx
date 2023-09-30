"use client"
import { useCartItem } from "@/contexts/CartItem"
import MinusIcon from "@/public/images/icon-minus.svg"
import PlusIcon from "@/public/images/icon-plus.svg"
import Image from "next/image"
import { MouseEventHandler, ReactNode } from "react"

interface ControlButtonProps {
  name: string
  icon: ReactNode
  clickHandler: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}
const ControlButton = ({ icon, clickHandler, disabled = false }: ControlButtonProps) => {
  return (
    <button
      type="button"
      onClick={clickHandler}
      disabled={disabled}
      className="m-2 flex aspect-square w-[2rem] shrink-0 items-center justify-center rounded-md transition-all duration-200 ease-in-out hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
    >
      {icon}
    </button>
  )
}

export const ItemQuantityControls = () => {
  const { decreaseQuantity, increaseQuantity, quantityText, quantity, updateQuantity, updateText } = useCartItem()

  return (
    <div className="flex min-h-[3.2rem] items-center justify-between overflow-hidden rounded-lg bg-gray-200">
      <ControlButton
        name="DECREASE"
        icon={<Image src={MinusIcon} alt="decrease item quantity" />}
        clickHandler={decreaseQuantity}
        disabled={quantity === 0}
      />
      <input
        type="number"
        min={0}
        required
        value={quantityText}
        onChange={(e) => updateText(e.target.value)}
        onBlur={updateQuantity}
        onKeyUp={(e) => (e.key === "Enter" ? updateQuantity() : null)}
        className="remove-arrow min-w-[3.5ch] max-w-[3.5ch] appearance-none overflow-x-hidden bg-transparent text-center font-bold outline-none"
      />
      <ControlButton
        name="INCREASE"
        icon={<Image src={PlusIcon} alt="increase item quantity" />}
        clickHandler={increaseQuantity}
      />
    </div>
  )
}
