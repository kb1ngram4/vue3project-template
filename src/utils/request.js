import axios from "axios";
import { ElMessage } from 'element-plus'

//对axios二次封装
const requests = axios.create({
    // baseURL:import.meta.env,
    baseUrl:'http://localhost:8080',
    timeout: 5000
})
// 请求拦截器
requests.interceptors.request.use(
    // 成功，返回config
    config => config,
    // 失败
    (error) => {
        // 对请求
        return Promise.reject(error)
    }
)
// 响应拦截器
requests.interceptors.response.use(
    (response) => {
        // 返回response.data
        console.log(response);
        const {data,code} = response
        if(data.code == 200){
            // ElMessage({
            //     type:"success",
            //     message:data.data.msg
            // })
        }else{
            // ElMessage({
            //     type:"error",
            //     message:data.data.msg
            // })
        }
        return response.data
    },
    (error) => {
        let message = ''    
        const status = error.response.status
        switch (status) {
            case 401:
                message = 'token过期'
                break;
            case 403:
                message = '无权访问'
                break;
            case 404:
                message = '请求地址错误'
                break;
            case 500:
                message = '服务器出现问题'
                break;

            default: 
                message = '无网络'
                break;
        }
        ElMessage({
            type:'error',
            message
        })
        return Promise.reject(error)
    }

)

export default requests