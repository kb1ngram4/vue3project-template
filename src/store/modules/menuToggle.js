/**
 * menuToggle.js 传入是否可折叠数据
 */
import {defineStore} from 'pinia'
/**
 * ToggleCollapse：自定义仓库名称
 * useToggleCollapse: store实例
 */
 const useToggleCollapse = defineStore('ToggleCollapse',{
    state:()=>{
        return{
            isCollapse:false
        }
    }
})
export default useToggleCollapse