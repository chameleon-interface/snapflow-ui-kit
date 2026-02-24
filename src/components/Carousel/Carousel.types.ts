export type CarouselProps = {
  children: React.ReactNode[]
  value?: number
  onValueChange?: (index: number) => void
  autoPlayInterval?: number
  className?: string
  hideArrowsWhenSingle?: boolean
}
