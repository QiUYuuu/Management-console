<template>
    <!--登录界面-->
    <div>
        <div id="particles-js"></div>

        <div class="content text-md-center">
            <div id="login">
                <h1>阿里西信息管理控制平台</h1>
                <Alert :message="alert" v-show="alert"></Alert>
                <div id="container">
                    <form @submit="submit">
                        <div class="input-group">
                            <span class="input-group-addon" id="sizing-addon2">学号</span>
                            <input v-model="user.Student_ID" type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon" id="sizing-addon">密码</span>
                            <input v-model="user.password" type="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon2">
                        </div>
                        <button type="submit" id="btn" class="btn btn-primary btn-block">登录</button>
                    </form>
                </div>
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
                user: {},
                alert: ""
            }
        },
        methods: {
            submit(e) {
                let newUser = {
                    Student_ID: this.user.Student_ID,
                    password: this.user.password
                };
                this.$ajax({
                        method: "post",
                        url: "http://localhost:2222/login",
                        data: newUser
                    })
                    .then(res => {
                        if (res.data.code === 200) {
                            console.log(res);
                            this.addToken(res.data.token);
                            this.$router.push({
                                path: "/index"
                            });
                            //this.refresh();
                        }
                        this.alert = res.data.msg;
                    });
                e.preventDefault();
            },
            addToken: function(amount) {
                this.$store.dispatch("addToken", amount);
            },
            refresh() {
                this.$router.go(0);
            }
        },
        components: {
            Alert
        }
    }

</script>


<style>
    @import "../../../static/css/stylesheet.css";

    html,
    body {
        height: 100%;
        overflow: hidden;
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

    #login #container {
        position: absolute;
        left: 0;
        right: 0;
        top: 230px;
        width: 430px;
        height: 200px;
        margin: auto;
        /*background-color:powderblue;*/
    }

    .input-group {
        margin: 25px;
    }

    #btn {
        width: 380px;
        margin: 0 auto;
    }

</style>
