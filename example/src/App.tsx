import React, { useEffect } from 'react'

import Elements from 'test-libs'
import 'test-libs/dist/index.css'

const App = () => {
  useEffect(() => {
    const elements = new Elements("THIS IS THE API KEY")
    elements.create('paymentGateway', "from project side")
  })

  return (
    <div>
      <h1>Hello World</h1>
      <div id='paymentGateway'></div>
    </div>
  )
}

export default App