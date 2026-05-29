<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <header class="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" class="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity">Eldrin Bernardino</a>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex items-center gap-6 text-sm">
          <li v-for="item in navItems" :key="item.id">
            <a :href="`#${item.id}`" class="relative transition-colors pb-1" :class="activeSection === item.id ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'">
              {{ item.label }}
              <span class="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 rounded-full" :class="activeSection === item.id ? 'w-full' : 'w-0'"></span>
            </a>
          </li>
          <li>
            <button @click="toggleDark" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span v-if="isDark">☀️</span>
              <span v-else>🌙</span>
            </button>
          </li>
        </ul>

        <!-- Mobile Right: dark toggle + hamburger -->
        <div class="flex items-center gap-2 md:hidden">
          <button @click="toggleDark" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span v-if="isDark">☀️</span>
            <span v-else>🌙</span>
          </button>
          <button @click="menuOpen = !menuOpen" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span v-if="menuOpen">✕</span>
            <span v-else>☰</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
        <ul class="flex flex-col px-6 py-4 gap-4 text-sm">
          <li v-for="item in navItems" :key="item.id">
            <a :href="`#${item.id}`" class="relative transition-colors pb-1" :class="activeSection === item.id ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'">
              {{ item.label }}
              <span class="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 rounded-full" :class="activeSection === item.id ? 'w-full' : 'w-0'"></span>
            </a>
          </li>
        </ul>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-gray-100 dark:border-gray-800 text-center text-gray-400 text-sm py-8">
      © {{ new Date().getFullYear() }} Eldrin Bernardino. Designed & built by me.
    </footer>
  </div>
</template>

<script setup>
const isDark = ref(false)
const menuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'hobbies', label: 'Life' },
  { id: 'contact', label: 'Contact' }
]

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  const sections = navItems.map(i => i.id)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, { threshold: 0.5 })

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})
</script>