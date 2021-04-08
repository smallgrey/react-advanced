import { Switch } from 'antd';
import { Component } from 'react';
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
}

export default Home;
