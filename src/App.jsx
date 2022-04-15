/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-07 16:47:41
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-19 10:26:07
 */

import React from 'react';
import ProxyDemo from './ProxyDemo'
// import qs from "querystring"
// babel-plugin-import 会帮助你加载JS和CSS
// import { Button, Pagination } from "antd";


// import Button from 'antd/es/button'
// import 'antd/es/button/style/css'



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      banner: []
    }
  }

  componentDidMount() {

    // fetch 基于Prommise, res=>res.json() 代表返回
    // get 请求
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
      .then((res) => res.json()).then(data => {
        this.setState({
          banner: data.banner
        })
      })


      // const querystring = require('querystring');

    // post 请求
    // ajax: 对象类型的参数
    // body：字符串类型的参数
    // querystring 报错

    fetch('http://iwenwiki.com/api/blueberrypai/login.php', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Accept": "application/json,text/plain, */*"
      },
      // body: querystring.stringify({
      //   user_id: "iwen@qq.com",
      //   password: "iwen123",
      //   verification_code: "crfvw"
      // }),
      body: "user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
    }).then(res => res.json()).then(data => {
      console.log('data', data)
    })
  }

  render() {
    return (
      <div>
       
        {this.state.banner.length ? (<ul>
          {
            this.state.banner.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })
          }
        </ul>) : 'No data yet'}
        <ProxyDemo />
      </div>
    )
  }
}

