<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const { data, signOut } = useAuth();

const handleLogout = async () => {
  await signOut();
};
</script>
<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">
      Welcome {{ (data?.user as any )?.username }}
    </h1>
    <p>Access your dashboard and account from here</p>

    <button
      type="button"
      class="bg-cyan-500 hover:bg-red-600 transition-all duration-200 text-red-50 rounded-full w-40"
      @click="handleLogout"
    >
      Logout
    </button>
  </div>
</template>

<style></style>

