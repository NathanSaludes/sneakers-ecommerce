import { NavLink } from "./NavLink"

export const Nav = () => {
  return (
    <nav className="flex gap-6">
      <NavLink href="#collections">collections</NavLink>
      <NavLink href="#men">men</NavLink>
      <NavLink href="#women">women</NavLink>
      <NavLink href="#about">about</NavLink>
      <NavLink href="#contact">contact</NavLink>
    </nav>
  )
}
