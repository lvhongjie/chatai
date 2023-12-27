<template>
 <div class="NavigationBar">
    <div class="leftNavigation"  v-if="isLeftMenu">
	
	<div class="leftNavigation-iner">	
      
	  <div class="heardicon" style="margin-top: 20px;height: 40px;margin-left: 8px;color: #000000;font-size:22px;font-weight: 700;">
		  <div style="margin-bottom: 2px;margin-left: 10px;font-size: 22px;font-weight: 700;">
		  <img src="../assets/logoHead.svg" style="border-radius: 50%;width: 28px; height: 28px;">
		  </div>
		  <div style="margin-bottom: 2px;margin-left: 10px;font-size: 22px;font-weight: 700;">
		  MagicAI
		  </div>
	  </div>
	  
	  
	  <div class="tooltip" :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }"  v-if="showToolTip">{{ tooltipText }}</div>
      <div class="header">
		 <div class="switch-button">
          <router-link
            v-for="(item, index) in navigationList"
            :key="index"
            active-class="switch-active"
            class="switch-item"
            :to="item.to"
          >
		    <div style="margin-left: 20px;margin-top: 4px;">
			<el-icon size="16" :color="item.color">
			  <component :is="item.icon" />
			</el-icon>
			</div>
			<div @click="onItem(item)" class="switch-item-title">{{ item.title }}</div>
          </router-link>
        </div>
      </div>
	  <div class="bottom">
		  <div class="surplus" style="margin-top: 10px;" v-if="store.getters.userinfo">
		  	
		  </div>
		  
	  </div>
	  </div>
    </div>
    
	<div class="rightContent">
	  <div class="rightContent_heard">
	   <div style="margin-top: 25px;height: 80px;width: 70px;margin-left: 0px;color: #000000;font-size: 15px;"> {{ pagename }}</div>	
	   
	   <div v-if="pagename=='首页'" style="margin-top: 12px;height: 30px;width: 500px;margin-left: 28%;" class="search"><div class="el-input el-input--large el-input--prefix el-input--suffix large-input"><!-- input --><!-- prepend slot --><!--v-if--><div class="el-input__wrapper"><!-- prefix slot --><span class="el-input__prefix"><span class="el-input__prefix-inner"><i class="el-icon el-input__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path></svg></i></span></span>
	   <input v-model="rolename" @change="serachMode" class="el-input__inner" type="text" autocomplete="new-password" tabindex="0" placeholder="请输入搜索内容" id="el-id-6592-75">
	   <!-- suffix slot --><!--v-if-->
	     </div><!-- append slot --><!--v-if-->
	    </div>
	   </div>
	   
	   <div style="margin-top: 4px;height: 80px;width: 30px;margin-right: 1%;" class="loginsurplus" v-if="store.getters.userinfo">
	   	<div class="header-user-wrapper">
	   	  <el-dropdown ref="dropdown1" trigger="contextmenu">
	   	    <div @mouseover="showClick" class="header-user-btn">
			  <img v-if="store.getters.userinfo.avatar" :src="store.getters.userinfo.avatar" style="border-radius: 50%;width: 28px; height: 28px;">
			  <el-avatar v-else :size="30" style="color: #ffffff;background-color: #7171ff;" :icon="UserFilled"/>   
			</div>
	   	    <template #dropdown>
	   	      <el-dropdown-menu class="dropdown-menu">
	   	        <el-dropdown-item @click="router().push({ path: '/Admin' })" v-if="store.getters.userinfo.type==='ADMIN'">管理中心</el-dropdown-item>
	   	        <el-dropdown-item @click="router().push({ path: '/purchase' })">会员充值</el-dropdown-item>
				<el-dropdown-item @click="router().push({ path: '/Orders' })">购买记录</el-dropdown-item>
	   	        <el-dropdown-item @click="router().push({ path: '/Exchange' })">我要兑换</el-dropdown-item>
				<el-dropdown-item divided>{{ store.getters.userinfo.frequency }}</el-dropdown-item>
	   	        <el-dropdown-item  @click="logout">退出登录</el-dropdown-item>
	   	      </el-dropdown-menu>
	   	    </template>
	   	  </el-dropdown>
	   	  </div>
	   	
	   </div>
	   <div style="margin-top: 15px;height: 80px;width: 30px;margin-right: 1%;" v-else class="loginsurplus">
	   		 <div @click="loginVisible = true" class="loginBut">
	   			<div><button data-v-130ac927="" aria-disabled="false" type="button" class="el-button el-button--primary"><!--v-if--><span class="">登录</span></button></div>	  
	   		</div>
	   </div>
	   
	  </div>
      <RouterView  v-slot="{ Component }">
        <!-- TODO 要缓存 -->
        <KeepAlive>
          <component
            :is="Component"
            :key="$route.name"
            v-if="$route.meta.keepAlive"
          ></component>
        </KeepAlive>
        <!-- TODO 不缓存 -->
        <component
          :is="Component"
		  ref="childComponent"
          :key="$route.name"
          v-if="!$route.meta.keepAlive"
        ></component>
      </RouterView>
    </div>
  </div>

  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import { defineComponent, onMounted, ref, watch,onVnodeMounted } from "vue";
