import { Component } from 'react';
import ChildOne from '../../components/child/T1';
import ChildTwo from '../../components/child/T2'


const parentWrapper = {
  padding: '10px',
  border: '1px solid red',
  boxSizing: 'border-box'
}

class Home extends Component {
    constructor(){
      super()
      this.state={
          msg:'这是父组件的私有数据',
          childVal: ''
      }
    }
    
    render() {
      return (
        <div style={parentWrapper}>
            <div>子组件传来的数据: { this.state.childVal } </div>
            <ChildOne msg={this.state.msg} setMsg={(data) => {
              this.setMsg(data)
            }}></ChildOne>
            <ChildTwo></ChildTwo>
        </div>
      );
    }

    //这里必须使用箭头函数
    setMsg = (childMsg) => {
      console.log(childMsg)
      this.setState({ childVal: childMsg })
  }
}

export default Home;
