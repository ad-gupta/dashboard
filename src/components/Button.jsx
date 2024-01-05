import React from 'react'
import { useStateContext } from '../contexts/context'

const Button = ({ icon, bgColor, color, text, borderRadius, width }) => {
  const {setIsClicked, initialState} = useStateContext()
  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-md p-3`}
    >
      {icon} {text}
    </button>
  )
}

export default Button