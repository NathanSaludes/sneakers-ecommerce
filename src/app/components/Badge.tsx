export const Badge = ({ children }: React.PropsWithChildren) => {
  return (
    <span className="inline-flex max-h-max max-w-[3ch] items-center justify-center rounded-full bg-accent-primary px-3 py-0.5 text-[10px] font-bold text-accent-secondary">
      {children}
    </span>
  )
}
