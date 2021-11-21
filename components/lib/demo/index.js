import Demo from "./src/main";

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo);
};

export default Demo;
