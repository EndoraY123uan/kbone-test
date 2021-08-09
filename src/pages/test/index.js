import React, { Component } from 'react'
import Second from './second'

export default class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'yuan',
            flag:true
        }
       // this.handleClick2 = this.handleClick.bind(this)
    }

    handleClick(){
        console.log('父组件笑了哈哈哈')
        this.setState({
            flag:false
        })
    }

    handleClick3 = () => {
        console.log('父组件笑了哈哈哈')
        this.setState({
            flag:false
        })
    }

    render() {
        return (
            <div>
                这是测试组件
                 {/* <Second name={this.state.name} fClick={this.handleClick2} /> */}
                 {/* <Second name={this.state.name} fClick={this.handleClick.bind(this)} /> */}
                 {/* <Second name={this.state.name} fClick={() => this.handleClick()} /> */}
                 <Second name={this.state.name} fClick={this.handleClick3} />
            </div>
        )
    }
}
