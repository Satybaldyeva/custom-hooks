import React from 'react'

export const Button = ({children, disabled}) => {
  return (
    <button disabled={disabled}>{children}</button>
  )
}
