// import * as React from 'react'
// import styles from './styles.module.css'

// interface Props {
//   text: string
// }

// export const ExampleComponent = ({ text }: Props) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }

import App from './App'
import ReactDOM from 'react-dom'
import React from 'react'


export default class {
  apiKey: any
  constructor(apiKey: any) {
    this.apiKey = apiKey
  }

  create(tag: any, text: any) {
    ReactDOM.render(<App text={text} />, document.getElementById(tag))
  }
}