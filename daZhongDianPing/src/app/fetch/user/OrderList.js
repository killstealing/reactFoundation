import { get1 } from '../get'

export function getOrderListData(username) {
    console.log('getOrderListData '+username);
    const result = get1('/data/orderlist/orderList.json')
    return result
}