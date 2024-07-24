<template>
  <el-form
    :model="form"
    :rules="rules"
    label-position="right"
    label-width="auto"
    ref="ruleRef"
    style="max-width: 600px"
    class="demo-ruleForm"
  >
    <el-form-item label="活动名称：" prop="activityName">
      <el-input
        v-model="form.activityName"
        placeholder="请输入活动名称"
      ></el-input>
    </el-form-item>
    <el-form-item label="活动区域：" prop="activityZone">
      <el-select v-model="form.activityZone" placeholder="请输入活动区域">
        <el-option label="上海" value="1"></el-option>
        <el-option label="北京" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间：" required>
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          value-format="YYYY-MM-DD"
          format="YYYY-MM-DD"
          style="width: 100%"
          placeholder="选择日期"
        ></el-date-picker>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-date-picker
          v-model="form.date2"
          style="width: 100%"
          type="datetime"
          value-format=""
          placeholder="选择时间"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="及时发货：">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动类型：" prop="type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox value="1" name="type">线上活动</el-checkbox>
        <el-checkbox value="2">线下活动</el-checkbox>
        <el-checkbox value="3">促销活动</el-checkbox>
        <el-checkbox value="4">普通活动</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="资源：" prop="resource">
      <el-radio-group v-model="form.resource">
        <el-radio value="1">Sponsor</el-radio>
        <el-radio value="2">Venue</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动描述：" prop="desc">
      <el-input v-model="form.desc" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <div>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { reactive, ref } from "vue";
const props = defineProps(['title'])
console.log(props.title,'props');
const form = reactive({
  activityName: "",
  activityZone: "",
  date1: "2024-07-22",
  date2: "",
  delivery: true,
  type: ["1", "2"],
  resource: "1",
  desc: "",
});
const rules = reactive({
  activityName: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "字符长度3-5位", trigger: "blur" },
  ],
  activityZone: [{ required: true, message: "请选择区域", trigger: "change" }],
  date1: [
    { type: "date", required: true, message: "请选择日期", trigger: "change" },
  ],
  date2: [
    { type: "date", required: true, message: "请选择时间", trigger: "change" },
  ],
  type: [
    { type: "array", required: true, message: "请选择类型", trigger: "change" },
  ],
  desc: [
    {
      required: true,
      message: "请输入活动描述",
      trigger: "blur",
    },
  ],
});
const ruleRef = ref(null);
const onSubmit = () => {
  ruleRef.value.validate(async (valid, fields) => {
    if (valid) {
      console.log("valid");
    } else {
      console.log("error");
    }
  });
  console.log(form);
};
</script>