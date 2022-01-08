/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-07 16:47:41
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-08 11:25:14
 */

import React from 'react';
// babel-plugin-import 会帮助你加载JS和CSS
// import { DatePicker } from "antd";


import Button from 'antd/es/button'
import 'antd/es/button/style/css'



function App() {
  return (
    <div className="App">
      APP
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      {/* <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space> */}
    </div>
  );
}

export default App;
