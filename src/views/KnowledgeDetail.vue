<template>
  
  <el-dialog v-model="addKonowlegeDialogVisible" class="el-dialog"  align-center="true"
               width="630px" height="380px" >
    <div  style="margin-bottom: 10px;margin-left: 6px;font-size: 1.6em">添加文件</div>

    <div style="border: 0.8px solid #eff0f0;whidth:100%;padding: 20px;height: 230px;">  
    
	<el-container>
	  <el-header>
					   
					     <el-row :gutter="20">
					       <el-col :span="6">
							   <div :class="classaq" style="cursor: pointer;" @click="uoloadFile(1)">
								  <div  class="icon-box"><svg  t="1694424799739" class="icon" viewBox="0 0 1091 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22353" width="25" height="25"><path d="M283.822359 755.985925a352.635762 352.635762 0 1 0 498.693573-498.71098 352.635762 352.635762 0 1 0-498.693573 498.71098Z" fill="#E9EAEB" p-id="22354"></path><path d="M967.035762 412.312583v298.384106c0 23.056954-17.631788 40.688742-40.688742 40.688741h-40.688742v105.790729c0 12.206623-16.275497 18.988079-24.413245 8.137748L732.397351 751.38543H533.022517c-23.056954 0-40.688742-17.631788-40.688742-40.688741v-298.384106c0-23.056954 17.631788-40.688742 40.688742-40.688742h393.324503c21.700662 0 40.688742 17.631788 40.688742 40.688742z" fill="#A3D4FF" p-id="22355"></path><path d="M870.739073 884.301987c-8.137748 0-14.919205-2.712583-20.344371-9.49404l-123.422517-111.215894H533.022517c-29.838411 0-54.251656-24.413245-54.251656-54.251656v-298.384106c0-29.838411 24.413245-54.251656 54.251656-54.251655h393.324503c29.838411 0 54.251656 24.413245 54.251655 54.251655v298.384106c0 29.838411-24.413245 54.251656-54.251655 54.251656h-27.125828v92.227815c0 12.206623-6.781457 21.700662-17.631788 25.769536-4.068874 1.356291-6.781457 2.712583-10.850331 2.712583zM533.022517 385.186755c-14.919205 0-27.125828 12.206623-27.125828 27.125828v298.384106c0 14.919205 12.206623 27.125828 27.125828 27.125828h204.8l134.272847 119.353642v-119.353642h54.251656c14.919205 0 27.125828-12.206623 27.125828-27.125828v-298.384106c0-14.919205-12.206623-27.125828-27.125828-27.125828h-393.324503z" fill="#2A5082" p-id="22356"></path><path d="M804.280795 656.445033h-27.125828v-135.629139c0-14.919205-12.206623-27.125828-27.125828-27.125828h-13.562914c-14.919205 0-27.125828 12.206623-27.125828 27.125828v135.629139h-27.125827v-135.629139c0-29.838411 24.413245-54.251656 54.251655-54.251656h13.562914c29.838411 0 54.251656 24.413245 54.251656 54.251656v135.629139z" fill="#2A5082" p-id="22357"></path><path d="M695.777483 561.504636h94.940398v27.125828h-94.940398z" fill="#2A5082" p-id="22358"></path><path d="M126.135099 276.683444v298.384106c0 23.056954 17.631788 40.688742 40.688742 40.688741h40.688742v105.790729c0 12.206623 16.275497 18.988079 24.413245 8.137748l128.847682-115.284768h200.731126c23.056954 0 40.688742-17.631788 40.688741-40.688742v-298.384106c0-23.056954-17.631788-40.688742-40.688741-40.688741h-393.324504c-24.413245 1.356291-42.045033 18.988079-42.045033 42.045033z" fill="#FFFFFF" p-id="22359"></path><path d="M221.075497 748.672848c-2.712583 0-6.781457 0-9.49404-1.356292-10.850331-4.068874-17.631788-13.562914-17.631788-25.769536v-92.227815h-27.125828c-29.838411 0-54.251656-24.413245-54.251656-54.251655v-298.384106c0-29.838411 24.413245-54.251656 54.251656-54.251656h393.324503c29.838411 0 54.251656 24.413245 54.251656 54.251656v298.384106c0 29.838411-24.413245 54.251656-54.251656 54.251655H364.842384l-123.422516 111.215894c-6.781457 4.068874-13.562914 8.137748-20.344371 8.137749z m-54.251656-499.115232c-14.919205 0-27.125828 12.206623-27.125828 27.125828v298.384106c0 14.919205 12.206623 27.125828 27.125828 27.125827h54.251656v119.353643l1.356291-1.356292 131.560265-117.997351h204.8c14.919205 0 27.125828-12.206623 27.125828-27.125827v-298.384106c0-14.919205-12.206623-27.125828-27.125828-27.125828H166.823841z" fill="#2A5082" p-id="22360"></path><path d="M370.26755 520.815894h-27.125828c-29.838411 0-54.251656-24.413245-54.251656-54.251656v-81.377483c0-29.838411 24.413245-54.251656 54.251656-54.251656h27.125828c29.838411 0 54.251656 24.413245 54.251655 54.251656v81.377483c0 29.838411-24.413245 54.251656-54.251655 54.251656z m-27.125828-162.754967c-14.919205 0-27.125828 12.206623-27.125828 27.125828v81.377483c0 14.919205 12.206623 27.125828 27.125828 27.125828h27.125828c14.919205 0 27.125828-12.206623 27.125827-27.125828v-81.377483c0-14.919205-12.206623-27.125828-27.125827-27.125828h-27.125828z" fill="#2A5082" p-id="22361"></path><path d="M373.698967 474.837616l19.17796-19.17796 54.658543 54.658543-19.164397 19.191523z" fill="#2A5082" p-id="22362"></path></svg>
								  <strong style="margin-left: 5px;cursor: pointer;">问答文档</strong>
								  </div>
							   <div style="font-size: 0.3em;color: black;margin-top: 6px;margin-left: 10px;">
							   		
							   </div>
							   </div>
							   
							   
							</el-col>
					       <el-col :span="6">
							   <div :class="classnoaq" style="cursor: pointer;" @click="uoloadFile(2)">
								   <div data-v-3f9652f6="" class="icon-box"><i data-v-3f9652f6="" class="el-icon"><svg data-v-3f9652f6="" t="1694023588060" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25109" width="25" height="25"><path d="M146.863158 0h538.947368l296.421053 296.421053v619.789473c0 59.284211-48.505263 107.789474-107.789474 107.789474H146.863158c-59.284211 0-107.789474-48.505263-107.789474-107.789474V107.789474c0-59.284211 48.505263-107.789474 107.789474-107.789474z" fill="#2F77F1" p-id="25110"></path><path d="M688.505263 0l296.421053 296.421053h-296.421053V0zM549.726316 661.557895H142.821053c-14.821053 0-25.6-12.126316-25.6-25.6V633.263158c0-14.821053 12.126316-25.6 25.6-25.6h406.905263c13.473684 0 25.6 12.126316 25.6 25.6v2.694737c0 13.473684-10.778947 25.6-25.6 25.6z m-134.736842-350.31579H142.821053c-14.821053 0-25.6-10.778947-25.6-25.6V282.947368c0-14.821053 12.126316-25.6 25.6-25.6h272.168421c13.473684 0 25.6 12.126316 25.6 25.6v2.694737c0 13.473684-10.778947 25.6-25.6 25.6z m-272.168421 121.263158h245.221052c13.473684 0 25.6 12.126316 25.6 25.6v2.694737c0 13.473684-12.126316 25.6-25.6 25.6H142.821053c-14.821053 0-25.6-10.778947-25.6-25.6V458.105263c0-14.821053 12.126316-25.6 25.6-25.6z" fill="#AFFCFE" p-id="25111"></path></svg></i>
								   <strong style="margin-left: 5px;cursor: pointer;">无结构文档</strong>
								   </div>
								   <div style="font-size: 0.3em;color: black;margin-top: 13px;margin-left: 10px;">
								   		
								   </div>
								   
							   </div>
							   
							</el-col>
					     </el-row>
					   
					</el-header>
	  <el-main>
	  </el-main>
	  
	</el-container>
	
	<div style="width: 100%;">
      <el-scrollbar height="50%">
        <el-form  class="demo-form-inline" label-position="left">
  		<el-form-item label="文件名称：" label-width="100px">
  		  <el-input
  		    placeholder="起一个以能表达文件的内容的名称"
  			v-model="fileName"
  		    clearable
  		  />
  		  
  		</el-form-item>
  		
        </el-form>
  
        <div class="btn-container">
  		<el-button color="#626aef" style="width: 100px" @click="addFileBytext" 
  		  >确认</el-button>
        </div>
      </el-scrollbar>
    </div>	  
  	   
      </div>
    </el-dialog>
  
  <el-dialog v-model="updateSoftDialogVisible" class="el-dialog"  align-center="true"
               width="630px" height="680px" >
    <div v-if="cid==''" style="margin-bottom: 10px;margin-left: 6px;font-size: 1.6em">添加分段({{fileName}})</div>
    <div v-else style="margin-bottom: 10px;margin-left: 6px;font-size: 1.6em">编辑分段</div>
    
    <div style="border: 0.8px solid #eff0f0;whidth:100%;padding: 20px;height: 500px;">  
    <div style="width: 100%;">
      <el-scrollbar height="100%">
        <el-form  class="demo-form-inline" label-position="left">
  		<el-form-item label="关键词：" label-width="100px">
  		  <el-input
  		    placeholder="填写关键词，以 , 分开"
  			v-model="keywords"
  		    clearable
  		  />
  		  
  		</el-form-item>
  		<el-form-item v-if="filetype===2" label="内容：" label-width="100px">
  		      <el-input
  		        type="textarea"
  		        v-model="content"
  		        :rows="10"
  		        placeholder="必填项,请填写分段的详细内容"
  		        :maxlength="1300"
  		        show-word-limit
  		      ></el-input>
  		</el-form-item>
		<el-form-item v-else  label="问题：" label-width="100px">
		      <el-input
		        type="textarea"
		        v-model="content"
		        :rows="2"
		        placeholder="必填项,请填写分段的详细内容"
		        :maxlength="300"
		        show-word-limit
		      ></el-input>
		</el-form-item>
  		
  		<el-form-item label="答案：" label-width="100px">
  		      <el-input
  		        type="textarea"
  		        v-model="answer"
  		        :rows="5"
  		        placeholder="非必填,问题模式时必须填写"
  		        :maxlength="1300"
  		        show-word-limit
  		      ></el-input>
  		</el-form-item>
  	
        </el-form>
  
        <div class="btn-container">
  		<el-button color="#626aef" style="width: 100px" @click="updateContents" 
  		  >保存分段</el-button>
        </div>
      </el-scrollbar>
    </div>	  
  	   
      </div>
    </el-dialog>
  
  <div class="body"> 
    <div class="leftDialog">
        <div class="header">
        		 <div class="switch-button">
                  <div
                    active-class="switch-active"
                    class="switch-item"
					:style="{
						'background-color': 
						0 === lastIndex
						  ? '#eff0f0': '#fafafa',
						 }"
                  >
        			<div  @click="swicht(0)" class="switch-item-title">
					<div style='margin-top: 0px;margin-left: 9px;'>

					</div>
					<div  style='
					  cursor: pointer;
					  white-space: nowrap; /* 禁止文字换行 */
					  overflow: hidden; /* 隐藏超出容器的部分 */
					  text-overflow: ellipsis; /* 使用省略号代替超出部分 */
					  width: 130px;
					  margin-left: 10px;
					'>
					  文件列表
					</div>
					</div>
                  </div>
				  
				  <div
				    active-class="switch-active"
				    class="switch-item"
				  					:style="{
				  						'background-color': 
				  						1 === lastIndex
				  						  ? '#eff0f0': '#fafafa',
				  						 }"
				  >
				          			<div  @click="swicht(1)" class="switch-item-title">
				  					<div style='margin-top: 0px;margin-left: 9px;'>
				  
				  					</div>
				  					<div  style='
									 cursor: pointer;
				  					  white-space: nowrap; /* 禁止文字换行 */
				  					  overflow: hidden; /* 隐藏超出容器的部分 */
				  					  text-overflow: ellipsis; /* 使用省略号代替超出部分 */
				  					  width: 130px;
				  					  margin-left: 10px;
				  					'>
				  					  文件导入
				  					</div>
				  					</div>
				  </div>
				  
				  <div v-if="false"
				    active-class="switch-active"
				    class="switch-item"
				  					:style="{
				  						'background-color': 
				  						2 === lastIndex
				  						  ? '#eff0f0': '#fafafa',
				  						 }"
				  >
				          			<div  @click="swicht(2)" class="switch-item-title">
				  					<div style='margin-top: 0px;margin-left: 9px;'>
				  
				  					</div>
				  					<div  style='
									  cursor: pointer;
				  					  white-space: nowrap; /* 禁止文字换行 */
				  					  overflow: hidden; /* 隐藏超出容器的部分 */
				  					  text-overflow: ellipsis; /* 使用省略号代替超出部分 */
				  					  width: 130px;
				  					  margin-left: 10px;
				  					'>
				  					  搜索测试
				  					</div>
				  					</div>
				  </div>
				  
				  <div
				    active-class="switch-active"
				    class="switch-item"
				  					:style="{
				  						'background-color': 
				  						3 === lastIndex
				  						  ? '#eff0f0': '#fafafa',
				  						 }"
				  >
				          			<div  @click="swicht(3)" class="switch-item-title">
				  					<div style='margin-top: 0px;margin-left: 9px;'>
				  
				  					</div>
				  					<div  style='
									  cursor: pointer;
				  					  white-space: nowrap; /* 禁止文字换行 */
				  					  overflow: hidden; /* 隐藏超出容器的部分 */
				  					  text-overflow: ellipsis; /* 使用省略号代替超出部分 */
				  					  width: 130px;
				  					  margin-left: 10px;
				  					'>
				  					  信息配置
				  					</div>
				  					</div>
				  </div>
				  
                </div>
    </div>
				
	</div>
	<div  class="rightbox">
    
	<div v-if="lastIndex===0"  class="rightDialog">
    <div v-if="isContent===0">
	  
	  <div>
		 <el-button  @click="onAddSubmit(uform.id)" color="#626aef" style="margin-bottom: 10px;margin-left: 90%;width: 100px;background-color: #7171ff;"
		   >+创建文件</el-button>
	  </div>
	  <el-table :data="FileDatas"  style="width: 100%">
	    <el-table-column fixed type="index" :index="indexMethod" label="序号" width="80"/>
		<el-table-column v-if="false"  prop="id" label="序号" width="80" />
	    <el-table-column prop="fileName" label="文件" width="600" />
	    <el-table-column pfixedrop="fileSize" label="大小(KB)" width="120" >
			<template #default="scope">
			{{Math.floor(scope.row.fileSize/1000)}}
			</template>
		 </el-table-column>
	    <el-table-column prop="fileTokens" label="Tokens" width="120" />
	    <el-table-column prop="updateTime" label="更新时间" width="180" />
	    <el-table-column prop="status" label="状态" width="120" />
	    <el-table-column fixed="right" label="操作" width="150">
	      <template #default="scope">
			<el-icon size="18" style="cursor: pointer;" @click="lookClick(scope.row.id,scope.row.fileType)"><View /></el-icon>
			<el-icon size="18" style="margin-left: 20px;cursor: pointer;" @click="addContentClick(scope.row.id,scope.row.fileName,scope.row.fileType)"><DocumentAdd /></el-icon>
			<el-icon size="18" style="cursor: pointer;margin-left: 20px;color:darkred" @click="deleteClick(scope.row.id)"><Delete /></el-icon>
		  
		  </template>
	    </el-table-column>
	   </el-table>

    </div>
	<div v-else>
	  
	   <el-table :data="fileListDatas" style="width: 100%">
	     <el-table-column v-if="false" prop="id" label="序号" width="80" />
	     <el-table-column  type="index"  :index="indexMethod" label="序号" width="80"/>
	   	 <el-table-column prop="keywords" label="关键词" width="200" />
	     <el-table-column prop="content" label="内容" width="600" />
	     <el-table-column prop="answer" label="答案" width="220" />
	     <el-table-column fixed="right" label="操作" width="160">
	       <template #default="scope">
		     
			 <el-icon size="18" style="cursor: pointer;" @click="contentClick(dcumentId,scope.row.id,scope.row.keywords,scope.row.content,scope.row.answer)"><Edit /></el-icon>
			 
			 <el-icon size="18" style="cursor: pointer;margin-left: 20px;color:darkred" @click="deleteContent(dcumentId,scope.row.id)"><Delete /></el-icon>
		     		  
		   
		   </template>
	     </el-table-column>
	    </el-table>
		  
    </div>
	<div class="footer">
      
    
	</div>
	</div>
	
	
	<div v-if="lastIndex===1"  class="rightDialog">

           <div class="common-layout">
             <el-container>
               <el-header>
				   
				     <el-row :gutter="20">
				       <el-col :span="6">
						   <div :class="classaq" style="cursor: pointer;" @click="uoloadFile(1)">
							  <div  class="icon-box"><svg  t="1694424799739" class="icon" viewBox="0 0 1091 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22353" width="25" height="25"><path d="M283.822359 755.985925a352.635762 352.635762 0 1 0 498.693573-498.71098 352.635762 352.635762 0 1 0-498.693573 498.71098Z" fill="#E9EAEB" p-id="22354"></path><path d="M967.035762 412.312583v298.384106c0 23.056954-17.631788 40.688742-40.688742 40.688741h-40.688742v105.790729c0 12.206623-16.275497 18.988079-24.413245 8.137748L732.397351 751.38543H533.022517c-23.056954 0-40.688742-17.631788-40.688742-40.688741v-298.384106c0-23.056954 17.631788-40.688742 40.688742-40.688742h393.324503c21.700662 0 40.688742 17.631788 40.688742 40.688742z" fill="#A3D4FF" p-id="22355"></path><path d="M870.739073 884.301987c-8.137748 0-14.919205-2.712583-20.344371-9.49404l-123.422517-111.215894H533.022517c-29.838411 0-54.251656-24.413245-54.251656-54.251656v-298.384106c0-29.838411 24.413245-54.251656 54.251656-54.251655h393.324503c29.838411 0 54.251656 24.413245 54.251655 54.251655v298.384106c0 29.838411-24.413245 54.251656-54.251655 54.251656h-27.125828v92.227815c0 12.206623-6.781457 21.700662-17.631788 25.769536-4.068874 1.356291-6.781457 2.712583-10.850331 2.712583zM533.022517 385.186755c-14.919205 0-27.125828 12.206623-27.125828 27.125828v298.384106c0 14.919205 12.206623 27.125828 27.125828 27.125828h204.8l134.272847 119.353642v-119.353642h54.251656c14.919205 0 27.125828-12.206623 27.125828-27.125828v-298.384106c0-14.919205-12.206623-27.125828-27.125828-27.125828h-393.324503z" fill="#2A5082" p-id="22356"></path><path d="M804.280795 656.445033h-27.125828v-135.629139c0-14.919205-12.206623-27.125828-27.125828-27.125828h-13.562914c-14.919205 0-27.125828 12.206623-27.125828 27.125828v135.629139h-27.125827v-135.629139c0-29.838411 24.413245-54.251656 54.251655-54.251656h13.562914c29.838411 0 54.251656 24.413245 54.251656 54.251656v135.629139z" fill="#2A5082" p-id="22357"></path><path d="M695.777483 561.504636h94.940398v27.125828h-94.940398z" fill="#2A5082" p-id="22358"></path><path d="M126.135099 276.683444v298.384106c0 23.056954 17.631788 40.688742 40.688742 40.688741h40.688742v105.790729c0 12.206623 16.275497 18.988079 24.413245 8.137748l128.847682-115.284768h200.731126c23.056954 0 40.688742-17.631788 40.688741-40.688742v-298.384106c0-23.056954-17.631788-40.688742-40.688741-40.688741h-393.324504c-24.413245 1.356291-42.045033 18.988079-42.045033 42.045033z" fill="#FFFFFF" p-id="22359"></path><path d="M221.075497 748.672848c-2.712583 0-6.781457 0-9.49404-1.356292-10.850331-4.068874-17.631788-13.562914-17.631788-25.769536v-92.227815h-27.125828c-29.838411 0-54.251656-24.413245-54.251656-54.251655v-298.384106c0-29.838411 24.413245-54.251656 54.251656-54.251656h393.324503c29.838411 0 54.251656 24.413245 54.251656 54.251656v298.384106c0 29.838411-24.413245 54.251656-54.251656 54.251655H364.842384l-123.422516 111.215894c-6.781457 4.068874-13.562914 8.137748-20.344371 8.137749z m-54.251656-499.115232c-14.919205 0-27.125828 12.206623-27.125828 27.125828v298.384106c0 14.919205 12.206623 27.125828 27.125828 27.125827h54.251656v119.353643l1.356291-1.356292 131.560265-117.997351h204.8c14.919205 0 27.125828-12.206623 27.125828-27.125827v-298.384106c0-14.919205-12.206623-27.125828-27.125828-27.125828H166.823841z" fill="#2A5082" p-id="22360"></path><path d="M370.26755 520.815894h-27.125828c-29.838411 0-54.251656-24.413245-54.251656-54.251656v-81.377483c0-29.838411 24.413245-54.251656 54.251656-54.251656h27.125828c29.838411 0 54.251656 24.413245 54.251655 54.251656v81.377483c0 29.838411-24.413245 54.251656-54.251655 54.251656z m-27.125828-162.754967c-14.919205 0-27.125828 12.206623-27.125828 27.125828v81.377483c0 14.919205 12.206623 27.125828 27.125828 27.125828h27.125828c14.919205 0 27.125828-12.206623 27.125827-27.125828v-81.377483c0-14.919205-12.206623-27.125828-27.125827-27.125828h-27.125828z" fill="#2A5082" p-id="22361"></path><path d="M373.698967 474.837616l19.17796-19.17796 54.658543 54.658543-19.164397 19.191523z" fill="#2A5082" p-id="22362"></path></svg>
							  <strong style="margin-left: 5px;cursor: pointer;">问答文档</strong>
							  </div>
						   <div style="font-size: 0.3em;color: black;margin-top: 6px;margin-left: 10px;">
						   		问答对导入，更加准确
						   </div>
						   </div>
						   
						   
						</el-col>
				       <el-col :span="6">
						   <div :class="classnoaq" style="cursor: pointer;" @click="uoloadFile(2)">
							   <div data-v-3f9652f6="" class="icon-box"><i data-v-3f9652f6="" class="el-icon"><svg data-v-3f9652f6="" t="1694023588060" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25109" width="25" height="25"><path d="M146.863158 0h538.947368l296.421053 296.421053v619.789473c0 59.284211-48.505263 107.789474-107.789474 107.789474H146.863158c-59.284211 0-107.789474-48.505263-107.789474-107.789474V107.789474c0-59.284211 48.505263-107.789474 107.789474-107.789474z" fill="#2F77F1" p-id="25110"></path><path d="M688.505263 0l296.421053 296.421053h-296.421053V0zM549.726316 661.557895H142.821053c-14.821053 0-25.6-12.126316-25.6-25.6V633.263158c0-14.821053 12.126316-25.6 25.6-25.6h406.905263c13.473684 0 25.6 12.126316 25.6 25.6v2.694737c0 13.473684-10.778947 25.6-25.6 25.6z m-134.736842-350.31579H142.821053c-14.821053 0-25.6-10.778947-25.6-25.6V282.947368c0-14.821053 12.126316-25.6 25.6-25.6h272.168421c13.473684 0 25.6 12.126316 25.6 25.6v2.694737c0 13.473684-10.778947 25.6-25.6 25.6z m-272.168421 121.263158h245.221052c13.473684 0 25.6 12.126316 25.6 25.6v2.694737c0 13.473684-12.126316 25.6-25.6 25.6H142.821053c-14.821053 0-25.6-10.778947-25.6-25.6V458.105263c0-14.821053 12.126316-25.6 25.6-25.6z" fill="#AFFCFE" p-id="25111"></path></svg></i>
							   <strong style="margin-left: 5px;cursor: pointer;">无结构文档</strong>
							   </div>
							   <div style="font-size: 0.3em;color: black;margin-top: 13px;margin-left: 10px;">
							   		自动解析，使用方便
							   </div>
							   
						   </div>
						   
						</el-col>
				     </el-row>
				   
				</el-header>
               <el-main>
				<el-upload
				  class="upload-demo"
				  drag
				  :action="uploadFile"
				  :on-success="handleUpdateUploadSuccess"
				  :before-upload="beforeUpload"
				  :on-error="handleError"
				  multiple
				>
				  <el-icon class="el-icon--upload"><upload-filled /></el-icon>
				  <div class="el-upload__text"  style="font-size: 15px;">
				    拖入文件或 <em>点击上传</em> 
				  </div>
				
				    <div class="el-upload__tip" style="font-size: 15px;">
				      <div v-if="filetype===1">
					    支持 csv 格式文件,而且文档格式编码必须是要utf-8,可以用文本txt打开，另存时选择编码为utf-8。每次最多上传10个文件，单个大小不超过15M
						<br><br>
					   </div>
					  <div v-else>
						  已支持 TXT、 HTML、 Markdown、 PDF、 XLSX、CSV、DOCX，每个文件不超过 15MB。
						  				    
					  </div>
					  
					</div>
					（<a  href="https://chatmagic.oss-cn-shanghai.aliyuncs.com/painting/template202312.csv">下载模板</a>）
					
				</el-upload>   
			   
			   </el-main>
			   
             </el-container>
           </div>
	    

	  

	</div>
	
	<div v-if="lastIndex===2"  class="rightDialog">
		
      <div class="soft-container">
       <div class="s_container">
         <el-scrollbar height="100%">
           <el-form  class="demo-form-inline" label-position="left">	
       		<el-form-item label="查询内容：" label-width="150px">
       		      <el-input
       		        type="textarea"
       		        v-model="uform.knowledgeDesc"
       		        :rows="3"
       		        placeholder="介绍下你的知识库有什么内容"
       		        :maxlength="300"
       		        show-word-limit
       		      ></el-input>
       		</el-form-item>
      	
           </el-form>
      		
           <div class="btn-container">
      				<el-button color="#626aef" style="width: 100px" @click="onUpdateSubmit"
      				  >查询测试</el-button> 
           </div>
      			  
         </el-scrollbar>
       </div>	  
      			   
      </div>

	</div>
	
	<div v-if="lastIndex===3"  class="rightDialog">
		

		  <div class="soft-container">  
		  <div class="s_container">
		    <el-scrollbar height="100%">
		      <el-form  class="demo-form-inline" label-position="left">
		        
				<el-form-item label="知识库名称：" label-width="150px">
		  		  <el-input
		  		    placeholder="给你的知识库取一个好名字吧"
		  			v-model="uform.knowledgeName"
		  		    clearable
		  		  />
		  		  
		  		</el-form-item>
				
				<el-form-item label="知识库编码：" label-width="150px">
		  		  <el-input
		  		    placeholder="给你的知识库取一个好名字吧"
		  			v-model="uform.knowledgeCode"
		  		    clearable
		  		  />
		  		  
		  		</el-form-item>
				
				<el-form-item label="知识库头像：" label-width="150px">
					 <el-upload
					        action="/admin/knowledgeFile/put/data"
							limit="1"
					        :on-success="uploadFileSuccess"
					        :before-upload="beforeUploadIcon"
							:on-error="handleError"
					        :file-list="fileList"
					      >
					        <el-button size="small" type="primary">点击上传</el-button>
					  </el-upload>
				      <img :src="uform.knowledgeIcon" style="width: 50px;height: 50px;margin-left: 30px;"/>
				</el-form-item>
				
		  		<el-form-item label="知识库描述：" label-width="150px">
		  		      <el-input
		  		        type="textarea"
		  		        v-model="uform.knowledgeDesc"
		  		        :rows="3"
		  		        placeholder="介绍下你的知识库有什么内容"
		  		        :maxlength="300"
		  		        show-word-limit
		  		      ></el-input>
		  		</el-form-item>
	
		      </el-form>
		
		      <div class="btn-container">
				<el-button color="#626aef" style="width: 100px" @click="onUpdateSubmit"
				  >保存知识库</el-button> 
				<el-button  @click="onDeleteSubmit(uform.id)" color="#626aef" style="width: 100px;background-color: darkred;"
				  >删除知识库</el-button>
		      </div>
			  
		    </el-scrollbar>
		  </div>	  
			   
		 </div>
		  
	</div>
	
	
	</div>
  </div>

  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import router from "@/router";
