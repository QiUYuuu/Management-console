<template>
    <div>
      <el-input style="width: 200px" v-model="search" type="text" placeholder="搜索学号/姓名"></el-input>
      <el-table
        :data="userFilter"
        border
        style="width: 100%;text-align: center">
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="Student_ID"
          fixed="left"
          label="学号"
          width="160">
        </el-table-column>
        <el-table-column
          prop="sex"
          fixed="left"
          label="性别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="age"
          fixed="left"
          label="年龄"
          width="120">
        </el-table-column>
        <el-table-column
          prop="college"
          fixed="left"
          label="学院"
          width="120">
        </el-table-column>
        <el-table-column
          prop="major"
          fixed="left"
          label="科系"
          width="120">
        </el-table-column>
        <el-table-column
          prop="_class"
          fixed="left"
          label="班级"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="left"
          label="操作"
          width="158">
          <template slot-scope="scope">
            <!--<el-button icon="el-icon-search" @click="detailsClick(scope.row)" circle></el-button>-->
            <!--<el-button icon="el-icon-search" circle @click="detailsClick(scope.row);dialogTableVisible = true "></el-button>-->
            <el-button type="primary" @click="editClick(scope.row);dialogTableVisible = true " icon="el-icon-edit" circle></el-button>
            <el-dialog title="修改信息" :modal="false" :visible.sync="dialogTableVisible">
              <div style="margin: 20px;"></div>
                <form>
                  <ul>
                    <li>姓名：<input v-model="userDetail.name" type="text"></li>
                    <li>学号：<input v-model="userDetail.Student_ID" type="text"></li>
                    <li>年龄：<input v-model="userDetail.age" type="text"></li>
                    <li>性别：<input v-model="userDetail.sex" type="text"></li>
                    <li>电话：<input v-model="userDetail.phone" type="text"></li>
                    <li>民族：<input v-model="userDetail.nation" type="text"></li>
                    <li>身份证号：<input v-model="userDetail.ID_number" type="text"></li>
                    <li>宿舍住址：<input v-model="userDetail.address" type="text"></li>
                    <li>学院：<input v-model="userDetail.college" type="text"></li>
                    <li>专业：<input v-model="userDetail.major" type="text"></li>
                    <li>班级：<input v-model="userDetail._class" type="text"></li>
                    <li>职位：<input v-model="userDetail.position" type="text"></li>
                    <li>政治面貌：<input v-model="userDetail.Political_outlook" type="text"></li>
                    <li>等级：<input v-model="userDetail.grade" type="number"></li>
                  </ul>
                  <el-button @click="updateInfo" type="primary" >确定</el-button>
                </form>
            </el-dialog>
            <!--<el-button type="primary" @click="editClick(scope.row)" icon="el-icon-edit" circle></el-button>-->
            <el-button type="danger" @click="deleteClick(scope.row);"icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          background
          @current-change="currentChange"
          @next-click="nextClick"
          @prev-click="prevClick"
        :total="count">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    import Alert from '../Alert'
    export default {
        name: "Users",
        data() {
            return {
                UserInfo: [],
                page: 1,
                limit: 10,
                count: 0,
                alert: "",
                search: "",
                userDetail: {},
                dialogTableVisible: false,
            }
        },
        computed: {
          userFilter:function(){
            return this.UserInfo.filter((user) =>{
              return user.name.match(this.search) || user.Student_ID.match(this.search);
            })
          }
        },
        components: {
            Alert
        },
        methods: {
            fetchInfo() {
                this.$ajax({
                    method: "get",
                    url: "http://localhost:2222/users",
                    params: {
                        limit: this.limit,
                        page: this.page < 0 ? 1 : this.page
                    }
                }).then(res => {
                    if(res.data.code === 200){
                      console.log(res);
                      this.UserInfo = res.data.data;
                      this.count = res.data.count;
                    }
                })
            },
            //编辑操作
            editClick(row){
              this.$ajax({
                method: "get",
                url: "http://localhost:2222/users/details",
                params: {
                  Student_ID: row.Student_ID
                }
              }).then(res => {
                console.log(res);
                if(res.data.code === 200){
                  this.userDetail= res.data.data;
                }
              });
              console.log(row);
            },
            updateInfo(e) {
            console.log(this.UserInfo);
            let newuser = this.userDetail;
            this.$ajax({
              method: "post",
              url: "http://localhost:2222/users/edit",
              data: {
                id: this.userDetail._id,
                user: newuser
              }
            }).then(res => {
              if (res.data.code === 200) {
                this.dialogTableVisible = false;
              }
            });
            e.preventDefault();
          },
          //删除操作
            deleteClick(row,e) {

              this.$confirm('此操作将删除用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$ajax({
                  method: "get",
                  url: "http://localhost:2222/users/del",
                  params: {
                    id: row._id
                  }
                }).then(res => {
                  if (res.data.code === 200) {
                    this.alert = res.data.msg;
                    console.log(111);
                  }
                  e.preventDefault();
                });
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });
              });
            },
            //页数改变时会触发
            currentChange(val){
              this.$ajax({
                method: "get",
                url: "http://localhost:2222/users",
                params: {
                  limit: this.limit,
                  page: val
                }
              }).then(res => {
                if(res.data.code === 200){
                  console.log(res);
                  this.UserInfo = res.data.data;
                  this.count = res.data.count;
                }
              });
                console.log(val);
            },
            //用户点击下一页按钮改变当前页后触发
            nextClick(val){
              this.$ajax({
                method: "get",
                url: "http://localhost:2222/users",
                params: {
                  limit: this.limit,
                  page: val
                }
              }).then(res => {
                if(res.data.code === 200){
                  console.log(res);
                  this.UserInfo = res.data.data;
                  this.count = res.data.count;
                }
              });
                console.log(val);
            },
            //用户点击上一页按钮改变当前页后触发
            prevClick(val){
              this.$ajax({
                method: "get",
                url: "http://localhost:2222/users",
                params: {
                  limit: this.limit,
                  page: val
                }
              }).then(res => {
                if(res.data.code === 200){
                  console.log(res);
                  this.UserInfo = res.data.data;
                  this.count = res.data.count;
                }
              });
                console.log(val);
            }
        },
        created() {
            this.fetchInfo();
        }
    }

</script>

<style scoped>
    tr,
    th {
        text-align: center;
        line-height: 48px;
    }
</style>
