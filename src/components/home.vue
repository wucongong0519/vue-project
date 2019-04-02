<template>
  <div class='home'>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户信息</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div v-for="(o,key) in userinfo" :key="o" class="text item">
        {{ key +":"+ o }}

      </div>
      <!-- <div>{{$store.state.userinfo}}</div> -->
    </el-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'userinfo'
    ])
  }
}
</script>
<style>
.home{
  text-align: left;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
</style>
