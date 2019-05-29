<template>
    <!--注册界面-添加用户  此界面仅管理员可用-->
    <div id="reg">
        <form @submit="reg">
            <div class="form-group">
                <label for="exampleInputEmail1">学生姓名</label>
                <input type="text" v-model="User.name" class="form-control" id="exampleInputEmail1" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" v-model="User.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="exampleInputStudent_ID">学号</label>
                <input type="text" v-model="User.Student_ID" class="form-control" id="exampleInputStudent_ID" placeholder="Student_ID">
            </div>
            <div class="form-group">
                <label for="exampleInputage">年龄</label>
                <input type="text" v-model="User.age" class="form-control" id="exampleInputage" placeholder="age">
            </div>
            <div class="form-group">
                <label for="exampleInputnation">民族</label>
                <input type="text" v-model="User.nation" class="form-control" id="exampleInputnation" placeholder="nation">
            </div>
            <div class="form-group">
                <label for="exampleInputsex">性别</label>
                <input type="text" v-model="User.sex" class="form-control" id="exampleInputsex" placeholder="sex">
            </div>
            <div class="form-group">
                <label for="exampleInputphone">电话</label>
                <input type="text" v-model="User.phone" class="form-control" id="exampleInputphone" placeholder="phone">
            </div>
            <div class="form-group">
                <label for="exampleInputaddress">宿舍地址</label>
                <input type="text" v-model="User.address" class="form-control" id="exampleInputaddress" placeholder="adress">
            </div>
            <div class="form-group">
                <label for="exampleInputID_number">身份证号</label>
                <input type="text" v-model="User.ID_number" class="form-control" id="exampleInputID_number" placeholder="ID_number">
            </div>
            <div class="form-group">
                <label for="exampleInputcollege">学院</label>
                <input type="text" v-model="User.college" class="form-control" id="exampleInputcollege" placeholder="college">
            </div>
            <div class="form-group">
                <label for="exampleInputmajor">科系</label>
                <input type="text" v-model="User.major" class="form-control" id="exampleInputmajor" placeholder="major">
            </div>
            <div class="form-group">
                <label for="exampleInput_class">班级</label>
                <input type="text" v-model="User._class" class="form-control" id="exampleInput_class" placeholder="class">
            </div>
            <div class="form-group">
                <label for="exampleInputposition">职位</label>
                <input type="text" v-model="User.position" class="form-control" id="exampleInputposition" placeholder="position">
            </div>
            <div class="form-group">
                <label for="exampleInputPolitical_outlook">政治面貌</label>
                <input type="text" v-model="User.Political_outlook" class="form-control" id="exampleInputPolitical_outlook" placeholder="政治面貌">
            </div>
            <div class="form-group">
                <label for="exampleInputgrade">等级</label>
                <input type="text" v-model="User.grade" class="form-control" id="exampleInputgrade" placeholder="等级">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
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
            reg(e) {
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
                    })
                    .then(res => {
                        console.log(res);
                        if (res.data.code === 200) {
                            this.$router.push({
                                path: "/index",
                                query: {
                                    alert: res.data.msg
                                }
                            });
                        }
                        this.alert = res.data.msg;
                    });
                e.preventDefault();
            }
        }
    }

</script>

<style scoped>
    #reg {
        position: relative;
        height: 400px;
    }

    div.form-group {
        width: 400px;
        float: left;
    }

    button {
        position: absolute;
        left: 0;
        bottom: 0;
    }

</style>
