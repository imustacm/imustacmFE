/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description router全局配置，如有必要可分文件抽离
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts'
import EmptyLayout from '@/layouts/EmptyLayout'
import { publicPath, routerMode } from '@/config'

Vue.use(VueRouter)

export const constantRoutes = [
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index'),
  //   hidden: true,
  // },
  // {
  //   path: '/register',
  //   component: () => import('@/views/register/index'),
  //   hidden: true,
  // },
  // {
  //   path: '/403',
  //   name: '403',
  //   component: () => import('@/views/403'),
  //   hidden: true,
  // },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: () => import('@/views/404'),
  //   hidden: true,
  // },
]

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/index'),
        meta: {
          title: ' 首页',
          icon: 'home',
          affix: true,
          noKeepAlive: true,
        },
      },
      {
        path: '404',
        name: '404',
        component: () => import('@/views/404'),
        hidden: true,
        meta: { title: '404' },
      },
      {
        path: '403',
        name: '403',
        component: () => import('@/views/403'),
        hidden: true,
        meta: { title: '403' },
      },
    ],
  },
  {
    path: '/imustoj',
    name: 'Imustoj',
    component: Layout,
    redirect: 'noRedirect',
    alwaysShow: true,
    meta: { title: ' IMUSTOJ', icon: 'laptop-code' },
    children: [
      {
        path: 'problems',
        name: 'Problems',
        component: () => import('@/views/project/imustoj/problemList/index'),
        meta: { title: '题目列表' },
      },
      {
        path: 'problem/:id',
        name: 'Problem',
        component: () => import('@/views/project/imustoj/problem/index'),
        hidden: true,
        meta: { title: '题目详情' },
      },
      {
        path: 'status',
        name: 'Status',
        component: () => import('@/views/project/imustoj/solutionList/index'),
        meta: { title: '评判状态' },
      },
      {
        path: 'rank',
        name: 'Rank',
        component: () => import('@/views/project/imustoj/rankList/index'),
        meta: { title: '解题排名' },
      },
      {
        path: 'practice',
        name: 'Practice',
        component: () => import('@/views/project/imustoj/contestList/index'),
        meta: { title: '集训练习' },
      },
      {
        path: 'contest',
        name: 'ContestList',
        component: () => import('@/views/project/imustoj/contestList/index'),
        meta: { title: '竞赛列表' },
      },
      {
        path: 'experiment',
        name: 'Experiment',
        component: () => import('@/views/project/imustoj/contestList/index'),
        meta: { title: '实验平台' },
      },
      {
        path: 'contest/info',
        redirect: 'noRedirect',
        component: () => import('@/views/project/imustoj/contestView/index'),
        name: 'ContestView',
        alwaysShow: true,
        hidden: true,
        meta: {
          title: '竞赛列表',
        },
        children: [
          {
            path: 'index/:id',
            name: 'ContestIndex',
            meta: { title: '竞赛首页' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestIndex/index'),
          },
          {
            path: 'problems/:id',
            name: 'ContestProblems',
            meta: { title: '竞赛题目' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestProblems/index'
              ),
          },
          {
            path: 'problem/:id/:problemId',
            name: 'ContestProblem',
            meta: { title: '竞赛详情' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestProblem/index'
              ),
          },
          {
            path: 'data/:id/:problemId',
            name: 'ContestData',
            meta: { title: '竞赛数据' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestData/index'),
          },
          {
            path: 'status/:id',
            name: 'ContestStatus',
            meta: { title: '竞赛状态' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestStatus/index'),
          },
          {
            path: 'rankList/:id',
            name: 'ContestRankList',
            meta: { title: '竞赛榜单' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestRankList/index'
              ),
          },
          {
            path: 'datas/:id',
            name: 'ContestDatas',
            meta: { title: '竞赛统计' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestDatas/index'),
          },
        ],
      },
      {
        path: 'experiment/info',
        redirect: 'noRedirect',
        component: () => import('@/views/project/imustoj/contestView/index'),
        name: 'ExperimentView',
        alwaysShow: true,
        hidden: true,
        meta: {
          title: '实验平台',
        },
        children: [
          {
            path: 'index/:id',
            name: 'ExperimentIndex',
            meta: { title: '实验首页' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestIndex/index'),
          },
          {
            path: 'problems/:id',
            name: 'ExperimentProblems',
            meta: { title: '实验题目' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestProblems/index'
              ),
          },
          {
            path: 'problem/:id/:problemId',
            name: 'ExperimentProblem',
            meta: { title: '实验详情' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestProblem/index'
              ),
          },
          {
            path: 'data/:id/:problemId',
            name: 'ExperimentData',
            meta: { title: '实验数据' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestData/index'),
          },
          {
            path: 'status/:id',
            name: 'ExperimentStatus',
            meta: { title: '实验状态' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestStatus/index'),
          },
          {
            path: 'rankList/:id',
            name: 'ExperimentRankList',
            meta: { title: '实验榜单' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestRankList/index'
              ),
          },
          {
            path: 'datas/:id',
            name: 'ExperimentDatas',
            meta: { title: '实验统计' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestDatas/index'),
          },
        ],
      },
      {
        path: 'practice/info',
        redirect: 'noRedirect',
        component: () => import('@/views/project/imustoj/contestView/index'),
        name: 'PracticeView',
        alwaysShow: true,
        hidden: true,
        meta: {
          title: '集训练习',
        },
        children: [
          {
            path: 'index/:id',
            name: 'PracticeIndex',
            meta: { title: '练习首页' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestIndex/index'),
          },
          {
            path: 'problems/:id',
            name: 'PracticeProblems',
            meta: { title: '练习题目' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestProblems/index'
              ),
          },
          {
            path: 'problem/:id/:problemId',
            name: 'PracticeProblem',
            meta: { title: '练习详情' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestProblem/index'
              ),
          },
          {
            path: 'data/:id/:problemId',
            name: 'PracticeData',
            meta: { title: '练习数据' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestData/index'),
          },
          {
            path: 'status/:id',
            name: 'PracticeStatus',
            meta: { title: '练习状态' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestStatus/index'),
          },
          {
            path: 'rankList/:id',
            name: 'PracticeRankList',
            meta: { title: '练习榜单' },
            component: () =>
              import(
                '@/views/project/imustoj/contestView/contestRankList/index'
              ),
          },
          {
            path: 'datas/:id',
            name: 'PracticeDatas',
            meta: { title: '练习统计' },
            component: () =>
              import('@/views/project/imustoj/contestView/contestDatas/index'),
          },
        ],
      },
      // {
      //   path: 'bbs',
      //   name: 'Bbs',
      //   component: () => import('@/views/project/admin/interface/index'),
      //   meta: { title: '博客论坛' },
      // },
      {
        path: 'groupList',
        name: 'Groups',
        component: () => import('@/views/project/imustoj/groups/index'),
        meta: { title: '小组列表' },
      },
      {
        path: 'groupInfo',
        name: 'GroupUsers',
        component: () => import('@/views/project/imustoj/groupUsers/index'),
        hidden: true,
        meta: { title: '小组详情' },
      },
      {
        path: 'data/:id',
        name: 'Data',
        component: () => import('@/views/project/imustoj/data/index'),
        hidden: true,
        meta: { title: '数据统计' },
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import('@/views/project/imustoj/faqs/index'),
        meta: { title: '使用帮助' },
      },
    ],
  },
  {
    path: '/imustcpc',
    name: 'Imustcpc',
    component: Layout,
    redirect: 'noRedirect',
    alwaysShow: true,
    meta: { title: ' IMUSTCPC', icon: 'chess-queen' },
    permissions: ['visitor'],
    children: [
      {
        path: 'currentcpc',
        name: 'Currentcpc',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '本届大赛' },
      },
      {
        path: 'oldcpc',
        name: 'oldcpc',
        component: () => import('@/App'),
        meta: { title: '历届大赛' },
        alwaysShow: true,
        children: [
          {
            path: 'cpc1',
            name: 'cpc1',
            component: () => import('@/views/project/about/aboutUs/index'),
            meta: { title: '2019 IMUSTCPC 1' },
          },
        ],
      },
    ],
  },
  // {
  //   path: '/news',
  //   component: Layout,
  //   redirect: '/news',
  //   children: [
  //     {
  //       path: '/news',
  //       name: 'News',
  //       component: () => import('@/views/project/admin/interface/index'),
  //       meta: {
  //         title: '新闻中心',
  //         icon: 'list-alt',
  //         noKeepAlive: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/notice',
  //   component: Layout,
  //   redirect: '/notice',
  //   children: [
  //     {
  //       path: '/notice',
  //       name: 'Notice',
  //       component: () => import('@/views/project/admin/interface/index'),
  //       meta: {
  //         title: '通知公告',
  //         icon: 'map-signs',
  //         noKeepAlive: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/downloads',
  //   component: Layout,
  //   redirect: '/downloads',
  //   children: [
  //     {
  //       path: '/downloads',
  //       name: 'Downloads',
  //       component: () => import('@/views/project/admin/interface/index'),
  //       meta: {
  //         title: '文件下载',
  //         icon: 'download',
  //         noKeepAlive: true,
  //       },
  //     },
  //   ],
  // },
  {
    path: '/culture',
    name: 'Culture',
    component: Layout,
    redirect: 'noRedirect',
    alwaysShow: true,
    meta: { title: ' 社团文化', icon: 'landmark' },

    children: [
      {
        path: 'campInstraction',
        name: 'CampInstraction',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '协会简介' },
      },
      {
        path: 'honor',
        name: 'Honor',
        component: () => import('@/views/project/about/honor/index'),
        meta: { title: '荣誉展廊' },
      },
      {
        path: 'master',
        name: 'Master',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '历届会长' },
      },
      {
        path: 'activity',
        name: 'Activity',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '社团活动' },
      },
      {
        path: 'gooders',
        name: 'gooders',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '优秀会员' },
      },
      {
        path: 'connection',
        name: 'Connection',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '联系我们' },
      },
      {
        path: 'congratulationACM',
        name: 'congratulationACM',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '寄语ACM' },
      },
    ],
  },
  {
    path: '/aboutWeb',
    name: 'aboutWeb',
    component: Layout,
    redirect: 'noRedirect',
    alwaysShow: true,
    meta: { title: ' 关于网站', icon: 'globe' },

    children: [
      {
        path: 'webInstruction',
        name: 'webInstruction',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '网站简介' },
      },
      {
        path: 'updateLog',
        name: 'updateLog',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '更新日志' },
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: () => import('@/views/project/about/aboutUs/index'),
        meta: { title: '意见反馈' },
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Layout,
    redirect: 'noRedirect',
    alwaysShow: true,
    meta: { title: ' 后台管理', icon: 'cog', permissions: ['adminak'] },

    children: [
      // {
      //   path: 'controlCenter',
      //   name: 'ControlCenter',
      //   component: () => import('@/views/project/admin/interface/index'),
      //   meta: { title: '控制中心' },
      // },
      {
        path: 'system',
        name: 'System',
        component: () => import('@/App'),
        meta: { title: '系统管理' },
        alwaysShow: true,
        children: [
          {
            path: 'interface',
            name: 'Interface',
            component: () => import('@/views/project/admin/interface/index'),
            meta: { title: '接口管理' },
          },
          {
            path: 'permission',
            name: 'Permission',
            component: () => import('@/views/project/admin/permission/index'),
            meta: { title: '权限管理' },
          },
          {
            path: 'judge',
            name: 'JudgeAdmin',
            component: () => import('@/views/project/admin/judgeAdmin/index'),
            meta: { title: '判题管理' },
          },
          {
            path: 'dataDictionary',
            name: 'DataDictionary',
            component: () => import('@/views/project/about/aboutUs/index'),
            meta: { title: '数据字典管理' },
          },
          {
            path: 'qiniu',
            name: 'qiniuAdmin',
            component: () => import('@/views/project/admin/qiniuAdmin/index'),
            meta: { title: '七牛存储管理' },
          },
          {
            path: 'mail',
            name: 'mailAdmin',
            component: () => import('@/views/project/admin/mailAdmin/index'),
            meta: { title: '系统邮箱管理' },
          },
        ],
      },
      // {
      //   path: 'user',
      //   name: 'User',
      //   component: () => import('@/App'),
      //   meta: { title: '用户管理' },
      //   alwaysShow: true,
      //   children: [
      //     {
      //       path: 'onlineUser',
      //       name: 'OnlineUser',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '在线用户列表' },
      //     },
      //     {
      //       path: 'loginLog',
      //       name: 'LoginLog',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '查看登录日志' },
      //     },
      //     {
      //       path: 'userList',
      //       name: 'UserList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '用户信息管理' },
      //     },
      //     {
      //       path: 'userPermission',
      //       name: 'UserPermission',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '管理权限配置' },
      //     },
      //     {
      //       path: 'mailList',
      //       name: 'MailList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '站内消息管理' },
      //     },
      //   ],
      // },
      // {
      //   path: 'problemAdmin',
      //   name: 'ProblemAdmin',
      //   component: () => import('@/App'),
      //   meta: { title: '题目管理' },
      //   alwaysShow: true,
      //   children: [
      //     {
      //       path: 'problemList',
      //       name: 'ProblemList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '所有题目列表' },
      //     },
      //   ],
      // },
      // {
      //   path: 'practiceAdmin',
      //   name: 'PracticeAdmin',
      //   component: () => import('@/App'),
      //   meta: { title: '练习管理' },
      //   alwaysShow: true,
      //   children: [
      //     {
      //       path: 'practiceList',
      //       name: 'PracticeList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '所有练习列表' },
      //     },
      //   ],
      // },
      // {
      //   path: 'contestAdmin',
      //   name: 'ContestAdmin',
      //   component: () => import('@/App'),
      //   meta: { title: '竞赛管理' },
      //   alwaysShow: true,
      //   children: [
      //     {
      //       path: 'contestList',
      //       name: 'ContestList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '所有竞赛列表' },
      //     },
      //   ],
      // },
      // {
      //   path: 'experimentAdmin',
      //   name: 'ExperimentAdmin',
      //   component: () => import('@/App'),
      //   meta: { title: '实验管理' },
      //   alwaysShow: true,
      //   children: [
      //     {
      //       path: 'experimentList',
      //       name: 'ExperimentList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '所有实验列表' },
      //     },
      //   ],
      // },
      // {
      //   path: 'articleAdmin',
      //   name: 'ArticleAdmin',
      //   component: () => import('@/App'),
      //   meta: { title: '文章管理' },
      //   alwaysShow: true,
      //   children: [
      //     {
      //       path: 'indexImage',
      //       name: 'IndexImage',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '首页轮播管理' },
      //     },
      //     {
      //       path: 'problemSolution',
      //       name: 'ProblemSolution',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '题解文章管理' },
      //     },
      //     {
      //       path: 'problemTalk',
      //       name: 'ProblemTalk',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '讨论文章管理' },
      //     },
      //     {
      //       path: 'bbsList',
      //       name: 'BbsList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '博客论坛管理' },
      //     },
      //     {
      //       path: 'newsList',
      //       name: 'NewsList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '新闻中心管理' },
      //     },
      //     {
      //       path: 'noticeList',
      //       name: 'NoticeList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '通知公告管理' },
      //     },
      //     {
      //       path: 'downloadAdmin',
      //       name: 'DownloadAdmin',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '下载文件管理' },
      //     },
      //   ],
      // },
      // {
      //   path: 'groupAdmin',
      //   name: 'GroupAdmin',
      //   component: () => import('@/App'),
      //   meta: { title: '小组管理' },
      //   alwaysShow: true,
      //   children: [
      //     {
      //       path: 'groupList',
      //       name: 'GroupList',
      //       component: () => import('@/views/register/index'),
      //       meta: { title: '所有小组列表' },
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

const router = new VueRouter({
  base: routerMode === 'history' ? publicPath : '',
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
  //mode: 'history',
})
//注释的地方是允许路由重复点击，如果你觉得框架路由跳转规范太过严格可选择放开
/* const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
}; */

export function resetRouter() {
  router.matcher = new VueRouter({
    base: routerMode === 'history' ? publicPath : '',
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher
}

export default router
