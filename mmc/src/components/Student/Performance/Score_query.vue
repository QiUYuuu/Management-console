<template>
  <div>
    <h1>成绩查询</h1>
    <div id="users">
      <el-input style="width: 200px" v-model="search" type="text" placeholder="搜索"></el-input>
      <el-table
        :data="ScoreFilter"
        border
        style="width: 100%;text-align: center">
        <el-table-column
          fixed
          prop="ExaminationName"
          label="学科"
          width="150">
        </el-table-column>
        <el-table-column
          prop="score"
          fixed="left"
          label="成绩"
          width="160">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Score_query",
        data(){
              return {
                  allScore: [],
                  search: ""
              }
        },
        computed: {
          ScoreFilter:function(){
            return this.allScore.filter((score) =>{
              return score.ExaminationName.match(this.search);
            })
          }
        },
        methods: {
            getScore(){
              console.log(this.$store.getters.personalInfo);
              this.$ajax({
                method: "get",
                url: "http://localhost:2222/getAllScore",
                params: {
                  Student_ID: this.$store.getters.personalInfo.Student_ID
                }
              }).then( data => {
                console.log(data);
                if(data.data.code === 200){
                    this.allScore = data.data.data.scoreInfo;
                }
              })
            }
        },
      created(){
          this.getScore();
      }
    }
</script>

<style scoped>

</style>
