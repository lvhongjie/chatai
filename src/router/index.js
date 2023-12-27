import {createRouter, createWebHashHistory} from 'vue-router'
import {cancelArr} from "@/utils/BSideRequest";

const routes = [{
    path: '/chatai',
    name: 'Index',
    component: () => import('../views/DialogueView.vue'),
    meta: {
        title: '智能聊天', // TODO 浏览器标题
        isHeadNavigation: true, // TODO 是否显示tab
        keepAlive: true,
        isLeftMenu: true
    }
    },
    {
        path: '/Create',
        name: 'Create',
        component: () => import('../views/Create/CreateView.vue'),
        meta: {
            title: '创作中心',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
    {
        path: "/personality_view",
        name: "PersonalityView",
        component: () => import('../views/PersonalityView.vue'),
        meta: {
            title: 'PERSONALITY GPT',
            isHeadNavigation: true,
            keepAlive: true,
            isLeftMenu: true
        }
    },
    {
        path: "/drawing_text_view",
        name: "SD DRAWING",
        component: () => import('../views/Drawing/DrawingTextView.vue'),
        meta: {
            title: 'SD文生图',
            isHeadNavigation: true,
            keepAlive: true,
            isLeftMenu: false
        },
    },
    {
        path: "/create_edit",
        name: "CreateEdit",
        component: () => import('../views/Create/CreateEditView.vue'),
        meta: {
            title: '创作编辑',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        },
    },
    {
        path: "/create_detail",
        name: "CreateDetail",
        component: () => import('../views/Create/CreateDetailView.vue'),
        meta: {
            title: '创作结果',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        },
    },
    {
        path: '/purchase',
        name: 'Purchase',
        component: () => import('../views/PurchaseView.vue'),
        meta: {
            title: '购买',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('../views/OrdersView.vue'),
        meta: {
            title: '打赏记录',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
    {
        path: '/collection',
        name: 'Collection',
        component: () => import('../views/CollectionView.vue'),
        meta: {
            title: '我的收藏',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
    {
        path: "/exchange",
        name: "Exchange",
        component: () => import('../views/ExchangeView.vue'),
        meta: {
            title: '兑换中心',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
    {
        path: "/custom",
        name: "Custom",
        component: () => import('../views/CustomView.vue'),
        meta: {
            title: '自定义对话',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
    {
        path: "/bing_view",
        name: "BingView",
        component: () => import('../views/BingView.vue'),
        meta: {
            title: '必应对话',
            isHeadNavigation: true,
            keepAlive: true,
            isLeftMenu: true
        }
    }, {
        path: "/claude_view",
        name: "ClaudeView",
        component: () => import('../views/ClaudeView.vue'),
        meta: {
            title: 'Claude对话',
            isHeadNavigation: true,
            keepAlive: true,
            isLeftMenu: true
        }
    },

    {
        path: "/",
        name: "PresetCharacter",
        component: () => import('../views/PresetCharacterView.vue'),
        meta: {
            title: '智能助手',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
	
	{
        path: "/soft_store",
        name: "softStore",
        component: () => import('../views/softStore.vue'),
        meta: {
            title: '应用广场',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
	{
	    path: "/my_soft_store",
	    name: "MysoftStore",
	    component: () => import('../views/MysoftStore.vue'),
	    meta: {
	        title: '应用广场',
	        isHeadNavigation: true,
	        keepAlive: false,
	        isLeftMenu: true
	    }
	},
	
	{
	    path: "/knowledge",
	    name: "Ksnowledge",
	    component: () => import('../views/Ksnowledge.vue'),
	    meta: {
	        title: '应用广场',
	        isHeadNavigation: true,
	        keepAlive: false,
	        isLeftMenu: true
	    }
	},
	
	{
	    path: "/KnowledgeDetail",
	    name: "KnowledgeDetail",
	    component: () => import('../views/KnowledgeDetail.vue'),
	    meta: {
	        title: '知识库详情',
	        isHeadNavigation: true,
	        keepAlive: false,
	        isLeftMenu: true
	    }
	},
	
	{
	    path: "/member_center",
	    name: "MemberCenter",
	    component: () => import('../views/MemberCenter.vue'),
	    meta: {
	        title: '会员中心',
	        isHeadNavigation: true,
	        keepAlive: false,
	        isLeftMenu: true
	    }
	},
	
	{
	    path: "/doing_mjdraw",
	    name: "DoingMJDraw",
	    component: () => import('../views/DoingMJDraw.vue'),
	    meta: {
	        title: '商业绘画',
	        isHeadNavigation: true,
	        keepAlive: false,
            isLeftMenu: true
	    }
	},
	{
	    path: "/doing_xldraw",
	    name: "DoingXLDraw",
	    component: () => import('../views/DoingXLDraw.vue'),
	    meta: {
	        title: '专业绘画',
	        isHeadNavigation: true,
	        keepAlive: false,
	        isLeftMenu: true
	    }
	},
    {
        path: "/doing_draw",
        name: "DoingDraw",
        component: () => import('../views/DoingDraw.vue'),
        meta: {
            title: '基础绘画',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
    {
        path: "/laboratory",
        name: "Laboratory",
        component: () => import('../views/LaboratoryView.vue'),
        meta: {
            title: '知识库',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    },
    {
        path: "/wxlogin",
        name: "LoginWxDialog",
        component: () => import('../views/LoginWxDialog.vue'),
        meta: {
            title: '公众号登录',
            isHeadNavigation: true,
            keepAlive: false,
            isLeftMenu: true
        }
    }
    , {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/Admin/AdminView.vue'),
        meta: {
            title: '管理控制台',
            isHeadNavigation: true,
            keepAlive: true,
            isLeftMenu: true
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// TODO 全局前置守卫
router.beforeEach(async (to) => {
    // TODO 页面切换中断所有请求
    cancelArr.forEach((cancel, index) => {
        cancel()
        cancelArr.splice(index, 1)
    })

    // TODO 设置浏览器Title
    document.title = (to.meta.title ? to.meta.title : '') + ' - MAGIC AI PLUS'
})

export default router
