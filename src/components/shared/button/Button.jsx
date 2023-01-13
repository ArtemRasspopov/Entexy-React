import React from 'react'
import style from './Button.module.scss'

const Button = ({children, type}) => {
  return (
    <button className={style.button} type={type}>{children}</button>
  )
}

export default Button