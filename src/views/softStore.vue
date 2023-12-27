<template>
  <el-dialog v-model="addSoftDialogVisible" class="el-dialog"  align-center="true"
             width="630px" height="680px" >
  <div style="margin-bottom: 10px;margin-left: 6px;font-size: 1.6em">创建应用</div>
  <div class="soft-container">  
  <div class="s_container">
    <el-scrollbar height="100%">
      <el-form  class="demo-form-inline" label-position="left">
        <el-form-item label="应用类型" label-width="100px">
          <el-select v-model="form.gptType" @change="gptTypeSelect" placeholder="请选择应用类型">
            <el-option label="GPT大模型应用" value="1" />
            <el-option label="AI知识库应用" value="2" />
          </el-select>
        </el-form-item>
		<el-form-item label="应用名称" label-width="100px">
		  <el-input
		    placeholder="给你的应用取一个好名字吧"
			v-model="form.softName"
		    clearable
		  />
		  
		</el-form-item>
		<el-form-item label="应用描述" label-width="100px">
		      <el-input
		        type="textarea"
		        v-model="form.softDesc"
		        :rows="3"
		        placeholder="介绍下你的应用有什么功能"
		        :maxlength="300"
		        show-word-limit
		      ></el-input>
		</el-form-item>
		
		<el-form-item label="开 场 白" label-width="100px">
		      <el-input
		        type="textarea"
		        v-model="form.softContent"
		        :rows="3"
		        placeholder="应用的第一句话,例如'有什么可以帮助您？"
		        :maxlength="300"
		        show-word-limit
		      ></el-input>
		</el-form-item>
		
		<el-form-item label="应用头像" label-width="100px">
			 <el-upload
			        action="/admin/gptfile/put/data"
			        :on-success="handleUploadSuccess"
			        :before-upload="beforeUpload"
			        :file-list="fileList"
			      >
			        <el-button size="small" type="primary">点击上传</el-button>
			  </el-upload>
		 
		</el-form-item>
		
		<el-form-item label="应用分类" label-width="100px">
		  <el-select v-model="form.softType" placeholder="请选择应用分类">
		    <el-option label="工作" value="1" />
		    <el-option label="生活" value="2" />
			<el-option label="客服" value="3" />
			<el-option label="数字人" value="4" />
			<el-option label="动漫" value="5" />
			<el-option label="娱乐" value="6" />
			<el-option label="绘画" value="7" />
			<el-option label="其它" value="8" />
		  </el-select>
		</el-form-item>
		
		<el-form-item  label="是否公开" label-width="100px">
		          <el-switch v-model="form.isPublic" />(选是则会显示在应用广场)
		</el-form-item>
	
        <el-form-item label="应用设定" label-width="100px">
              <el-input
                type="textarea"
                v-model="form.softPromot"
                :rows="5"
                placeholder="这是你对机器人的设定和要求，说的越具体效果越好哦。例如：'请扮演产品经理岗位的面试官，向我询问关于这个岗位的专业面试问题，一次只需要问一个问题，并等待我的回答'"
                :maxlength="1000"
                show-word-limit
              ></el-input>
        </el-form-item>
		
		<el-form-item  v-if="showFormItem" label="知识库绑定" label-width="100px">
		  <el-select v-model="form.ksnowledgeBase" placeholder="请选择知识库">
		    <el-option 
			v-for="(item, index) in knowledgeBaseList"
			:key="index"
			:label="item.name" :value="item.id"/>
		  </el-select>
		</el-form-item>
		
      </el-form>

      <div class="btn-container">
        <el-button color="#626aef" style="width: 220px" @click="onSubmit"
          >创建应用</el-button
        >
      </div>
    </el-scrollbar>
  </div>	  
	   
    </div>
  
  </el-dialog>
  <div class="body">
	
    <div class="container">
		
      <div class="content">
        <el-row :gutter="20">
          <el-col
            @click="onItem(item)"
            v-for="(item, index) in myrolesList"
            :key="index"
            :xs="12"
            :sm="8"
            :md="4">
            <div class="item">
              <div>
                <img :src="item.softIcon" class="image">
              </div>
              <div>
                <div
                  style="
                    font-weight: 700;
                    font-size: 16px;
                    color: #000;
                    padding-top: 5px;
                  ">
                  {{ item.softName }}
                </div>
                <div
                  style="
                    padding-top: 10px;
                    font-size: 14px;
                    color: #878787;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  ">
                  {{ item.softContent }}
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <LoginDialog
    :show="loginVisible"
    @close="loginVisible = false" />
