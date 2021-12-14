import React from "react";

import firebase from "firebase";

import { useState } from "react/cjs/react.development";
import { Form, Input, Button, Checkbox } from 'antd';
//function AppContact(){

    const AppContact =()=>
    {
      const [aFirstName,setAFirstName]=useState("");
      const [aPassWord,setAPassWord]=useState("");
      const handleAddUser =()=>{
        const rf = firebase.firestore().collection('User').add({
          //firebase.firestore().collection('products').get().
                  firstName:aFirstName  ,
                  password:aPassWord,
              })
              
             rf.push()
              setAFirstName("");
              setAPassWord("");
      
          };
    return(
        <Form
        name="basic"
        labelCol={{ span:8 }}
        wrapperCol={{ span: 5}}
       initialValues={{ remember: true }}
       // onFinish={onFinish}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="First Name" focus value={aFirstName} onChange={(e)=>{
                                        setAFirstName(e.target.value)}}></Input>
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Pass Word" focus value={aPassWord} onChange={(e)=>{
                                        setAPassWord(e.target.value)}} ></Input.Password>
        </Form.Item>
  
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary"   onClick={{handleAddUser}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
}

export default AppContact;