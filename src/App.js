// 内部
import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'
import ReactDom from 'react-dom' 
class App extends React.Component{
    render() {
        return (
            <div>
                <h1>现在有机枪${this.props.num}</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给武器</button>
            </div>
        )
        
    }
}
const mapStateProps = (state)=>{
    return {num:state}
}
const actionCreators = { addGun, removeGun, addGunAsync }
export default connect(mapStateProps, actionCreators)(App)