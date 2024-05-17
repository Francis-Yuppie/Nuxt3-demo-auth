<script lang="ts" setup>
const form = ref({
  email: "",
  username: "",
  password: "",
});

const isLoading = ref(false);

const handleFormSubmit = async () => {
  try {
    isLoading.value = true;

    await $fetch("/api/auth/register", {
      method: "POST",
      body: form.value,
    });

    useRouter().push({ name: "login" });
  } catch (err: any) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">Register</h1>
    <form @submit.prevent="handleFormSubmit">
      <input
        v-model="form.email"
        class="w-full border p-2 rounded-lg mb-4"
        type="email"
        placeholder="Email"
      />
      <input
        v-model="form.username"
        class="w-full border p-2 rounded-lg mb-4"
        type="text"
        placeholder="Username"
      />
      <input
        v-model="form.password"
        class="w-full border p-2 rounded-lg mb-4"
        type="password"
        placeholder="Password"
      />
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 transition-all rounded-full duration-200 w-full text-white"
      >
        Register
      </button>
    </form>
  </div>
</template>

<style></style>

