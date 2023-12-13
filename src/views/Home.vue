<template>
  <div class="home">
    
    
    <div class="sidebar">
      <div class="logo">
        <span>新能源汽车</span>
      </div>
    <el-menu
      background-color="#001529"
      text-color="white"
      active-text-color="aqua"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
    >
     <Menu :menuList="menuStore.menuRoutes"></Menu> 
    </el-menu>
    </div>
    <div class="navbar">
      <div class="switch" @click="handleSwitch" >
      <el-icon :size="40" >
        <Fold v-if="!toggleStore.isCollapse" />
        <Expand v-else />
      </el-icon>
    </div>
    </div>
  </div>
</template>

<script >
// @ is an alias to /src
import { ref } from "vue";
import useMenuStore from '@/store/modules/menu';
import useToggleCollapse from '@/store/modules/menuToggle'
import Menu from '@/components/menu/menu.vue';
export default {
  name: "Home",
  components: {Menu},
  setup() {
    let menuStore = useMenuStore()
    const toggleStore = useToggleCollapse()
    // const {isCollapse} = toggleStore
    const handleSwitch=()=>{
      toggleStore.$patch({
        isCollapse: !toggleStore.isCollapse
      })
    }
    return {
      menuStore,
      handleSwitch,
      toggleStore
    };
  },
};
</script>
<style scoped>
.home{
  height: 100%;
  display: flex;
}
.navbar{
  position: relative;
  width: 100%;
  height: 50px;
}
.sidebar{
  height: 100%;
}
.logo{
  width: 200px;
  line-height: 50px;
}
.switch{
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
}
.el-menu{
  height: calc(100%-50px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
  height: calc(100% - 50px) 
  }
</style>