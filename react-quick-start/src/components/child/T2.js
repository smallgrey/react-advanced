import { Component } from 'react';
import { bus } from '../../common/bus';

const  childWrapper = {
    padding: '10px 0px',
    border: '1px solid red',
    margin: '10px 0px'
}

class ChildTwo extends Component {
    render() {
        return (
            <div style={childWrapper}>
                标题：子组件-2
                <button onClick={() => {
                    this.setBrotherMsg()
                }}>向兄弟组件-1传值</button>
            </div>
        );
    }

    //这里必须使用箭头函数
    setBrotherMsg = () => {
        bus.emit('brotherMsg', '兄弟组件-2传来的值')
    }
}

export default ChildTwo;
