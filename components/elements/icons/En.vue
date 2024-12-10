<template>
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      class="w-5 h-5"
    >
      <!-- Background -->
      <rect width="24" height="24" fill="#012169" />
      <!-- White Cross -->
      <rect x="10" width="4" height="24" fill="#FFF" />
      <rect y="10" width="24" height="4" fill="#FFF" />
      <!-- Red Cross -->
      <rect x="11" width="2" height="24" fill="#C8102E" />
      <rect y="11" width="24" height="2" fill="#C8102E" />
      <!-- Diagonal White -->
      <polygon points="0,0 4,0 24,20 20,24" fill="#FFF" />
      <polygon points="20,0 24,0 0,20 0,24" fill="#FFF" />
      <!-- Diagonal Red -->
      <polygon points="0,0 2,0 24,22 22,24" fill="#C8102E" />
      <polygon points="22,0 24,0 0,22 0,24" fill="#C8102E" />
    </svg>
  </span>
</template>
