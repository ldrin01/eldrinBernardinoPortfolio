<template>
  <UContainer> <header class="py-4 border-b border-gray-200">
      <nav class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Your Portfolio</NuxtLink>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" class="hover:text-blue-500">Home</NuxtLink></li>
          <li><NuxtLink to="/projects" class="hover:text-blue-500">Projects</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-blue-500">About</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-blue-500">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="py-8 min-h-[50vh]">
         <NuxtPage />
    </main>

    <footer class="py-4 border-t border-gray-200 text-center text-gray-500 text-sm">
      &copy; {{ new Date().getFullYear() }} Eldrin Bernardino.
    </footer>
  </UContainer>
</template>