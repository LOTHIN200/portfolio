<script lang="ts" setup>
import { ref } from "vue";
const users = [
  {
    name: "login",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    username: "john_doe",
  },
  {
    name: "log_out",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    username: "jane_smith",
  },
  {
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "alex_johnson",
  },
  {
    name: "signup",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    username: "signup_user",
  },
];

const isOpen = ref(false);
const isLoginModalOpen = ref(false);
const isSignUpModalOpen = ref(false);
const selectedUser = ref(users[0]);

function toggleDropdown(event: MouseEvent) {
  event.preventDefault();
  isOpen.value = !isOpen.value;
}

// Function to select a user
function selectUser(user: { name: string; avatar: string; username: string }) {
  selectedUser.value = user;
  isOpen.value = false;

  if (user.name === "login") {
    isLoginModalOpen.value = true;
  }

  if (user.name === "signup") {
    isSignUpModalOpen.value = true;
  }
}
</script>

<template>
  <div class="relative py-2">
    <button
      class="outline-none bg-transparent p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
      @click="toggleDropdown"
    >
      <img :src="selectedUser.avatar" alt="User Avatar" class="w-8 h-8 rounded-full" />
      <span>{{ selectedUser.name }}</span>
    </button>
    <div v-if="isOpen" class="fixed inset-0 z-30" @click="isOpen = false"></div>
    <transition
      enter-active-class="ease-out duration-300"
      enter-from-class="transition transform opacity-0 translate-y-6"
      enter-to-class="transition transform opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-6"
    >
      <div
        v-show="isOpen"
        class="absolute border border-box-border shadow-md shadow-box-shadow z-40 top-full right-0 transition-all ease-linear p-2 rounded-xl w-44 bg-box-bg"
      >
        <ul class="flex flex-col">
          <li
            v-for="user in users"
            :key="user.username"
            class="flex select-none cursor-pointer items-center gap-3 px-2 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-200"
            @click="selectUser(user)"
          >
            <img :src="user.avatar" alt="User Avatar" class="w-8 h-8 rounded-full" />
            <span>{{ user.name }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>

  <!-- Login Modal -->
  <Modal
    :isOpen="isLoginModalOpen"
    title="login"
    :fields="[
      {
        id: 'username',
        label: 'username',
        type: 'text',
        value: '',
        placeholder: 'enter_username',
      },
      {
        id: 'password',
        label: 'password',
        type: 'password',
        value: '',
        placeholder: 'enter_password',
      },
    ]"
    submitButtonText="login"
    @update:isOpen="isLoginModalOpen = $event"
    @submit="isLoginModalOpen = false"
  />

  <!-- SignUp Modal -->
  <Modal
    :isOpen="isSignUpModalOpen"
    title="register"
    :fields="[
      {
        id: 'newUsername',
        label: 'username',
        type: 'text',
        value: '',
        placeholder: 'enter_username',
      },
      {
        id: 'newPassword',
        label: 'password',
        type: 'password',
        value: '',
        placeholder: 'enter_password',
      },
    ]"
    submitButtonText="sign_up"
    @update:isOpen="isSignUpModalOpen = $event"
    @submit="isSignUpModalOpen = false"
  />
</template>
