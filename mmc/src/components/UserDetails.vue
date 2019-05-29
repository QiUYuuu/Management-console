<template>
    <div id="userdetails">
        <!--<index></index>-->
        <div id="userInfo">
            <table cellpadding="0" cellspacing="0" border="1">
                <tr>
                    <td width="64" height="33">姓名</td>
                    <td width="109">{{userInfo.name}}</td>
                    <td width="73">性别</td>
                    <td width="46">{{userInfo.sex}}</td>
                    <td width="112">民族</td>
                    <td width="159">{{userInfo.nation}}族</td>
                    <td width="154" rowspan="4">
                        <p><img src="" width="154" height="203" /></p>照片
                    </td>
                </tr>
                <tr>
                    <td height="31">年龄</td>
                    <td>{{userInfo.age}}</td>
                    <td>职务</td>
                    <td>{{userInfo.position}}</td>
                    <td>政治面貌</td>
                    <td>{{userInfo.Political_outlook}}</td>
                </tr>
                <tr>
                    <td height="31">学院</td>
                    <td>{{userInfo.college}}</td>
                    <td>专业</td>
                    <td>{{userInfo.major}}</td>
                    <td>班级</td>
                    <td>{{userInfo._class}}</td>
                </tr>
            </table>
            <!--<ul>-->
            <!--<li>{{userInfo.name}}</li>-->
            <!--<li>{{userInfo.Student_ID}}</li>-->
            <!--<li>{{userInfo.age}}</li>-->
            <!--<li>{{userInfo.sex}}</li>-->
            <!--<li>{{userInfo.nation}}</li>-->
            <!--<li>{{userInfo.phone}}</li>-->
            <!--<li>{{userInfo.address}}</li>-->
            <!--<li>{{userInfo.college}}</li>-->
            <!--<li>{{userInfo.major}}</li>-->
            <!--<li>{{userInfo._class}}班</li>-->
            <!--<li>{{userInfo.position}}</li>-->
            <!--<li>{{userInfo.Political_outlook}}</li>-->
            <!--</ul>-->
        </div>
    </div>
</template>

<script>
    import Index from './index'
    export default {
        name: "userdetails",
        data() {
            return {
                userInfo: {}
            }
        },
        methods: {
            fetchDetails() {
                this.$ajax({
                    method: "get",
                    url: "http://localhost:2222/users/details",
                    params: {
                        id: this.$route.query.id
                    }
                }).then(res => {
                    this.userInfo = res.data.data;
                })
            }
        },
        components: {
            index: Index
        },
        created() {
            this.fetchDetails();
        }
    }

</script>

<style scoped>
    #userInfo {
        width: 60%;
        height: 400px;
        margin: 10px auto;
    }

    tr,
    th,
    td {
        text-align: center;
    }

</style>
