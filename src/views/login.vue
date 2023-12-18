<template>
    <div class="login" @click="handleClick">登录</div>
</template>
<script setup>
function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
const handleClick=()=>{
localSet('login_token','dsakldasd')
window.location.href = '/'
}
</script>