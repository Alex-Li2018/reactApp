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

//获取菜单的数据
export function getMenuAPI(params) {
    let url = "homes/menu"
    let data = Object.assign({},params);
    
    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

//获取咨询的内容
export function getMenuInfoAPI(params) {
    let url = `homes/info`
    let data = Object.assign({},params);
    
    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

//获取好客问答的内容 
export function getMenuFaqAPI(params) {
    let url = `homes/faq`
    let data = Object.assign({},params);
    
    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}