import { nextTick, onMounted, ref,watch } from "vue";

import {
  ChatDotRound,
  ChatLineSquare,
  Clock,
  CopyDocument,
  Goods,
  StarFilled,
  UserFilled,
  VideoPause,
  UploadFilled,
} from "@element-plus/icons-vue";
import {ElLoading, ElNotification,ElMessageBox} from "element-plus";
import {KsnowledgeAddFileBytext,updateKsnowledgeFileContent,deletKsnowledgeFileContent,getKsnowledgeFileListContent, deleteKsnowledgeFile,FavoritesAdd,deleteKsnowledge, GetUserInfo,getMyKsnowledgeFileList,updateKsnowledge } from "../../api/BSideApi";
import { useStore } from "vuex";
import LoginDialog from "@/components/LoginDialog.vue";
import InputFormField from "@/components/InputFormField.vue";
import store from "@/store";
import { conversionTime } from "../utils/date";

export default {
  name: "KnowledgeDetail",
  methods: { conversionTime },
  components: {
    StarFilled,
    CopyDocument,
    InputFormField,
    ChatDotRound,
    ChatLineSquare,
    Clock,
    VideoPause,
    Goods,
    LoginDialog,
  },
  computed: {
    store() {
      return store;
    },
    UserFilled() {
      return UserFilled;
    },
  },
  
  setup() {
    let lastIndex=ref(0);
	let isContent=ref(0);
	let FileDatas=ref([]);
	let fileListDatas=ref([]);
	let dcumentId=ref("");
	let did=ref(0);
	let cid=ref(""); 
	let content=ref("");
	let answer=ref("");
	let keywords=ref("");
	let updateSoftDialogVisible=ref(false);
	
	onMounted(() => {
	  handleKsnowledgeFileList(1);  
	});
	
	let uform = ref({
		  id:null,
		  knowledgeName:null,
	      knowledgeDesc: "",
	      knowledgeCode: "",
	      knowledgeIcon: "",
		  dataSetId: null,
	  });
	
	
	
	const handleClick = () => {
	  console.log('click')
	}
	
	const indexMethod = (index) => {
	  return index * 1+1;
	}
	
	const classaq = ref('grid-content-active  ep-bg-purple');
	const classnoaq = ref('grid-content  ep-bg-purple');
	const uploadFile  = ref("");
	const filetype = ref(1);
	const kid=ref(0);
	const fileName = ref("");
	const addKonowlegeDialogVisible=ref(false);
	
	let knowledgeFile = ref({
		  fileName:null,
	      fileSize: "",
	      fileTokens: "",
	      knowledgeId: "",
	  });
	
	function handleError(error,response, file, fileList) {
	    console.log('上传出错：', error)
	    ElNotification({
	      title: "导入失败",
	      message: error,
	      type: "error",
	    });  	
	}
	
	async function deleteContent(did,cid){
		
		await ElMessageBox({
		  title: "提示",
		  message: "删除知识库数据，不可恢复，请慎重操作，是否确定要删除?",
		  confirmButtonText: "确定",
		  cancelButtonText: "再想想",
		  showCancelButton: true,
		  type: "warning",
		});
		
		ElLoading.service({
		  fullscreen: true,
		  text: "正在提交请求...",
		  spinner: "el-icon-loading",
		  background: "rgba(0, 0, 0, 0.7)",
		});
		
		let data="did="+did+"&cid="+cid;
		await deletKsnowledgeFileContent(data);
		setTimeout(function() {
		  // 在这里编写需要延迟执行的代码
		   ElLoading.service().close();
		   ElNotification({
		     title: "成功",
		     message: "删除成功",
		     type: "success",
		   });
		   
		   lookClick(did);
		}, 3000);
		
	}
	
	function  contentClick(dids,cids,keyss,contents,answers){
		cid.value=cids;
		did.value=dids;
		keywords.value=keyss;
		content.value=contents;
		answer.value=answers;
		updateSoftDialogVisible.value=true;
		console.log("cid.value="+cid.value);
		console.log("did.value="+did.value);
		console.log("keywords.value="+keywords.value);
		console.log("content.value="+content.value);
		console.log("answer.value="+answer.value);
	}
	
	function addContentClick(dids,fileNames,fileType){
		cid.value="";
		did.value=dids;
		keywords.value="";
		content.value="";
		answer.value="";
		fileName.value=fileNames;
		updateSoftDialogVisible.value=true;
		filetype.value=fileType;
	}
	
	function uploadFileSuccess(response, file, fileList) {
	      // 上传成功回调函数
	      // 处理上传成功后的逻辑
        uform.value.knowledgeIcon=response.data;
		console.log("value.knowledgeIcon=="+response.data);
				
	}
	
	function handleUpdateUploadSuccess(response, file, fileList) {
	      // 上传成功回调函数
	      // 处理上传成功后的逻辑
		console.log('fileList=='+fileList);
		var jsonString = JSON.stringify(fileList);
		console.log(jsonString); 
		if(response.code==500){
			ElNotification({
			  title: "导入失败",
			  message: "请文件检查文件格式，保存文件的编码格式是utf-8",
			  type: "error",
			});  	
		}else{
			fileList.forEach(function(item) {
			  console.log(item.name);
			  console.log(item.size);
			  console.log(uform.value.id);
			  ElNotification({
			    title: "导入成功",
			    message: "文件: "+item.name+" 已成功导入知识库！",
			    type: "success",
			  });  						
			});
		}
		
				
	}
	  function  beforeUpload(file) {
	      // 上传之前的钩子函数
	      // 可以在这里进行文件类型、大小等的校验
		  const fileExtension = file.name.split('.').pop().toLowerCase();
		  const fileSize = file.size;
		  const maxSize = 15 * 1024 * 1024; // 定义最大允许的文件大小为 10MB
		  console.log(fileSize+"file.filetype=="+fileExtension)
		  if (fileSize > maxSize) {
			  ElNotification({
			    title: "文件大小超过限制",
			    message: "文件大小超过限制15MB,请分割成小于15MB的文档!",
			    type: "error",
			  }); 
		      return false; // 返回 false 阻止文件上传
		  }
		  
		  let isFlow=true;
		  if(filetype.value==1){
			 if(!(fileExtension=='csv')){
				ElNotification({
				  title: "文件类型错误",
				  message: "上传的文件类型必须要cvs，而且必须要是uft-8的编码格式",
				  type: "error",
				}); 
				isFlow=false;
			 }  
		  }
		  if(filetype.value==2){
		  	if(
			   !(fileExtension=='csv' 
			   || fileExtension=='txt'
			   || fileExtension=='html'
			   || fileExtension=='markdown'
			   || fileExtension=='pdf'
			   || fileExtension=='xlsx'
			   || fileExtension=='docx')
			   ){
		  		ElNotification({
		  			title: "文件类型错误",
		  			message: "上传的文件类型必须要TXT、 HTML、 Markdown、 PDF、 XLSX、CSV、DOCX，而且必须要是uft-8的编码格式",
		  			type: "error",
		  		}); 
				isFlow=false;
		  	}  		  
		  }
		  let data="fileType="+filetype.value+"&kid="+uform.value.id;
		  uploadFile.value="/admin/knowledgeFile/addFile/data?"+data;
		  return isFlow;
	  }
	  
	  function  beforeUploadIcon(file) {
	      // 上传之前的钩子函数
	      // 可以在这里进行文件类型、大小等的校验
	  }
	  

	  
	async function deleteClick(deletId){
		await ElMessageBox({
		  title: "提示",
		  message: "删除知识库文件会删除相关数据，不可恢复，请慎重操作，是否确定要删除?",
		  confirmButtonText: "确定",
		  cancelButtonText: "再想想",
		  showCancelButton: true,
		  type: "warning",
		});
		let data="dtoid="+deletId;
		await deleteKsnowledgeFile(data);
		ElLoading.service().close();
		ElNotification({
		  title: "成功",
		  message: "删除成功",
		  type: "success",
		});
		handleKsnowledgeFileList(1);
		
	}
	  
	async function onUpdateSubmit() {
	  let value = uform.value;
	  
	  console.log("value.knowledgeIcon=="+value.knowledgeIcon);
	
	  if (!value.knowledgeName) {
	    ElNotification({
	      title: "错误",
	      message: "应用名称不能为空！"+value.knowledgeName,
	      type: "error",
	    });
	    return;
	  }
	
	  if (!value.knowledgeDesc) {
	    ElNotification({
	      title: "错误",
	      message: "应用描述不能为空！"+value.knowledgeDesc,
	      type: "error",
	    });
	    return;
	  }
	  if (!value.knowledgeCode) {
	    ElNotification({
	      title: "错误",
	      message: "应用开场白不能为空！"+value.knowledgeCode,
	      type: "error",
	    });
	    return;
	  }
		
	 	
		
		 if (!value.knowledgeIcon) {
	
				ElNotification({
				  title: "错误",
				  message: "应用分类不能为空！",
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
			  
		//updateSoftDialogVisible.value=false;
		//handleRoleList(1);
			  
	  } catch (e) {
	    ElNotification({
	      title: "错误",
	      message: e,
	      type: "error",
	    });
	  }
	}
	
	async  function uoloadFile(tab){
	 if(tab==1){
		  filetype.value=1;
		  classaq.value = 'grid-content-active  ep-bg-purple';
		  classnoaq.value = 'grid-content  ep-bg-purple';
	 }else{
		 filetype.value=2;
		 classaq.value = ' grid-content ep-bg-purple';
		 classnoaq.value = 'grid-content-active   ep-bg-purple';
	 }	
		
	}
	async  function handleKsnowledgeFileList(pageNum) {
	   let  knowledge=localStorage.getItem("uform");
	   let formV=JSON.parse(knowledge);
	   let knowledgeId=formV.id
	   kid.value=formV.id;
	   console.log("knowledgeId==="+knowledgeId)
	   try {				
	 	  let res = await getMyKsnowledgeFileList("pageNum="+pageNum+"&knowledgeId="+knowledgeId); 
	 	   if (res) {
	 	      FileDatas.value = res.records;
	 	   } 
	 	  }catch (e) {  
	         
	       }
	  }
	  
	async function updateContents(){
		
		try {
		   
		   if (!content.value) {
		 	 ElNotification({
		 	     title: "错误",
		 		 message: "内容不能为空！",
		 		 type: "error",
		 		});
		 	 return; 
	       }
		 
		   if (!keywords.value) {
		 	  ElNotification({
		 	     title: "错误",
		 		 message: "关键字不能为空！",
		 		 type: "error",
		 		});
		 	  return; 
		    }
			
			console.log("cid.value="+cid.value);
			console.log("did.value="+did.value);
			console.log("keywords.value="+keywords.value);
			console.log("content.value="+content.value);
			console.log("answer.value="+answer.value);
		 
		     let data="did="+did.value;
		     data=data+"&cid="+cid.value;
			 data=data+"&content="+content.value;
			 data=data+"&answer="+answer.value;
			 data=data+"&keywords="+keywords.value;
			 ElLoading.service({
			  fullscreen: true,
			  text: "正在提交请求...",
			  spinner: "el-icon-loading",
			  background: "rgba(0, 0, 0, 0.7)",
			 });
			 		 
		     let res = await updateKsnowledgeFileContent(data);
		     ElLoading.service().close();
		     ElNotification({
		       title: "成功",
		       message: "修改成功",
		       type: "success",
		     });
		     updateSoftDialogVisible.value=false;
			 lookClick(did.value);
		 } catch (e) {
		   ElLoading.service().close();
		   ElNotification({
		     title: "错误",
		     message: e,
		     type: "error",
		   });
		 }
		 
	 }
	 
	 
	 async function addFileBytext(){
	 	try {
	 	   
	 	 
	 	   if (!filetype.value) {
	 	 	 ElNotification({
	 	 	     title: "错误",
	 	 		 message: "文件类型不能为空！",
	 	 		 type: "error",
	 	 		});
	 	 	 return; 
	        }
	 	 
	 	   if (!fileName.value) {
	 	 	  ElNotification({
	 	 	     title: "错误",
	 	 		 message: "文件名称不能为空！",
	 	 		 type: "error",
	 	 		});
	 	 	  return; 
	 	    }
	 		
	 		console.log("fileName.value="+fileName.value);
	 		console.log("filetype.value="+filetype.value);
			console.log("kid.value="+kid.value);
			
	 	     let data="fileName="+fileName.value;
	 	     data=data+"&fileType="+filetype.value;
	 		 data=data+"&kid="+kid.value;
			 ElLoading.service({
			  fullscreen: true,
			  text: "正在提交请求...",
			  spinner: "el-icon-loading",
			  background: "rgba(0, 0, 0, 0.7)",
			 });
	 	     let res = await KsnowledgeAddFileBytext(data);
	 	     ElLoading.service().close();
	 	     ElNotification({
	 	       title: "成功",
	 	       message: "修改成功",
	 	       type: "success",
	 	     });
	 	     addKonowlegeDialogVisible.value=false;
			 handleKsnowledgeFileList(1);
	 	 } catch (e) {
	 	   ElLoading.service().close();
	 	   ElNotification({
	 	     title: "错误",
	 	     message: e,
	 	     type: "error",
	 	   });
	 	 }
	 	 
	  }
	   
	  
	async  function lookClick(did,fileType) {

	   try {				
	 	  let res = await getKsnowledgeFileListContent("did="+did); 
	 	   if (res) {
			   fileListDatas.value=JSON.parse(res);
			   isContent.value=1;
			   dcumentId.value=did;
			   filetype.value=fileType;
	 	       console.log('res===='+res);
	 	   } 
	 	  }catch (e) {  
	         
	       }
	  }
	
	function swicht(index){
		lastIndex.value=index;
		isContent.value=0;
		let  knowledge=localStorage.getItem("uform");
		uform.value=JSON.parse(knowledge);
		if(index==0){
		   handleKsnowledgeFileList(1);
		}
	}
	
	function onAddSubmit(kid){
		addKonowlegeDialogVisible.value=true;
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
			  
			  router.push({
			    path: "/knowledge",
			  });
			  
	}
	
    return {
	  lastIndex,
	  isContent,
	  swicht,
	  FileDatas,
	  handleKsnowledgeFileList,
	  classaq,
	  classnoaq,
	  uoloadFile,
	  filetype,
	  uform,
	  handleUpdateUploadSuccess,
	  handleError,
	  beforeUpload,
	  onUpdateSubmit,
	  onDeleteSubmit,
	  uploadFile,
	  indexMethod,
	  deleteClick,
	  lookClick,
	  uploadFileSuccess,
	  fileListDatas,
	  deleteContent,
	  contentClick,
	  addContentClick,
	  fileName,
	  dcumentId,
	  did, 
	  cid, 
	  content,
	  answer, 
	  keywords,
	  updateSoftDialogVisible,
	  updateContents,
	  onAddSubmit,
	  addKonowlegeDialogVisible,
	  addFileBytext,
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes beating {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}

@keyframes slideEase {
  0% {
    transform: translateX(-100px);
  }

  100% {
    transform: translateX(0);
  }
}

// 这里需要做媒体查询， 兼容小屏幕的对话框

.body {
  //scroll-behavior: smooth;
  width: 100%;
  height: 79%;
  flex-wrap: wrap;
  //box-sizing: border-box;
  //flex-direction: column;
  //align-items: flex-end;
  padding: 0 20px 140px;
  display: flex;
  //overflow: auto;
  background-color: #fafafa;
  padding-right: 50px;
}

.footer {
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  pointer-events: none;
  //background: linear-gradient(rgba(246, 246, 246, 0), #fafafa 25%);
  flex-shrink: 0;
  padding: 30px;
  display: flex;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  flex-direction: column;
  align-items: left;
}

.footer-bar {
  min-height: 45px;
  max-width: 1245px;
  width: 100%;
  pointer-events: auto;
  background: #ffffff;
  border-radius: 8px;
  //box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  border: 0.8px solid #ccc;
  //animation: footerBarAnimation 0.3s;
}

@keyframes footerBarAnimation {
  from {
    transform: translateY(150%);
  }

  to {
    transform: translateY(0);
  }
}

.slide-animation {
  animation: slideEase 0.5s ease-in-out forwards;
}

:deep(.footer-bar > .el-input > .el-input__wrapper) {
  box-shadow: none;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  min-height: 60px;
  resize: none;
  -webkit-appearance: none;
  background: #fafafa;
  color: #000000;
  border: 0;
  flex: 1;
  margin: 0;
  padding: 16px 20px;
  line-height: 28px;
}

:deep(.footer-bar > .el-input > .el-input-group__prepend) {
  box-shadow: none;
  font-size: 16px;
  box-sizing: border-box;
  min-height: 60px;
  resize: none;
  -webkit-appearance: none;
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  line-height: 28px;
}

:deep(.footer-bar > .el-input > .el-input-group__prepend > .el-select) {
  margin: 0 !important;
}

:deep(
    .footer-bar
      > .el-input
      > .el-input-group__prepend
      > .el-select
      > .select-trigger
      > .el-input
      > .el-input__wrapper
  ) {
  box-shadow: none !important;
  font-size: 15px;
  height: 62px;
  padding: 0 20px;
  background-color: #fafafa;
}

.questions {
  width: 100%;
  max-width: 1300px;
  box-sizing: border-box;
}

@media only screen and (max-width: 767px) {
  .questions {
    padding: 0;
  }
  .promtdesc{
  	min-width: 450px;
	font-size: 15px; 
  }
  
   .el-table {
      overflow-x: auto;
    }
}

@media only screen and (min-width: 768px) {
  .questions {
    padding: 0;
  }
  
  .promtdesc{
  	min-width: 780px;
	font-size: 15px; 
	margin-left: -110px;
  }
  
  .el-table {
      width: 100%;
    }
}

.questions > .item {
  border-radius: 8px;
  padding: 0 10px;
}

.flexShrink {
  flex-shrink: 0;
}

.question {
  display: flex;
  justify-content: right;
  align-items: flex-start;
  padding: 20px 8px;
}

.answer {
  padding: 10px 8px;
  display: flex;
  justify-content: left;
  align-items: flex-start;
}

.question > div > .text {
  max-width: 1000px;
  min-width: 50px;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: left;
  min-height: 28px;
  white-space: pre-wrap;
  margin-left: 46px;
  font-size: 16px;
  word-break: break-all;
  line-height: 28px;
  position: relative;
  background-color: #e5f2ff;
  box-shadow: 0 5px 7px rgba(49, 79, 88, 0.15);
  color: #1f1f1f;
  margin-right: 10px;
  margin-top: 2px;
}

::v-deep(.vuepress-markdown-body) {
  padding: 0 0 0 16px;
  color: #24292f;
  background-color: #f0f1f2;
}

::v-deep(.scrollbar__wrap) {
  background-color: #f0f1f2;
}

::v-deep(.vuepress-markdown-body tr:nth-child(2n)) {
  background-color: #f0f1f2;
}

.operation--model {
  margin-top: 5px;
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.operation--model_user {
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 5px;

}

.op-btn {
  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
  color: #24292f;
  background-color: #fafafa;
  margin-right: 5px;
  padding: 3px 10px;
  display: flex;
  align-items: center;
  border-radius: 3px;
}

.op-font {
  font-size: 9px;
  padding-left: 5px;
}

.explain {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

@keyframes explainAnimation {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.suspend {
  animation: explainAnimation 0.3s;
  position: fixed;
  bottom: 150px;
  margin-top: 15px;
  margin-left: 30%;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 7px rgba(29, 32, 34, 0.29);
  background-color: rgb(29, 32, 34);
  padding: 5px 20px;
  font-size: 13px;
  color: #d8d8d8;
  border-radius: 5px;
}

.answer-data {
  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
  margin-left: 10px;
  border-radius: 5px;
  margin-top: 2px;
  overflow-x: hidden;
  background-color: #f0f1f2;
  padding: 10px 10px 10px 5px;
  min-width: 50px;
  max-width: 1000px;
  margin-right: 45px;
}

.answer-data-welcom {
  margin-left: 10px;
  border-radius: 10px;
  margin-top: 2px;
  overflow-x: hidden;
  background-color: #f0f1f2;
  padding: 10px 10px 10px 5px;
  min-width: 50px;
  max-width: 1000px;
  margin-right: 45px;
}

.suspend div {
  padding-bottom: 1px;
  padding-left: 8px;
}

.logo {
  width: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-top: 50px;
  animation: beating 0.7s infinite alternate;
}

.logoRole{
  width: 26px;
  border-radius: 50%;
}

.expositoryCase {
  max-width: 600px;
  font-size: 20px;
  margin-top: 60px;
  text-align: center;
  color: #606266;
}

.consume {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.consumeText {
  margin-left: 10px;
  font-size: 15px;
  color: #000;
}

.beCareful {
  padding: 40px 6px 12px;
  color: #000;
  font-size: 15px;
  line-height: 1.6;
}

:deep(.answer > .el-avatar, .question > .el-avatar) {
  background-color: #ffffff;
}

.clear {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  font-size: 13px;
  border-radius: 5px;
  padding: 3px 10px;
  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
  color: #ffffff;
  background-color: #7171ff;
}

.clear2 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  font-size: 8px;
  color: #f0f1f2;
  background-color: #fafafa;
  border-radius: 5px;
  padding: 3px 10px;
  margin-left: 92px;
  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
}

@media (max-width: 767px) {
  .clear2 {
    margin-left: 80px;
  }
}

.cache-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}

.cache-img {
  width: 80px;
  height: 80px;
}

.cache-text {
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 550;
  padding-top: 10px;
  margin-top: 10px;
}

.cache-padding-top {
  padding-top: 15px;
  margin-top: 10px;
}

.cache-btn {
  color: white;
  display: flex;
  justify-content: center;
  align-items: left;
  background-color: #7171ffff;
  padding: 10px 30px;
  margin-top: 0px;
  margin-left: 30px;
  border-radius: 5px;
  width: 80px;
}

.cache-btn-img {
  width: 30px;
  height: 30px;
}

.cache-btn-text {
  padding-left: 10px;
  font-size: 12px;
}

.cache-content {
  padding: 20px 10px 10px;
}

.cache-scrollbar {
  background-color: #fafafa;
  border-radius: 10px;
  color: #b7b7b7;
}

.cache-padding {
  padding: 10px;
}

.cache-flex-space-between {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.cache-message {
  padding-bottom: 4px;
}

.cache-message-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #000;
  width: 160px;
  height: 40px;
  background-color: #eff0f0;
}

.cache-message-time {
  padding-top: 5px;
  font-size: 5px;
}

.cache-selected {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  border-radius: 30px;
}

.cache-selected-img {
  width: 20px;
  height: 20px;
}

.operation-user {
  justify-content: right;
  padding-right: 5px;
  margin-left: 0;
}

.animation-dot {
  display: flex;
  padding-right: 10px;
}

.select_style {
  width: 100px;
  margin-right: -20px;
}

.dot_0,
.dot_1,
.dot_2,
.dot_3 {
  background: rgb(166, 129, 236);
  width: 15px;
  height: 15px;
  border-color: #464646;
  border-radius: 50%;
}

.dot_0 {
  animation: jumpT 1.3s -0.64s linear infinite;
}

.dot_1 {
  animation: jumpT 1.3s -0.32s linear infinite;
}

.dot_2 {
  animation: jumpT 1.3s -0.16s linear infinite;
}

.dot_3 {
  animation: jumpT 1.3s linear infinite;
}

@keyframes jumpT {
  0%,
  80%,
  100% {
    transform: scale(0);
    background-color: #f9f9f9;
  }

  40% {
    transform: scale(1);
    background-color: rgb(186, 156, 241);
  }
}

.leftDialog-iner{
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
  overflow: auto;
}

.text-your {
    padding: 10px 20px 10px 20px;
    background-color: #f0f1f2;
    font-size: 14px;
    text-align: left;
	margin-top: -60px;
	border-radius: 15px;
}


.markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Noto Sans,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
}

html .markdown-body {
    color-scheme: light;
    --color-prettylights-syntax-comment: #6e7781;
    --color-prettylights-syntax-constant: #0550ae;
    --color-prettylights-syntax-entity: #8250df;
    --color-prettylights-syntax-storage-modifier-import: #24292f;
    --color-prettylights-syntax-entity-tag: #116329;
    --color-prettylights-syntax-keyword: #cf222e;
    --color-prettylights-syntax-string: #0a3069;
    --color-prettylights-syntax-variable: #953800;
    --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
    --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
    --color-prettylights-syntax-invalid-illegal-bg: #82071e;
    --color-prettylights-syntax-carriage-return-text: #f6f8fa;
    --color-prettylights-syntax-carriage-return-bg: #cf222e;
    --color-prettylights-syntax-string-regexp: #116329;
    --color-prettylights-syntax-markup-list: #3b2300;
    --color-prettylights-syntax-markup-heading: #0550ae;
    --color-prettylights-syntax-markup-italic: #24292f;
    --color-prettylights-syntax-markup-bold: #24292f;
    --color-prettylights-syntax-markup-deleted-text: #82071e;
    --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
    --color-prettylights-syntax-markup-inserted-text: #116329;
    --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
    --color-prettylights-syntax-markup-changed-text: #953800;
    --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
    --color-prettylights-syntax-markup-ignored-text: #eaeef2;
    --color-prettylights-syntax-markup-ignored-bg: #0550ae;
    --color-prettylights-syntax-meta-diff-range: #8250df;
    --color-prettylights-syntax-brackethighlighter-angle: #57606a;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
    --color-prettylights-syntax-constant-other-reference-link: #0a3069;
    --color-fg-default: #24292f;
    --color-fg-muted: #57606a;
    --color-fg-subtle: #6e7781;
    --color-canvas-default: #fff;
    --color-canvas-subtle: #f6f8fa;
    --color-border-default: #d0d7de;
    --color-border-muted: #d8dee4;
    --color-neutral-muted: rgba(175,184,193,.2);
    --color-accent-fg: #0969da;
    --color-accent-emphasis: #0969da;
    --color-attention-subtle: #fff8c5;
    --color-danger-fg: #cf222e;
}

@media screen and (max-width: 768px) {

  .rightDialog{
   	box-sizing: border-box;
   	flex-direction: column;
   	scroll-behavior: smooth;
   	overflow: auto;
   	margin-right: 10px;
   	margin-top: 0px;
   	padding: 10px;
   	width: 100%; 
   	height: 100%;
   	align-items: end;
   	//border: 0.8px solid #eff0f0;
   	border-radius: 8px;
   }
   
   .rightbox{
   	 //border: 0.8px solid #eff0f0;  
   	 height: 85%; 
   	 width: 100%; 
   	 padding: 5px;
   	 margin-top: 5px;
   	 box-sizing: border-box;
   	 flex-direction: column;
   	 align-items: center;
   	 border-radius: 8px;
   }
   
   .leftDialog{
     flex-direction: column;
   	 margin-top: 10px;
   	 margin-left: 10px;
   	 width: 220px;
   	 color: #000;
	 display: none;
   	}
	
	.footer-bar {
	  min-height: 45px;
	  width: 90%;
	  pointer-events: auto;
	  background: #ffffff;
	  border-radius: 8px;
	  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
	  display: flex;
	  align-items: flex-start;
	  padding-left: 30px;
	  margin-bottom: 5px;
	  animation: footerBarAnimation 0.3s;
	}
	
	.upload-demo{
		width: 60%;
		margin-top: 50px;
	}

}

@media screen and (min-width: 767px) {

  .rightDialog{
	box-sizing: border-box;
	flex-direction: column;
	scroll-behavior: smooth;
	overflow: auto;
   	margin-right: 10px;
   	margin-top: 15px;
	padding: 0px;
   	width: 100%; 
	height: 100%;
   	align-items: center;
   	//border: 0.8px solid #eff0f0;
   	border-radius: 8px;
   }
   
   .rightbox{
	 border: 0.8px solid #eff0f0;  
	 height: 110%; 
	 width: 83.8%; 
	 padding: 5px;
	 margin-top: 25px;
	 box-sizing: border-box;
	 flex-direction: column;
	 align-items: center;
	 border-radius: 10px;
   }
   
   .leftDialog{
     flex-direction: column;
	 margin-top: 40px;
	 margin-left: 10px;
	 width: 145px;
	 height: 100%;
	 color: #000;
	 overflow: auto;
	}

}

.header {
  margin-top: 5px;
}

.switch-button {
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: -8px;
  width:135px;
}

.switch-item {
  height: 45px;
  width:130px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: -28px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  background-color: #fafafa;
  border-radius: 8px;
}

.switch-item-title {
  margin-left: 0px;
  display: flex;
  align-items: center;
}

.switch-active {
  background-color: #eff0f0;
  color: #000;
  border-radius: 10px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 8px;
  min-height: 52px;
  border: 0.8px solid #ccc; 
  color: #363636;
  padding: 10px;
}

.grid-content-active {
  border-radius: 8px;
  min-height: 52px;
  border: 0.8px solid #0969da; 
  color: #363636;
  padding: 10px;
  background-color: #e7f2fe;
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
    color: var(--color);
    font-size: inherit;
}

.icon-box {
    display: flex;
    align-items: center;
}

.upload-demo {
  height: 300px;		
}

.soft-container {
    width: 80%;
    height: 400px;
	display: flex;
	justify-content: center;
	//border: 0.8px solid #eff0f0;
	border-radius: 8px;
	padding-top: 10px;
  }
  
.s_container {
    width: 60%;
    height: 500px;
	padding-top: 10px;
  }
  
  
 .btn-container {
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 10px;
 }
 
.el-upload-dragger .el-icon--upload {
    font-size: 67px;
    color: var(--el-text-color-placeholder);
    margin-bottom: 16px;
    line-height: 50px;
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
    color: var(--color);
    font-size: inherit;
}

.el-upload-dragger .el-upload__text {
    color: var(--el-text-color-regular);
    font-size: 14px;
    text-align: center;
}

.el-upload-dragger .el-upload__text {
    color: var(--el-text-color-regular);
    font-size: 14px;
    text-align: center;
}

.el-upload__input {
    display: none;
}

.el-upload__tip {
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 7px;
}

.el-upload-list {
    margin: 10px 0 0;
    padding: 0;
    list-style: none;
    position: relative;
}

/* 定义一个包含横向滚动条的容器 */
.scroll-container {
  overflow-x: scroll; /* 启用横向滚动条 */
  white-space: nowrap; /* 设置内容不换行 */
  width: 100%; /* 设置容器宽度 */
}

/* 设置滚动条样式 */
.scroll-container::-webkit-scrollbar {
  height: 6px; /* 设置滚动条高度 */
  background-color: #f5f5f5; /* 设置滚动条背景颜色 */
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #888; /* 设置滚动条滑块颜色 */
  border-radius: 3px; /* 设置滚动条滑块圆角 */
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* 设置滚动条滑块在鼠标悬停时的颜色 */
}

.scroll-container::-webkit-scrollbar-track {
  background-color: #f5f5f5; /* 设置滚动条轨道颜色 */
}
</style>
