"use client"

import { ReactNode, RefObject, createContext, useCallback, useContext, useEffect, useRef, useState } from "react"

interface ICartItem {
  quantity: number
  quantityText: string
  increaseQuantity: () => void
  decreaseQuantity: () => void
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
    const parsed = parseInt(quantityText)
    const updatedValue = isNaN(parsed) || parsed < 0 ? 0 : parsed

    setQuantity(updatedValue)
    setQuantityText(updatedValue.toString())
  }, [quantityText])

  const updateText = useCallback((value: string) => {
    setQuantityText(value)
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
      `"useCartItem()" hook should only be used in components that is wrapped within the '<CartItemProvider />'`,
    )
  }

  return cartItemContext
}
