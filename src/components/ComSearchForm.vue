<template>
    <div class="search-form-box">
        <el-form :inline="true" ref="searchFormRef" :model="searchForm">
            <el-row>
                <el-col v-for="item in sliceCodList" :key="item.id" :span="item.span">
                    <el-form-item :label="item.label + '：'" :prop="item.prop" class="flex-form-item">
                        <!-- 输入框 -->
                        <el-input v-if="item.type === 'input'" v-model="searchForm[item.prop]"
                            :placeholder="item.placeholder"></el-input>
                        <!-- 下拉框 -->
                        <el-select v-else-if="item.type === 'select'" v-model="searchForm[item.prop]"
                            :placeholder="item.placeholder">
                            <el-option v-for="op in item.optionList" :key="op.value" :label="op.label"
                                :value="op.value"></el-option>
                        </el-select>
                        <!-- 日期 -->
                        <el-date-picker v-else-if="item.type === 'daterange'" v-model="searchForm[item.prop]"
                            format="YYYY-MM-DD" value-format="YYYY-MM-DD" range-separator="至" unlink-panels
                            type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                        <!-- 时间 -->
                        <el-date-picker v-else-if="item.type === 'datetime'" format="YYYY-MM-DD HH:mm:ss"
                            value-format="YYYY-MM-DD HH:mm:ss" v-model="searchForm[item.prop]" type="datetime"
                            placeholder="请选择时间" style="width:100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="rSpanCount" class="el-col-wapper">
                    <el-form-item class="btn-group-item flex-end">
                        <el-button type="primary" @click="search">查询</el-button>
                        <el-button plain @click="reset">重置</el-button>
                        <el-button v-show="showFoldBtn" type="primary" @click="toggleFold">
                            {{ conditionFold ? '展开' : '收起' }}
                            <el-icon v-if="conditionFold">
                                <ArrowDown />
                            </el-icon>
                            <el-icon v-else>
                                <ArrowUp />
                            </el-icon>
                        </el-button>
                    </el-form-item>

                </el-col>
            </el-row>
        </el-form>
        <el-divider />
    </div>
</template>
<script lang="js" setup>
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { computed, reactive, ref, onMounted } from 'vue';
onMounted(() => {
    props.conditionList.forEach((item) => {
        searchForm[item.prop] = item.type === "datetimerange" ? [] : "";
    });
});

/**
 * conditionList:查询条件配置列表数据
 * updateTableList：获取表格数据的方法
 */
const props = defineProps(['conditionList', 'updateTableList'])
const searchForm = reactive({})
const searchFormRef = ref(null)

const initCon = 3
// 切换展开和收起查询条件
const conditionFold = ref(true)

const showFoldBtn = computed(() => {
    return props.conditionList.length > initCon
})
const toggleFold = () => {
    conditionFold.value = !conditionFold.value
}
const sliceCodList = computed(() => {
    return props.conditionList.slice(
        0,
        conditionFold.value ? initCon : props.conditionList.length
    );
});
const rSpanCount = computed(() => {
    let totalSpan = 0;
    if (initCon > 0) {
        if (!conditionFold.value) {
            totalSpan = props.conditionList.reduce((prev, next) => {
                return prev + next.span
            }, 0)
        } else {
            const sliceCondList = props.conditionList.slice(0, initCon);
            totalSpan = sliceCondList.reduce((prev, next) => {
                return prev + next.span
            }, 0)
        }
    } else {
        totalSpan = props.conditionList.reduce((prev, next) => {
            return prev + next.span
        }, 0)
    }
    
    return 24 - (totalSpan % 24);
})
const search = () => {
    props.updateTableList({
        pageNum: 1,
        size: 10,
        ...searchForm
    })
}
const reset = (form) => {
    console.log(form, searchFormRef);

    searchFormRef.value.resetFields()
    props.updateTableList({
        pageNum: 1,
        size: 10,
        ...searchForm
    })
}

</script>
<style lang="scss" scoped>
.search-form-box {
    box-sizing: border-box;

    box-shadow: var(--el-box-shadow-light);
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;  
    .el-divider--horizontal {
        margin: 10px 0;
    }

    .flex-form-item {
        display: flex;
    }

    .el-col-wapper {
        display: flex;

        .btn-group-item {
            display: flex;
            flex: 1;

            :deep(.el-form-item__content) {
                flex: 1;
                display: flex;
                align-items: center;
            }

            &.flex-end {
                :deep(.el-form-item__content) {
                    justify-content: flex-end;
                }
            }
        }

    }
}
</style>