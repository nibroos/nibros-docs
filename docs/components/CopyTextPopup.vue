<template>
  <span class="flex flex-row gap-1 relative">
    <button type="button" @click="copyTextToClipboard"
      class="hover:underline cursor-pointer">{{ props.textToCopy }}</button>
    <div v-if="showPopup"
      class="absolute -right-[5.5rem] xs:right-[5rem] xs:-bottom-[1.25rem] bottom-0 text-xs rounded-md px-1 py-0.5 w-max bg-tertiary text-primary dark:bg-tertiaryDarker">
      Text Copied!
    </div>
  </span>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  textToCopy: {
    type: String,
    required: true,
  },
});

const showPopup = ref(false);

const copyTextToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.textToCopy);
    showPopup.value = true;
    setTimeout(() => {
      showPopup.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>