<template>
  <NavigationBar />
  <LeftNavigationBar />
  <el-dialog
    class="announcement"
    v-model="dialogVisible"
    center
    align-center
    width="380px"
    style="background-color: #ffffff"
  >
    <span style="text-align: center">{{ context }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogVisible = false"
          color="#626aef"
        >
          朕已阅
        </el-button>
      </span>
    </template>
  </el-dialog>
  <levitation-ball />
</template>

<script>
import { useStore } from "vuex";
import LeftNavigationBar from "@/components/LeftNavigationBar.vue";
//import LevitationBall from "@/components/LevitationBall.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { getAnnouncement } from "../api/BSideApi";
import { onMounted, ref } from "vue";

export default {
  components: { LeftNavigationBar, NavigationBar},// LevitationBall },
  setup() {
    let store = useStore();
    store.commit("initState");
    const dialogVisible = ref(false);
    const context = ref("");
    onMounted(() => {
      setTimeout(() => {
        getAnnouncementData();
      }, 100);
    });

    async function getAnnouncementData() {
      try {
        let announcement = await getAnnouncement();
        if (announcement) {
          let item = localStorage.getItem("announcement");
          if (item !== null) {
            let parse = JSON.parse(item);
            if (parse.logotypeId !== announcement.logotypeId) {
              localStorage.setItem(
                "announcement",
                JSON.stringify(announcement)
              );
              context.value = announcement.context;
              dialogVisible.value = true;
            }
          } else {
            localStorage.setItem("announcement", JSON.stringify(announcement));
            context.value = announcement.context;
            dialogVisible.value = true;
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    return {
      dialogVisible,
      context,
    };
  },
};
</script>

<style>
.announcement {
  width: 25%;
  border-radius: 10px;
}

@media (max-width: 767px) {
  .announcement {
    width: 70%;
  }
}

#app {
  width: 99.5%;
  height: 100%;
  flex-direction: column;
  display: flex;
  font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  letter-spacing: 1px;
  background: #ffffff;
}

@media only screen and (max-width: 767px) {
  #app {
    padding: 0px;
  }
}

html,
body {
  margin: 0;
  padding: 0;
  color: #fafafa;
  width: 100%;
  height: 100%;
}


/* TODO 滚动条样式*/
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1); */
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
  display: block;
}

.login-dialog > header {
  display: none;
}

.login-dialog > .el-dialog__body {
  padding: 0 !important;
}

.el-switch__core {
  background: #393939 !important;
}
.el-input-group__append {
  box-shadow: none !important;
}
.el-input-group__append {
  background: none !important;
}

.el-pagination .btn-prev,
.el-pagination .btn-next {
  background-color: rgb(35, 40, 42) !important;
}

.el-pagination .el-pager li:not(.active) {
  background-color: rgb(35, 40, 42) !important;
  color: darkgray !important;
}
</style>
