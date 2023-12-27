<template>
  <div class="body">
	<div class="inputcontainer">
	  <div data-v-06ed77b2="" class="home-all-header">
	  	<span data-v-06ed77b2="" class="type-1">类别</span>
	  	<button id="0" style="background-color: #a0cfff!important;color: #fff;" @click="clickType(0)"  type="button" class="el-button home-all-header-btn ">
	  		<!--v-if-->
	  		<span class="">全部</span>
	  	</button>
	  	<button id="1"  @click="clickType(1)"  type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">工作</span>
	  	</button>
	  	<button id="2"  @click="clickType(2)"  type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">生活</span>
	  	</button>
	  	<button id="3"  @click="clickType(3)"  type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">客服</span>
	  	</button>
	  	<button id="4"  @click="clickType(4)"  type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">数字分身</span>
	  	</button>
	  	<button id="5"  @click="clickType(5)"  type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">动漫</span>
	  	</button>
	  	<button id="6"   @click="clickType(6)"  type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">娱乐</span>
	  	</button>
	  	<button id="7"  @click="clickType(7)"  type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">绘画</span>
	  	</button>
	  	<button id="8"  @click="clickType(8)"  type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">其它</span>
	  	</button>
	  </div>
	</div>
	
	<div class="inputcontainer">
	  <div data-v-06ed77b2="" class="home-all-header">
	  	<span data-v-06ed77b2="" class="type-1">排序</span>
	  	<button id="11" style="background-color: #a0cfff!important;color: #fff;" @click="clickType2(11)" aria-disabled="false" type="button" class="el-button home-all-header-btn ">
	  		<!--v-if-->
	  		<span class="">热门</span>
	  	</button>
	  	<button id="12"  @click="clickType2(12)" aria-disabled="false" type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">最新</span>
	  	</button>
	  	<button id="13"  @click="clickType2(13)" aria-disabled="false" type="button" class="el-button home-all-header-btn">
	  		<!--v-if-->
	  		<span class="">收藏</span>
	  	</button>
	  </div>
	</div>
	
    <div class="container">
      <div class="content" >
        <el-row :gutter="5">
          <el-col
            @click="onItem(item)"
            v-for="(item, index) in rolesList"
            :key="index"
            :xs="12"
            :sm="8"
            :md="4"
          >
            <div class="item">
              <div style="margin-left: -2px;margin-top: 0px;">
				<img style=" border-radius: 8px;width: 195px;height: 180px" :src="item.softIcon">
			  </div>
			  <div style="font-size: 35px;margin-buttom: 15px;">
               <font size="3" 
			    style="color: #1f1f1f;
				font-weight: 700;
				padding-top: 10px;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				">
			   {{ item.softName }}
			   </font>
              </div>
                <div
                  style="
                    padding-top: 12px;
                    font-size: 15px;
                    color: #878787;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                >
                  {{ item.softDesc }}
              </div>
            </div>
          </el-col>
        </el-row>
      <div style="display: flex; justify-content: center; padding-top: 10px">
        
		<el-pagination
          layout="prev, pager, next"
          :total="total"
		  :current-page="current"
		  :background="backgroundColor"
          :page-size="18"
		   class="mt-4"
          @current-change="handleCurrentChange" />
		  
		  
      </div>
	  </div>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
  import { ref,defineExpose,onMounted} from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  import store from "@/store";
  import LoginDialog from "@/components/LoginDialog.vue";
  import {getPromotRoleList} from "../../api/BSideApi";
  import {ElMessageBox, ElNotification} from "element-plus";

  const serachMode = () => {
         console.log('子组件方法被调用');
  	     serachMode(rolename);
    };

  export default {
    name: "PresetCharacterView",
    components: { LoginDialog },
	computed: {
	    store() {
	      return store
	    }
	    
	},
    setup() {
      let store = useStore();
      let router = useRouter();
      let menuCollection = ref(require("../utils/PresetsData.json"));
	  let rolesList = ref([]);
      let loginVisible = ref(false);
      let rolename=ref("");
	  let total=ref(0);
	  let current = ref(1);
	  let promot =ref("");
	  let backgroundColor=ref(true);
	  let softtype=ref(0);

	  onMounted(() => {
		  LoginWeixinByParam();
		  handleRoleList(1,'');
	  });
	  
      function onItem(data) {
		let token=localStorage.getItem("token");
		if(token==null){
			loginVisible.value=true;
			return;
		}
		localStorage.setItem("roleData", JSON.stringify(data));
        if (!store.getters.userinfo) return (loginVisible.value = true);
        router.push({
          path: "/chatai",
        });
      }
	
	function LoginWeixinByParam(){
		
		const currentUrl = window.location.href;
		let startcode=currentUrl.indexOf('?')
		let paramstr=currentUrl.substring(startcode);
		let params=paramstr.substring(0,paramstr.length-2);
		console.log("currentUrl==="+params);
		
	}
	
	
	  
	 async function clickType(bid) {
		 softtype.value=bid;
		 for(let i=0;i<9;i++){
			document.getElementById(i).style="background-color:#fafafa";	   
		 }
		 document.getElementById(bid).style="color: #fff;background-color: #a0cfff;";
	     await handleCurrentChange(1);
	  }
	  
	  function clickType2(bid) {
	     for(let i=11;i<14;i++){
	     	document.getElementById(i).style="background-color:#fafafa";	   
	     }
	     document.getElementById(bid).style="color: #fff;background-color: #a0cfff;";
	     	  
	  }
	  
	 async  function handleCurrentChange(pageNum) {
		 await handleRoleList(pageNum,promot.value);
	 }
	  
	 async  function handleRoleList(pageNum,promot) {
	    let token=localStorage.getItem("token")
	    try {
		  let spromot=""
		  if(promot!=''){
			  spromot="&promptName="+promot;
		  }
			spromot=spromot+"&type="+softtype.value;				

	  	  let res = await getPromotRoleList("pageNum="+pageNum+spromot); 
		   if (res) {
	  	      rolesList.value = res.records;
			  total.value=res.total;
			  current.value = res.current;
	  	   } 
	  	  }catch (e) {  
	          
	        }
	   }
	 
	  
	  async function serachMode(roname) {
		 promot.value=roname;
		 current.value = 1;
		 clickType(0);
		 clickType2(11);
		 //await handleRoleList(1,roname);
	  }
	  
      return {
        menuCollection,
		rolesList,
        onItem,
        loginVisible,
		serachMode,
		rolename,
		handleRoleList,
		clickType,
		clickType2,
		total,
		promot,
		handleCurrentChange,
		current,
		backgroundColor, // 设置背景色
		softtype,
		LoginWeixinByParam,
      };
    },
  };
  
  defineExpose({
    serachMode,
  });
  
  
