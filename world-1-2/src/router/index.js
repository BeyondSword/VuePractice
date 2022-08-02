import { createRouter, createWebHistory } from 'vue-router'

// 注册前端路由  看路由元信息
const routes = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            isMenu: false,
            isAuth: false,
            keepAlive: false
        },
        component: () => import('@/views/user/login'),
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: '注册',
            isMenu: false,
            isAuth: false,
            keepAlive: false
        },
        component: () => import('@/views/user/register'),
    },
    {
        path: '/registerResult',
        name: 'registerResult',
        meta: {
            title: '注册结果',
            isMenu: false,
            isAuth: false,
            keepAlive: true
        },
        component: () => import('@/views/user/registerResult'),
    },
    {
        path: '/',
        title: '',
        meta: {
        },
        redirect: '/home',
        component: () => import('@/layouts/layout.vue'),
        // 嵌套路由
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: '主页',
                    isMenu: true,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade',
                },
                component: () => import('@/views/home/home.vue'),
            },
            {
                path: 'category',
                name: 'category',
                meta: {
                    title: '分类',
                    isMenu: false,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade'
                },
                component: () => import('@/views/category/category.vue'),
            },
            {
                path: 'categoryAll',
                name: 'categoryAll',
                meta: {
                    title: '分类',
                    isMenu: true,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade'
                },
                component: () => import('@/views/category/categoryAll.vue'),
            },
            {
                path: 'tags',
                name: 'tags',
                meta: {
                    title: '标签',
                    isMenu: false,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade'
                },
                component: () => import('@/views/tags/tags.vue'),
            },
            {
                path: 'tagsAll',
                name: 'tagsAll',
                meta: {
                    title: '标签',
                    isMenu: true,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade'
                },
                component: () => import('@/views/tags/tagsAll.vue'),
            },
            {
                path: 'archive',
                name: 'archive',
                meta: {
                    title: '归档',
                    isMenu: true,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade'
                },
                component: () => import('@/views/archive/archive.vue'),
            },
            {
                path: 'user',
                name: 'user',
                meta: {
                    title: '关于',
                    isMenu: true,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade'
                },
                component: () => import('@/views/user/user.vue'),
            },
            {
                path: 'article',
                name: 'article',
                meta: {
                    title: '详情',
                    isMenu: false,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade'
                },
                component: () => import('@/views/article/article.vue'),
            },
            {
                path: 'search',
                name: 'search',
                meta: {
                    title: '搜索',
                    isMenu: false,
                    isBreadcrumb: true,
                    isAuth: true,
                    keepAlive: false,
                    transition: 'fade'
                },
                component: () => import('@/views/search/search.vue'),
            },
        ]
    },

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;