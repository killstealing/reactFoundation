import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index'
import { getAdData, getAdData1 } from '../../../fetch/home/home'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data} />
                        : <div>加载中......</div>
                }
            </div>
        )
    }
    componentDidMount() {
        //获取广告数据
        const result =getAdData1();
            result.then(res => {
                return res.json()
            }).then(json => {
                // 处理获取的数据
                console.log("json "+json);
                console.log("json "+JSON.stringify(json));
                const data = json.Ad;
                if (data.length) {
                    this.setState({
                        data: data
                    })
                }
            }).catch(ex => {
                // 发生错误
                if (true) {
                    console.error('首页广告模块获取数据报错, ', ex.message)
                }
            })
    }
}

export default Ad