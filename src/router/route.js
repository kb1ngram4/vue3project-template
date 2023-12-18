import Home from '../views/Home.vue'
const routes = [
    {
        path:'/login',
        name:'login',
        component:()=> import ('../views/login.vue'),
        meta:{
            title:'登录',
            icon:''
        }
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'home',
            show: true,
            icon: 'location'
        }
    },
    {
        path: '/carmanage',
        name: '车辆管理',
        meta: {
            title: '车辆管理',
            show: true,
            icon: 'location'
        },
        children: [
            {
                path: '/carmanage/carRecord', 
                name: '车辆档案', 
                meta: {
                    title: '车辆档案',
                    show: true,
                    icon: 'location'
                }, 
                component: () => import('../views/CarManage/CarRecord.vue'),
                children: [
                    {
                        path: '/carmanage/carRecord', 
                        name: '车辆档案', 
                        meta: {
                            title: '车辆档案',
                            show: true,
                            icon: 'location'
                        }, 
                        component: () => import('../views/CarManage/CarRecord.vue')
                    },
                    {
                        path: '/carmanage/carMonitor', name: '车辆监控', meta: {
                            title: '车辆监控',
                            show: true,
                            icon: 'location'
                        }, component: () => import('../views/CarManage/CarMonitor.vue')
                    },
                ]
            },
            {
                path: '/carmanage/carMonitor', name: '车辆监控', meta: {
                    title: '车辆监控',
                    show: true,
                    icon: 'location'
                }, component: () => import('../views/CarManage/CarMonitor.vue')
            },
        ]
    },

    {
        path: '/array/test',
        name: 'array',
        meta: {
            title: '数组',
            show: true,
            icon: 'location'
        },
        component: () => import('../components/Array/array.vue')
    },
    {
        path: '/wangeditor',
        name: 'wangeditor',
        meta: {
            title: '富文本编辑',
            show: true,
            icon: 'location'
        },
        component: () => import('../utils/editorTool/wang-editor.vue')
    }
]
export default routes