"use client"

import { ReactNode, RefObject, createContext, useCallback, useContext, useEffect, useReducer, useRef, useState } from "react"

interface ICartItem {
  quantity: number
  quantityText: string
  increaseQuantity: () => void
  decreaseQuantity: () => void
  reset: () => void
  updateText: (q: string) => void
  updateQuantity: () => void
}

const CartItemContext = createContext<ICartItem | null>(null)

interface CartItemProviderProps {
  children?: ReactNode
}
export const CartItemProvider = ({ children }: CartItemProviderProps) => {
  // states
  const [quantity, setQuantity] = useState<number>(0)
  const [quantityText, setQuantityText] = useState<string>("0")

  useEffect(() => {
    setQuantityText(quantity.toString())
  }, [quantity])

  const increaseQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1)
  }, [])

  const decreaseQuantity = useCallback(() => {
    setQuantity((prev) => prev - 1)
  }, [])

  const updateQuantity = useCallback(() => {
    const parsedValue = parseInt(quantityText)
    /* 
      Set the next value to 0 if the input qualifies as the following:
      (1) not a number, or
      (2) is a negative number 
    */
    const updatedValue = isNaN(parsedValue) || parsedValue < 0 ? 0 : parsedValue

    setQuantity(updatedValue)
    setQuantityText(updatedValue.toString())
  }, [quantityText])

  const updateText = useCallback((value: string) => {
    setQuantityText(value)
  }, [])

  const resetQuantity = useCallback(() => {
    setQuantity(0)
    setQuantityText("0")
  }, [])

  return (
    <CartItemContext.Provider
      value={{
        quantity,
        quantityText,
        updateText,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        reset: resetQuantity,
      }}
    >
      {children}
    </CartItemContext.Provider>
  )
}

export const useCartItem = () => {
  const cartItemContext = useContext(CartItemContext)

  if (!cartItemContext) {
    throw new Error(
      `"useCartItem()" hook should only be used in components that are wrapped within the '<CartItemProvider />'`,
    )
  }

  return cartItemContext
}
