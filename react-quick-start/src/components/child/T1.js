import { Component } from 'react';
import { bus } from '../../common/bus';


const  childWrapper = {
    padding: '10px 0px',
    border: '1px solid red'
}

class ChildOne extends Component {
    constructor(){
        super()
        this.state={
            msg:'这是子组件1的数据',
            brotherMsg: ''
        }
        bus.on('brotherMsg', data => {
            this.setState({
                brotherMsg: data
            })
        })
    }

    render() {
        this.state.msg = this.props.msg
        return (
            <div style={childWrapper}>
                标题：子组件-1
                <div>父组件数据 { this.state.msg }</div>
                <div>兄弟组件数据 { this.state.brotherMsg }</div>
                <button onClick={() => {
                    this.setFatherMsg()
                }}>向父组件传值</button>
            </div>
        );
    }

    //这里必须使用箭头函数
    setFatherMsg = () => {
        this.props.setMsg('子组件传来的值')
    }
}

export default ChildOne;
