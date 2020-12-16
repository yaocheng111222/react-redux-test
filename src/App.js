import React, { Component } from 'react';
import { connect } from 'react-redux'
// 也可以使用无状态组件
class App1 extends Component {
    render() {
        // 用解构赋值
        let { inputValue, inputChange, clickBtn, list, deleteItem } = this.props
        return (
            <div>
                <div>
                    <input 
                        value={inputValue} 
                        onChange={inputChange} />
                    <button onClick={clickBtn}>提交</button>
                </div>
                <ul>
                    {list.map((item,index) => (<li key={index} onClick={()=>deleteItem(index)}>{item}</li>))}
                </ul>
            </div>
        );
    }
}
const App = (props) => {
    let { inputValue, inputChange, clickBtn, list, deleteItem } = props
    return (
        <div>
            <div>
                <input 
                    value={inputValue} 
                    onChange={inputChange} />
                <button onClick={clickBtn}>提交</button>
            </div>
            <ul>
                {list.map((item,index) => (<li key={index} onClick={()=>deleteItem(index)}>{item}</li>))}
            </ul>
        </div>
    )
}
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickBtn() {
            let action = {
                type: 'add_item',
            }
            dispatch(action)
        },
        deleteItem(index) {
            let action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(App);