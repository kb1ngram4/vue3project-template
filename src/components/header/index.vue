<template>
  <div class="content-header">
    <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item
        :to="{ path: item.path }"
        v-for="item,index in breadList"
        :key="item.path"
      >
        <!-- {{ item.meta.title }} -->
        <span v-if="index == breadList.length - 1">{{ item.meta.title }}</span>
        <router-link v-else :to="item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="info" v-for="item in obj" :key="item.id">
      <!-- {{info[0].username}} -->
      <div>{{item.user_name}}</div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";
import { getUser } from "@/api/user";
import { onMounted, reactive } from "vue";

// @ is an alias to /src
const info = reactive({})
const obj = ref([])
 onMounted(()=>{
  console.log('onmounted');
  getUser({
    method:'get',
        url:'/api/user',
  }).then((res)=>{
    obj.value = res.data
    console.log('info',res,info,obj);

  })
})
// 当前路由
const route = useRoute();
const breadList = computed(() => {
  return route.matched;
});
</script>
<style scoped>
.content-header {
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
}
</style>