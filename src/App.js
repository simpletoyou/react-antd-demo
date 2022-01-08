/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-07 16:47:41
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-08 14:28:39
 */

import React from 'react';
// babel-plugin-import 会帮助你加载JS和CSS
import { Button, Pagination } from "antd";


// import Button from 'antd/es/button'
// import 'antd/es/button/style/css'



function App() {

  function pageChange(page,pageSize) {
    console.log(page,pageSize)
  }
  return (
    <div className="App">
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
      <Pagination showQuickJumper defaultCurrent={1} total={50} onChange={pageChange}/>
    </div>
  );
}

export default App;
