// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            htmlAttrs:{
                dir:"rtl",
                lang:"fa"
            }
        }
    },
    
    runtimeConfig: {
        public: {
            apiBase: "http://localhost:8000/api"
        }
    },

    css: ["~/assets/css/main.css"],

    //due to resolve this err :export 'useToast' not found. The requested module 'vue-toastification' is a CommonJS
    //set to use of bable instate of eslint 
    //when you dont yous of this code after publish give you that errs on the top 
    //please dont change this code maybe it would be dangrous!!
    build: {
        transpile: ['vue-toastification'],
    }
})
