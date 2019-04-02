
<template>
  <div class="login">

    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" status-icon  label-width="100px">
      <h1 class="title">Vuexms登录</h1>
      <el-form-item label="账号" prop="user">
        <el-input type="text" v-model="ruleForm2.user"  autocomplete="off" placeholder="admin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="123"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import mapState from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      ruleForm2: {
        pass: '',
        user: ''
      },
      rules2: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this
          // alert('submit!')
          // console.log(this.$refs[formName])
          this.axios.post('api/checklogin', {
            user: _this.ruleForm2.user,
            pass: _this.ruleForm2.pass
          }).then(response => {
            console.log(response)
            if (response) {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.$router.push('/')
              this.$store.commit('SAVE_USERINFO', response.data)
            } else {
              this.$message({
                message: '登录失败',
                type: 'warning'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body,#app{
  margin:0;
  padding:0;
}
html, body, #app, .login{
  height:100vh;
}
.login{
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form{
  width:400px;
  border:1px solid #ccc;
  padding:50px 50px 10px 0px;
  border-radius: 5px;

}
.el-form .title{
font-size:26px;
font-weight: bold;
color:#606266;
}
</style>
