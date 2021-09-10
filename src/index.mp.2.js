import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Test from './pages/test'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app2'
  container.style = 'height:100vh;overflow:hidden'
  document.body.appendChild(container)

  ReactDOM.render(<Test/>, container)
}
//"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
