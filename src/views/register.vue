<template>
  <div class="login">
    <div class="login-block">
      <el-row>
        <el-col>
          <div class="block-content">
            <div class="title">
              <h1>新能源汽车</h1>
            </div>
            <el-form>
              <el-form-item>
                <el-input size="large" v-model="form.username" placeholder="用户名" />
              </el-form-item>
              <el-form-item >
                <el-input size="large" v-model="form.auth" placeholder="验证码" class="auth-input" />
                <el-button type="primary" size="large" style="width:25%">发送</el-button>

              </el-form-item>
              <el-form-item>
                <el-input size="large" v-model="form.password" placeholder="密码" />
              </el-form-item>
              <el-form-item>
                <el-button size="large" class="btn d-pointer " type="primary" @click="onSubmit">
                  <el-icon style="vertical-align: middle">
                    <Right />
                  </el-icon>
                  <span>注册</span>
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <div class="login-footer clearfix">
        <span @click="goback" class="d-pointer" >返回登入</span>
        <!-- <el-divider direction="vertical"></el-divider> -->
        <span class="fr d-pointer ">
          <el-icon style="vertical-align: middle">
            <MoreFilled />
          </el-icon>
          简体中文
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "@/router";
import { reactive } from "vue";
function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
const form = reactive({
  username: "",
  password: "",
  auth: "",
});
const onSubmit = () => {
  console.log("注册");
  // localSet('login_token','dsakldasd')
  // window.location.href = '/'
};
const goback = () =>{
  console.log('返回登入');
  router.push('/login')
}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-block {
  width: 450px;
  /* height: 350px; */
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.5rem 2rem;
  background: #fff;
}
.block-content {
    padding: 1.5rem 1.5rem 0 1.5rem;
}
.title {
  font-size: 26px;
  text-align: center;
  margin-bottom: 1rem;
}
.el-form {
  /* padding: 0 1.5rem; */
  margin-bottom: 1.25rem;
}
:deep(.el-input__inner::placeholder){
  font-size: 16px;
  color: #6C757D;
}
:deep(.el-input__wrapper){
  background: #f0f3f8;
}
.auth-input{
  width: 72%;
  margin-right: 3%;
}
.el-input{
  border: 1px solid #f0f3f8;
}
.btn {
  display: block;
  width: 100%;
}
.login-footer {
  text-align: left;
  padding: 1rem 1.5rem;
  background: #f8f9fa!important;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.fr {
  float: right;
}
.d-pointer{
  cursor: pointer;
}
</style>