</script>

<style scoped>
  .body {
    scroll-behavior: smooth;
    width: 100%;
    height: 91.5%;
    box-sizing: border-box;
    flex-direction: column;
	border-radius: 8px;
    flex: 1;
    align-items: center;
    padding: 0 20px 120px;
    display: flex;
    overflow: auto;
    background-color: #fafafa;
	color: #000;
  }

  @keyframes explainAnimation {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }

  .container {
    animation: explainAnimation 0.3s;
    max-width: 1600px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px 10px;
  }

  .list:first-child {
    margin-top: 60px;
  }

  .list {
    margin-bottom: 30px;
  }

  .title {
    font-size: 20px;
    font-weight: 500;
  }

  .content {
    width: 100%;
    margin-top: 20px;
  }

  .item {
    width: 80%;
    height: 320px;
    background-color: #ffffff;
    margin-bottom: 15px;
    border-radius: 8px;
    font-size: 15px;
    color: #fafafa;
	border: 1px solid #eff0f0;
  }

  .item:hover {
    background-color: rgb(62, 61, 61);
    cursor: pointer;
    transition: background-color 0.2s;
  }

  @media (max-width: 767px) {
    .container {
      padding: 0;
    }

  .list:first-child {
    margin-top: 30px;
  }
  .list {
    padding-left: 20px;
    padding-right: 20px;
  }

  .content {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  
>>>.inputBox>.el-input__wrapper {
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
  
  
  
  .inputcontainer {
  	//max-width: 500px;
  	width: 100%;
  	height: 30px;
  	box-sizing: border-box;
    margin-top: 20px;
  	display: flex;
  	justify-content: left; /* 水平方向居中 */
  	align-items: center;
    animation: explainAnimation 0.3s;
	background-color: #fafafa;
  }
  
}


  @media  (min-width: 768px) {
    .container {
      padding: 0;
    }

  .list:first-child {
    margin-top: 30px;
  }
  .list {
    padding-left: 10px;
    padding-right: 10px;
  }

  .content {
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  }
  
>>>.inputBox>.el-input__wrapper {
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
  
  .inputcontainer {
  	//max-width: 500px;
  	width: 100%;
  	height: 30px;
  	box-sizing: border-box;
      margin-top: 20px;
  	display: flex;
  	justify-content: left; /* 水平方向居中 */
  	align-items: center;
    animation: explainAnimation 0.3s;
	background-color: #fafafa;
  }
  
  .item {
    width: 74%;
    height: 250px;
    background-color: #ffffff;
    margin-bottom: 15px;
    border-radius: 8px;
    font-size: 15px;
    color: #fafafa;
    padding: 15px;
	padding-top: 15px;
    box-shadow: 0 5px 7px rgba(35, 35, 35, 0.06);
  }
}

.home-all-header {
    height: 35px;
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
}

.type-1{
    font-size: 13px;
    margin-right: 10px;
    margin-left: 5px;
    display: inline-block;
    min-width: 2rem;
    color: #ababab;
}

.home-all-header-btn{
    color: #000;
    background-color: #fafafa;
    border: 0 solid #ffffff;
    height: 28px;
    line-height: 28px;
    padding: 8px 10px;
	border: none;
}

.el-button {
    --el-button-font-weight: var(--el-font-weight-primary);
    --el-button-border-color: var(--el-border-color);
    --el-button-bg-color: var(--el-fill-color-blank);
    --el-button-text-color: var(--el-text-color-regular);
    --el-button-disabled-text-color: var(--el-disabled-text-color);
    --el-button-disabled-bg-color: var(--el-fill-color-blank);
    --el-button-disabled-border-color: var(--el-border-color-light);
    --el-button-divide-border-color: hsla(0,0%,100%,.5);
    --el-button-hover-text-color: var(--el-color-primary);
    --el-button-hover-bg-color: var(--el-color-primary-light-9);
    --el-button-hover-border-color: var(--el-color-primary-light-7);
    --el-button-active-text-color: var(--el-button-hover-text-color);
    --el-button-active-border-color: var(--el-color-primary);
    --el-button-active-bg-color: var(--el-button-hover-bg-color);
    --el-button-outline-color: var(--el-color-primary-light-5);
    --el-button-hover-link-text-color: var(--el-color-info);
    --el-button-active-color: var(--el-text-color-primary);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    color: var(--el-button-text-color);
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    transition: .1s;
    font-weight: var(--el-button-font-weight);
    -webkit-user-select: none;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    background-color: var(--el-button-bg-color);
    border: var(--el-border);
    border-color: var(--el-button-border-color);
    padding: 8px 15px;
    font-size: var(--el-font-size-base);
    border-radius: var(--el-border-radius-base);
}

.is-select {
    background-color: #a0cfff!important;color: #fff;
    color: #fff;
}


  ::v-deep(
      .el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell
    ) {
    background: none !important;
  }

  ::v-deep(
      .el-pagination .is-background .el-pager li:not(.is-disabled).is-active
    ) {
    background-color: #fafafa;
  }

  ::v-deep(.el-table-fixed-column--right) {
    background: #ffffff;
  }

  ::v-deep(
      .el-pagination.is-background .el-pager li:not(.is-disabled).is-active
    ) {
    background-color: rgb(125, 128, 255) !important;
  }

  ::v-deep(
      .el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell
    ) {
    background: none;
  }
  
  
</style>
