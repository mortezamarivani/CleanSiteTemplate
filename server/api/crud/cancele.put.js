export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const body = await readBody(event)
    // const token = getCookie(event, 'login_token');

    try {
        const data = await $fetch(`${apiBase}Queue/EditByQueueStatuseForUser`, {
            method: 'PUT',
            body: body,
            headers: {
                'Accept': 'application/json',
                // 'Authorization': `Bearer ${token}`
            }
        });

        return data;
    } catch (error) {
        return error;
    }

})