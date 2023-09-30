import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full bg-accent-primary">
      <div className="container mx-auto px-8 py-4">
        <p className="text-center text-sm text-accent-secondary">
          Challenge by{" "}
          <Link
            href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
            target="_blank"
            className="font-semibold"
          >
            Frontend Mentor
          </Link>
          . Coded by{" "}
          <Link href="https://www.frontendmentor.io/profile/NathanSaludes" target="_blank" className="font-semibold">
            Nathaniel Saludes
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
