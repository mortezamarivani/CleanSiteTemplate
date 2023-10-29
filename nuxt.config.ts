// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:
            {
            link: [
                // Include Google Fonts Material Icons CDN
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' },
                // ...other link tags
                ],
            htmlAttrs:{
                dir:"rtl",
                lang:"fa"
            },
            title: 'Crud Task',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {   name: 'description', 
                    content: 'Crud Task ' ,
                    // ogTitle: 'Crud Task ',
                    description: 'Crud Task.',
                    ogDescription: 'Crud Task for my company .',
                    ogImage: '',
                    twitterCard: '',
                }
              ],
            
        }
    },
    
    runtimeConfig: {
        public: {
            localhostApiBase: "http://localhost:3000/api/",
            apiBase: "https://taskapi.eng-marivani.ir/api/"
        }
    },

    css: ["~/assets/css/main.css"],
    modules: ['@formkit/nuxt','@pinia/nuxt'],

    //due to resolve this err :export 'useToast' not found. The requested module 'vue-toastification' is a CommonJS
    //set to use of bable instate of eslint 
    //when you dont yous of this code after publish give you that errs on the top 
    //please dont change this code maybe it would be dangrous!!
    build: {
        transpile: ['vue-toastification'],
    }
})
