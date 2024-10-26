<template>
    <!-- 车辆档案 -->
    <div class="record">
        <h1>车辆档案</h1>
        <el-button @click="reverseSelect">反选</el-button>
        <el-button @click="clearSelect">清除</el-button>
        <ComTable ref="tableRef" :tableTitle="tableTitle" :tableData="tableData"
            @toggleInverseSelection="toggleInverseSelection" @handleClearSelection="handleClearSelection"
            @handleSelectionChange="handleSelectionChange" />
    </div>
</template>
<script setup>
import ComTable from '@/components/ComTable.vue';
import { ref } from 'vue';
const tableRef = ref()
const allArr = ref([])
const reverseSelect = (val) => {
    console.log('sadsad', allArr.value);

    tableRef.value.toggleInverseSelection(allArr.value)
    // toggleInverseSelection(allArr.value)

}
const clearSelect = (val) => {
    // console.log('sadsad', allArr.value);

    tableRef.value.handleClearSelection(allArr.value)
    // toggleInverseSelection(allArr.value)

}
const handleSelectionChange = (val) => {
    console.log('勾选', val);
    allArr.value = val.value

}
const toggleInverseSelection = (val) => {
    console.log('反选21332131', val);
    // allArr.value = val

}
const handleClearSelection = (val) => {
    console.log('清除', val);
    // allArr.value = val

}

const tableTitle = ref([
    { prop: 'name', label: '姓名' },
    { prop: 'age', label: '年龄' },
    { prop: 'gender', label: '性别' },
    { prop: 'address', label: '住址' },
])
const tableData = ref([
    { name: 'zs1', age: 18, gender: '男', address: '上海' },
    { name: 'zs2', age: 18, gender: '男', address: '上海' },
    { name: 'zs3', age: 18, gender: '男', address: '上海' },
    { name: 'zs4', age: 18, gender: '男', address: '上海' },
])
</script>