import axios from "axios";
import {ElMessage} from 'element-plus'

//对axios二次封装
const requests = axios.create({
    baseURL:import.meta
}) 