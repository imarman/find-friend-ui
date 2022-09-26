import "vant/lib/index.css";
import { App } from "vue";
import {
  Button,
  NavBar,
  Icon,
  Toast,
  Tabbar,
  TabbarItem,
  Search,
  Divider,
  Tag,
  TreeSelect,
  Empty,
  Space,
  Cell,
  CellGroup,
  Form,
  Field,
  Card
} from "vant";

const vantConf = (app: App) => {
  app.use(Button);
  app.use(NavBar);
  app.use(Icon);
  app.use(Toast);
  app.use(Tabbar);
  app.use(TabbarItem);
  app.use(Search);
  app.use(Divider);
  app.use(Tag);
  app.use(TreeSelect);
  app.use(Empty);
  app.use(Space);
  app.use(Cell);
  app.use(CellGroup);
  app.use(Form);
  app.use(Field);
  app.use(Card);
};

export default vantConf;
