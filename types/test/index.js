import Vue from "vue";
import VueJSModal from "../index";
Vue.use(VueJSModal);
Vue.use(VueJSModal, {
    componentName: "another-modal-name",
    dialog: false
});
const vm = new Vue({
    template: `<vue-modal name="awesome-modal"></vue-modal>`
}).$mount("#app");
vm.$modal.show("awesome-modal");
vm.$modal.hide("awesome-modal", { customeEvent: "customEventParam" });
vm.$modal.toggle("awesome-modal");
//# sourceMappingURL=index.js.map