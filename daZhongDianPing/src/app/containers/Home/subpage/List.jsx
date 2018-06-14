import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData1 } from '../../../fetch/home/home'
import ListComponent from './../../../components/List';
import LoadMore from '../../../components/LoadMore';
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],// 存储数据，上面的代码中已经使用了
            hasMore: false,// 记录当前状态下，是否还有更多数据，这个需要后端返回。true 即还有，false 即没了
            isLoadingMore: false,//记录当前状态下，是否正在加载中。true 即正在加载中，false 即不是加载中状态
            page: 0 //记录下一页的页码，首页的页码是 0
        }
        this.loadFirstPageData=this.loadFirstPageData.bind(this);
        this.resultHandle=this.resultHandle.bind(this);
        this.loadMoreData=this.loadMoreData.bind(this);
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ?<ListComponent data={this.state.data}></ListComponent>
                    :<div>加载中...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstPageData();
    }
    loadFirstPageData(){
        const cityName=this.props.cityName;
        const result=getListData1(cityName,0);
        this.setState({
            page:1
        });
        this.resultHandle(result);
    }
    loadMoreData(){
        this.setState({
            isLoadingMore:true
        });
        const cityName=this.props.cityName;
        const page=this.state.page;
        const result=getListData1(cityName,page);
        this.resultHandle(result);

        this.setState({
            page:page+1,
            isLoadingMore:false
        });
    }
    resultHandle(result){
        result.then(res=>{
            return res.json();
        }).then(json=>{
            this.setState({
                data:this.state.data.concat(json.data),
                hasMore:json.hasMore
            });
        }).catch(ex => {
            if (true) {
                console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
            }
        })
    }
    
}

export default List