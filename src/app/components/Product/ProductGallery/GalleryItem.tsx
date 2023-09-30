import Image from "next/image"

interface Props {
  image: { url: string }
}
export const GalleryItem = ({ image }: Props) => {
  return (
    <Image
      src={image.url}
      width={70}
      height={70}
      alt={image.url}
      className="flex aspect-square shrink-0 grow items-center justify-center rounded-xl bg-neutral-200"
      key={image.url}
    />
  )
}
