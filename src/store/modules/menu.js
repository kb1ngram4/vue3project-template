/**
 * user.js 菜单信息
 */

// 创建用户
import {defineStore} from "pinia"
// 路由
import routes from "@/router/route"
const useMenuStore = defineStore('User',{
    state:()=>{
        return {
            menuRoutes:routes
        }
    }
})
export default useMenuStore