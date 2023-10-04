import Image from "next/image"

interface Props {
  image: { url: string }
}
export const GalleryItem = ({ image }: Props) => {
  return (
    <button className="relative flex aspect-square shrink-0 grow items-center justify-center overflow-hidden rounded-xl bg-neutral-200 hover:opacity-80">
      <Image src={image.url} fill alt={image.url} key={image.url} />
    </button>
  )
}
