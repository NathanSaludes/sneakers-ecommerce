import Image from "next/image"
import Avatar from "@/public/images/image-avatar.png"

export const AvatarButton = () => {
  return (
    <button className="inline-flex aspect-square w-7 items-center justify-center overflow-hidden rounded-full hover:outline hover:outline-accent-primary sm:w-9">
      <Image src={Avatar} alt="User Avatar: Nathaniel Saludes" />
    </button>
  )
}
