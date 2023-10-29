<template>
        <div v-if="errors.length > 0" class="alert alert-danger errPanelStyle">
            <ul class="mb-0 errBulletPadding" >
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
</template>
<script setup>
const props = defineProps(['errors'])
</script>
<style scoped>
.errPanelStyle{
    padding: 0.5rem !important;
    font-size: x-small;
    margin-bottom: 1px;
}
.errBulletPadding{
    padding-right: 1rem;
}
</style>
