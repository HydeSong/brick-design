# Brick Design UI 组件库

### 快速开始

### 1.安装

```bash
npm install brick-design

OR

yarn add brick-design
```

### 2.引用组件库

```javascript
import { createApp } from "vue";
import App from "./App.vue";
// 全部引入
import "brick-design/dist/css/index.css";
import BrickDesign from "brick-design";

createApp(App).use(BrickDesign).mount("#app");
```

```javascript
// 按需引入
import { createApp } from "vue";
import App from "./App.vue";

import "../components/css/demo.scss";
import Demo from "../components/lib/demo/index";

createApp(App).use(Demo).mount("#app");
```
