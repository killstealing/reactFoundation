import * as ActionTypes from './actionTypes';


export const fetchStarted=()=>({
    type:ActionTypes.FETCH_STARTED
});

export const fetchSuccess=(result)=>({
    type:ActionTypes.FETCH_SUCCESS,
    result
});
export const fetchFailed=(error)=>({
    type:ActionTypes.FETCH_FAILED,
    error
});

let nextSeqId=0;
export const fetchWeather=(cityCode)=>{
    console.log('cityCode '+cityCode);
    return (dispatch)=>{
        const apiUrl=`/data/cityinfo/${cityCode}.html`;
        const seqId=++nextSeqId;
        const dispatchIfValid=(action)=>{
            if(seqId===nextSeqId){
                return dispatch(action);
            }
        }
        dispatchIfValid(fetchStarted());
        fetch(apiUrl).then((response)=>{
            if(response.status!==200){
              throw new Error('Fail to get response with status'+response.status);
            }
            response.json().then((responseJson)=>{
                dispatchIfValid(fetchSuccess(responseJson.weatherinfo));
            }).catch((error)=>{
                dispatchIfValid(fetchFailed(error));
            });
        }).catch((error)=>{
            dispatchIfValid(fetchFailed(error));
        });
    }
}