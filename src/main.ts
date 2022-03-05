import { createApp } from "vue";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import { store, key } from "./store";

// styles
import "@/styles/reset.scss";
import "@/styles/app.scss";
import "@/styles/mindmap.scss";
import "@/styles/app-button.scss";
import "@/styles/backgound-theme.scss";

createApp(App).use(store, key).component("Icon", Icon).mount("#app");
