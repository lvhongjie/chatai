<template>
  <div class="body">
    <div class="container">
		
		<div class="button-row">
			<button 
			  class="text-button"
			  key="99"
			  :style="{color: 99 === selectedKey ? '#a0cfff' : '#000000' }"

			  @click="handleButtonClick('全部',99)"
			>
			 全部 
			</button>
		    <button
		      v-for="(menuItem, menuIndex) in menuCollectionInit"
		      :key="menuIndex"
		      class="text-button"
			  :style="{color: menuIndex === selectedKey ? '#a0cfff' : '#000000' }"
		      @click="handleButtonClick(menuItem.title,menuIndex)"
		    >
		      {{ menuItem.title }}
		    </button>
		  </div>
		
      <div
        v-for="(menuItem, menuIndex) in menuCollection"
        :key="menuIndex"
        class="list"
      >
        
		<div class="title">{{ menuItem.title }}</div>
        <div class="content">
          <el-row :gutter="20">
            <el-col
              @click="onItem(item)"
              v-for="(item, index) in menuItem.list"
              :key="index"
              :xs="12"
              :sm="8"
              :md="6"
            >
    
			  <div class="item">
				  <img :src="getImageUrl(item.image)" class="image">
			  <div class="titlegpt">{{ item.name }}</div>
			  <div class="titledesc" style="font-size: 10;">{{ item.desc }}</div>
			  </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  name: "CreateView",
  components: { LoginDialog },
  setup() {
    let store = useStore();
    let router = useRouter();
    let menuCollection = ref(require("../../utils/CreateData.json"));
    let loginVisible = ref(false);
	let selectedKey = ref(99);
	let menuCollectionInit =ref(require("../../utils/CreateData.json"));

    function onItem(item) {
      if (!store.getters.userinfo) return (loginVisible.value = true);
      router.push({
        path: "/create_edit",
        query: {
          item: encodeURIComponent(JSON.stringify(item)),
        },
      });
    }
	
	function getImageUrl(imagePath) {
	   return require('@/assets/' + imagePath);
	}
	
	function handleButtonClick(buttonText,indexkey) {
	       selectedKey.value = indexkey;
	      // 在这里可以执行对应按钮点击后的逻辑操作
		  if(indexkey===99){
			  menuCollection.value=menuCollectionInit.value;
		  }else{
			menuCollectionInit.value.forEach((item, index) => {
				if (item.title == buttonText) {
					menuCollection.value=[];
					menuCollection.value.push(item);
				}
			});    
		  }
		  
		  
    }

    return {
      menuCollection,
	  menuCollectionInit,
      onItem,
      loginVisible,
	  getImageUrl,
	  handleButtonClick,
	  selectedKey,
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
  max-width: 1390px;
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
  color: white;
  font-size: 20px;
  font-weight: 500;
  color: #000;
}

.content {
  width: 100%;
  margin-top: 30px;
}

.item {
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  display: flex;
  justify-content: left;
  align-items: left;
  color: #ffffff;
  border: 1px solid #eff0f0;
  margin-bottom: 20px;
}

.item:hover {
  background-color: #5a5a5a;
  cursor: pointer;
  transition: background-color 0.2s;
}

.titlegpt {
    width: 100%;
    height: 30px;
  	margin-left: 10px;
  	margin-top: 8px;
	font-size: 14px;
	color: #000;
    }
	
	.titledesc {
	  width: 100%;
	  height: 40px;
	  margin-left: -216px;
	  margin-top: 35px;
	  margin-bottom: 10px;
	  font-size: 13px;
	  color: #999;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0;
  }

  .list:first-child {
    margin-top: 30px;
  }
  .list {
    padding-left: 5px;
    padding-right: 5px;
  }

  .content {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }

  .title{
    text-indent: 20px;
  }
  
  .item {
    background-color: #fafafa;
    width: 155px;
    height: 80px;
    border-radius: 8px;
    display: flex;
    justify-content: left;
    align-items: left;
    color: #ffffff;
    margin-bottom: 20px;
  }
  
  .titlegpt {
    width: 100%;
    height: 30px;
  	margin-left: 10px;
  	margin-top: 15px;
  	font-size: 14px;
  	color: #000;
    }
  	
  	.titledesc {
  	  width: 100%;
  	  height: 40px;
  	  margin-left: -216px;
  	  margin-top: 35px;
  	  margin-bottom: 10px;
  	  font-size: 13px;
  	  color: #999;
  	  display: -webkit-box;
  	  -webkit-box-orient: vertical;
  	  -webkit-line-clamp: 2;
  	  overflow: hidden;
  	  text-overflow: ellipsis;
	  display: none;
  	}
	
	.container {
	  animation: explainAnimation 0.3s;
	  max-width: 767px;
	  width: 100%;
	  box-sizing: border-box;
	  padding: 0 10px 10px;
	}
}

.image {
    width: 40px;
    height: 40px;
	margin-left: 10px;
	margin-top: 10px;
  }
  
  .button-row {
    display: flex;
    justify-content: space-between;
	width: 100%;
	margin-top: 20px;
	margin-bottom: 30px;
	flex-wrap: wrap;
  }
  
  .text-button {
    padding: 5px;
    background-color: #fafafa;
    border: none;
    cursor: pointer;
	font-size: 15px;
	color: #000000;
  }
  
</style>
