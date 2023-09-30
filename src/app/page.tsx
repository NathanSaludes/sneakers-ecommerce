import { CartProvider } from "@/contexts/Cart"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header/Header"
import { ProductDetails, ProductGallery } from "./components/Product"
import { fetchProduct } from "@/lib/fetchProduct"

export default async function Home() {
  // this is a fake fetch request
  const response = await fetchProduct()

  return (
    <>
      <CartProvider>
        <Header />
        <main className="sm:py-8 md:py-14 lg:py-20">
          <div className="container mx-auto md:grid md:grid-cols-2 md:gap-10 md:p-4 lg:gap-20 xl:max-w-5xl">
            <ProductGallery product={response} />
            <ProductDetails product={response} />
          </div>
        </main>
      </CartProvider>
      <Footer />
    </>
  )
}
