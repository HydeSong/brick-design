import { createApp } from "vue";
import App from "./App.vue";

import "../components/css/index.scss";
import Demo from "../components/lib/demo/index";
import Card from "../components/lib/card/index";

createApp(App).use(Demo).use(Card).mount("#app");
