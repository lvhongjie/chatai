<template>
  
  <div class="body"> 
    <div class="leftDialog">
		<div class="cache-btn" @click="createdNewChat">
		   <el-icon size="16px">
		     <ChatLineSquare />
		   </el-icon>
		   <div class="cache-btn-text">新的聊天</div>
		 </div>
        <div class="header">
        		 <div class="switch-button">
                  <div
                    v-for="(item, index) in dialogueCache.array"
                    :key="index"
                    active-class="switch-active"
                    class="switch-item"
					:style="{
						'background-color': 
						dialogueCache.index === index
						  ? '#eff0f0': '#fafafa',
						 }"
                  >
        			<div  @click="switchChat(index,item.rolename)" class="switch-item-title">
					<div style='margin-top: 0px;margin-left: 9px;'>
					  <img v-if="item.rolename" class="logoRole" alt="Vue logo"  :src="item.rolename.softIcon" />
					</div>
					<div v-if="item.rolename" style='
					  white-space: nowrap; /* 禁止文字换行 */
					  overflow: hidden; /* 隐藏超出容器的部分 */
					  text-overflow: ellipsis; /* 使用省略号代替超出部分 */
					  width: 130px;
					  margin-left: 10px;
					'>
					  {{ item.rolename.softName }}
					</div>
					<div v-if="dialogueCache.index === index?false:true" style='margin-top: 5px;margin-right: 10px;'>
					 <img
					  src="../assets/close-small.svg"
					  class="cache-selected-img"
					  @click="clearDialogue(index)"
					 />
					</div>
					
					</div>
                  </div>
                </div>
    </div>
		
		<!-- 
       <div class="cache-flex-center cache-padding-top">
	        <div class="cache-btn" @click="createdNewChat">
	           <el-icon size="16px">
	             <ChatLineSquare />
	           </el-icon>
	           <div class="cache-btn-text">创建新的聊天</div>
	         </div>
	       </div>
	       <div class="cache-content">
	         <div class="cache-scrollbar">
	           <el-scrollbar height="690px">
	             <div
	               class="cache-padding"
	               v-for="(item, index) in dialogueCache.array"
	               :key="index"
	             >
	               <div class="cache-flex-space-between cache-margin">
	                 <div class="cache-message" @click="switchChat(index)">
	                   <div v-if="item.rolename" class="cache-message-text">
	     			  {{ item.rolename.softName}}
	                   </div>
	     			  <div v-else class="cache-message-text">
	     			  {{ item.title}}
	     			  </div>
	                 </div>
	                 <div class="cache-selected">
	                   <img
	                     :src="
	                       dialogueCache.index === index
	                         ? require('../assets/selected.svg')
	                         : require('../assets/close-small.svg')
	                     "
	                     class="cache-selected-img"
	                     @click="clearDialogue(index)"
	                   />
	                 </div>
	               </div>
	             </div>
	           </el-scrollbar>
	         </div>
	       
	 	</div>
	     -->   		
	</div>
	<div  class="rightbox">
    <div  class="rightDialog" ref="scrollRef">
    
	<div v-if="!conversationList.length" class="explain">
	 <div v-if="store.getters.userinfo">
      <img class="logo" alt="Vue logo" style="margin-left: 200px;" v-if="rolecontent" :src="rolecontent.softIcon" />
	 
	  <div class="expositoryCase" v-if="rolecontent">
	  <div class="promtdesc">
	  <div data-v-d49c4fa4="" class="text-your">
		<div
		  class="answer-data-welcom"
		  :style="{ maxWidth: calculateWidth(rolecontent.softContent) }"
		>
		  <v-md-editor
		    :model-value="rolecontent.softContent"
		    mode="preview"
		    @copy-code-success="handleCopyCodeSuccess"
		  />
	    </div>
	  </div>
	  </div>
	  </div> 
	  
	  
	  </div>
	  <div class="expositoryCase" v-else >欢迎使用Magic.Ai</div>
      <div class="consume">
        <el-icon>
          <Goods />
        </el-icon>
        <div class="consumeText"></div>
      </div>
      <div class="beCareful"></div>
    </div>
    
	<div v-else class="questions" style="margin: 20px 0">
      
	  <div
        v-for="(item, index) in conversationList"
        :key="index"
        class="item slide-animation"
      >
        <div class="question">
          <div>
            <div @click="copyAnswer(item.user)" class="text">{{ item.user }}</div>
            <div class="operation--model_user" >
              <div class="op-btn" @click="copyAnswer(item.user)">
                <el-icon>
                  <CopyDocument/>
                </el-icon>
                <text class="op-font">复制</text>
              </div>
            </div>
          </div>
          
        </div>

        <div class="answer">
          
          <template v-if="item.assistant">
            <div style="width: 100%;">
              <div @click="copyAnswer(item.assistant)"
                class="answer-data"
                :style="{ maxWidth: calculateWidth(item.assistant) }"
              >
                <v-md-editor
                  :model-value="item.assistant"
                  mode="preview"
                  @copy-code-success="handleCopyCodeSuccess"
                />
              </div>

              <div class="operation--model" v-if="!item.isError">
                <div class="op-btn" @click="copyAnswer(item.assistant)">
                  <el-icon>
                    <CopyDocument />
                  </el-icon>
                  <text class="op-font">复制</text>
                </div>
                <div
                  class="op-btn"
                  @click="onCollection(item, index)"
                  v-if="!item.isCollection"
                >
                  <el-icon color="rgb(255,236,160)">
                    <StarFilled />
                  </el-icon>
                  <text class="op-font">收藏</text>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="answer-data" style="width: 100px">
              <div style="display: flex; padding: 5px 9px">
                <div class="dot_0"></div>
                <div class="dot_1"></div>
                <div class="dot_2"></div>
                <div class="dot_3"></div>
                <div class="dot_4"></div>
              </div>
            </div>
          </template>
        </div>
     
	  </div>
    </div>
    
	<div class="suspend" v-show="aiLoading" @click="closeSocket">
      <el-icon :size="16">
        <VideoPause />
      </el-icon>
      <div>暂停输出</div>
    </div>
    
	<div class="footer">
      <div class="footer-bar">
        <div
          class="clear"
          @click="clear"
          v-show="store.getters.userinfo && !aiLoading"
        >
          <div style="padding-top: 4px">
            <el-icon size="13px" style="padding-right: 3px">
              <Clock />
            </el-icon>
          </div>
          <div style="color: #ffffff;">清除聊天</div>
        </div>

        <!--
          封装后功能check
          1、下拉菜单可以切换模式
          2、文本域输入框可以输入内容
          3、文本域输入框可以提交内容
          4、状态更新可以监听
          5、文本域输入框可以清除内容
          6、文本域输入框可以聚焦
        -->
        <InputFormField
          ref="inputRef"
          :aiLoading="aiLoading"
          :inputText="input"
          @update:inputText="input = $event"
          @update:model="model = $event"
          @onSubmit="onSubmit"
        />
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
} from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import { FavoritesAdd, GetUserInfo } from "../../api/BSideApi";
import { useStore } from "vuex";
import LoginDialog from "@/components/LoginDialog.vue";
import InputFormField from "@/components/InputFormField.vue";
import store from "@/store";
import { conversionTime } from "../utils/date";

