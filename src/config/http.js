import axios from 'axios'

// 创建axios实例
var instance = axios.create({timeout: 1000 * 12});

//判断环境变量
if(process.env.NODE_ENV == 'development') {
    instance.defaults.baseURL = 'http://47.96.21.88:8086/'
}else if(process.env.NODE_ENV == 'production') {
    instance.defaults.baseURL = ''
}

// post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// //axios请求,响应拦截的问题

// //拦截所有的请求
instance.interceptors.request.use(config => { console.log(config)
    // 在需要带上token数据的地方,加上token
    if(!config.url.endsWith('/login')){ //login接口不用加上token
      config.headers.Authorization = localStorage.getItem('myToken');
    }
    return config;
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//封装http请求
const $Http = {
    //get请求
    get(url, params) {
        return new Promise((resolve, reject) =>{   
            //给每个get请求装上时间戳
            let para = Object.assign(params, { t: new Date().getTime() })   

            instance.get(url, {            
                params: para       
            }).then(res => {
                resolve(res);
            }).catch(err =>{
                reject(err)        
            })    
        });
    },
    //post请求
    post(url, params) {
        return new Promise((resolve, reject) => {
            instance.post(url, params)
            .then(res => {
                resolve(res);
            })
            .catch(err =>{
                reject(err)
            })
        });
    }
}

export default $Http