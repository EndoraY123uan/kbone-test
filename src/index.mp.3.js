import React from 'react'
import ReactDOM from 'react-dom'
import UndercoverRome from './pages/undercoverRoom'


export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app3'
  container.style = 'height:100vh;overflow:hidden'
  document.body.appendChild(container)

  ReactDOM.render(<UndercoverRome/>, container)
}
//"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
