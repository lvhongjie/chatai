<template>
  <el-dialog v-model="addSoftDialogVisible" class="el-dialog"  align-center="true"
             width="630px" height="480px" >
  <div style="margin-bottom: 10px;margin-left: 6px;font-size: 1.6em">创建知识库</div>
  <div class="soft-container">  
  <div class="s_container">
    <el-scrollbar height="100%">
      <el-form  class="demo-form-inline" label-position="left">

  		<el-form-item label="知识库名称" label-width="100px">
  		  <el-input
  		    placeholder="给你的知识库取一个好名字吧"
  			v-model="form.knowledgeName"
  		    clearable
  		  />
  		  
  		</el-form-item>
		
		<el-form-item label="知识库编码" label-width="100px">
  		  <el-input
  		    placeholder="给你的知识库取一个好名字吧"
  			v-model="form.knowledgeCode"
  		    clearable
  		  />
  		  
  		</el-form-item>
		
  		<el-form-item label="知识库描述" label-width="100px">
  		      <el-input
  		        type="textarea"
  		        v-model="form.knowledgeDesc"
  		        :rows="3"
  		        placeholder="介绍下你的知识库有什么功能"
  		        :maxlength="300"
  		        show-word-limit
  		      ></el-input>
  		</el-form-item>
  		
  		
  		<el-form-item label="知识库头像" label-width="100px">
  			 <el-upload
  			        action="/admin/knowledgeFile/put/data"
  			        :on-success="handleUploadSuccess"
  			        :before-upload="beforeUpload"
  			        :file-list="fileList"
					limit="1"
  			      >
  			        <el-button size="small" type="primary">点击上传</el-button>
  			  </el-upload>
  		 
  		</el-form-item>
  		
      </el-form>
  
      <div class="btn-container">
        <el-button color="#626aef" style="width: 220px" @click="onSubmit"
          >创建知识库</el-button
        >
      </div>
    </el-scrollbar>
  </div>	  
  	   
    </div>
  
  </el-dialog>
  
  
  
  <el-dialog v-model="updateSoftDialogVisible" class="el-dialog"  align-center="true"
             width="630px" height="680px" >
  <div style="margin-bottom: 10px;margin-left: 6px;font-size: 1.6em">编程知识库</div>
  
  <div class="soft-container">  
  <div class="s_container">
    <el-scrollbar height="100%">
      <el-form  class="demo-form-inline" label-position="left">
        
		<el-form-item label="知识库名称" label-width="100px">
  		  <el-input
  		    placeholder="给你的知识库取一个好名字吧"
  			v-model="uform.knowledgeName"
  		    clearable
  		  />
  		  
  		</el-form-item>
		
		<el-form-item label="知识库编码" label-width="100px">
  		  <el-input
  		    placeholder="给你的知识库取一个好名字吧"
  			v-model="uform.knowledgeCode"
  		    clearable
  		  />
  		  
  		</el-form-item>
		
  		<el-form-item label="知识库描述" label-width="100px">
  		      <el-input
  		        type="textarea"
  		        v-model="uform.knowledgeDesc"
  		        :rows="3"
  		        placeholder="介绍下你的知识库有什么内容"
  		        :maxlength="300"
  		        show-word-limit
  		      ></el-input>
  		</el-form-item>
  		
  		
  		<el-form-item label="知识库头像" label-width="100px">
  			 <el-upload
  			        action="/admin/knowledgeFile/put/data"
  			        :on-success="handleUpdateUploadSuccess"
  			        :before-upload="beforeUpload"
  			        :file-list="fileList"
					limit="1"
  			      >
  			        <el-button size="small" type="primary">点击上传</el-button>
  			  </el-upload>
  		 
  		</el-form-item>
		
      </el-form>

      <div class="btn-container">
		<el-button color="#626aef" style="width: 100px" @click="onUpdateSubmit"
		  >保存知识库</el-button> 
      </div>
	  
	  <div class="btn-container" style="margin-top: 30px;">
	  		<el-button @click="onDeleteSubmit(uform.id)" color="#626aef" style="width: 100px;background-color: darkred;"
	  		  >删除知识库</el-button>
	  		  
	  		<el-button @click="onManager(uform.id)" color="#626aef" style="width: 100px;background-color: darkred;"
	  		  >管理知识库</el-button>  
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
		   @click="addSoftDialog"
		   :xs="12"
		   :sm="8"
		   :md="4">
		   <div class="item">
		 			  
		     <div>
		       <img src="../assets/newlybuild.svg" class="image">
		     </div>
		     <div>
		       <div
		         style="
		           font-weight: 700;
		           font-size: 16px;
		           color: #000;
		           padding-top: 5px;
		         ">
		         创建知识库
		       </div>
		       <div
		         style="
		           padding-top: 10px;
		           font-size: 13px;
		           color: #878787;
		           display: -webkit-box;
		           -webkit-line-clamp: 2;
		           -webkit-box-orient: vertical;
		           overflow: hidden;
		           text-overflow: ellipsis;
		         ">
		         利用AI大模型，创建属于自己的知识库
		        </div>
		 				  
		     </div>
		     </div>
		 </el-col>	
			
          <el-col
            @click="onItem(item)"
            v-for="(item, index) in myrolesList"
            :key="index"
            :xs="12"
            :sm="8"
            :md="4">
            <div class="item">
			  
              <div>
                <img :src="item.knowledgeIcon" class="image">
              </div>
              <div>
                <div
                  style="
                    font-weight: 700;
                    font-size: 16px;
                    color: #000;
                    padding-top: 5px;
                  ">
                  {{ item.knowledgeName }}
                </div>
                <div
                  style="
                    padding-top: 10px;
                    font-size: 13px;
                    color: #878787;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  ">
                  {{ item.knowledgeDesc }}
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
  import {ElLoading, ElNotification,ElMessageBox} from "element-plus";
  import {AddKsnowledge,updateKsnowledge,getMyKsnowledgeList,deleteKsnowledge } from "../../api/BSideApi";

  export default {
    name: "KsnowledgeView",
    components: { LoginDialog },
    setup() {
	   let form = ref({
		     knowledgeName:null,
	         knowledgeDesc: "",
	         knowledgeCode: "",
	         knowledgeIcon: "",
	     });
		 
	   let uform = ref({
	   		 knowledgeName:null,
	         knowledgeDesc: "",
	         knowledgeCode: "",
	         knowledgeIcon: "",
			 dataSetId: null,
			 id:null
	     });
	  let gptType=ref("");
	  let oldItem=ref(null);
	  let file=ref(null);
      let store = useStore();
	  let islogin=ref(false);
	  let switchValue=ref(false)
      let router = useRouter();
      let menuCollection = ref(require("../utils/PresetsToolsData.json"));
	  let loginVisible = ref(false);
	  let token=localStorage.getItem("token");
	  let fileList = ref([]); // 上传文件列表
	  let showFormItem = ref(false);
	  let ushowFormItem = ref(false);
	  let myrolesList = ref([]);
	  let editeStatus = ref(false);
	  if(token!=null){
	  	islogin.value=true
	  }
	  
	  let rolesList = ref([]); // 上传文件列表
	  
	  onMounted(() => {
	  		handleRoleList(1);  
	  });
	  
	  
	  function addSoftDialog(){

		 addSoftDialogVisible.value=true;
	  }
	  
      function getImageUrl(imagePath) {
         return require('@/assets/' + imagePath);
      }
	  
	  function handleFileUpload(event) {
	     file.value = event.target.files[0];
		 console.log('this.form.file==='+file.value);
	   }
	   
	  
      function onItem(data) {
        if (!store.getters.userinfo) return (loginVisible.value = true);
        //updateSoftDialogVisible.value=true;
		editeStatus.value=true;
		oldItem.value=data;
		uform.value=data;
		localStorage.setItem("uform",JSON.stringify(data));
		router.push({
		  path: "/knowledgeDetail",
		});
		
      }
	  
	  async  function handleRoleList(pageNum) {
	     if (!store.getters.userinfo) return (loginVisible.value = true);
	     try {				
	   	  let res = await getMyKsnowledgeList("pageNum="+pageNum); 
	   	   if (res) {
	   	      myrolesList.value = res.records;
	   	   } 
	   	  }catch (e) {  
	           
	         }
	    }
	  
	  
	  function handleUploadSuccess(response, file, fileList) {
	        // 上传成功回调函数
	        // 处理上传成功后的逻辑
			form.value.knowledgeIcon=response.data;
			console.log('response.data.data2=='+response.data);
			
	  }
	  
	  function handleUpdateUploadSuccess(response, file, fileList) {
	        // 上传成功回调函数
	        // 处理上传成功后的逻辑
	  	uform.value.knowledgeIcon=response.data;
	  	console.log('uform.value.knowledgeIcon=='+uform.value.knowledgeIcon);
	  			
	  }
	    function  beforeUpload(file) {
	        // 上传之前的钩子函数
	        // 可以在这里进行文件类型、大小等的校验
	    }
	  
	  async function onSubmit() {
	    let value = form.value;
		
        if (!value.knowledgeName) {
	      ElNotification({
	        title: "错误",
	        message: "知识库名称不能为空！"+value.knowledgeName,
	        type: "error",
	      });
	      return;
	    }
	  
	    if (!value.knowledgeDesc) {
	      ElNotification({
	        title: "错误",
	        message: "知识库描述不能为空！"+value.knowledgeDesc,
	        type: "error",
	      });
	      return;
	    }
	    if (!value.knowledgeCode) {
	      ElNotification({
	        title: "错误",
	        message: "知识库编码不能为空！"+value.knowledgeCode,
	        type: "error",
	      });
	      return;
	    }
	  		
	
	  	 if (!value.knowledgeIcon) {

			ElNotification({
			  title: "错误",
			  message: "知识库图片不能为空！",
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
	      await AddKsnowledge(value);
	      ElLoading.service().close();
		  ElNotification({
		    title: "成功",
		    message: "创建成功！",
		    type: "success",
		  });  
	      
		  addSoftDialogVisible.value=false;
		  handleRoleList(1);
	    } catch (e) {
		  ElLoading.service().close();
	      ElNotification({
	        title: "错误",
	        message: e,
	        type: "error",
	      });
	    }
	  }
	  
	  async function  onManager(data){
		  localStorage.setItem("knowledgeId",data)
		   router.push({
		     path: "/knowledgeDetail",
		   });
	  }
	  
	  async function onDeleteSubmit(deletId){
		  await ElMessageBox({
		    title: "提示",
		    message: "删除知识库会删除相关数据，不可恢复，请慎重操作，是否确定要删除?",
		    confirmButtonText: "确定",
		    cancelButtonText: "再想想",
		    showCancelButton: true,
		    type: "warning",
		  });
		  let data="dtoid="+deletId;
		  await deleteKsnowledge(data);
		  ElLoading.service().close();
		  ElNotification({
		    title: "成功",
		    message: "删除成功",
		    type: "success",
		  });
		  updateSoftDialogVisible.value=false;
		  handleRoleList(1);
	  }
	  
	  async function onUpdateSubmit() {
	    let value = uform.value;


	    if (!value.knowledgeName) {
	      ElNotification({
	        title: "错误",
	        message: "知识库名称不能为空！"+value.knowledgeName,
	        type: "error",
	      });
	      return;
	    }
	  
	    if (!value.knowledgeDesc) {
	      ElNotification({
	        title: "错误",
	        message: "知识库描述不能为空！"+value.knowledgeDesc,
	        type: "error",
	      });
	      return;
	    }
	    if (!value.knowledgeCode) {
	      ElNotification({
	        title: "错误",
	        message: "知识库开场白不能为空！"+value.knowledgeCode,
	        type: "error",
	      });
	      return;
	    }
	  		
	
	  	 if (!value.knowledgeIcon) {

			ElNotification({
			  title: "错误",
			  message: "知识分类不能为空！",
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
	      await updateKsnowledge(value);
	      //await getTerminalConfig();
	      ElLoading.service().close();
	      ElNotification({
	        title: "成功",
	        message: "修改成功",
	        type: "success",
	      });
		  
		  updateSoftDialogVisible.value=false;
		  handleRoleList(1);
		  
	    } catch (e) {
	      ElNotification({
	        title: "错误",
	        message: e,
	        type: "error",
	      });
	    }
	  }
	  
	  
     const addSoftDialogVisible = ref(false)
	 const updateSoftDialogVisible = ref(false)
      return {
        menuCollection,
        onItem,
        loginVisible,
		getImageUrl,
		islogin,
		addSoftDialogVisible,
		updateSoftDialogVisible,
		form,
		uform,
		oldItem,
		onSubmit,
		handleFileUpload,
		fileList,
		handleUploadSuccess,
		handleUpdateUploadSuccess,
		beforeUpload,
		showFormItem,
		ushowFormItem,
		myrolesList,
		handleRoleList,
		editeStatus,
		addSoftDialog,
		updateKsnowledge,
		onUpdateSubmit,
		gptType,
		switchValue,
		onDeleteSubmit,
		onManager,
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
	margin-top: 20px;
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
    height: 400px;
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
