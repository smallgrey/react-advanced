import { Component } from 'react';

class Other extends Component {
    state = { params: JSON.stringify(this.props.location.state)}
    render() {
      
      return (
        <div>
            其他页面-3
            页面参数：{this.state.params}
        </div>
      );
    }
}

export default Other;
