import { type SVGProps } from 'react'

type Props = {
  type?: 'stroke' | 'filled'
}

export const SmartphoneIcon = ({ type = 'stroke', ...rest }: SVGProps<SVGSVGElement> & Props) => {
  if (type === 'stroke') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <circle cx="12" cy="18" r="1.25" />
        </g>
      </svg>
    )
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g fill="currentColor">
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <circle cx="12" cy="18" r="1.75" />
      </g>
    </svg>
  )
}
