import React, { Component } from 'react'

export default class Second extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('--------子组件渲染onLoad--------',this)
    }

    componentDidUpdate(){
        console.log('--------子组件渲染Update--------')
    }

    render() {
        const {name} = this.props
        return (
            <div>
                我是子组件 
                <wx-button onClick={() => {
                    this.props.fClick()
                }}>
                点我触发父组件事件
                </wx-button>
                父组件传来的名称{name}
            </div>
        )
    }
}
