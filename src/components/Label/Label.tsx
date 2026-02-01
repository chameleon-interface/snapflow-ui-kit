import clsx from 'clsx'
import { Typography } from '../Typography'
import s from './Label.module.css'
import { LabelProps } from './Label.types'

export const Label = ({
  text,
  textVariant = 'text-14-medium',
  required = false,
  color,
  className,
  htmlFor,
  ...rest
}: LabelProps) => {
  return (
    <Typography
      as="label"
      variant={textVariant}
      className={clsx(s.label, className)}
      htmlFor={htmlFor}
      style={color ? { color } : undefined}
      {...rest}
    >
      {text}
      {required && (
        <>
          <span className={s.required} aria-hidden="true">
            *
          </span>
          <span className={s.srOnly}> (required)</span>
        </>
      )}
    </Typography>
  )
}
