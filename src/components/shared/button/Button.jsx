import React from 'react'
import style from './Button.module.scss'

const Button = ({children, type, onClick}) => {
  return (
    <button className={style.button} type={type} onClick={onClick}>{children}</button>
  )
}

export default Button