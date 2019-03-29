<template>
  <div class="userlist">
    <!-- <el-main> -->
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
    <!-- </el-main> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        id: 1,
        user: 'admin01',
        realname: '王小虎',
        idType: '111111111111'
      }, {
        id: 2,
        user: 'admin01',
        realname: '王小虎',
        idType: '111111111111'
      }, {
        id: 3,
        user: 'admin01',
        realname: '王小虎',
        idType: '111111111111'
      }, {
        id: 4,
        user: 'admin01',
        realname: '王小虎',
        idType: '111111111111'
      }]
    }
  },
  methods: {
    handleEdit (id) {
      console.log(id)
    },
    handleDelete (id) {
      console.log('删除' + id)
    }
  }
}
</script>
<style>
.userlist{
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
    clear: both
  }
</style>
