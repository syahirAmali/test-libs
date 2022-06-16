import React from 'react'
import styles from './styles.module.css'

export default ({ text }: any) => {
  return <div className={styles.test}>Example Component from package: {text}</div>
}