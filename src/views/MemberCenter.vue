<template>
  <div class="body">
    <div class="container">
      <div class="content">
        <el-row :gutter="20">
          <el-col
            @click="onItem(item)"
            v-for="(item, index) in menuCollection"
            :key="index"
            :xs="12"
            :sm="8"
            :md="6">
            <div class="item">
              <div>
                <img :src="getImageUrl(item.icon)" class="image">
              </div>
              <div>
                <div
                  style="
                    font-weight: 700;
                    font-size: 16px;
                    color: #ffffff;
                    padding-top: 10px;
                  ">
                  {{ item.title }}
                </div>
                <div
                  style="
                    padding-top: 20px;
                    font-size: 7px;
                    color: #878787;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  ">
                  {{ item.introduce }}
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
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  import LoginDialog from "@/components/LoginDialog.vue";
  import {ElLoading, ElNotification} from "element-plus";

  export default {
    name: "PresetCharacterView",
    components: { LoginDialog },
    setup() {
      let store = useStore();
      let router = useRouter();
      let menuCollection = ref(require("../utils/PresetsToolsData.json"));
      let loginVisible = ref(false);
	  
      function getImageUrl(imagePath) {
         return require('@/assets/' + imagePath);
      }
	  
      function onItem(data) {
		let routerpath="/Custom";
        if (!store.getters.userinfo) return (loginVisible.value = true);
        localStorage.setItem("roleData", JSON.stringify(data));
		if(data.botInitialization=='stablediffution'){
			routerpath="/doing_draw";
		}
		if(data.botInitialization=='sdxl-diffution'){
			routerpath="/doing_xldraw";
		}
		if(data.botInitialization=='mjxl-diffution'){
			routerpath="/doing_mjdraw";
		}
		if(data.botInitialization=='classes'){
			routerpath="/laboratory";
		}
		console.log("donging"+data.botInitialization)
		if(data.botInitialization=='donging'){
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

      return {
        menuCollection,
        onItem,
        loginVisible,
		getImageUrl,
      };
    },
  };
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
    max-width: 1200px;
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
    width: 80%;
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
    width: 40px;
    height: 40px;
	margin-left: 10px;
	margin-top: 10px;
  }
</style>
