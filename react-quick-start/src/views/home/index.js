import { Switch, Button } from 'antd';
import { Component } from 'react';
import { Link }from 'react-router-dom';
import intl from 'react-intl-universal';
import Cookies from 'js-cookie';

let isChecked = Cookies.get('lang') === "zh-CN" ? true : false;

class Home extends Component {

    render() {
      return (
        <div>
            {intl.get('INPUT_MOBILE')}
            <Switch checkedChildren="中文" unCheckedChildren="英文" defaultChecked={isChecked} onClick = {(isChecked) => {
                this.handleClick(isChecked)
              }}/>
            <div>
              方式一：通过params<br/>  
              <Link to={'/other/2'}>params-HTML方式跳转页面</Link>
              <Button onClick={() => {
                this.paramJS()
              }}>params-JS方式跳转页面</Button>
            </div>
            <div>
              方式二：通过query<br/>  
              <Link to={{ pathname : '/second' , query : { name : 'small' }}}>query-HTML方式跳转页面</Link>
              <Button onClick={() => {
                this.queryJS()
              }}>query-JS方式跳转页面</Button>
            </div>
            <div>
              方式三：通过state<br/>  
              <Link to={{ pathname : '/third' , state : { name : 'small2' }}}>state-HTML方式跳转页面</Link>
              <Button onClick={() => {
                this.stateJS()
              }}>state-JS方式跳转页面</Button>
            </div>
        </div>
      );
    }
    handleClick = (isChecked) => { // 国际化的点击事件
      let lang = "en-US";
      if(isChecked) {
        lang = "zh-CN";
      }
    	Cookies.set('lang', lang, { expires: 7 });
      window.location.reload(true);
  	}
    paramJS = () => {
      this.props.history.push('/other/2')
    }
    queryJS = () => {
      this.props.history.push({ pathname: '/second' ,query: { name: ' small'} })
    }
    stateJS = () => {
      this.props.history.push({ pathname: '/third',state: {name : 'small2' } })
    }
}

export default Home;
