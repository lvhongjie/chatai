<template>
  
 <el-dialog v-model="drawDialogVisible" class="el-dialog" style="  background-color: rgb(29, 32, 34);" align-center="true"
            width="450px" height="520px" >
   <div class="iframe-container" id="myIframeContainer">
       <iframe ref="myIframe"  style="border: 0px;padding: 0px;" src="/draw/#/pages/draw/drawmj"></iframe>
   </div>
 </el-dialog>
 
 <ViewState
   v-if="!islogin"
   Type="error"
   ErrorText="登录后才能进行绘画"
   IsShowBottom
   ButtonText="登录"
   @ClickTheButton="loginVisible = true" />
 
  <div v-else class="body">
	
	<div style="padding: 5px;align:right;" v-if="islogin">
	<img src="../assets/add-picture.svg" class="floating-ball"
	     @click="drawDialogVisible=true">
	</div>

    <div class="container">
      <div class="content">
	   <div class="container1">
            <div>
                <img :src="imageData" v-if="imageData">
           </div>
   
		    <!-- 左侧内容 
	       <div class="left">
			 <div class="iframe-container" id="myIframeContainer">
			     <iframe ref="myIframe"  style="border: 0px;" src="/draw"></iframe>
			   </div>
	       </div>-->
	        <div class="right">
	        
			<div class="image-list">
				<div v-for="(item,index) in imagesList" :key="index"  class="image-item" @click="openModal(item)">
				  <img :src="item.generateUrl"  class="image" />
				</div>
			    <div  :id="index" v-for="(item,index) in images" :key="index" class="image-item">
				  <img :src="item.image" :alt="item.alt " class="image"  @click="openModal(item)"/>
			      <div id="option" style="color: #1f1f1f;align-items: center;margin-top: 6px;margin: 6px;" v-if="item.imageType===1" >
					  <font size="2"> 放大:</font>  <button  @click="generateUpic('U','U1',item.drawingId)" class="ubutton"  type="primary">U1</button>  
					    <button  @click="generateUpic('U','U2',item.drawingId)" class="ubutton"  type="primary">U2</button> 
					    <button  @click="generateUpic('U','U3',item.drawingId)" class="ubutton"  type="primary">U3</button> 
					    <button  @click="generateUpic('U','U4',item.drawingId)" class="ubutton"  type="primary">U4</button> 
				  </div>
				  <div id="option" style="color: #1f1f1f;align-items: center;margin-top: 6px;margin: 6px;" v-if="item.imageType===1" >
				  	  <font size="2"> 变换:</font>	 <button  @click="generateUpic('V','V1',item.drawingId)" class="ubutton"  type="primary">V1</button>  
				  		<button  @click="generateUpic('V','V2',item.drawingId)" class="ubutton"  type="primary">V2</button> 
				  		<button  @click="generateUpic('V','V3',item.drawingId)" class="ubutton"  type="primary">V3</button> 
				  		<button  @click="generateUpic('V','V4',item.drawingId)" class="ubutton"  type="primary">V4</button> 
				  </div>
				  <div id="option" style="color: #1f1f1f;align-items: center;margin-top: 6px;margin: 6px;" v-if="item.imageType===2" >
				  	  <font size="2"> 调整:</font>	 <button  @click="generateUpic('VARY','high_variation',item.drawingId)" class="ubutton" style="width: 80px;"  type="primary">Vary(Strong)</button>  
				  		<button  @click="generateUpic('VARY','low_variation',item.drawingId)" class="ubutton" style="width: 80px;"  type="primary">Vary(subtle)</button> 
				  </div>
				  <div id="option" style="color: #1f1f1f;align-items: center;margin-top: 6px;margin: 6px;" v-if="item.imageType===2" >
				  	    <font size="2">	 缩放:</font>
						 <button  @click="generateUpic('Z','75',item.drawingId)" class="ubutton" style="width: 53px;"  type="primary">z-1x</button>  
						<button  @click="generateUpic('Z','75',item.drawingId)" class="ubutton" style="width: 53px;"  type="primary">z-1.5x</button>  
				  		<button  @click="generateUpic('Z','50',item.drawingId)" class="ubutton" style="width: 53px;"  type="primary">z-2x</button> 
				  </div>
				  <div  id="option" style="color: aliceblue;align-items: center;margin-top: 6px;margin: 6px;">
				  	    <font size="2">	 操作:</font>
				  		<button  @click="dellFile(item.drawingId,index)" class="ubutton" style="width: 53px;"  type="primary">删除</button>  
				  		<button  @click="downFile(item.image)" class="ubutton" style="width: 53px;"  type="primary">下载</button>  
				  		<button  @click="generateUpic('REROLL','REROLL',item.drawingId)" class="ubutton" style="width: 53px;"  type="primary" v-if="item.imageType===1">重绘</button> 
				  </div>
				</div>
				
			 </div>
			 <div class="modal" v-show="showModal">
				  <div class="modal-content" ref="modalContent" >
			         <img :src="selectedImage.image" :class="{ 'enlarged': enlarged }" @click="closeModal"/>
                 </div>
			 </div>
			
	       </div>
	     </div>
		
      </div>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false"/>
