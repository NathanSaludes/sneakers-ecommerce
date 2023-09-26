interface DisplayPriceProps {
  price: number
  percentage: number
}
export const DisplayPrice = ({ price, percentage }: DisplayPriceProps) => {
  return (
    <p className="flex items-center gap-3 text-2xl font-bold tracking-tight" id="discount-price">
      {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      <span className="bg-accent-secondary text-accent-primary inline-flex items-center justify-center rounded-md px-2 text-lg">{`${percentage}%`}</span>
    </p>
  )
}
