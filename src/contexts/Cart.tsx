"use client"
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from "react"

export type TCartItem = {
  id: string
  quantity: number
  price: number
  label: string
  imageUrl: { url: string }
}
export type AddItemFunc = (product: TCartItem) => void
export type RemoveItemFunc = (productId: string) => void

interface Cart {
  items: TCartItem[]
  addItem: AddItemFunc
  removeItem: RemoveItemFunc
}

const CartContext = createContext<Cart | null>(null)

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([])

  const addItem = useCallback<AddItemFunc>(
    (product) => {
      const existingItem = cartItems.find((item) => item.id === product.id)
      if (existingItem) {
        // find the existing item and increase the quantity
        const filtered = cartItems.filter((item) => item.id !== product.id)
        existingItem.quantity = existingItem.quantity + product.quantity
        setCartItems([...filtered, existingItem])
      } else {
        setCartItems((prev) => [...prev, product])
      }
    },
    [cartItems],
  )

  const removeItem = useCallback<RemoveItemFunc>(
    (productId) => {
      const filtered = cartItems.filter((item) => item.id !== productId)
      setCartItems(filtered)
    },
    [cartItems],
  )

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const cart = useContext(CartContext)

  if (!cart) {
    throw new Error(`"useCart()" hook should only be used in components that are wrapped within the '<CartProvider />'`)
  }

  return cart
}
