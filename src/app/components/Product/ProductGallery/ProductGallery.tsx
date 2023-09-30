import Image from "next/image"
import { GalleryItem } from "./GalleryItem"

import { Product } from "@/lib/fetchProduct"
import RightArrowIcon from "@/public/images/icon-next.svg"
import LeftArrowIcon from "@/public/images/icon-previous.svg"

interface Props {
  product: Product
}

export const ProductGallery = ({ product }: Props) => {
  const { images, label } = product.data

  return (
    <div className="mx-auto sm:max-w-md lg:min-w-full lg:max-w-none">
      <div id="gallery-spotlight" className="relative flex aspect-square items-center justify-center">
        <button className="z-floating absolute inset-y-0 left-0 flex items-center bg-black/5 opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100 sm:hidden">
          <div className="mx-2 flex aspect-square w-12 items-center justify-center rounded-full bg-white transition-all duration-200 ease-in-out hover:scale-105 active:scale-100">
            <Image src={LeftArrowIcon} alt="Previous" className="w-3" />
          </div>
        </button>

        <Image src={images[0].url} alt={label} fill className="bg-neutral-200 sm:rounded-xl" />
        <button className="z-floating absolute inset-y-0 right-0 flex items-center bg-black/5 opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100 sm:hidden">
          <div className="mx-2 flex aspect-square w-12 items-center justify-center rounded-full bg-white transition-all duration-200 ease-in-out hover:scale-105 active:scale-100">
            <Image src={RightArrowIcon} alt="Next" className="w-3" />
          </div>
        </button>
      </div>
      <div
        id="gallery-slot"
        className="mt-2 hidden min-h-[70px] gap-2 overflow-x-auto px-2 sm:mt-4 sm:flex sm:gap-4 sm:px-0"
      >
        {images.map((image, i) => (
          <GalleryItem image={image} key={i} />
        ))}
      </div>
    </div>
  )
}
