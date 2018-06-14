import { get,get1 } from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}
export function getAdData1(){
    const result = get1('/data/Ad.json')
    return result
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}

export function getListData1(city, page) {
    console.log('getListData '+city,page);
    const result = get1('/data/list.json')
    return result
}