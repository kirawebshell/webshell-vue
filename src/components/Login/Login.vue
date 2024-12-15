<template>
    <div class="login">
      <el-form>
        <el-form-item>
            <el-input v-model.trim="username" type="text" placeholder="请输入用户名/邮箱/手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model.trim="password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
            <el-button type="primary" size="large" @click="goEcharts">登陆</el-button>
      </el-form>
    </div>
</template>


<script>
import main from '@/views/MainPage/MainPage.vue'
import { useRouter  } from "vue-router"
import { ref } from 'vue';
import {
  Check,
  Delete,
  Edit,
  Message,  
  Search,
  Star,
} from '@element-plus/icons-vue'


export default {
    name: 'main',
    components: [
        
    ],
    setup() {
        const router = useRouter ()
        const username = ref('')
        const password = ref('')

        const goEcharts = () =>{
            router.push( { path: '/main' } );
        }
        return {
        goEcharts,
        username,
        password
        };
    
    }   

}
</script>
<style lang="css" scoped>
.login {
    width: 480px;
    max-width: 90%;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: var(--el-bg-color);
    margin-top: 10px;
}
</style>