import { useRouter } from "vue-router";
// eslint-disable-next-line no-unused-vars
import {
  ChatDotSquare,
    EditPen,
    MessageBox,
    Odometer,
    ScaleToOriginal,
    UserFilled,
    Picture,
    PictureRounded,
    Connection,
    Platform,
    PriceTag,
	Goods,
	User,
	FolderAdd,
	House,
	Lollipop,
	Menu,
	Notebook,
	HomeFilled,
} from "@element-plus/icons-vue";
import router from "@/router";
import store from "../store";
import LoginDialog from "@/components/LoginDialog.vue";
import {
	Logout
} from "../../api/BSideApi";
import {
	ElLoading,
	ElNotification
} from "element-plus";

export default defineComponent({
  name: "LeftNavigationBar",
  components: {
    LoginDialog,
  },
  computed: {
    store() {
      return store;
    },
  },
  mounted() {
      
  },
  methods: {
    router() {
      return router;
    },
  },
  setup() {
    let router = useRouter();
	let rolename= ref('');
	let pagename= ref('');
	
    // TODO DATA
    let loginVisible = ref(false);
    let dialogVisible = ref(false);
    let appletDialogVisible = ref(false);
    let isHeadNavigation = ref(false);
    let navigationList = ref([]);
	let crentNavigaList = ref([
	  {
	    title: "首页",
	    icon: House,
	  		to: "/",
	    //to: "/preset_character",
	  		color:"#000000",
	  },
	  {
	    title: "对话",
	    icon: ChatDotSquare,
	    to: "/chatai",
		color:"#000000",
	  },
 
	 {
	 title: '应用',
	 icon: Connection,
	 to: '/soft_store',
	 color:"#000000",
	 },
	{
	    title: "创建",
	    icon: FolderAdd,
	    to: "/my_soft_store",
		color:"#000000",
	},
    ]);
	
	navigationList.value=crentNavigaList.value;
	
	let navigationAdminList = ref([
	  {
	    title: "我的应用",
	    icon: Menu,
	  		to: "/my_soft_store",
	    //to: "/preset_character",
	  		color:"#000000",
	  },
	  {
	    title: "知识库",
	    icon: Notebook,
	    to: "/knowledge",
		color:"#000000",
	  },
	 
	 {
	 title: '返回首页',
	 icon: HomeFilled,
	 to: '/',
	 color:"#000000",
	 },
	]);
	
	
    const isLeftMenu = ref(true)

    watch(
      () => router.currentRoute.value,
      (newValue) => {
        isHeadNavigation.value = newValue.meta.isHeadNavigation;
        isLeftMenu.value = newValue.meta.isLeftMenu;
		//console.log('newValue=='+newValue.path);
		if(newValue.path=='/'){
			 pagename.value='首页';
		}else if(newValue.path=='/chatai'){
			 pagename.value='对话'; 
		}else if(newValue.path=='/soft_store'){
			 pagename.value='应用'; 
		}else if(newValue.path=='/purchase'){
			 pagename.value='会员'; 
		}else if(newValue.path=='/my_soft_store'){
			 pagename.value='我的应用'; 
			 navigationList.value=navigationAdminList.value;
		}else if(newValue.path=='/knowledge'){
			 pagename.value='知识库'; 
			 navigationList.value=navigationAdminList.value;
		}
      },
      {
        immediate: true,
      }
    );
    const imageUrl = ref("");
	const showToolTip = ref(false);
	const tooltipText = ref("");
	const tooltipX = ref(0);
	const tooltipY = ref(0);
    onMounted(() => {
      imageUrl.value = process.env.VUE_APP_IMAGE;
    });
    const dropdown1 = ref();

    function showClick() {
      dropdown1.value.handleOpen();
    }
	
	function onItem(data) {
	  this.pagename=data.title;
	  if(data.to=='/my_soft_store'&&data.title=='创建'){
		 navigationList.value= navigationAdminList.value;
		 this.pagename='我的应用';
	  }else if(data.to=='/'&&data.title=='返回首页'){
		 navigationList.value=crentNavigaList.value; 
	  }else if(data.to=='/chatai'&&data.title=='对话'){
		 navigationList.value=crentNavigaList.value; 
		 if (!store.getters.userinfo) return (loginVisible.value = true);
	  }
	}
	
	function serachMode(event) {
	 this.$refs.childComponent.serachMode(rolename.value.trim().replace(/ /g, ''));	 
	}
	
	function showTooltip(title,event) {
	      showToolTip.value =true;
	      tooltipText.value  = title;
		  const button = event.target;
		  const rect = button.getBoundingClientRect();
		  tooltipX.value = rect.left+40;
		  tooltipY.value = rect.top;
	}
		
	 function  hideTooltip() {
	      showToolTip.value = false;
	      tooltipText.value = '';
	    }
	
	async function logout() {
		try {
			// 显示加载图标
			ElLoading.service({
				fullscreen: true,
				text: '正在退出登录...',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.7)',
			});
			await Logout();
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			location.reload();
			// 关闭加载图标
			ElLoading.service().close();
			// 弹出退出登录成功提示框
			ElNotification({
				message: '退出登录成功',
				type: 'success',
			});
	
		} catch (e) {
			// 关闭加载图标
			ElLoading.service().close();
			ElNotification({
				message: e,
				type: 'error',
			});
		}
	}

    return {
      isHeadNavigation,
      navigationList,
      UserFilled,
      showClick,
      dropdown1,
      appletDialogVisible,
      dialogVisible,
      loginVisible,
      imageUrl,
      isLeftMenu,
	  logout,
	  showToolTip,
	  tooltipText,
	  showTooltip,
	  hideTooltip,
	  tooltipX,
	  tooltipY,
	  serachMode,
	  rolename,
	  pagename,
	  onItem,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.answer) {
  .v-md-editor {
    background-color: transparent;
  }
}

:deep(.rightContent) {
  .footer {
    width: calc(100% - 10px);
  }
}
</style>

<style scoped>
	
.NavigationBar {
  width: 100%;
  height: 100%;
  display: flex;
  border: 0px solid #fafafa;
  border-radius: 10px;
  overflow: hidden;
}

.leftNavigation {
  width: 220px;
  background-color: #ffffff;
  position: relative;
  height: 102.3%;
}

.leftNavigation-iner{
  width: 192px;
  height: 95.3%;
  background-color: #fafafa;
  position: relative;
  border: 0.8px solid #eff0f0;
  margin-top: 12px;
  margin-bottom: 15px;
  margin-left: 12px;
  margin-right: 0px;
  border-radius: 8px;
}

.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90px;
  border-top: 1px solid #fafafa;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  border-top: 2px solid #fafafa;
}


.bottomRight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}

