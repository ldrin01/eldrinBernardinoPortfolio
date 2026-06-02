<template>
  <button
    role="switch"
    :aria-checked="isDark"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
    :style="{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: '64px',
      height: '34px',
      borderRadius: '999px',
      padding: '4px',
      boxSizing: 'border-box',
      backgroundColor: isDark ? '#0f172a' : '#e2e8f0',
      border: isDark ? '1px solid #1e293b' : '1px solid #cbd5e1',
      boxShadow: isDark ? 'inset 0 1px 3px rgba(0,0,0,0.5)' : 'inset 0 1px 3px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      outline: 'none',
      userSelect: 'none',
      transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) !important'
    }"
  >
    <div
      :style="{
        position: 'absolute',
        inset: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 6px',
        boxSizing: 'border-box',
        pointerEvents: 'none'
      }"
    >
      <span :style="{ display: 'flex', opacity: isDark ? '1' : '0', transition: 'all 0.3s ease !important' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
          <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
        </svg>
      </span>

      <span :style="{ display: 'flex', opacity: isDark ? '0' : '1', transition: 'all 0.3s ease !important' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </span>
    </div>

    <span
      :style="{
        position: 'absolute',
        top: '4px',
        left: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: isDark ? '#020617' : '#ffffff',
        transform: isDark ? 'translateX(30px)' : 'translateX(0px)',
        boxShadow: isDark ? '0 2px 5px rgba(0,0,0,0.5), 0 0 6px rgba(255,255,255,0.1)' : '0 2px 5px rgba(0,0,0,0.12)',
        pointerEvents: 'none',
        zIndex: 10,
        transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) !important'
      }"
    >
      <span
        :style="{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isDark ? '0' : '1',
          transform: isDark ? 'scale(0.3) rotate(-90deg)' : 'scale(1) rotate(0deg)',
          filter: 'drop-shadow(0 0 3px rgba(245,158,11,0.55))',
          transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) !important'
        }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
          <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
        </svg>
      </span>

      <span
        :style="{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isDark ? '1' : '0',
          transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0.3) rotate(90deg)',
          filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.75))',
          transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) !important'
        }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </span>
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggle() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})
</script>