import Cart from "@/public/images/icon-cart.svg"
import Menu from "@/public/images/icon-menu.svg"
import Avatar from "@/public/images/image-avatar.png"
import Logo from "@/public/images/logo.svg"
import Image from "next/image"
import { Nav } from "./Nav"

export const Header = () => {
  return (
    <header className="border-neutral-light block">
      <div className="container mx-auto flex justify-between gap-14 border-b-2 p-4 md:px-4 md:pb-0 md:pt-4">
        {/* Branding */}
        <div className="logo flex items-center gap-2">
          <button className="inline-flex aspect-square w-8 min-w-max items-center justify-center md:hidden">
            <Image src={Menu} alt="Menu Button" />
          </button>
          <Image src={Logo} alt="Sneakers" className="inline-block min-h-max min-w-max sm:h-auto md:mb-3" />
        </div>
        {/* Navigation */}
        <div className="center hidden md:flex md:grow md:items-center ">
          <Nav />
        </div>
        {/* Cart & Avatar */}
        <div className="right flex items-center gap-4 sm:gap-6 md:mb-3">
          <button className="inline-flex aspect-square w-7 items-center justify-center sm:w-8">
            <Image src={Cart} alt="cart" />
          </button>
          <button className="inline-flex aspect-square w-7 items-center justify-center sm:w-10">
            <Image src={Avatar} alt="User Avatar: Nathaniel Saludes" />
          </button>
        </div>
      </div>
    </header>
  )
}
