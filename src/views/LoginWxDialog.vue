<template>
  <div>
  
  </div>
</template>

<script>
 import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  import {ElLoading, ElNotification} from "element-plus";
  import {getPromotRoleList} from "../../api/BSideApi";

  export default {
    name: "LoginWxDialog",
    setup() {
		
	onMounted(() => {
		LoginWeixinByParam();
	});

    function LoginWeixinByParam(){
		const currentUrl = window.location.href;
		let startcode=currentUrl.indexOf('?')
		if(startcode!=-1){
		 let paramstr=currentUrl.substring(startcode);
		 let params=paramstr.substring(0,paramstr.length-2);
		 console.log("currentUrl==="+params);	
		}
		
	 }

      return {
        menuCollection,
        onItem,
		getImageUrl,
      };
    },
  };
</script>

<style lang="scss" scoped>
  :deep(.el-dialog) {
    background-color: #ffffff;
  }

  .animation {
    width: 160px;
    height: 160px;
    overflow: hidden;
    margin: 20px auto 0;
    background-color: rgb(53, 57, 60);
  }

  .animation img {
    width: 100%;
    height: 100%;
    object-fit: none;
  }

  .h5 {
    font-size: 10px;
  }

  @media (max-width: 767px) {
    .h5 {
      font-size: 12px;
    }
  }

  .login-box {
    overflow: hidden;
    width: 100%;
    padding: 0;
    background-color: #ffffff;
  }

  .cover-div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(27, 30, 32, 0.8);
    padding: 10px;
    border-radius: 5px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
  }

  .login-box > .head > img {
    display: block;
    width: 100%;
    margin: 0 auto;
    user-select: none;
    margin-bottom: -20px;
  }

  .head_img {
    background-image: linear-gradient(
        to top,
        #eff0f0 30%,
        transparent 100%
      ),
      url("../assets/login-header.png");
    background-size: cover;
    background-position: center;
    height: 100px;
    box-shadow: 0px -10px 20px rgba(27, 30, 32, 0.2);
  }

  .form {
    position: relative;
    padding: 10px;
  }

  .submit-button {
    width: 100%;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 15px;
    --el-button-bg-color: rgb(129, 102, 231);
    border: none;
  }

  .submit-button:hover,
  .submit-button:focus,
  .submit-button:active {
    background-color: rgb(83, 67, 146);
    outline: 0;
  }

  .form > .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 20px;
    height: 20px;
    position: relative;
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loader:before {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #c2a5ff;
    animation: preloader_4_before 1.5s infinite ease-in-out;
  }

  .loader:after {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffa4c8;
    left: 5px;
    animation: preloader_4_after 1.5s infinite ease-in-out;
  }

  @keyframes preloader_4_before {
    0% {
      transform: translateX(0px) rotate(0deg);
    }
    50% {
      transform: translateX(15px) scale(1.2) rotate(260deg);
      background: #cca7f1;
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) rotate(0deg);
    }
  }

  @keyframes preloader_4_after {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-15px) scale(1.2) rotate(-260deg);
      background: #9dbefa;
      border-radius: 0;
    }
    100% {
      transform: translateX(0px);
    }
  }

  .loading-model {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
  }

  .login-title {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    padding-bottom: 10px;
    color: #b3b3b3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .login-selected {
    color: #000000;
    font-weight: 550;
  }

  .login-title div {
    margin: 0 20px;
  }

  .qc_code {
    width: 140px;
    height: 140px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 50px rgba(183, 156, 156, 0.9);

    &.dark {
      background-color: #eee;
    }
  }

  .btn-generate {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }

  .prompt-style {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 50px;
  }

  :deep(.el-input__inner) {
    background: #0d0f10;

    font-weight: 400;
    color: #b7b7b7;
  }

  :deep(.el-input__wrapper) {
    background: #0d0f10;
    box-shadow: none;
  }

:deep(.el-input-group__append, .el-input-group__prepend) {
  border: none !important;
}


:deep(.login-dialog) {
  input:-internal-autofill-previewed,
  input:-internal-autofill-selected {
    -webkit-text-fill-color: #a8abb2;
    box-shadow: inset 0 0 0 1000px #0d0f10 !important; // 改变了背景色
  }
}
</style>
