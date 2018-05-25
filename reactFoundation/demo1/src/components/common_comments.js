import React, { Component } from 'react'
import { Row, Col, Input, Button, Checkbox, Form, Modal,Tabs,Menu, Icon,Card, } from 'antd';
import logo from './../images/logo.png';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class CommonComments extends Component {
    constructor(){
        super();
        this.state={
            comments:''
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + 
        localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + 
        formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
    }

    componentDidMount(){
        var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({comments: json});
		})
    }

    render() {
      let {getFieldProps}=this.props.form;
      const {comments}=this.state;
      const commnetList = comments.length
			? comments.map((comment, index) => (
				<Card key={index} title={comment.UserName} extra={<a href = "#"> 发布于 {comment.datetime} </a>}>
					<p>{comment.Comments}</p>
				</Card>
			))
			: '没有加载到任何评论';
      return (
        <div className="comment">
          <Row>
              <Col span={24}>
                {commnetList}
                <Form onSubmit={this.handleSubmit}>
                    <FormItem label="您的评论">
                        <Input type="textarea" placeholder="随便写" 
                        {...getFieldProps('remark',{initialValue:''})}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">提交评论</Button>
                </Form>
              </Col>
          </Row>
        </div>
      )
    }
}

export default CommonComments=Form.create({})(CommonComments);