.bottomRightName {
  color: #848484;
  font-size: 14px;
  font-weight: bold;
}

.bottomRightEdition {
  font-size: 12px;
  margin-top: 3px;
  color: #7c7c7c;
}

.headPortrait {
  display: block;
  margin: 15px auto 0;
}


.surplus {
  box-sizing: border-box;
  padding: 5px 10px;
  display: table;
  margin: 8px auto 0;
  font-size: 13px;
  color: #000;
  border-radius: 0px;
}

.loginsurplus {
  box-sizing: border-box;
  padding: 5px 10px;
  display: table;
  margin: 5px auto 0;
  font-size: 13px;
  color: white;
  border-radius: 5px;
}

.rightContent {
  position: relative;
  flex: 1;
  background: #fafafa;
  border-radius: 8px;
  margin: 12px;
  height: 96.5%;
  margin-right: 2px;
  margin-left: -2px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border: 0.8px solid #eff0f0;
}

.rightContent_heard {
  display: flex;
  justify-content: center;
  position: relative;
  flex: 1;
  background: #fafafa;
  border-radius: 8px;
  margin-right: 12px;
  margin-left: 12px;
  height: 60px;
  border-bottom: 0.8px solid #eff0f0;
}

@media screen and (max-width: 756px) {
  ::v-deep(.rightContent .body) {
    padding-left: 0;
    padding-right: 0;
  }
  ::v-deep(.rightContent .body .questions > .item) {
    padding-left: 0;
    padding-right: 0;
  }
}

