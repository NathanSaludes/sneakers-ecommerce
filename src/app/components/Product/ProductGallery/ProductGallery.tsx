"use client"

import Image from "next/image"
import { GalleryItem } from "./GalleryItem"

import { Product } from "@/lib/fetchProduct"
import RightArrowIcon from "@/public/images/icon-next.svg"
import LeftArrowIcon from "@/public/images/icon-previous.svg"
import { useState } from "react"

interface Props {
  product: Product
}
export const ProductGallery = ({ product }: Props) => {
  const { images, label } = product.data

  const [activeGalleryItem, setActiveGallery] = useState<number>(0)

  return (
    <div className="mx-auto w-full sm:max-w-md lg:max-w-none">
      <Carousel images={images} />
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

interface CarouselProps {
  images: { url: string }[]
}
const Carousel = ({ images }: CarouselProps) => {
  return (
    <div
      id="carousel"
      className="scrollbar-none relative flex aspect-square snap-x snap-mandatory overflow-hidden overflow-x-auto bg-gray-200 sm:rounded-xl"
    >
      <div className="relative aspect-square snap-center">
        <Image
          src={images[0].url}
          alt={images[0].url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="z-0 snap-center bg-neutral-200"
        />
      </div>
      <div className="relative aspect-square snap-center">
        <Image
          src={images[1].url}
          alt={images[1].url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="z-0 snap-center bg-neutral-200"
        />
      </div>
      <div className="relative aspect-square snap-center">
        <Image
          src={images[2].url}
          alt={images[2].url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="z-0 snap-center bg-neutral-200"
        />
      </div>
      <div className="relative aspect-square snap-center">
        <Image
          src={images[3].url}
          alt={images[3].url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="z-0 snap-center bg-neutral-200"
        />
      </div>

      {/* Previous Image Button */}
      <button className="absolute inset-y-0 left-0 z-auto flex items-center bg-black/5 opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100 sm:hidden">
        <div className="mx-2 flex aspect-square w-12 items-center justify-center rounded-full bg-white transition-all duration-200 ease-in-out hover:scale-105 active:scale-100">
          <Image src={LeftArrowIcon} alt="Previous" className="w-3" />
        </div>
      </button>
      {/* Next Image Button */}
      <button className="absolute inset-y-0 right-0 z-auto flex items-center bg-black/5 opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100 sm:hidden">
        <div className="mx-2 flex aspect-square w-12 items-center justify-center rounded-full bg-white transition-all duration-200 ease-in-out hover:scale-105 active:scale-100">
          <Image src={RightArrowIcon} alt="Next" className="w-3" />
        </div>
      </button>
    </div>
  )
}
