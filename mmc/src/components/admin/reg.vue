<template>
    <!--注册界面-添加用户  此界面仅管理员可用-->
    <div id="reg">
      <el-form :inline="true" :model="User" class="demo-form-inline">
        <el-form-item label="学生姓名">
          <el-input v-model="User.name" placeholder="学生姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="User.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="User.Student_ID" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="User.age" placeholder="年龄"></el-input>
        </el-form-item>
        <el-form-item label="民族">
          <el-input v-model="User.nation" placeholder="民族"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="User.sex" placeholder="性别"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="User.phone" placeholder="电话"></el-input>
        </el-form-item>
        <el-form-item label="宿舍地址">
          <el-input v-model="User.address" placeholder="宿舍地址"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="User.ID_number placeholder="身份证号"></el-input>
        </el-form-item>
        <el-form-item label="学院">
          <el-input v-model="User.college" placeholder="学院"></el-input>
        </el-form-item>
        <el-form-item label="科系">
          <el-input v-model="User.major" placeholder="科系"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="User._class" placeholder="班级"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="User.position" placeholder="职位"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌">
          <el-input v-model="User.Political_outlook" placeholder="政治面貌"></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-input v-model="User.grade" placeholder="等级"></el-input>
        </el-form-item>
        <el-button type="primary" @click.prevent="reg">提交</el-button>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "reg",
        data() {
            return {
                User: {}
            }
        },
        methods: {
            reg() {
                let newUser = {
                    name: this.User.name,
                    password: this.User.password,
                    Student_ID: this.User.Student_ID,
                    age: this.User.age,
                    nation: this.User.nation,
                    sex: this.User.sex,
                    phone: this.User.phone,
                    address: this.User.address,
                    ID_number: this.User.ID_number,
                    college: this.User.college,
                    major: this.User.major,
                    _class: this.User._class,
                    position: this.User.position,
                    Political_outlook: this.User.Political_outlook,
                    grade: this.User.grade,
                };
                this.$ajax({
                        method: "post",
                        url: "http://localhost:2222/reg",
                        data: newUser
                    }).then(res => {
                        console.log(res);
                        if (res.data.code === 200) {
                            this.$router.push({
                                path: "/index",
                                query: {
                                    alert: res.data.msg
                                }
                            });
                        }
                    });
            }
        }
    }

</script>

<style scoped>
    #reg {
        position: relative;
        height: 400px;
    }

    button {
        position: absolute;
        left: 0;
        bottom: 0;
    }

</style>
