import axios from 'axios'

//axios请求,响应拦截的问题
(function(){
  //拦截所有的请求
  axios.interceptors.request.use(config => { 
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
  axios.interceptors.response.use(function (response) { 
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
})()
