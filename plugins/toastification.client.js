import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, {
        rtl: true,
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        hideProgressBar: true,
        icon: true,
        /*position: "top-right",
        timeout: 5000,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        closeButton: "button",*/
        
    })

});