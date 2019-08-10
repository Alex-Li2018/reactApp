import $Http from "../config/http.js"

export function loginAPI(params) {
    let url = "http://47.96.21.88:8086/login";
    let data = Object.assign({},params);
    
    return $Http.get(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}