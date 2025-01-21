export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie("isAuthenticated", { maxAge: 60 * 60 });
  if (to.path.startsWith("/cv") && !isAuthenticated.value) {
    return navigateTo("/password");
  }
});