</template>

<script>
import ViewState from "@/components/ViewState.vue";
import {onMounted, ref} from "vue";
import axios from 'axios';
import {Promotion, Star} from "@element-plus/icons-vue";
import {ElMessageBox, ElNotification} from "element-plus";
import LoginDialog from "@/components/LoginDialog.vue";
import store from "@/store";
import {conversionTime} from "@/utils/date";
import {MySelftImages, MySelftOneImages,generateUpicAPI} from "../../api/BSideApi";

//import { client } from "@gradio/client";

export default {
	name: "DoingMJDraw",
	methods: {conversionTime},
	computed: {
	    store() {
	      return store
	    }
	    
	},
	components: {LoginDialog, Star, Promotion, ViewState},
	setup() {
	 let load = ref(false)
	 let empty = ref(false)
	 let error = ref(false)	
	 let images = ref([])
	 let imagesList = ref([])
	 let seeIndex = ref(-1)
	 let loginVisible = ref(false)
	 const dialogFormVisible = ref(false);
	 let socket = ref(null);
	 let loadingimg = ref(false)
	 const showModal= ref(false)
	 const showConfirmation= ref(false)
	 const imageloding=ref({
	 		 generateUrl:require('../assets/loadimg.svg'),
	 			 image:require('../assets/loadimg.svg'),
	 		 alt:"绘画生成中"
	 })
	 const image={
		 image:"",
		 alt:""
	 }
	 const selectedImage=ref(image)
	 const enlarged= ref(false)
	 let islogin=ref(false)
	  
	 onMounted(() => {
	     if (store.getters.userinfo){
			 handleMySelftImages(1);
			 getDrawinfo(); 
		 } else{
			handleMyPublictImages(1);
		 } 
		 
	 });
	 
	 
	 
	async function handleMySelftImages(pageNum) {
	  localStorage.setItem("mjdrawjonbid",0);
	  let token=localStorage.getItem("token")
	  if(token!=null){
	  	islogin.value=true
	  }
	  try {
		  load.value = true
		  let res = await MySelftImages(pageNum+"&type=3")
		   if (res.length) {
		     images.value = res.concat(images.value);
		   }else {
             empty.value = true
           }
            load.value = false
            error.value = false
		  }catch (e) {  
            load.value = false
            error.value = true
          }
		  
     }
	 
     async function handleMyPublictImages(pageNum) {
        localStorage.setItem("mjdrawjonbid",0);
      }
	   
	 function openModal(image) {
	       this.selectedImage = image;
	       this.showModal = true;
	       this.enlarged = true;
	 }
	 
	function  downFile(imageUrl){
		// 创建一个a标签
		 const link = document.createElement('a');
		 // 获取图片URL
		link.href = imageUrl;
		const downfilename = Date.now();
		// 设置a标签的download属性为图片文件名，可选
		link.download = downfilename+'.png'; // 替换为你想要的图片文件名
		// 触发点击事件，开始下载图片
		link.click();
		link.remove();
		
	}
	
	async function  dellFile(imgid,index){
		await ElMessageBox({
		  title: "提示",
		  message: "确定要删除?",
		  confirmButtonText: "确定",
		  cancelButtonText: "再想想",
		  showCancelButton: true,
		  type: "warning",
		});
		axios.defaults.headers.common['Token'] = localStorage.getItem('token');
		 axios.get('/pcdrawing/draw/delete?drawingId='+imgid)
		     .then(response => {
				const imag =document.getElementById(index);
				imag.remove();	 
			 }).catch(error => {
				// 处理请求错误
				console.error(error);
			});	 
	
		
	}
	 
	 function generateUpic(modelName,comand,drawid){ 
		 let formData ={
			 prompt:comand,
			 sd_model_hash:modelName,
			 sampler_name:"0",
			 cfg_scale:0,
			 steps:0,
			 theStyleRate:"0",
			 hr_upscaler:"0",
			 negative_prompt:"",
			 width:0,
			 height:0,
			 drawid:drawid,
		 }
		 console.log("formData=="+formData.drawid)
		 axios.defaults.headers.common['Token'] = localStorage.getItem('token');
		 axios.post('/pcdrawing/mj/text',formData)
		      .then(response => {
				localStorage.setItem("mjdrawjonbid",response.data.data.drawingId);
				console.log("asnwer drawingId=="+response.data.data.drawingId);
			 
			 }).catch(error => {
				  // 处理请求错误
				  console.error(error);
			});	 		 
		 
	 }
	 
	 function closeModal() {
	       this.showModal = false;
		   console.log("log ===closeModal===")
	 }

	   function getDrawinfo() {
		 setInterval(() => {
		   // 发送请求
		    let drawjonbid= localStorage.getItem("mjdrawjonbid")
		    console.log("res.data.drawingId=="+drawjonbid)
		    if(drawjonbid>0){
		 	  //let res =  MySelftOneImages(drawjonbid)
			  axios.defaults.headers.common['Token'] = localStorage.getItem('token');
              axios.get('/pcdrawing/image/data?drawingId='+drawjonbid)
			          .then(response => {
			            // 处理响应数据
						console.log(response.data);
						console.log("response.data===="+response.data.data.length);
						if (response.data.data.length > 0) {
							loadingimg.value=false;
							imagesList.value.shift();
							images.value = response.data.data.concat(images.value);
							localStorage.setItem("mjdrawjonbid",0);
						}else{
							if(!loadingimg.value){
							  loadingimg.value=true;
							  imagesList.value.unshift(imageloding.value)	
							}
							
						}
			          })
			          .catch(error => {
			            // 处理请求错误
			            console.error(error);
			          });
					  
			 
		     }
		 
		 }, 3000)// 10秒
	     
	 	}

    const drawDialogVisible = ref(false)
	
	return {
	  images,
	  imagesList,
	  drawDialogVisible,
	  dialogFormVisible,
	  showModal,
	  selectedImage,
	  loginVisible,
	  enlarged,
	  openModal,
	  closeModal,
	  getDrawinfo,
	  handleMySelftImages,
	  islogin,
	  generateUpic,
	  downFile,
	  dellFile,
	  showConfirmation,
	}
  },
  
}


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

