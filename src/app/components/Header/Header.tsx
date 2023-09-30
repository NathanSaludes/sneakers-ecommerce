import Menu from "@/public/images/icon-menu.svg"
import Logo from "@/public/images/logo.svg"
import Image from "next/image"
import { AvatarButton } from "../Avatar"
import { Nav } from "../Nav"
import { CartButton } from "./CartButton"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b-2 bg-white">
      <div className="container mx-auto flex justify-between gap-14 p-4 md:px-4 md:pb-0 md:pt-4">
        <div className="logo flex items-center gap-2">
          <button className="inline-flex aspect-square w-8 min-w-max items-center justify-center md:hidden">
            <Image src={Menu} alt="Menu Button" />
          </button>
          <Image src={Logo} alt="Sneakers" className="inline-block min-h-max min-w-max sm:h-auto md:mb-3" />
        </div>
        <div className="center hidden md:flex md:grow md:items-center ">
          <Nav />
        </div>
        <div className="right flex items-center gap-4 sm:gap-6 md:mb-3">
          <CartButton />
          <AvatarButton />
        </div>
      </div>
    </header>
  )
}
