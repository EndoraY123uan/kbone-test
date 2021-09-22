import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app1'
  container.style = 'height:100vh;overflow:hidden'
  document.body.appendChild(container)

  ReactDOM.render(<App/>, container)
}
//"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
