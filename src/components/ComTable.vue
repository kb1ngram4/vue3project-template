<template>
    <el-table ref="multipleTableRef" :data="tableData" border style="width:100%"
        header-row-class-name="table-header-class" @selection-change="handleSelectionChange">
        <el-table-column :align="'center'" type="selection" width="50" v-if="selected" />
        <el-table-column :align="'center'" type="index" label="序号" width="55" v-if="indexd" />
        <el-table-column v-for="item in tableTitle" :prop="item.prop" :label="item.label"
            :align="'center'"></el-table-column>

        <el-table-column fixed="right" align="center" label="操作" width="210">
            <template #default="scope">
                <el-button v-for="_item, _index in props.operation" :key="_index" :type="_item.type" :size="_item.size"
                    @click="handleC(_item, scope.row)">{{ _item.name }}</el-button>
            </template>
        </el-table-column>

        <template #empty>
            <div>
                暂无数据
            </div>
        </template>
    </el-table>
    <!-- <div class="page">
        <el-pagination :current-page="pageNum" :page-size="size" background :page-sizes="[5, 10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div> -->
</template>
<script setup>
// const props = defineProps(['tableData','tableTitle','operation'])
import { ref, defineEmits, defineProps, defineExpose } from 'vue'
const emit = defineEmits(['pagerFresh', 'submit', 'handleClearSelection', 'toggleInverseSelection', 'handleSelectionChange'])
const props = defineProps({
    tableData: {
        type: Array,
        default: []
    },
    tableTitle: {
        type: Array,
        default: [],
    },
    operation: {
        type: Array,
        default: []
    },
    selected: {
        type: Boolean,
        default: true
    },
    indexd: {
        type: Boolean,
        default: true
    },
    total: {
        type: Number,
        default: 10
    },
    size: {
        type: Number,
        default: 5,
    },
    pageNum: {
        type: Number,
        default: 1
    }

})
const tableData = props.tableData
// const tableTitle = props.tableTitle
// const pageNum = props.pageNum
// const size = props.size
// console.log(pageNum, size);

const handleC = () => { }



const multipleSelection = ref([])
const multipleTableRef = ref()
const notIncludedArray = ref([])
let submitArr = ref([])
const handleSelectionChange = (val) => {
    console.log(val);

    console.log(val, tableData);

    multipleSelection.value = val
    submitArr.value = val
    notIncludedArray.value = tableData.filter(item => !val.includes(item))
    emit('handleSelectionChange', notIncludedArray)

}
//  反选
const toggleInverseSelection = (rows) => {
    console.log('rows', rows);

    multipleTableRef.value.clearSelection()
    if (rows) {
        rows.forEach((row) => {
            multipleTableRef.value.toggleRowSelection(row, undefined)

        })
        submitArr.value = rows

    } else {
        multipleTableRef.value.clearSelection()
    }
    emit('toggleInverseSelection', submitArr)
}
// 清除
const handleClearSelection = () => {
    multipleTableRef.value.clearSelection()
    console.log(multipleSelection);

}
defineExpose({
    handleSelectionChange, toggleInverseSelection, handleClearSelection
})
// let queryParams = ref({ pageNum, size })

// 分页器处理函数
// 单页数据条数改变
function handleSizeChange(ev) {
    queryParams.value.size = ev;
    emit('pagerFresh', JSON.parse(JSON.stringify(queryParams.value)))
}
// 页数改变
function handleCurrentChange(ev) {
    queryParams.value.pageNum = ev;
    emit('pagerFresh', JSON.parse(JSON.stringify(queryParams.value)))
}
</script>
<style lang="scss" scoped>
.page {

    display: flex;
    justify-content: center;
    margin: 20px 0px;
}

:deep(.table-header-class) th {
    background-color: #f7fbfe;
    color: #000;
}

/* row */
.el-table :deep(.el-table__cell) {
    padding: 2px 0;
}
</style>