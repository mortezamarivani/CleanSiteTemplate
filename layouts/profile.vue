<template>
    <section class="profile_section layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-2">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <NuxtLink class="nav-link" to="/profile" >
                            اطلاعات کاربر 
                            </NuxtLink>
                        </li>
                        <li class="list-group-item">
                            <NuxtLink class="nav-link" to="/profile/sms" >
                            ارسال لینک 
                            </NuxtLink>
                        </li>
                        <li class="list-group-item">
                            <a @click="logout" href="#">خروج</a>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-12 col-lg-10">
                    <slot />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import {useToast} from 'vue-toastification';
const toast = useToast();
const {authUser} = useAuth();

async function logout(){
    await useFetch('/api/auth/logout',{
        method: 'POST'
    })
    authUser.value = null;
    toast.warning("از سیستم خارج شده اید")
    return navigateTo('/')
}

</script>
