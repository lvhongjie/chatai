<template>
  <ViewState
    v-if="!store.getters.userinfo"
    Type="error"
    ErrorText="登录查看知识库"
    IsShowBottom
    ButtonText="登录"
    @ClickTheButton="loginVisible = true" />
  <div v-else class="body">
	<iframe style="border: 0px; width: 100%;height: 200%;" src="/zs.html"></iframe>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import store from "@/store";
import LoginDialog from "@/components/LoginDialog.vue";
import { Promotion, Star } from "@element-plus/icons-vue";
import ViewState from "@/components/ViewState.vue";

export default {
  name: "LaboratoryView",
  components: { LoginDialog, Star, Promotion, ViewState },
  setup() {
    let store = useStore();
    let loginVisible = ref(false);

    return {
      loginVisible,
	  store,
    };
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 2500px;
  background-color: #ffffff;
}

</style>
