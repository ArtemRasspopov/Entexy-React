import React from 'react'
import styles from './Input.module.scss'

const Input = ({placeholder, value, onChange}) => {
  return (
    <input className={styles.input} value={value} onChange={onChange} type="text" placeholder={placeholder} />
  )
}

export default Input