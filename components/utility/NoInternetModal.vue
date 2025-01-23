<template>
  <div class="wrapper" :class="{ hide: !isOpen }">
    <div class="toast" :class="{ offline: !isOnline }">
      <div class="content">
        <div class="icon">
          <svg
            v-if="isOnline"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <path d="M12 20h.01" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <path d="M12 20h.01" />
          </svg>
        </div>
        <div class="details">
          <span>{{
            isOnline ? $t("you_are_online_now") : $t("you_are_offline_now")
          }}</span>
          <p>
            {{
              isOnline
                ? $t('internet_connected')
                : $t('internet_disconnected')
            }}
          </p>
        </div>
      </div>
      <div class="close-icon" @click="closeToast">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false); // Modal is closed by default
const isOnline = ref(true); // Assume online by default

const checkInternetConnection = () => {
  if (process.client) {
    // Ensure this runs only on the client side
    isOnline.value = navigator.onLine;
    isOpen.value = true; // Show toast whenever the connection status changes

    // Auto-close the toast after 5 seconds
    setTimeout(() => {
      isOpen.value = false;
    }, 5000);
  }
};

const closeToast = () => {
  isOpen.value = false;
};

onMounted(() => {
  if (process.client) {
    // Ensure this runs only on the client side
    window.addEventListener("online", checkInternetConnection);
    window.addEventListener("offline", checkInternetConnection);
    checkInternetConnection(); // Initial check
  }
});

onUnmounted(() => {
  if (process.client) {
    // Ensure this runs only on the client side
    window.removeEventListener("online", checkInternetConnection);
    window.removeEventListener("offline", checkInternetConnection);
  }
});
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 20px;
  left: 20px;
  animation: show_toast 1s ease forwards;
}

@keyframes show_toast {
  0% {
    transform: translateX(-100%);
  }
  40% {
    transform: translateX(10%);
  }
  80%,
  100% {
    transform: translateX(20px);
  }
}

.wrapper.hide {
  animation: hide_toast 1s ease forwards;
}

@keyframes hide_toast {
  0% {
    transform: translateX(20px);
  }
  40% {
    transform: translateX(10%);
  }
  80%,
  100% {
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
  }
}

.wrapper .toast {
  background: #fff;
  padding: 20px 15px 20px 20px;
  border-radius: 10px;
  border-left: 5px solid #2ecc71;
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.15);
  width: 430px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper .toast.offline {
  border-color: #ccc;
}

.toast .content {
  display: flex;
  align-items: center;
}

.content .icon {
  font-size: 25px;
  color: #fff;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background: #2ecc71;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast.offline .content .icon {
  background: #ccc;
}

.content .details {
  margin-left: 15px;
}

.details span {
  font-size: 20px;
  font-weight: 500;
}

.details p {
  color: #878787;
}

.toast .close-icon {
  color: #878787;
  font-size: 23px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  background: #f2f2f2;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-icon:hover {
  background: #efefef;
}
</style>
