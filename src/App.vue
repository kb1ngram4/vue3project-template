<template>
  <div class="common-layout">
    <!-- 菜单 -->
    <el-container v-if="state.showMenu">
      <!-- side -->
      <el-aside :width="toggleStore.isCollapse?'60px':'200px'" :class="toggleStore.isCollapse?'.el-side-c':'el-side-o'">
        <div class="logo" v-if="!toggleStore.isCollapse">
          <img :src="logo" alt="" class="logo-img" >
          <span>新能源汽车</span>
        </div>
        <div v-else class="unlogo" >
          <img :src="logo" alt="" class="logo-img" >
        </div>
        <!-- 菜单 -->
        <el-menu
          background-color="#001529"
          text-color="white"
          active-text-color="aqua"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :collapse="toggleStore.isCollapse"
          unique-opened
        >
          <Menu :menuList="menuStore.menuRoutes"></Menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="navbar" height="50px" >
          <div class="switch" @click="handleSwitch">
          <el-icon :size="30">
            <Fold v-if="!toggleStore.isCollapse" />
            <Expand v-else />
          </el-icon>
        </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <!-- 登录页 -->
    <el-container v-else>
      <el-main>
          <router-view />
        </el-main>
    </el-container>
  </div>
</template>
<script setup>
import useMenuStore from "@/store/modules/menu";
import useToggleCollapse from "@/store/modules/menuToggle";
import Menu from "@/components/menu/menu.vue";
import {reactive} from 'vue'
import logo from '@/assets/logo.png'
import router from "./router";
let menuStore = useMenuStore();
const toggleStore = useToggleCollapse();
// const {isCollapse} = toggleStore
let white = ['/login']
let state = reactive({
  showMenu:true
})
router.afterEach((to,from)=>{
  console.log(to.path);
  state.showMenu = !white.includes(to.path)
  console.log('stateshowmenu',state.showMenu);
})
const handleSwitch = () => {
  toggleStore.$patch({
    isCollapse: !toggleStore.isCollapse,
  });
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.common-layout{
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-side-c{
  width: 60px;
  transition: 1s;
}
.el-side-o{
  width: 200px;
  transition: 1s;
}
.logo {
  width: 200px;
  line-height: 50px;
  background: #001529;
  color: #fff;
}
.unlogo {
  width: 60px;
  line-height: 50px;
  background: #001529;
  color: #fff;
}
.logo-img{
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.el-menu {
  height: calc(100%-50px);
  border-right: none !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100% - 50px);
}
.el-menu--collapse {
  height: calc(100% - 50px);
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: relative;
  width: 100%;
  height: 50px;
  background: #a0cfff;
}
.switch {
  position: absolute;
  left: 0;
  top: 10px;
  width: 50px;
  height: 50px;
}
.content {
  height: 100%;
}
</style>
