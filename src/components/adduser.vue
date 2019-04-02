<template>
  <div class='viplist'>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>账号列表</span>
          <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
        </div>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="user"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="realname"
            label="真实姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄"
            width="180">
          </el-table-column>
          <el-table-column
            prop="idType"
            label="证件号码">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" type="text" size="small">修改</el-button>
              <el-button @click="handleDelete(scope.row)"  type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      tableData: []
    }
  },
  computed: {
    ...mapGetters([
      'vipUser'
    ])
  },
  methods: {
    ...mapActions({
      getUserlist: 'GET_USERINFO'
    })
  },
  created () {
    this.getUserlist().then(res => {
      console.log(this.vipUser)
      this.tableData = this.vipUser
    })
  }
}
</script>
<style>
.viplist{
  text-align: left;
}
</style>