</template>

<script>
  import { ref,onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  import LoginDialog from "@/components/LoginDialog.vue";
  import {ElLoading, ElNotification} from "element-plus";
  import {AddGptSoft,getPromotMyRoleList} from "../../api/BSideApi";

  export default {
    name: "PresetCharacterView",
    components: { LoginDialog },
    setup() {
	   let form = ref({
		     gptType:"",
	         softName: "",
	         softDesc: "",
	         softContent: "",
	         softIcon: "",
			 softType: "",
	         isPublic: false,
	         softPromot: "",
			 ksnowledgeBase: "",
	     });
	  let file=ref(null);
      let store = useStore();
	  let islogin=ref(false)
      let router = useRouter();
      let menuCollection = ref(require("../utils/PresetsToolsData.json"));
	  let loginVisible = ref(false);
	  let token=localStorage.getItem("token");
	  let fileList = ref([]); // 上传文件列表
	  let showFormItem = ref(false);
	  let myrolesList = ref([]);
	  if(token!=null){
	  	islogin.value=true
	  }
	  let rolesList = ref([]); // 上传文件列表
	  
	  onMounted(() => {
	  		handleRoleList(1);  
	  });
	  
	  let knowledgeBaseList = ref([
	    {
	      name: "一年级语文上册",
	      id: 1,
	    },
	    {
          name: "一年级语文下册",
          id: 2,
	    },
		]);
	  
      function getImageUrl(imagePath) {
         return require('@/assets/' + imagePath);
      }
	  
	  function handleFileUpload(event) {
	     file.value = event.target.files[0];
		 console.log('this.form.file==='+file.value);
	   }
	   
	  function gptTypeSelect(event) { 
		let value = form.value;
		if(value.gptType==1){
			showFormItem.value=false;
		}else{
			showFormItem.value=true;
		}
		  
	  }
	  
      function onItem(data) {
		let routerpath="/chatai";
        if (!store.getters.userinfo) return (loginVisible.value = true);
        
		console.log("donging"+data.pagePath)
		if(data.pagePath=='stablediffution'){
			routerpath="/doing_draw";
		}
		else if(data.pagePath=='sdxl-diffution'){
			routerpath="/doing_xldraw";
		}
		else if(data.pagePath=='mjxl-diffution'){
			routerpath="/doing_mjdraw";
		}
		else if(data.pagePath=='classes'){
			routerpath="/laboratory";
		}else{
			localStorage.setItem("roleData", JSON.stringify(data));
		}
		console.log("donging"+data.pagePath)
		if(data.pagePath=='donging'){
			ElNotification({
			  title: '请稍等几天',
			  message: '功能正在陆续开发',
			  type: 'success',
			})
			console.log("donging")
			
		}else{
		  router.push({
		    path: routerpath,
		  });	
		}
      }
	  
	  async  function handleRoleList(pageNum) {
	     let token=localStorage.getItem("token")
	     try {				
	   	  let res = await getPromotMyRoleList("pageNum="+pageNum); 
	   	   if (res) {
	   	      myrolesList.value = res.records;
	   	   } 
	   	  }catch (e) {  
	           
	         }
	    }
	  
	  
	  function handleUploadSuccess(response, file, fileList) {
	        // 上传成功回调函数
	        // 处理上传成功后的逻辑
			form.value.softIcon=response.data;
			console.log('response.data.data2=='+response.data);
			
	      }
	    function  beforeUpload(file) {
	        // 上传之前的钩子函数
	        // 可以在这里进行文件类型、大小等的校验
	      }
	  
	  async function onSubmit() {
	    let value = form.value;
	    if (!value.gptType) {
	      ElNotification({
	        title: "错误",
	        message: "应用类型不能为空！",
	        type: "error",
	      });
	      return;
	    }
	    if (!value.softName) {
	      ElNotification({
	        title: "错误",
	        message: "应用名称不能为空！",
	        type: "error",
	      });
	      return;
	    }
	  
	    if (!value.softDesc) {
	      ElNotification({
	        title: "错误",
	        message: "应用描述不能为空！",
	        type: "error",
	      });
	      return;
	    }
	    if (!value.softContent) {
	      ElNotification({
	        title: "错误",
	        message: "应用开场白不能为空！",
	        type: "error",
	      });
	      return;
	    }
		
		
		if (!value.softType) {
		  ElNotification({
		    title: "错误",
		    message: "应用分类不能为空！",
		    type: "error",
		  });
		  return;
		}
		
		if (!value.softPromot) {
		  ElNotification({
		    title: "错误",
		    message: "应用设定不能为空！",
		    type: "error",
		  });
		  return;
		}

	    try {
	      ElLoading.service({
	        fullscreen: true,
	        text: "正在提交请求...",
	        spinner: "el-icon-loading",
	        background: "rgba(0, 0, 0, 0.7)",
	      });
	      await AddGptSoft(value);
	      //await getTerminalConfig();
	      ElLoading.service().close();
	      ElNotification({
	        title: "成功",
	        message: "创建成功",
	        type: "success",
	      });
	    } catch (e) {
	      ElNotification({
	        title: "错误",
	        message: e,
	        type: "error",
	      });
	    }
	  }
	  
	  
     const addSoftDialogVisible = ref(false)
      return {
        menuCollection,
        onItem,
        loginVisible,
		getImageUrl,
		islogin,
		addSoftDialogVisible,
		form,
		onSubmit,
		handleFileUpload,
		fileList,
		handleUploadSuccess,
		beforeUpload,
		gptTypeSelect,
		showFormItem,
		knowledgeBaseList,
		myrolesList,
		handleRoleList
      };
    },
  };
</script>


<style scoped>
  .body {
    scroll-behavior: smooth;
    width: 100%;
    height: 91.5%;
    box-sizing: border-box;
    flex-direction: column;
    flex: 1;
    align-items: center;
    padding: 0 20px 120px;
    display: flex;
    overflow: auto;
    background-color: #fafafa;
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
    max-width: 1690px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px 100px;
	margin-top: 10px;
  }

  .list:first-child {
    margin-top: 60px;
  }

  .list {
    margin-bottom: 40px;
  }

  .title {
    font-size: 20px;
    font-weight: 500;
  }

  .content {
    width: 100%;
    margin-top: 30px;
  }

  .item {
    width: 80%;
    height: 265px;
    background-color: #ffffff;
    margin-bottom: 15px;
    border-radius: 8px;
    font-size: 15px;
    color: #fafafa;
    padding: 10px;
    box-shadow: 0 5px 7px rgba(35, 35, 35, 0.06);
  }

  .item:hover {
    background-color: rgb(62, 61, 61);
    cursor: pointer;
    transition: background-color 0.2s;
  }

  @media only screen and (max-width: 767px) {
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
}
.image {
    width: 195px;
    height: 180px;
	margin-left: 0px;
	margin-top: 0px;
    border-radius: 8px;
  }
  
  
  .floating-ball {
    position: fixed;
    width: 30px;
    height: 30px;
    background-color: #fafafa;
    border-radius: 20%;
    cursor: copy;
    z-index: 999;
  }
  
  .addsoft {
	  border: 0.8px solid #eff0f0;
	  border-radius: 8px;
	  width:45px;
	  height:45px;
	  font-size: 30px;
	  margin-top: 20px;
	  margin-bottom: 40px;
	  background-color: #ccfbf1;
	  color: #000;
	  display: flex;
	  justify-content: center;
  }
  
  .soft-container {
    width: 100%;
    height: 680px;
	display: flex;
	justify-content: center;
	border: 0.8px solid #eff0f0;
	border-radius: 8px;
	padding-top: 10px;
  }
  
  .el-dialog {
    border-radius: 10px
  }
 
 
@keyframes explainAnimation {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
 
 ::v-deep(
     .el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell
   ) {
   background: none !important;
 } 
 
 
 .btn-container {
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 10px;
 }
 
 ::v-deep(
     .el-pagination .is-background .el-pager li:not(.is-disabled).is-active
   ) {
   background-color: rgb(235, 245, 255);
 }
 
 ::v-deep(.el-table-fixed-column--right) {
   background: #ffffff !important;
 }
 
 ::v-deep(
     .el-pagination.is-background .el-pager li:not(.is-disabled).is-active
   ) {
   background-color:  rgb(235, 245, 255)!important;
 }
 
 ::v-deep(
     .el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell
   ) {
   background: none;
 }
 
 /deep/ .el-input__inner {
   background: rgb(235, 245, 255);
 
   font-weight: 400;
   color: #000;
 }
 
 /deep/ .el-input__wrapper {
   background: rgb(235, 245, 255);
   box-shadow: none;
 } 
 
 .el-select,
 .el-switch,
 .el-input {
   width: 260px; /* 设置宽度 */
 }
 
</style>
