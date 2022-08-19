import React from 'react'
import ReactDOM from 'react-dom'
import { FormEditor, FormRenderer } from './formeo'

import './index.css'

function App() {
  return (
    <div className="App">
      <h1>Test form builder</h1>
      <FormEditor />
      <FormRenderer />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
