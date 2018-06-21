import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { getSearchData } from '../../../fetch/search/search';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
};
class SearchList extends Component {
    constructor() {
        super(...arguments);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState;
        this.loadMoreData=this.loadMoreData.bind(this);
    }
    componentDidMount = () => {
        // 获取首页数据
        this.loadFirstPageData()
    }
    loadFirstPageData() {
        const cityName = this.props.userinfo.cityName;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getSearchData(0,cityName,category,keyword);
        this.resultHandle(result);
    }
    resultHandle(result){
        const page=this.state.page;
        this.setState({
            page:page+1
        });
        result.then(res=>{
            return res.json()
        }).then(json=>{
            const hasMore=json.hasMore;
            const data=json.data;
            this.setState({
                hasMore:hasMore,
                data:this.state.data.concat(data)
            });
        }).catch(ex=>{
            console.error('搜索页获取数据报错，',ex.message);
        });
    }
    loadMoreData(){
        this.setState({
            isLoadingMore:true
        });

        const cityName=this.props.userinfo.cityName;
        const page=this.state.page;
        const keyword=this.props.keyword||'';
        const category=this.props.category;
        const result=getSearchData(page,cityName,category,keyword);
        this.resultHandle(result);

        this.setState({
            isLoadingMore:false
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ?<ListComponent data={this.state.data}/>
                    :<div>{/* 加载中 */}</div>
                }
                {
                    this.state.hasMore
                    ?<LoadMore isLoadingMore={this.state.isLoadingMore}
                        loadMoreFn={this.loadMoreData}></LoadMore>
                    :''
                }
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState) {
        const keyword=this.props.keyword;
        const category=this.props.category;

        //搜索条件完全相当时 ，忽略 
        if(keyword==prevProps.keyword&&category==prevProps.category){
            return;
        }

        this.setState(initialState);
        this.loadFirstPageData();
    }
    
}

function mapStateToProps(state, ownProps) {
    return {
        userinfo: state.userinfoReducer
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)