.loginBut {
  width: 80px;
  height: 20px;
  border-radius: 8px;
  margin: 0px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

.header {
  margin-top: 30px;
}

.switch-button {
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: -8px;
  width:175px;
}

.switch-item {
  height: 40px;
  width:165px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: -6px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  background-color: #fafafa;
  border-radius: 8px;
}

.switch-item-title {
  margin-left: 18px;
}

.switch-active {
  background-color: #eff0f0;
  color: #000;
  border-radius: 10px;
}

@media only screen and (max-width: 767px) {
  .NavigationBar {
    border: none;
    border-radius: 0;
	display: flex;
  }

  .leftNavigation {
    display: none;
  }
}

.rechargeButtonText {
  margin-left: 10px;
}

.rechargeButton {
  width: 84px;
  height: 25px;
  border-radius: 6px;
  margin-right: 12px;
  padding: 0;
  font-size: 14px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.header-user-btn {
  height: 36px;
  cursor: pointer;
  border-radius: 6px;
  align-items: center;
  padding: 0 6px;
  display: flex;
  color: #7171ff;
}

.header-user-name {
  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-left: 8px;
  font-size: 15px;
  overflow: hidden;
  color: #c5c5c5;
}
.header-user-btn:hover {
  background: rgb(48,49,51);
}

.tooltip {
  position: absolute;
  padding: 5px;
  background-color: #ccc;
  width:70px;
  z-index: 9999; /* 设置较大的正整数值 */
  border-radius: 10px;
}

.heardicon{
    display: flex;
    height: 48px;
	width: 80%;
    border-bottom: 1px solid #eff0f0;
    color: #000;
    cursor: pointer;
    padding: 0 5px;
    align-items: center;
}
/*.NavigationBar {*/
/*  border: none;*/
/*  border-radius: 0;*/
/*}*/

.el-input__wrapper {
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 1px 11px;
    background-color: var(--el-input-bg-color,var(--el-fill-color-blank));
    background-image: none;
    border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
    transition: var(--el-transition-box-shadow);
    transform: translateZ(0);
    box-shadow: 0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;
}

.el-input__prefix {
    display: inline-flex;
    white-space: nowrap;
    flex-shrink: 0;
    flex-wrap: nowrap;
    height: 100%;
    text-align: center;
    color: var(--el-input-icon-color,var(--el-text-color-placeholder));
    transition: all var(--el-transition-duration);
    pointer-events: none;
}

.el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
    width: 100%;
    flex-grow: 1;
    -webkit-appearance: none;
    color: var(--el-input-text-color,var(--el-text-color-regular));
    font-size: inherit;
    height: 33px;
    line-height: var(--el-input-inner-height);
    padding: 0;
    outline: 0;
    border: none;
    background: 0 0;
    box-sizing: border-box;
}

.el-icon {
    --color: inherit;
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    color: var(--el-color-black);
    font-size: inherit;
}
</style>
