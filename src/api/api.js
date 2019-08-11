import $Http from "../config/http.js"

//登录的api
export function loginAPI(params) {
    let url = "users/login";
    let data = Object.assign({},params);
    
    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

//获取轮播图的数据
export function getSwiperAPI(params) {
    let url = "homes/swipe"
    let data = Object.assign({},params);
    
    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}