export default {
  name: "dialogueView",
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
    let initialWidth = ref(50);
    let maxWidth = ref(1100);
    let inputRef = ref(null);
    let store = useStore();
    let scrollRef = ref(null);
    let input = ref("");
    let conversationList = ref([]);
    let loginVisible = ref(false);
    let socket = ref(null);
    let aiLoading = ref(false);
    let model = ref("BASIC");
	let aiLoadrole = ref(false);
    const imageUrl = ref("");
    let dialogueDisplay = ref(false);
    const dialogueCache = ref({});
	const dialogueCacheRole = ref([]);
	const dialogIndex=ref(0);
    const dialogueWidth = ref("30%");
    const rate = ref(50);
    const memory = ref(10);
    const size = ref(1000);
	const rolecontent=ref('');
	
	watch(
	  () => router.currentRoute.value,
	  (newValue) => {
		if(newValue.path=='/chatai'){
		   let itemRole = localStorage.getItem("roleData");
		   let itemRoleJ=JSON.parse(itemRole);
		   let itemCache = localStorage.getItem("dialogueCache");
		   let isswiche=false;
		   if(itemRole&&itemCache){
			 let value = JSON.parse(itemCache);
			 let itemarg=value.array;
			 for (let i = 0; i < itemarg.length; i++) {
			   // 遍历数组，对每个元素进行操作
			   let rolescon=itemarg[i];
			   console.log("indexkey=="+i);
			   console.log(itemRoleJ.softName+"title==");
			   if(rolescon.rolename!=null&&rolescon.rolename.softName==itemRoleJ.softName){
			   		 console.log("title=="+rolescon.rolename.softName);
					 isswiche=true;
					 if (store.getters.userinfo){
						switchChat(i,rolescon.rolename); 
					 } 
			   }
			 }
			 
			 if(!isswiche){
				createdNewRoleChat(JSON.parse(itemRole));
				switchChat(0,itemRole);
			 }
		   }else{
			    createdNewRoleChat(JSON.parse(itemRole)); 
				switchChat(0,itemRole);
		   }
		   if(conversationList.value.length==0){
			   rolecontent.value=itemRoleJ;
		   }
		}
	  }
	);
	
    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
      if (store.getters.userinfo) getUser();
      //获取图片域名
      imageUrl.value = process.env.VUE_APP_IMAGE;
      rate.value = parseInt(process.env.VUE_APP_RATE);
      memory.value = parseInt(process.env.VUE_APP_MEMORY);
      size.value = parseInt(process.env.VUE_APP_MEMORY_SIZE);
	  let itemRole = localStorage.getItem("roleData");
	  rolecontent.value=itemRole;
      //获取对话缓存数据
	  console.log("itemRole1=="+itemRole)
      let item = localStorage.getItem("dialogueCache");
      if (store.getters.userinfo) {
        if (!store.getters.userinfo) return (loginVisible.value = true);
        if (item) {
          dialogueCache.value = JSON.parse(item);
          let value = dialogueCache.value;
		  console.log("value.index==="+value.array.length);
		  if(value.array.length>0){
			 conversationList.value = value.array[value.index].context;
			 dialogIndex.value=value.index;
			 rolecontent.value=value.array[value.index].rolename; 
		  }
          scrollToTheBottom();
        } else {
          dialogueCache.value = {
            index: 0,
            array: [
              {
				rolename:JSON.parse(itemRole),
                title: "新对话",
                time: Date.now(),
                context: conversationList.value,
              },
            ],
          };
          localStorage.setItem(
            "dialogueCache",
            JSON.stringify(dialogueCache.value)
          );
        }
      }
    });
	
    //提交内容的快捷键监听
    function handleKeyDown(e) {
      // 判断是否按下了 alt 键和 enter 键
      if (e.ctrlKey && e.keyCode === 13) {
        // 执行你的操作
        console.log("Alt + Enter 被按下");

        onSubmit();
      }
    }

    //自适应窗口大小
    function handleResize() {
      if (window.innerWidth <= 768) {
        dialogueWidth.value = "70%";
      } else {
        dialogueWidth.value = "30%";
      }
    }

    // TODO 切换对话
    function switchChat(index,item) {
      dialogueCache.value.index = index;
	  if(dialogueCache.value.array[index]){
		conversationList.value = dialogueCache.value.array[index].context;
		localStorage.setItem(
		  "dialogueCache",
		  JSON.stringify(dialogueCache.value)
		);
		dialogueDisplay.value = false;
		rolecontent.value=item;
		  
	  }
      
    }

    function calculateWidth(text) {
	   if(text){
		  const textLength = text.length;
		  
		  let width = initialWidth.value + textLength * 16;
		  if (width >= maxWidth.value) {
		    width = maxWidth.value;
		  }
		  return `${width}px`; 
	   }	
      
    }

    // TODO 清除指定对话
    function clearDialogue(index) {
      if (index !== dialogueCache.value.index) {
        let i = parseInt(dialogueCache.value.index);
        if (index < i) {
          dialogueCache.value.index = i - 1;
        }
        dialogueCache.value.array.splice(index, 1);
      }
      localStorage.setItem(
        "dialogueCache",
        JSON.stringify(dialogueCache.value)
      );
    }

    // TODO 写入对话数据
    function writeDialogue() {
      let item = conversationList.value;
      let value = dialogueCache.value;
      dialogueCache.value.array[value.index].time = Date.now();
      if (item.length > 0) {
        dialogueCache.value.array[value.index].title = item[
          item.length - 1
        ].user
          .trim()
          .slice(0, 25);
      }
      dialogueCache.value.array[value.index].context = item;
      localStorage.setItem(
        "dialogueCache",
        JSON.stringify(dialogueCache.value)
      );
    }

    // TODO 创建新对话
    function createdNewChat() {
	 if (!store.getters.userinfo) return (loginVisible.value = true); 
	let itemRole = {
		softIcon: "https://bucket-1317903499.cos.ap-guangzhou.myqcloud.com/A09A31B544B74C78AAA810BFC199C514.png",
		softName: "通用智能助手",
		softContent: "不知道找谁的时候就来找我吧，我能帮你解决任何问题。",
		softPromot: "我是神码智能AI助手，有什么可以帮助你呢?",
	};
      dialogueCache.value.array.unshift({
		rolename:itemRole,
        title: "新对话",
        time: Date.now(),
        context: [],
      });
	  rolecontent.value=itemRole;
	  //当前聊天的role
      dialogueCache.value.index = 0;
      conversationList.value = [];
      localStorage.setItem(
        "dialogueCache",
        JSON.stringify(dialogueCache.value)
      );
    }
	
	// TODO 创建新对话
	function createdNewRoleChat(itemRole) {
	  dialogueCache.value.array.unshift({
		rolename:itemRole,
	    title: "新对话",
	    time: Date.now(),
	    context: [],
	  });
	  //当前聊天的role
	  rolecontent.value=itemRole;
	  dialogueCache.value.index = 0;
	  conversationList.value = [];
	  localStorage.setItem(
	    "dialogueCache",
	    JSON.stringify(dialogueCache.value)
	  );
	}

    // TODO 提交问题
    async function onSubmit() {
      // 判断是否登录
      if (!store.getters.userinfo) {
        loginVisible.value = true;
        return;
      }

      //console.log("父的提交，onSubmit()->input", input);
      //console.log("父的提交，onSubmit()->input.value", input.value);
      // 去除空字符串 如果等于空直接 结束
      if (input.value.trim() === "") return;

      // 获取对话记录长度
      let index = conversationList.value.length;

      // 获取输入内容
      let content = input.value;
      // 清空内容
      // input.value = "";
      inputRef.value.resetInputValue();
      // 将对话内容push进整个会话
	  
      conversationList.value.push({
        user: content,
      });
      aiLoading.value = true;
      // TODO 滚动到底部
      scrollToTheBottom();
      // TODO 上下文
	  
      let messages = [];
      conversationList.value
          .slice(-memory.value)
          .forEach(({isError, user, assistant}) => {
            if (!isError) {
              const truncatedUser = user.length > size.value ? user.slice(0, size.value) + "..." : user;
              const truncatedAssistant = assistant && assistant.length > size.value ? assistant.slice(0, size.value) + "..." : assistant;
			  messages.push({
                role: "user",
                content: truncatedUser,
              });
              if (truncatedAssistant) {
                messages.push({
                  role: "assistant",
                  content: truncatedAssistant,
                });
              }
            }
          });
	
	  let itemCache = localStorage.getItem("dialogueCache");
	  let value = JSON.parse(itemCache);
	  let item= value.array[value.index].rolename;
	  //let item = localStorage.getItem("roleData");
	  //let rolendata=JSON.parse(item);
	  console.log('item==='+item);
	  if(item){
	  	 let rolecon=item.softPromot;
	  	 content=rolecon+content; 
		 let lastmsg = messages.pop();
		  let newmsg={
		            role: "user",
		            content: content,
		          }
		 messages.push(newmsg);
	  }
      webSocket({
        messages: {
          messages: messages,
        },
        index: index,
      });
    }

    function webSocket({ messages, index }) {
      if (typeof WebSocket == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        if (socket.value != null) {
          socket.value.close();
          socket.value = null;
        }

        // 发起websocket
		let itemRole = localStorage.getItem("roleData");
		let itemRoleJ=JSON.parse(itemRole);
		let softId=itemRoleJ.id;

        console.log("发起softId", softId);

        socket.value = new WebSocket(
          process.env.VUE_APP_WSS +
            "/gpt-web/api/" +
            localStorage.getItem("token") +
            "/" +
            model.value+
			 "/" +
			softId
        );
        // TODO 建立连接
        socket.value.onopen = function () {
          socket.value.send(JSON.stringify(messages));
          conversationList.value[index].isError = true;
        };
        // TODO 接收消息
        socket.value.onmessage = function (news) {
          messageQueue.push({
            msg: news.data,
            index: index,
          }); // 将接收到的消息存储到队列中
          displayMessages(); // 显示消息
        };
        // TODO 关闭连接
        socket.value.onclose = function () {
          waitUntilMessageQueueClear(index);
        };
        // TODO 处理错误
        socket.value.onerror = function () {
		  socket.value = new WebSocket(
		    process.env.VUE_APP_WSS +
		      "/gpt-web/api/" +
		      localStorage.getItem("token") +
		      "/" +
		      model.value+
		       "/" +
		      softId
		  );
		  // TODO 建立连接
		  socket.value.onopen = function () {
		    socket.value.send(JSON.stringify(messages));
		    conversationList.value[index].isError = true;
		  };	
			
         // ElNotification({
         //   title: "信息过期",
          //  message: "登录信息已过期,请重新登录",
         //   type: "error",
         // });
         // localStorage.removeItem("token");
          //localStorage.removeItem("user");
          //location.reload();
        };
      }
    }

    const messageQueue = []; // 消息队列
    let isDisplaying = false; // 是否正在显示消息
    function displayMessages() {
      if (isDisplaying) {
        return; // 如果正在显示消息，则直接返回，等待下一次调用
      }
      isDisplaying = true;
      const message = messageQueue.shift(); // 取出队列中的第一个消息
      if (message) {
        let i = 0;

        // eslint-disable-next-line no-inner-declarations
        function displayNextCharacter() {
          const index = message.index;
          const msg = message.msg;
          const character = msg.charAt(i++);
          if (character) {
            if (conversationList.value[index].assistant) {
              conversationList.value[index].assistant += character;
            } else {
              conversationList.value[index].assistant = character;
			  conversationList.value[index].nowtime = Date.now();
            }
            scrollToTheBottom();
            setTimeout(displayNextCharacter, rate.value);
          } else {
            isDisplaying = false;
            displayMessages(); // 显示下一条消息
          }
        }

        displayNextCharacter();
      } else {
        isDisplaying = false; // 重置标志以便下次能够正确显示消息
      }
    }

    function waitUntilMessageQueueClear(index) {
      return new Promise((resolve) => {
        let interval = setInterval(() => {
          if (messageQueue.length === 0) {
            let assistant = conversationList.value[index].assistant;
            conversationList.value[index].isError = false;
            if (!assistant) {
              conversationList.value.splice(index, 1);
            }
            writeDialogue();
            getUser();
            aiLoading.value = false;
            // 滚动到底部
            scrollToTheBottom();
            nextTick(() => {
              // 这里修改为调用子组件的聚焦
              inputRef.value.$refs.inputRefInner.focus();
            });
            clearInterval(interval);
            resolve();
          }
        }, 50);
      });
    }

    async function getUser() {
      let res = await GetUserInfo();
      store.commit("setUserinfo", res);
    }

    // TODO 滚动到底部
    function scrollToTheBottom() {
      nextTick(() => {
        scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
      });
    }

    // TODO 复制代码块
    function handleCopyCodeSuccess(code) {
      navigator.clipboard.writeText(code);
      ElNotification({
        message: "复制成功",
        type: "success",
      });
    }

    // TODO 复制答案
    function copyAnswer(data) {
      navigator.clipboard.writeText(data);
      ElNotification({
        message: "复制成功",
        type: "success",
      });
    }

    function closeSocket() {
      if (socket.value) {
        messageQueue.length = 0;
        socket.value.close();
        socket.value = null;
      }
    }

    function clear() {
      closeSocket();
      conversationList.value = [];
      writeDialogue();
    }

    async function onCollection(item, index) {
      try {
        let bol = !conversationList.value[index].isCollection;
        if (bol) {
          try {
            await FavoritesAdd({
              issue: item.user,
              answer: item.assistant,
            });
            ElNotification({
              message: "收藏成功",
              type: "success",
            });
          } catch (e) {
            ElNotification({
              message: e,
              type: "error",
            });
          }
        }
        conversationList.value[index].isCollection = true;
      } catch (e) {
        ElNotification({
          message: e,
          type: "error",
        });
      }
    }

    return {
      handleKeyDown,
      inputRef,
      model,
      onSubmit,
      input,
      clear,
      conversationList,
      scrollRef,
      handleCopyCodeSuccess,
      loginVisible,
      onCollection,
      copyAnswer,
      aiLoading,
      closeSocket,
      imageUrl,
      dialogueDisplay,
      dialogueCache,
      createdNewChat,
      switchChat,
      clearDialogue,
      dialogueWidth,
      calculateWidth,
      initialWidth,
      maxWidth,
	  aiLoadrole,
	  rolecontent,
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

}

@media screen and (min-width: 767px) {

  .rightDialog{
	box-sizing: border-box;
	flex-direction: column;
	scroll-behavior: smooth;
	overflow: auto;
   	margin-right: 10px;
   	margin-top: 25px;
	padding: 0px;
   	width: 100%; 
	height: 85%;
   	align-items: center;
   	//border: 0.8px solid #eff0f0;
   	border-radius: 8px;
   }
   
   .rightbox{
	 border: 0.8px solid #eff0f0;  
	 height: 115%; 
	 width: 83.8%; 
	 padding: 5px;
	 margin-top: 20px;
	 box-sizing: border-box;
	 flex-direction: column;
	 align-items: center;
	 border-radius: 10px;
   }
   
   .leftDialog{
     flex-direction: column;
	 margin-top: 40px;
	 margin-left: 10px;
	 width: 220px;
	 height: 100%;
	 color: #000;
	 overflow: auto;
	}

}

.header {
  margin-top: 30px;
}

.switch-button {
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: -8px;
  width:155px;
}

.switch-item {
  height: 45px;
  width:205px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: -28px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 16px;
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

</style>
