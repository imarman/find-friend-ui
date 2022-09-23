import { createApp } from "vue";
import App from "./App.vue";

import vantConf from "./config/vant.config";


const app = createApp(App);
vantConf(app);
app.mount("#app");
