import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, {
        rtl: true,
        timeout: 5000,
        closeOnClick: true,
        hideProgressBar: true,
        icon: true,
        position: "top-center",
        draggable: true,
        closeButton: "button"
        /*position: "top-right",
        timeout: 5000,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        ,*/
        
    })

});