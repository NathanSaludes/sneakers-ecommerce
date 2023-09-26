"use client"
import Image from "next/image"
import MinusIcon from "@/public/images/icon-minus.svg"
import PlusIcon from "@/public/images/icon-plus.svg"
import { useCallback, useEffect, useRef, useState } from "react"
import { useCartItem } from "@/contexts/CartItem"

export const ItemQuantityControls = () => {
  const { decreaseQuantity, increaseQuantity, quantityText, quantity, updateQuantity, updateText } = useCartItem()

  return (
    <div className="flex min-h-[3.2rem] items-center justify-between overflow-hidden rounded-lg bg-gray-200">
      <button
        type="button"
        onClick={decreaseQuantity}
        disabled={quantity === 0}
        className="m-2 flex aspect-square w-[2rem] shrink-0 items-center justify-center rounded-md transition-all duration-200 ease-in-out hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Image src={MinusIcon} alt="decrease item quantity" />
      </button>
      <input
        type="number"
        min={0}
        required
        value={quantityText}
        onChange={(e) => updateText(e.target.value)}
        onBlur={updateQuantity}
        className="remove-arrow min-w-[3.5ch] max-w-[3.5ch] appearance-none overflow-x-hidden bg-transparent text-center font-bold outline-none"
      />
      <button
        onClick={increaseQuantity}
        type="button"
        className="m-2 flex aspect-square w-[2rem] shrink-0 items-center justify-center rounded-md transition-all duration-200 ease-in-out hover:bg-black/5 disabled:opacity-30"
      >
        <Image src={PlusIcon} alt="increase item quantity" />
      </button>
    </div>
  )
}
