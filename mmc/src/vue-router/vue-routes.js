import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: __dirname,
  routes : [
    {path:"/",meta: {requireAuth: false},component:resolve => require(['../components/login'],resolve)},
    {path: "/login",meta: {requireAuth: false},component:resolve => require(['../components/login'],resolve)},
    {path:"/index",meta: {requireAuth: false},component: resolve => require(['../components/index'],resolve),children: [
        {path: "/index/hello",meta: {requireAuth: false},component: resolve => require(['../components/HelloWorld'],resolve)}
      ]
      //,children: [
        //{path: "/index/hello",meta: {requireAuth: false},component: resolve => require(['../components/HelloWorld'],resolve)}
        // {path: "/reg",meta: {requireAuth: false},component: resolve => require(['../components/admin/reg'],resolve)},
        // {path: "/users",meta: {requireAuth: false},component: resolve => require(['../components/admin/Users'],resolve)},
        // {path: "/users/details",meta: {requireAuth: false},component: resolve => require(['../components/UserDetails'],resolve)},
        // {path: "/information",meta: {requireAuth: false},component:resolve => require(['../components/Information_Center/Information_Center'],resolve),children:[
        //     {path: "/information/changeUserInfo",meta: {requireAuth: false},component: resolve => require(['../components/Information_Center/Personal_settings/changeUserInfo'],resolve)},
        //     {path: "/information/changePassword",meta: {requireAuth: false},component: resolve => require(['../components/Information_Center/Personal_settings/ChangePassword'],resolve)},
        //     {path: "/information/notice",meta: {requireAuth: false},component:resolve => require(['../components/Information_Center/Personal_settings/Notice'],resolve)},
        //     {path: "/information/Issued_notice",meta: {requireAuth: false},component:resolve => require(['../components/Information_Center/Announcement_message/Issued_notice'],resolve)},
        //     {path: "/information/Issued_message",meta: {requireAuth: false},component:resolve => require(['../components/Information_Center/Announcement_message/Issued_message'],resolve)},
        //     {path: "/information/Announcement_received",meta: {requireAuth: false},component:resolve => require(['../components/Information_Center/Announcement_message/Announcement_received'],resolve)},
        //     {path: "/information/Message_received",meta: {requireAuth: false},component:resolve => require(['../components/Information_Center/Announcement_message/Message_received'],resolve)}
        //   ]},
        // {path: "/training_Program",meta: {requireAuth: false},component: resolve => require(['../components/Training_Program/Training_Program'],resolve),children: [
        //     {path: "/training_Program/Comprehensive_query",meta: {requireAuth: false},component: resolve => require(['../components/Training_Program/Comprehensive_query'],resolve)}
        //   ]},
        // {path: "/educational",meta: {requireAuth: false},component: resolve => require(['../components/Educational/educational'],resolve),children: [
        //     {path: '/educational/Classroom_borrowing',meta: {requireAuth: false},component: resolve => require(['../components/Educational/Classroom_borrowing'],resolve)}
        //   ]},
        // {path: "/student",meta: {requireAuth: false},component: resolve => require(['../components/Student/student'],resolve),children: [
        //     {path: "/student/training_plan/general",meta: {requireAuth: false},component: resolve => require(['../components/Student/Training_plan/General_programme'],resolve)},
        //     {path: "/student/training_plan/profession",meta: {requireAuth: false},component: resolve => require(['../components/Student/Training_plan/Professional_Training_Program'],resolve)},
        //     {path: "/student/training_plan/schedule",meta: {requireAuth: false},component: resolve => require(['../components/Student/Training_plan/Schedule_of_teaching_process'],resolve)},
        //     {path: "/student/training_plan/teaching_plan",meta: {requireAuth: false},component: resolve => require(['../components/Student/Training_plan/Teaching_plan'],resolve)},
        //     {path: "/student/course/timetable",meta: {requireAuth: false},component: resolve => require(['../components/Student/Course_selection/Timetable'],resolve)},
        //     {path: "/student/course/course",meta: {requireAuth: false},component: resolve => require(['../components/Student/Course_selection/Course_selection_two'],resolve)},
        //     {path: "/student/course/preselection",meta: {requireAuth: false},component: resolve => require(['../components/Student/Course_selection/Preselection'],resolve)},
        //     {path: "/student/course/credit",meta: {requireAuth: false},component: resolve => require(['../components/Student/Course_selection/Credit_tuition'],resolve)},
        //     {path: "/student/examination/Examination_arrangement",meta: {requireAuth: false},component: resolve => require(['../components/Student/Examination/Examination_arrangement'],resolve)},
        //     {path: "/student/examination/Examination_registration",meta: {requireAuth: false},component: resolve => require(['../components/Student/Examination/Examination_registration'],resolve)},
        //     {path: "/student/status/professional",meta: {requireAuth: false},component:resolve => require(['../components/Student/Student_status/Professional_diversion'],resolve)},
        //     {path: "/student/status/card",meta: {requireAuth: false},component: resolve => require(['../components/Student/Student_status/Student_card'],resolve)},
        //     {path: "/student/status/directional",meta: {requireAuth: false},component: resolve => require(['../components/Student/Student_status/Directional_shunting'],resolve)},
        //     {path: "/student/evaluation/teaching_evaluation",meta: {requireAuth: false},component: resolve => require(['../components/Student/Teaching_evaluation/Teaching_evaluation_two'],resolve)},
        //     {path: "/student/performance/score",meta: {requireAuth: false},component: resolve => require(['../components/Student/Performance/Score_query'],resolve)},
        //     {path: "/student/performance/achievement",meta: {requireAuth: false},component: resolve => require(['../components/Student/Performance/Achievement_certification'],resolve)},
        //     {path: "/student/experiment/timetable",meta: {requireAuth: false},component: resolve => require(['../components/Student/Experiment/Experimental_timetable'],resolve)},
        //     {path: "/student/experiment/appointment",meta: {requireAuth: false},component: resolve => require(['../components/Student/Experiment/Experimental_appointment'],resolve)},
        //     {path: "/student/minor/registration",meta: {requireAuth: false},component: resolve => require(['../components/Student/Minor/Minor_registration'],resolve)},
        //     {path: "/student/level/grade",meta: {requireAuth: false},component: resolve => require(['../components/Student/Level_examination/Grade_examination_results'],resolve)}
        //   ]}
      //]
     }
  ]
})
