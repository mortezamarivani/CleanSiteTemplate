export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const body = await readBody(event)

    try {
        const data = await $fetch(`${apiBase}Crud/Edit`, {
            method: 'PUT',
            body: body,
            headers: {
                'Accept': 'application/json',
            }
        });

        return data;
    } catch (error) {
        return error;
    }

})