import React, { Component } from 'react'
import { Row, Col, Input, Button, Checkbox, Form, Modal,Tabs,Menu, Icon } from 'antd';
import logo from './../images/logo.png';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId: 0
    };
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('handleSubmit',e);
    const myFetchOptions={
      method:'GET'
    };
    const formData=this.props.form.getFieldsValue();
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
		then(response=>response.json()).then(json=>{
			this.setState({userNickName:json.NickUserName,userid:json.UserId});
    });
		this.setModalVisible(false);
  }
  handleOk(e){
    console.log('handleOk',e);
    this.setState({
      modalVisible: false,
    });
  }
  handleCancel(e){
    console.log('handleCancel',e);
    this.setState({
      modalVisible: false,
    });
  }
  setModalVisible(value){
    this.setState({
      modalVisible:value
    });
  }
  handleClick(e) {
    if(e.key=='register'){
      this.setState({
        current: e.key
      });
      this.setModalVisible(true);
    }else{
      this.setState({
        current: e.key
      });
    }
  }

  render() {
    let { getFieldProps,getFieldDecorator  } = this.props.form;
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" className="register">
        <Button type="primary" htmlType="button" >{this.state.userNickName}</Button>
        &nbsp;&nbsp;个人中心
        {/* <Link target="_blank">
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link> */}
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button">退出</Button>
      </Menu.Item>
      : <Menu.Item key="register" className="register">
        <Icon type="appstore" />注册
      </Menu.Item>
      ;

    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={logo} alt="" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick}>
              <Menu.Item key="top"><Icon type="appstore" />头条</Menu.Item>
              <Menu.Item key="shehui"><Icon type="appstore" />社会</Menu.Item>
              <Menu.Item key="guonei"><Icon type="appstore" />国内</Menu.Item>
              <Menu.Item key="guoji"><Icon type="appstore" />国际</Menu.Item>
              <Menu.Item key="yule"><Icon type="appstore" />娱乐</Menu.Item>
              <Menu.Item key="tiyu"><Icon type="appstore" />体育</Menu.Item>
              <Menu.Item key="keji"><Icon type="appstore" />科技</Menu.Item>
              <Menu.Item key="shishang"><Icon type="appstore" />时尚</Menu.Item>
              {userShow}
            </Menu>
            <Modal
              title="Basic Modal"
              visible={this.state.modalVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                <Form  className="login-form" onSubmit={this.handleSubmit}>
                  <FormItem label="账户">
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                       placeholder="Username" {...getFieldProps('r_userName')}/>
                  </FormItem>
                  <FormItem label="密码">
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                       type="password" placeholder="Password" {...getFieldProps('r_password')}/>
                  </FormItem>
                  <FormItem label="确认密码">
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                       type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirm')}/>
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                    <Button type="primary" htmlType="submit">注册</Button>
                    {/* Or <a href="">register now!</a> */}
                  </FormItem>
                </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}
export default PCHeader = Form.create()(PCHeader);