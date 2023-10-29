import { useCookie } from '~/composables/useCookie.js'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig();
    console.log('body in server' ,body)
    
    try {
     /*    const data = await $fetch(`${apiBase}Queue/GetAllQueueByVisitDateAndDr`, {
            method: 'POST', 
            body: body,
            headers: {
                'Accept': 'application/json',
            }
        }); */
       
       return data;
    } catch (error) {
        return error;
    }

})