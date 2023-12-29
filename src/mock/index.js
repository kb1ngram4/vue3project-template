import Mock from "mockjs";

Mock.mock('/getData','get',{
    status:200,
    data:{
        dataList:[1,2,3,4,5]
    }
})

// mock登录
Mock.mock('/api/login','post',(options)=>{
    // 用户池
    const userpools = [
        { username: 'laoc', password: 123456 },
        { username: 'xchen', password: 123456 },
        { username: 'admin', password: 123456 },
        { username: 'lucy', password: 123456 },
        
    ]
    const {username,password}  = JSON.parse(options.body)
    // 判断用户名是否一致
    const user = userpools.filter(item=>item.username == username)
    if(user.length>0){
        if(user[0].password ==password){
            return {
                code:200,
                data:{
                    msg:'登录成功'
                }
            }
        }else{
            return {
                code:-1,
                data:{
                    msg:'密码错误'
                }
            }
        }
    }else{
        return {
            code:-1,
            data:{
                msg:'用户不存在'
            }
        }
    }
    
})
const data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'user_id|100-200': 1,
        'mobile':/^1(3|4|5|6|7|8|9)\d{9}$/,
        'email':'@email("gmail.com")',
        'status|1': true, // 状态
        'username': '@cname', // 名称
        'address': '@county(true)',
        'avatar': "@image('150x150', '#4A7BF7', 'img', 'png', 'user')",  // 头像
        'create_time': '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
    }]
});
const userlList = require('./data').default.list;

/**
 * 获取用户列表
 */
Mock.mock("/api/user",'get',(ctx)=>{
    console.log('ctx',ctx,userlList);
    return{
        code:200,
        data:userlList
    }
    // ctx.body = {code:200,message:"success",data:userlList}
    
});