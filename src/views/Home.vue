<template>
  <div class="home">
    <Form :title="title"  />
  </div>
</template>

<script setup  >
import Form from '@/components/form.vue'
import { ref } from 'vue'
components:{
  Form
}
const title = ref('表单')
</script>
<style scoped>
</style>