@media (max-width: 767px) {
  .container {
    padding: 0;
  }

  .list:first-child {
    margin-top: 30px;
  }
  
  .image-list {
   column-count: 1; /* 列数 */
   column-gap: 0px; /* 列之间的间距 */
   margin: 16px;
  }
}

@media (min-width: 768px) {
	.image-list {
	 column-count: 5; /* 列数 */
	 column-gap: 10px; /* 列之间的间距 */:
	 margin: 10px;
	}
	
	.image-item {
	  display: inline-block;
	  width: 252px; /* 图片宽度 */
	  margin-bottom: 15px; /* 图片下方间距 */
	  border: 3px solid #fafafa;
	  border-radius: 5px;
	}
	
 }

.container {
  animation: explainAnimation 0.3s;
  max-width: 1390px;
  max-height: 1850px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 100px;
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
  width: 240px;
  height: 160px;
  background-color: #ffffff;
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 15px;
  color: #fafafa;
  padding: 20px;
  box-shadow: 0 5px 7px rgba(35, 35, 35, 0.06);
}

.item:hover {
  background-color: rgb(62, 61, 61);
  cursor: pointer;
  transition: background-color .2s;
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0;
  }

  .list:first-child {
    margin-top: 30px;
  }
  
  .image-item {
    display: inline-block;
    width: 350px; /* 图片宽度 */
    margin-bottom: 15px; /* 图片下方间距 */
	border: 5px solid #fafafa;
  }
}

.container1 {
  display: flex;
}

.left {
  width: 35%;
  flex: 1;
  /* 左侧样式 */
}

.right {
  flex: 1;
  width: 65%;
  /* 右侧样式 */
}

.iframe-container {
  width: 100%;
  height: 650px;
}

iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px; /* 设置圆角的像素值 */
  overflow: hidden; /* 隐藏超出圆角的部分 */
}




.image-item img {
      width: 100%; /* 图片宽度自适应 */
      height: auto; /* 图片高度自适应 */
      object-fit: cover; /* 图片等比缩放填充 */
	  border-radius: 5px;
 }

.image {
  width: 100%;
  height: auto;
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

.el-dialog {
  border-radius: 10px
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center
}

.logo img {
  width: 50px;
  height: 50px
}

.title {
  text-align: center;
  font-size: 15px;
  padding-top: 20px;
  color: #d0d0d0;
  font-weight: 550;
  padding-bottom: 40px;
}


.row {
  padding: 20px;
  margin: 10px 30px;
  background-color: black;
  border-radius: 5px
}

.line {
  margin-top: 8px;
  display: flex;

  align-items: flex-start;
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  z-index: 999;
}



.modal-content {
  max-width: 95%;
  max-height: 95%;
}

.modal img {
  max-width: 100%;
  max-height: 100%;
}

.enlarged {
  width: auto;
  height: 700px;
  max-width: 90%;
  max-height: 90%;
  cursor: zoom-out;
}


.ubutton{
 width: 17%;	
 background-color: #fafafa;	
 color: #c8c9cc;
 margin-left: 6px;
}

</style>
