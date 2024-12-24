<template>
  <section class="py-20">
    <AtomsContainer>
      <div
        class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-body-color"
      >
        <div class="absolute right-0 top-0 h-full w-full flex justify-end">
          <span class="flex opacity-20">
            <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
            <span
              class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
            ></span>
          </span>
        </div>
        <div class="absolute left-0 bottom-0 h-full w-full flex items-end">
          <span class="flex opacity-20">
            <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
            <span
              class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
            ></span>
          </span>
        </div>
        <div class="mx-auto text-center max-w-xl md:max-w-2xl relative">
          <h2
            class="text-gray-800 pt-4 dark:text-white font-bold text-4xl md:text-5xl lg:text-6x"
          >
            Need Assistance or Have Questions?
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#8cd66a]"
              >Contact us</span
            >
            through email!
          </h2>
          <p class="text-gray-600 dark:text-gray-300 pt-8 mx-auto max-w-xl">
            Whether you need help or want to provide feedback, we're here to listen. Reach
            out to us by sending an email, and we'll get back to you as soon as possible.
          </p>
          <div class="mx-auto max-w-md sm:max-w-xl pt-10">
            <form @submit.prevent="sendEmail" class="items-center relative gap-x-2">
              <!-- <input
                v-model="email.to"
                disabled
                type="email"
                placeholder="youremial@gmail.com"
                class="outline-none border-2 border-transparent focus:border-primary bg-body text-gray-600 dark:text-gray-200 rounded-3xl px-6 py-3 w-full"
              /> -->
              <div class="mt-4">
                <input
                  v-model="email.subject"
                  type="text"
                  :placeholder="$t('title')"
                  class="outline-none border-2 border-transparent focus:border-primary bg-body text-gray-600 dark:text-gray-200 rounded-3xl px-6 py-3 w-full"
                />
              </div>

              <div class="mt-4">
                <textarea
                  v-model="email.text"
                  type="text"
                  :placeholder="$t('your_opinion')"
                  class="outline-none border-2 border-transparent focus:border-primary bg-body text-gray-600 dark:text-gray-200 rounded-3xl px-6 py-6 w-full"
                />
              </div>
              <div
                class="sm:inline-flex sm:min-w-max absolute sm:relative top-0.5 right-0.5 sm:top-0 sm:right-0"
              >
                <button
                  class="min-w-max p-3 sm:py-3 sm:px-6 text-white border-2 border-transparent relative group"
                >
                  <span
                    class="absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out bg-primary"
                  ></span>
                  <span aria-hidden="true" class="relative hidden sm:flex">
                    {{ $t("send") }}
                  </span>
                  <span class="relative flex sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>

<script setup>
const { t } = useI18n();
import { ref } from "vue";

const email = ref({
  to: "lothininfo@gmail.com",
  subject: "",
  text: "",
});

const successMessage = () => {
  const { $toast } = useNuxtApp();
  $toast.success(t("gmail_successfully_sent"));
};

const failMessage = () => {
  const { $toast } = useNuxtApp();
  $toast.error(t("gmail_not_successfully_sent"));
};

const fieldRequiredMessage = (field) => {
  const { $toast } = useNuxtApp();
  $toast.warning(t(`${field}_is_required`));
};

const validateFields = () => {
  if (!email.value.to) {
    fieldRequiredMessage("to");
    return false;
  }
  if (!email.value.subject) {
    fieldRequiredMessage("subject");
    return false;
  }
  if (!email.value.text) {
    fieldRequiredMessage("text");
    return false;
  }
  return true;
};

const sendEmail = async () => {
  if (!validateFields()) return;

  const { data } = await useFetch("/api/send-email", {
    method: "POST",
    body: email.value,
  });

  if (data.value && data.value.success) {
    email.value = {
      to: "lothininfo@gmail.com",
      subject: "",
      text: "",
    };
    successMessage();
  } else {
    failMessage();
  }
};
</script>
