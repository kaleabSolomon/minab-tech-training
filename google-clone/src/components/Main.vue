<script setup></script>
<template>
  <div class="w-full h-40 flex justify-center items-center">
    <img class="w-1/4" src="../../public/google-logo.png" alt="google logo" />
  </div>
  <div class="flex items-center justify-center">
    <form class="bg-white rounded-2xl px-4 w-1/2">
      <div
        class="flex items-center border-2 rounded-full border-grey-800 py-1 px-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="grey"
            d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
          />
        </svg>
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
        />

        <button class="flex-shrink-0 py-1 px-2" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"
            />
            <path
              fill="currentColor"
              d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"
            />
          </svg>
        </button>
        <button class="flex-shrink-0 py-1 px-2" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path
              fill="currentColor"
              d="M20 4h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 2H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
  <div class="flex justify-center items-center px-2 py-5 gap-4 text-sm">
    <button class="px-3 py-2 bg-gray-200">Google Search</button>
    <button class="px-3 py-2 bg-gray-200">I'm Feeling Lucky</button>
  </div>
  <div class="flex justify-center items-center text-xs gap-2">
    <p>Google offered in:</p>
    <a class="text-blue-500 hover:underline" href="#">Frysk</a>
  </div>
</template>
<style scoped></style>
