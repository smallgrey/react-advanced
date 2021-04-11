import { Component } from 'react';

class Other extends Component {
    state = { params: JSON.stringify(this.props.match.params)}
    render() {
      
      return (
        <div>
            其他页面
            页面参数：{this.state.params}
        </div>
      );
    }
}

export default Other;
