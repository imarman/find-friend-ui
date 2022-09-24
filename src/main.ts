import { createApp } from "vue";
import App from "@/App.vue";

import vantConf from "./config/vant.config";
import router from "./router"

const app = createApp(App);
vantConf(app);
app.use(router);
app.mount("#app");
