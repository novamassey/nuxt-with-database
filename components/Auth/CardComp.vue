<template>
  <div>
    <NCard class="card">
      <h3>{{ authState }}</h3>
      <div class="input-container">
        <input placeholder="email" />
        <input placeholder="password" />
      </div>
      <NButton>Submit</NButton>
      <p @click="toggleAuthState">
        {{
          authState === "Login"
            ? "Don't have an account? Create One Now"
            : "Already have an account? Login now!"
        }}
      </p>
    </NCard>
  </div>
</template>

<script setup lang="ts">
const authState = ref<"Login" | "Signup">("Login");

const toggleAuthState = () => {
  if (authState.value === "Login") authState.value = "Signup";
  else authState.value = "Login";
};
</script>

<style>
.card {
  padding: 1rem;
  width: 25rem;
}
.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;
  border: 0.1rem solid lightgray;
  border-radius: 0.4rem;
}
p {
  color: blue;
  font-size: 0.75rem;
  cursor: pointer;
}
</style>