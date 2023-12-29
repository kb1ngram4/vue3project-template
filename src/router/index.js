import { createRouter, createWebHistory } from 'vue-router'
import routes from './route'
/**
 * 工作台
 * 
 */


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}
const white = ['login']
router.beforeEach((to,from,next)=>{
  if(to.path == '/login' || to.path == '/register' || to.path == '/forgetpassword'){
    next()
  }else{
    if(!localGet('login_token')){
      next('/login')
    }else{
      next()
    }
    
  }
})
export default router
