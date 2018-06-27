import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import BuyAndStore from '../../../components/BuyAndStore';
import { browserHistory } from 'react-router';
import * as storeActionsFromOtherFile from '../../../actions/storeAction';
import { bindActionCreators } from 'redux';

class Buy extends Component {
    constructor() {
        super(...arguments);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        };
        this.buyHandle = this.buyHandle.bind(this);
        this.storeHandle = this.storeHandle.bind(this);
        this.loginCheck = this.loginCheck.bind(this);
        this.checkStoreState=this.checkStoreState.bind(this);
    }
    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore}
                    buyHandle={this.buyHandle} storeHandle={this.storeHandle}></BuyAndStore>
            </div>
        )
    }
    componentDidMount = () => {
      this.checkStoreState();
    }
    checkStoreState(){
        const id=this.props.id;
        const store=this.props.storeReducer;
        //some 只要有一个满足即可
        store.some(item=>{
            if(item.id===id){
                this.setState({
                    isStore:true
                });
                // 跳出循环
                return true;
            }
        });
    }
    
    //购买事件 
    buyHandle() {
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }

        //购买流程

        //跳转到用户页 
        browserHistory.push('/User');
    }
    //收藏事件
    storeHandle() {
        //验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }

        // 已收藏
        if(this.state.isStore){
            this.props.storeActions.rm({
                id:this.props.id
            });
        }else{
            this.props.storeActions.add({
                id:this.props.id
            });
        }
        this.setState({
            isStore:!this.state.isStore
        });
    }
    //验证登录
    loginCheck() {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (!userinfo.username) {
            //跳转到登录界面

            // browserHistory.push('/Login');
            // browserHistory.push('/login' + encodeURIComponent('/detail/' + id));
            browserHistory.push('/login/detail/' + id);
            return false;
        }
        return true;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        userinfo: state.userinfoReducer,
        storeReducer: state.storeReducer
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        storeActions: bindActionCreators(storeActionsFromOtherFile, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)