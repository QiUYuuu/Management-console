<template>
    <!--登录界面-->
    <div>
        <div id="particles-js"></div>
        <div class="content text-md-center">
            <div id="login">
                <h1>阿里西信息管理控制平台</h1>
                <Alert :message="alert" v-show="alert"></Alert>
                  <el-form status-icon label-width="100px" class="demo-ruleForm">
                    <el-form-item label="学号" prop="pass">
                      <el-input type="text" v-model="user.Student_ID"  placeholder="学号" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="checkPass">
                      <el-input type="password" v-model="user.password"  placeholder="密码" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button style="width: 100%" type="primary" @click.prevent="submit">提交</el-button>
                    </el-form-item>
                  </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import Alert from '../Alert'
    export default {
        name: "login",
        data() {
            return {
                user: {
                  Student_ID: "",
                  password: ""
                },
                alert: ""
            }
        },
        methods: {
            submit() {
                let newUser = {
                    Student_ID: this.user.Student_ID,
                    password: this.user.password
                };
                this.$ajax({
                        method: "post",
                        url: "http://localhost:2222/login",
                        data: newUser
                    }).then(res => {
                        if (res.data.code === 200) {
                            // console.log(res);
                            this.addToken(res.data.token);
                            this.$router.push({
                                path: "/index/hello"
                            });
                        }
                        this.alert = res.data.msg;
                    });
            },
            addToken: function(amount) {
                this.$store.dispatch("addToken", amount);
            }
        },
        components: {
            Alert
        }
    }

</script>


<style>
    html,
    body {
        height: 100%;
        overflow: hidden;
        margin: 0;
    }

    body>div {
        height: 100%;
    }

    #login {
        height: 100%;
        background-image: url(../../../static/img/bg.jpg);
        background-position: center;
    }

    h1 {
        width: 23%;
        position: absolute;
        left: 0;
        right: 0;
        top: 170px;
        margin: auto;
        color: #75361e;
    }

    .demo-ruleForm{
      width: 30%;
      margin-top: 250px;
      margin-left: 543px;
    }
</style>
