<template>
  <span class="flex flex-row gap-1">
    <button type="button" @click="copyTextToClipboard"
      class="hover:underline cursor-pointer">{{ props.textToCopy }}</button>
    <div class="!hidden" style="display: none !important;">
      <input ref="textToCopy" :value="props.textToCopy" :aria-label="idTextCopy" class="sr-only !hidden">
    </div>
    <div class="hidden" :class="{ 'flex': !!popup }">
      <div ref="popup" class="hidden text-xs bg-tertiaryDarker text-primary rounded-md px-1 py-0.5 w-max">
        Text
        Copied!</div>
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

const textToCopy = ref(null);
const popup = ref(null);
const tooltip = ref(null);

const copyTextToClipboard = () => {
  const input = textToCopy.value;
  const popupElement = popup.value;
  const tooltipElement = tooltip.value;

  if (input && popupElement) {
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");

    popupElement.style.display = "block";

    setTimeout(() => {
      popupElement.style.display = "none";

      // Show the tooltip
      tooltipElement.style.display = "block";

      setTimeout(() => {
        // Hide the tooltip
        tooltipElement.style.display = "none";
      }, 2000);
    }, 2000);
  }
};

let idTextCopy = 'textCopy' + (Math.random() + 1).toString(36).substring(7);
</script>

<style scoped>
#popup {
  position: absolute;
  top: 0;
  /* Adjust this to your preferred vertical position */
  right: 0;
  /* Position the popup to the right */
  background: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  display: none;
}

#tooltip {
  position: absolute;
  top: 50%;
  /* Position the tooltip in the middle of the popup */
  left: 100%;
  /* Position the tooltip to the right of the popup */
  transform: translateY(-50%);
  /* Center the tooltip vertically */
  background: #333;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  display: none;
}
</style>