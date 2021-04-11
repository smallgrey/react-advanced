import { Component } from 'react';

class Other extends Component {
    state = { params: JSON.stringify(this.props.location.query)}
    render() {
      
      return (
        <div>
            其他页面-2
            页面参数：{this.state.params}
        </div>
      );
    }
}

export default Other;
