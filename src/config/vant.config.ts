import "vant/lib/index.css";
import { App } from "vue";
import { Button, NavBar, Icon, Toast, Tabbar, TabbarItem } from "vant";

const vantConf = (app: App) => {
  app.use(Button);
  app.use(NavBar);
  app.use(Icon);
  app.use(Toast);
  app.use(Tabbar);
  app.use(TabbarItem);
};

export default vantConf;
