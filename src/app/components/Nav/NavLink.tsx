import Link from "next/link"

interface Props extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}
export const NavLink = ({ children, href = "" }: Props) => {
  return (
    <Link
      className="hover:border-accent-primary text-neutral-normal grow border-b-4 border-transparent pb-8 pt-7 capitalize transition-all duration-200 ease-in-out"
      href={href}
    >
      {children}
    </Link>
  )
}
