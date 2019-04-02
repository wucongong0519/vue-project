<template>
  <div class="userlist">
    <!-- <el-main> -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>账号列表</span>
          <el-button @click="handleEdit" style="float: right; padding: 3px 0" type="text">添加</el-button>
        </div>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="user"
            label="账号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="realname"
            label="真实姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄">
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
              <template>
                <el-popover
                  trigger='click'
                  placement="top"
                  v-model="visible2">
                  <p>确定要删除用户？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
                  </div>
                  <el-button slot="reference" @click="visible2 = !visible2">删除</el-button>
                </el-popover>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    <!-- </el-main> -->
    <el-dialog title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" :label-width="formLabelWidth">
          <el-input v-model="form.realname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="证件号码" :label-width="formLabelWidth">
          <el-input v-model="form.idType" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
  data () {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        user: '',
        realname: '',
        age: '',
        idType: ''
      },
      title: '',
      formLabelWidth: '120px',
      visible2: false
    }
  },
  computed: {
    ...mapState({
      userlist: state => state.userlist
    })
  },
  created () {
    this.getUserlist().then(res => {
      // console.log(res)
      this.tableData = this.userlist
    })
  },
  methods: {
    ...mapActions({
      getUserlist: 'GET_USERINFO'
    }),
    handleEdit (id) {
      console.log(id)
      if (id) {
        this.dialogFormVisible = true
        this.form = id
        this.title = '修改用户'
      } else {
        this.dialogFormVisible = true
        this.form = {}
        this.title = '添加用户'
      }
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
