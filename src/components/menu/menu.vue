<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="item.meta.show" @click="goRoute">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多个子路由 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 递归展示子路由 -->
      <!-- <Menu :menuList="item.children"></Menu> -->
      <el-menu-item-group>
        <template v-for="_item in item.children" :key="_item.path" >
          <el-menu-item :index="_item.path" @click="goRoute">
            <el-icon>
              <component :is="_item.meta.icon"></component>
            </el-icon>
            <template #title>
              <span>{{_item.meta.title}}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu-item-group>
    </el-sub-menu>
  </template>
</template>



<script setup >
// defineProps({
//     menuList:{
//         type:Array,
//         default:[]
//     }
// })
import {useRouter} from 'vue-router'
defineProps(["menuList"]);
let $router = useRouter()
const goRoute = (vc) => {
  console.log('123',vc);
  $router.push(vc.index)
}
</script>
