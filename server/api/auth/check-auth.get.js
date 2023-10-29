export default defineEventHandler(async (event) => {
    /* const { setInCookie } = useCookie(); */
    const { public: { apiBase } } = useRuntimeConfig();
    const loginToken = getCookie(event, 'login_token');
    
    try {
        const data = await $fetch(`${apiBase}Account/check-auth`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${loginToken}`
            }
        });
        if(data.status == "Error") {
            //setInCookie(event, 'login_token', '')
        }
        else{
            return data.data;
        }
    } catch (error) {
        return error;
    }

})