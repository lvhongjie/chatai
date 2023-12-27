<template>
  <ViewState v-if="load" LoadText="正在生成，请稍后..." />
  <ViewState v-else-if="error" @ClickTheButton="back" Type="error" ErrorText="AI服务调用失败，正在紧急处理，请稍后使用。" IsShowBottom
    ButtonText="返回" />
  <div v-else class="body" ref="scrollRef">
    <div class="container">
      <div class="title"></div>
      <div class="result">
		<div class="completeText">
		  <v-md-editor :model-value="item" mode="preview"></v-md-editor>
		</div>
        <div class="completeText">
          <v-md-editor :model-value="content" mode="preview"></v-md-editor>
        </div>
      </div>
	  
   <div class="optration">
	   <div
	     @click="copyAnswer(content)"
	     class="operationItem">
	     <el-icon size="13">
	       <CopyDocument />
	     </el-icon>
	     <div class="operationExplain">复制</div>
		</div>
		
	   <div
	     @click="onCollection(item, content)"
	     class="operationItem operationItemSelected"
	     v-show="!item.isCollection">
	     <el-icon size="13">
	       <Star />
	     </el-icon>
	     <div class="operationExplain">收藏</div>
	   </div>
	 </div>
	
      <button @click="back" class="determineTheBuild" type="primary">返回上一页</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, ref } from "vue";
import ViewState from "@/components/ViewState.vue";
import router from "@/router";
import { FavoritesAdd,GetUserInfo } from "../../../api/BSideApi";
import store from "@/store";
import {ElNotification} from "element-plus";


export default {
  name: "CreateDetailView",
  methods: {
    router() {
      return router
    }
  },
  components: { ViewState },
  setup() {
    let router = useRouter()
    let query = router.currentRoute.value.query;
    let role = ref(query.role ? JSON.parse(decodeURIComponent(query.role)) : false)
    let item = ref(JSON.parse(decodeURIComponent(query.item)));
    let load = ref(false)
    let error = ref(false)
    let content = ref('')
    let socket = ref(null)
    let scrollRef = ref(null)
    let messages = ref([])

    // TODO 系统角色
    if (role.value) messages.value.push({
      role: 'system',
      content: role.value
    })

    // TODO 我
    messages.value.push({
      role: 'user',
      content: item.value
    })

    onMounted(() => {
      webSocket()

    });

    // TODO 滚动到底部
    function scrollToTheBottom() {
      setTimeout(() => scrollRef.value.scrollTop = scrollRef.value.scrollHeight, 20);
    }

    function webSocket() {
      if (typeof (WebSocket) == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        load.value = true
        if (socket.value != null) {
          socket.value.close();
          socket.value = null;
        }
        socket.value = new WebSocket(process.env.VUE_APP_WSS + "/gpt-web/api/" + localStorage.getItem('token') + '/gpt-3.5-turbo');
        // TODO 建立连接
        socket.value.onopen = function () {
          socket.value.send(JSON.stringify({
            messages: messages.value
          }))
        };
        // TODO 接收消息
        socket.value.onmessage = function (msg) {
          load.value = false
          if (content.value) {
            content.value += msg.data
          } else {
            content.value = msg.data
          }
          scrollToTheBottom()
        };
        // TODO 关闭连接
        socket.value.onclose = function () {
          console.log("websocket已关闭");
          getUser();
        };
        // TODO 处理错误
        socket.value.onerror = function () {
          ElNotification({
            title: '信息过期',
            message: '登录信息已过期,请重新登录',
            type: 'error',
          })
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          location.reload();
        }
      }
    }

    async function getUser() {
      try {
        let res = await GetUserInfo()

        store.commit("setUserinfo", res);
      } catch (e) {
        console.log(e)
      }
    }

    function closeSocket() {
      socket.value.close();
      socket.value = null;
    }

    function back() {
      closeSocket()
      router.go(-1);
    }
	
	// TODO 复制答案
	function copyAnswer(data) {
	  navigator.clipboard.writeText(data);
	  ElNotification({
	    message: "复制成功",
	    type: "success",
	  });
	}
	
	async function onCollection(item, content) {
	  try {
	    let bol = true
	    if (bol) {
	      try {
	        await FavoritesAdd({
	          issue: item,
	          answer: content,
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
	  } catch (e) {
	    ElNotification({
	      message: e,
	      type: "error",
	    });
	  }
	}

    return {
      load, error, content, item, back, scrollRef,onCollection,
        copyAnswer,
    }
  }
}
</script>

<style scoped>
.body {
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 20px 10px;
  display: flex;
  overflow: auto;
  background-color: #ffffff;
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
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 10px;
  animation: explainAnimation 0.3s;
}



@media (mini-width: 768px) {


.result {
  min-height: 60px;
  max-width: 800px;
  width: 100%;
  background: #1f2224;
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  position: relative;
  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
}

}

@media (max-width: 767px) {



.result {
  min-height: 60px;
  max-width: 767px;
  width: 95%;
  margin-left: 10px;
  margin-right: 10px;
  background: #1f2224;
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  position: relative;
  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
}

.container {
    padding: 0;
  }

}

::v-deep( .vuepress-markdown-body) {
  padding: 0 0 0 16px;
  color: #ffffff;
  background-color: #1f2224;
}


.completeText {
  box-sizing: border-box;
  width: 100%;
  min-height: 19px;
  white-space: pre-wrap;
  flex: 1;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 19px;
  position: relative;
}

>>>.mdPreview>.vuepress-markdown-body {
  padding: 0;
  color: #ffffff;
  background-color: #ffffff;
}


.determineTheBuild {
  font-size: 15px;
  background-color: var(--el-text-color-primary);
  color: #fff;
  border-radius: 100px;
  height: 40px;
  width: 300px;
  max-width: 100%;
  line-height: 40px;
  border: 0;
  display: table;
  margin: 50px auto 0 auto;
  cursor: pointer;
}

.determineTheBuild:hover {
  background-color: #56575a;
}

.determineTheBuild {
  font-size: 15px;
  background-color: var(--el-text-color-primary);
  color: #fff;
  border-radius: 100px;
  height: 40px;
  width: 300px;
  max-width: 100%;
  line-height: 40px;
  border: 0;
  display: table;
  margin: 50px auto 0 auto;
  cursor: pointer;
}

.determineTheBuild:hover {
  background-color: #56575a;
}

.operationItem {
    height: 30px;
	width:80px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 15px;
    margin: 5px;
    display: flex;
    align-items: center;
    background-color: #fafafa;
    border-radius: 10px;
    font-size: 13px;
    color: white;
}

.operationItemSelected {
    background-color: #7d80ff;
    color: white;
}

.operationExplain {
    margin-left: 5px;
}

.optration {
  display: flex;
  justify-content: space-between;
  width: 198px;
  margin-left: 20px;
}


</style>
