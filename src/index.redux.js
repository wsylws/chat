
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

// 通过reducer简历
// 根据老的state 和action 生成新的state
export function counter(state=0, action) {
    switch(action.type) {
        case ADD_GUN:
            return state+1
        case REMOVE_GUN:
            return state-1
        default:
            return 10
    }
}
//  action creator
export function addGun() {
    return {type: ADD_GUN }
}

export function removeGun() {
    return {type: REMOVE_GUN }
}
// redux-thunk处理异步请求 可以返回函数
export function addGunAsync() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}