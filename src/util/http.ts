import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

export interface responseData {
    code: number,
    data?: any,
    message: string
}

let instance: AxiosInstance | any // 定义axios对象实例的类型 规范

// 判断 生产环境 | 开发环境
if(process.env.MODE === 'development'){
    instance = axios.create({
        baseURL: '/api',
        timeout: 5000
    })
}else{
    instance = axios.create({
        baseURL: '/api',
        timeout: 10000
    })
}

// 拦截器
instance.intercetors.request.use(
    (config: AxiosRequestConfig) =>{
        return config
    },
    (error: Error) => {
        console.log("error: " + error)
        Promise.reject(error)
    }
)

// response
instance.intercetors.response.use(
    (res: AxiosResponse) => {
        const data: responseData = res.data
        if(res.status === 200) {
            if(data.code === 0) {
              return data.data
            } else {
              ElMessage({
                message: data.message,
                type: "error"
              })
            }
        }else{
            ElMessage({
                message: "网络错误",
                type: "error"
            })
            return Promise.reject(new Error(res.data.message || "error"))
        }
    },
    (err: Error) => {
        Promise.reject(err)
    }
)

export default instance