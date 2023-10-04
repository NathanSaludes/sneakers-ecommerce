"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useCart } from "@/contexts/Cart"
import CartIcon from "@/public/images/icon-cart.svg"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Badge } from "../../Badge"
import { Cart } from "./Cart"
import { PopoverClose } from "@radix-ui/react-popover"

export const CartButton = () => {
  const { items } = useCart()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative inline-flex aspect-square w-7 items-center justify-center rounded-md bg-white hover:bg-gray-600/10 sm:w-8">
          <Image src={CartIcon} alt="cart" />
          {items.length ? (
            <div className="absolute -right-2 -top-2">
              <Badge>{items.length}</Badge>
            </div>
          ) : null}
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <Cart />
      </PopoverContent>
    </Popover>
  )
}
