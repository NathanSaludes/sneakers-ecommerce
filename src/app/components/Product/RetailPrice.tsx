interface RetailPriceProps {
  price: number
}
export const RetailPrice = ({ price }: RetailPriceProps) => {
  return (
    <p className="text-neutral-light font-bold " id="retail-price">
      <s>{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</s>
    </p>
  )
}
