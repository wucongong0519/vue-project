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
                  :ref="`popover-${scope.$index}`"
                  class="popoverStyle"
                  >
                  <p>确定要删除用户？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="scope._self.$refs[`popover-${scope.$index}`].doClose()">取消</el-button>
                    <el-button type="primary" size="mini" @click="handlePopover(scope.row.visible,scope.$index)">确定</el-button>
                  </div>
                  <el-button slot="reference"  class="deleteBtn" @click="couponClick(scope.$index, scope.row)">删除</el-button>
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
      visible2: false,
      myPopover: 0
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
      let newlist = this.userlist.map(item => {
        item.visible = false
        return item
      })
      this.tableData = newlist
    })
  },
  methods: {
    ...mapActions({
      getUserlist: 'GET_USERINFO'
    }),
    handlePopover (visible, index) {
      // console.log(visible)
      // console.log(index)
      // console.log(this.userlist[index])
      // this.$set(this.userlist[index], visible, false)
      // console.log(this.userlist[index])
      // this.userlist[index].visible = !visible
      this.tableData.splice(index, 1)
    },
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
    couponClick (id, row) {
      console.log(id)
      console.log(row)
      this.myPopover = id
    },
    handleDelete (id) {
      console.log('删除' + id)
    }
  }
}
</script>
<style scoped>
.userlist{
  text-align: left !important;
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
  .deleteBtn{
  border:none !important;
  color:#409EFF !important;
  padding:0 !important;
  font-size: 12px;
  }
</style>
