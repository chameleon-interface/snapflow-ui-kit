import { type SVGProps } from 'react'

type Props = {
  type?: 'stroke' | 'filled'
}

export const DesktopIcon = ({ type = 'stroke', ...rest }: SVGProps<SVGSVGElement> & Props) => {
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
          <rect x="4" y="4" width="16" height="11" rx="2" />
          <path d="M12 15v3" />
          <path d="M7 19h10" />
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
        <rect x="4" y="4" width="16" height="11" rx="2" />
        <rect x="11" y="14" width="2" height="3" rx="0.5" />
        <rect x="6" y="17" width="12" height="3" rx="1.5" />
      </g>
    </svg>
  )
}
