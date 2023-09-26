import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ProductDetails, ProductGallery } from "./components/Product"

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:py-14 lg:py-20">
        <div className="container mx-auto p-4 md:grid md:grid-cols-2 md:gap-10 lg:gap-20 xl:max-w-5xl">
          <div id="slot:product-gallery">
            <ProductGallery />
          </div>
          <div id="slot:product-details">
            <ProductDetails />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
