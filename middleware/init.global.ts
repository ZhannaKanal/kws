export default defineNuxtRouteMiddleware((to, from)=>{
    if(to.path === '/account'){
        if(localStorage['accessToken']){

        } else{
            return navigateTo({name: 'login'})
        }
    }
})