import { get,get1 } from '../get'

export function getInfoData(id) {
    console.log('fetch id '+id);
    const result = get('/data/detail/info.json')
    return result
 }
 
 export function getCommentData(page, id) {
     console.log('fetch page '+page +id);
     const result = get('/data/detail/comment.json')
     return result
 }