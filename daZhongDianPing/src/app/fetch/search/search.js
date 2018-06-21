import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : '';
    console.log(page + '/' + cityName + '/' + category + keywordStr);
    const result = get('/data/list.json')
    
    return result
}