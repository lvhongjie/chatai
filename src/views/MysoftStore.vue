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
            <el-option
                   v-for="item in gptOptions"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value"
             ></el-option>
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
  		        :rows="2"
  		        placeholder="介绍下你的应用有什么功能"
  		        :maxlength="300"
  		        show-word-limit
  		      ></el-input>
  		</el-form-item>
  		
  		<el-form-item label="开 场 白" label-width="100px">
  		      <el-input
  		        type="textarea"
  		        v-model="form.softContent"
  		        :rows="2"
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
					limit="1"
  			      >
  			        <el-button size="small" type="primary">点击上传</el-button>
  			  </el-upload>
  		 
  		</el-form-item>
  		
  		<el-form-item label="应用分类" label-width="100px">
  		  <el-select v-model="form.softType" placeholder="请选择应用分类">
  		       <el-option
  		           v-for="item in gptSoftOptions"
  		           :key="item.value"
  		           :label="item.label"
  		           :value="item.value"
  		     ></el-option>
  		  </el-select>
  		</el-form-item>
  		
  		<el-form-item  label="是否公开" label-width="100px">
  		          <el-switch v-model="form.isPublic" />(选是则会显示在应用广场)
  		</el-form-item>
  	
        <el-form-item label="应用设定" label-width="100px">
              <el-input
                type="textarea"
                v-model="form.softPromot"
                :rows="3"
                placeholder="这是你对机器人的设定和要求，说的越具体效果越好哦。例如：'请扮演产品经理岗位的面试官，向我询问关于这个岗位的专业面试问题，一次只需要问一个问题，并等待我的回答'"
                :maxlength="1000"
                show-word-limit
              ></el-input>
        </el-form-item>
  		
  		<el-form-item  v-if="showFormItem" label="知识库绑定" label-width="100px">
  		  <el-select   multiple v-model="form.ksnowledgeBase" placeholder="请选择知识库">
  		    <el-option 
  			v-for="(item, index) in knowledgeBaseList"
  			:key="index"
			:label="item.knowledgeName" :value="item.id"/>
  		  </el-select>
		  <el-button v-if="knowledgeBaseList.length===0" @click="toKnowledgePage" color="#626aef" style="width: 100px;background-color: darkred;"
		    >  创建知识库  </el-button>
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
  
  
  
  <el-dialog v-model="updateSoftDialogVisible" class="el-dialog"  align-center="true"
             width="630px" height="680px" >
  <div style="margin-bottom: 10px;margin-left: 6px;font-size: 1.6em">编辑应用</div>
  
  <div class="soft-container">  
  <div class="s_container">
    <el-scrollbar height="100%">
      <el-form  class="demo-form-inline" label-position="left">
        <el-form-item label="应用类型" default-first-option label-width="100px">
          <el-select v-model="gptOption" name="gptType"  @change="getGptTypeSelect" placeholder="请选择应用类型">
            <el-option
                   v-for="item in gptOptions"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value"
             ></el-option>
          </el-select>
        </el-form-item>
		<el-form-item label="应用名称" label-width="100px">
		  <el-input
		    placeholder="给你的应用取一个好名字吧"
			v-model="uform.softName"
		    clearable
		  />
		  
		</el-form-item>
		<el-form-item label="应用描述" label-width="100px">
		      <el-input
		        type="textarea"
		        v-model="uform.softDesc"
		        :rows="2"
		        placeholder="介绍下你的应用有什么功能"
		        :maxlength="300"
		        show-word-limit
		      ></el-input>
		</el-form-item>
		
		<el-form-item label="开 场 白" label-width="100px">
		      <el-input
		        type="textarea"
		        v-model="uform.softContent"
		        :rows="2"
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
					limit="1"
			      >
			        <el-button size="small" type="primary">点击上传</el-button>
			  </el-upload>
		 
		</el-form-item>
		
		<el-form-item label="应用分类"  filterable="true"  label-width="100px">
		  <el-select v-model="gptSoftOption" name="softType"  @change="getSoftTypeSelect" placeholder="请选择应用分类">
		    <el-option
		           v-for="item in gptSoftOptions"
		           :key="item.value"
		           :label="item.label"
		           :value="item.value"
		     ></el-option>
		  </el-select>
		</el-form-item>
		
		<el-form-item  label="是否公开" label-width="100px">
		          <el-switch v-model="switchValue" />(选是则会显示在应用广场)
		</el-form-item>
	
        <el-form-item label="应用设定" label-width="100px">
              <el-input
                type="textarea"
                v-model="uform.softPromot"
                :rows="3"
                placeholder="这是你对机器人的设定和要求，说的越具体效果越好哦。例如：'请扮演产品经理岗位的面试官，向我询问关于这个岗位的专业面试问题，一次只需要问一个问题，并等待我的回答'"
                :maxlength="1000"
                show-word-limit
              ></el-input>
        </el-form-item>
		
		<el-form-item  v-if="ushowFormItem" filterable="true" label="知识库绑定" label-width="100px">
	    <el-checkbox-group v-model="knowledgeBase" @change="getKnowledgeSelect" size="large">
	      <el-checkbox-button v-for="item in knowledgeBaseList"  :key="item.id" :label="item.id">
	        {{ item.knowledgeName }}
	      </el-checkbox-button>
	    </el-checkbox-group>	  
		</el-form-item>
      </el-form>

      <div class="btn-container">
		<el-button color="#626aef" style="width: 100px" @click="onUpdateSubmit"
		  >保存应用</el-button>
		  
		<el-button @click="onDeleteSubmit(uform.id)" color="#626aef" style="width: 100px;background-color: darkred;"
		  >删除应用</el-button>
      </div>
    </el-scrollbar>
  </div>	  
	   
    </div>
  </el-dialog>
  <div class="body">
	  <div class="floating-ball"
	  
	   @click="addSoftDialog" 
	   
	   style="padding: 5px;align:right;" v-if="islogin">
	   
	   <div class="addsoft">
		   <div style="margin-top: 7px;color:#878787;">
			   +
			</div>
		</div>
	   
	  </div>
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
                    font-size: 13px;
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
  import {ElLoading, ElNotification,ElMessageBox} from "element-plus";
  import {AddGptSoft,updateGptSoft,getMyRoleList,deleteGptSoft,getMyKsnowledgeList } from "../../api/BSideApi";

  export default {
    name: "MysoftStoreView",
    components: { LoginDialog },
    setup() {
	   let form = ref({
		     gptType:null,
	         softName: "",
	         softDesc: "",
	         softContent: "",
	         softIcon: "",
			 softType: null,
	         isPublic: null,
	         softPromot: "",
			 ksnowledgeBase: null,
	     });
		 
	   let uform = ref({
	   		 gptType:null,
	         softName: "",
	         softDesc: "",
	         softContent: "",
	         softIcon: "",
	   		 softType: null,
	         isPublic: null,
	         softPromot: "",
	   		 ksnowledgeBase: null,
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
	  
	  
	  const gptOption= ref(null);
	  
	  const gptOptions = ref([
	    { label: "GPT大模型应用", value: "1" },
	    { label: "AI知识库应用", value: "2" },
	  ]);
	  
	  const gptSoftOption = ref(null);
	  
	  const gptSoftOptions = ref([
	    { label: "工作", value: "1" },
	    { label: "生活", value: "2" },
		{ label: "客服", value: "3" },
		{ label: "数字人", value: "4" },
		{ label: "动漫", value: "5" },
		{ label: "娱乐", value: "6" },
		{ label: "绘画", value: "7" },
		{ label: "其它", value: "8" },
	  ]);
	  
	  let rolesList = ref([]); // 上传文件列表
	  
	  onMounted(() => {
	  		handleRoleList(1); 
			getKsnowledgeList(1);
	  });
	  
	  let knowledgeBase = ref([]);
	  
	  let knowledgeBaseList = ref([]);
	  
	  function addSoftDialog(){
		 //form = ref({
		 //		gptType:null,
		 //       softName: "",
		  //      softDesc: "",
		  //      softContent: "",
		  //      softIcon: "",
		 //		softType: null,
		  //      isPublic: null,
		 //       softPromot: "",
		 //		ksnowledgeBase: null,
		  // });
		 addSoftDialogVisible.value=true;
	  }
	  
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
	  
	  async function  toKnowledgePage(){
	  		router.push({
	  		     path: "/knowledge",
	  		});
	  }
	  
	  function getGptTypeSelect(event) {
		  
	  		let value = uform.value;
			uform.value.gptType=gptOption.value;
	  		if(gptOption.value==1){
	  			ushowFormItem.value=false;
	  		}else{
	  			ushowFormItem.value=true;
	  		}
	  		  
	  }
	  
	  function getSoftTypeSelect(event) {
			uform.value.softType=gptSoftOption.value;
	  }
	  
	 function getKnowledgeSelect(event) {
        let kvargs=[...new Set(knowledgeBase.value)];
		knowledgeBase.value=kvargs;
		uform.value.ksnowledgeBase=kvargs;
			
	  }
	  
	  
	  
      function onItem(data) {
        if (!store.getters.userinfo) return (loginVisible.value = true);
        updateSoftDialogVisible.value=true;
		editeStatus.value=true;
		oldItem.value=data;
		uform.value=data;
		console.log(uform.value);
		if(data.gptType==1){
			ushowFormItem.value=false;
		}else{
			ushowFormItem.value=true;
		}
		if(data.isPublic==1){
			switchValue.value=true;
		}else{
			switchValue.value=false;
		}
		uform.value.ksnowledgeBase=data.ksnowledgeBase;
		
		gptOption.value=gptOptions.value[data.gptType-1];
		gptSoftOption.value=gptSoftOptions.value[data.softType-1];
		knowledgeBase.value=[];
		let knid=data.ksnowledgeBase.split(",");
		for (let i = 0; i < knid.length; i++) {
		   let ids= parseInt(knid[i]);
		   knowledgeBase.value.push(ids);
		}
		
	}	
	  
	  async  function handleRoleList(pageNum) {
	     if (!store.getters.userinfo) return (loginVisible.value = true);
	     try {				
	   	  let res = await getMyRoleList("pageNum="+pageNum); 
	   	   if (res) {
	   	      myrolesList.value = res.records;
	   	   } 
	   	  }catch (e) {  
	           
	         }
	    }
		
		
	async  function getKsnowledgeList(pageNum) {
	   if (!store.getters.userinfo) return (loginVisible.value = true);
	   try {				
	 	  let res = await getMyKsnowledgeList("pageNum="+pageNum); 
	 	   if (res) {
	 	      knowledgeBaseList.value = res.records;
	 	   } 
	 	  }catch (e) {  
	         
	       }
	  }
	  
	  
	  function handleUploadSuccess(response, file, fileList) {
	        // 上传成功回调函数
	        // 处理上传成功后的逻辑
			form.value.softIcon=response.data;
			uform.value.softIcon=response.data;
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
		if (value.gptType==1) {
		    value.ksnowledgeBase='0';
		}else{
		  if (!value.ksnowledgeBase) {
		    ElNotification({
		      title: "错误",
		      message: "知识库不能为空！",
		      type: "error",
		    });
		    return;
		  }		
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
		  addSoftDialogVisible.value=false;
		  handleRoleList(1);
	    } catch (e) {
	      ElNotification({
	        title: "错误",
	        message: e,
	        type: "error",
	      });
	    }
	  }
	  
	  async function onDeleteSubmit(deletId){
		  await ElMessageBox({
		    title: "提示",
		    message: "删除应用会删除相关数据，不可恢复，请慎重操作，是否确定要删除?",
		    confirmButtonText: "确定",
		    cancelButtonText: "再想想",
		    showCancelButton: true,
		    type: "warning",
		  });
		  let data="dtoid="+deletId;
		  await deleteGptSoft(data);
		  ElLoading.service().close();
		  ElNotification({
		    title: "成功",
		    message: "创建成功",
		    type: "success",
		  });
		  updateSoftDialogVisible.value=false;
		  handleRoleList(1);
	  }
	  
	  async function onUpdateSubmit() {
	    let value = uform.value;
	    if (!value.gptType) {
	      ElNotification({
	        title: "错误",
	        message: "应用类型不能为空2！",
	        type: "error",
	      });
	      return;
	    }
		
		if (value.gptType==1) {
		    value.ksnowledgeBase='0';
		}else{
		  if (!value.ksnowledgeBase) {
		    ElNotification({
		      title: "错误",
		      message: "知识库不能为空！",
		      type: "error",
		    });
		    return;
		  }		
		}
		
	    if (!value.softName) {
	      ElNotification({
	        title: "错误",
	        message: "应用名称不能为空！"+value.softName,
	        type: "error",
	      });
	      return;
	    }
	  
	    if (!value.softDesc) {
	      ElNotification({
	        title: "错误",
	        message: "应用描述不能为空！"+value.softDesc,
	        type: "error",
	      });
	      return;
	    }
	    if (!value.softContent) {
	      ElNotification({
	        title: "错误",
	        message: "应用开场白不能为空！"+value.softContent,
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
		  
		  
		  //if (knowledgeBase.value&&value.gptType==2) {
		  	//if(knowledgeBase.value!=value.ksnowledgeBase){
		  //	   value.ksnowledgeBase=knowledgeBase.value;
		  	//}
		 // }
		  
		  if(switchValue.value){
			  value.isPublic=1;
		  }else{
		  	  value.isPublic=0;
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
	      await updateGptSoft(value);
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
		beforeUpload,
		gptTypeSelect,
		getGptTypeSelect,
		showFormItem,
		ushowFormItem,
		knowledgeBaseList,
		knowledgeBase,
		myrolesList,
		handleRoleList,
		editeStatus,
		gptOptions,
		gptSoftOptions,
		gptSoftOption,
		gptOption,
		addSoftDialog,
		updateGptSoft,
		onUpdateSubmit,
		gptType,
		switchValue,
		onDeleteSubmit,
		getMyKsnowledgeList,
		getSoftTypeSelect,
		getKnowledgeSelect,
		toKnowledgePage,
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
	margin-top: 70px;
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
