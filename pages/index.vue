<template>
  <div ref="scrollContainer" class="overflow-y-scroll h-screen" @scroll="onScroll">
    <!-- ORIGINAL -->
    <div id="original">
      <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
        <!-- BG Image -->
        <div
          ref="heroBg"
          class="absolute inset-0 bg-gray-200 dark:bg-gray-800 bg-cover bg-center scale-110"
          :style="heroBgStyle"
        >
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>

        <!-- Content -->
        <div
          ref="heroContent"
          class="relative z-10 px-6 max-w-6xl mx-auto w-full py-20"
          :style="heroContentStyle"
        >
          <div class="flex flex-col gap-6 max-w-2xl">
            <p class="text-sm uppercase tracking-widest text-white/70">UI/UX Designer · Systems Thinker · 3D Designer</p>
            <h1 class="text-5xl md:text-7xl font-bold leading-tight text-white">Eldrin<br />Bernardino</h1>
            <p class="text-lg text-white/70 max-w-md">
              4 years designing end-to-end digital solutions for local and international clients. Based in Quezon City, Metro Manila.
            </p>
            <div class="flex gap-4 flex-wrap">
              <a href="#contact" class="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">Get in touch</a>
              <a href="#skills" class="border border-white/40 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">See my skills</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="fade-in min-h-screen flex items-center px-6 max-w-6xl mx-auto py-20">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-widest text-gray-400 mb-4">About Me</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-8">Designer who thinks<br />in systems.</h2>
          <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            I'm a UI/UX Designer with 4 years of experience designing end-to-end digital solutions for local and international clients. I specialize in requirement gathering, system design, client presentations, and cross-functional collaboration.
          </p>
          <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Currently Senior UI/UX Designer and Assistant Creative Director at Praxxys Solutions Inc., where I lead design projects, build design systems, and mentor junior designers.
          </p>
        </div>
      </section>

      <section id="skills" class="fade-in min-h-screen flex items-center px-6 max-w-6xl mx-auto py-20">
        <div class="w-full">
          <p class="text-sm uppercase tracking-widest text-gray-400 mb-4">Skills</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-12">What I bring<br />to the table.</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div v-for="group in skills" :key="group.title"
              class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
              <h3 class="font-semibold text-xs uppercase tracking-widest text-gray-400 mb-6">{{ group.title }}</h3>
              <ul class="flex flex-col gap-3">
                <li v-for="skill in group.items" :key="skill"
                  class="flex items-center gap-3 text-base font-medium">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies" class="fade-in min-h-screen flex items-center px-6 max-w-6xl mx-auto py-20">
        <div class="w-full">
          <p class="text-sm uppercase tracking-widest text-gray-400 mb-4">Life Outside Work</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-12">Currently on my<br />running era.</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="hobby in hobbies" :key="hobby.title"
              class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:-translate-y-1 duration-300">
              <div class="text-3xl mb-4">{{ hobby.emoji }}</div>
              <h3 class="font-semibold text-lg mb-2">{{ hobby.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ hobby.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="fade-in min-h-screen relative overflow-hidden flex items-center px-6 max-w-6xl mx-auto py-20">
        <div class="max-w-2xl relative z-10">
          <p class="text-sm uppercase tracking-widest text-gray-400 mb-4">Contact</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-8">Let's work<br />together.</h2>
          <p class="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Open to freelance projects, full-time roles, and interesting collaborations. Don't hesitate to reach out.
          </p>
          <div class="flex flex-col gap-4">
            <a href="mailto:eldrinbernardino01@gmail.com" class="text-2xl font-medium hover:text-blue-500 transition-colors">eldrinbernardino01@gmail.com</a>
            <a href="tel:+639053373211" class="text-lg text-gray-400 hover:text-blue-500 transition-colors">+63 905 337 3211</a>
          </div>
        </div>
      </section>
    </div>

    <!-- CLONE -->
    <div id="clone" aria-hidden="true">
      <section class="relative min-h-screen flex items-center overflow-hidden">
        <!-- BG Image -->
        <div
          class="absolute inset-0 bg-gray-200 dark:bg-gray-800 bg-cover bg-center scale-110"
          :style="{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }"
        >
          <div class="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>

        <!-- Content — no parallax on clone, just static -->
        <div class="relative z-10 px-6 max-w-6xl mx-auto w-full py-20">
          <div class="flex flex-col gap-6 max-w-2xl">
            <p class="text-sm uppercase tracking-widest text-white/70">UI/UX Designer · Systems Thinker · 3D Designer</p>
            <h1 class="text-5xl md:text-7xl font-bold leading-tight text-white">Eldrin<br />Bernardino</h1>
            <p class="text-lg text-white/70 max-w-md">
              4 years designing end-to-end digital solutions for local and international clients. Based in Quezon City, Metro Manila.
            </p>
            <div class="flex gap-4 flex-wrap">
              <a href="#contact" class="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">Get in touch</a>
              <a href="#skills" class="border border-white/40 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">See my skills</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="fade-in min-h-screen flex items-center px-6 max-w-6xl mx-auto py-20">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-widest text-gray-400 mb-4">About Me</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-8">Designer who thinks<br />in systems.</h2>
          <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            I'm a UI/UX Designer with 4 years of experience designing end-to-end digital solutions for local and international clients. I specialize in requirement gathering, system design, client presentations, and cross-functional collaboration.
          </p>
          <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Currently Senior UI/UX Designer and Assistant Creative Director at Praxxys Solutions Inc., where I lead design projects, build design systems, and mentor junior designers.
          </p>
        </div>
      </section>

      <section id="skills" class="fade-in min-h-screen flex items-center px-6 max-w-6xl mx-auto py-20">
        <div class="w-full">
          <p class="text-sm uppercase tracking-widest text-gray-400 mb-4">Skills</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-12">What I bring<br />to the table.</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div v-for="group in skills" :key="group.title"
              class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
              <h3 class="font-semibold text-xs uppercase tracking-widest text-gray-400 mb-6">{{ group.title }}</h3>
              <ul class="flex flex-col gap-3">
                <li v-for="skill in group.items" :key="skill"
                  class="flex items-center gap-3 text-base font-medium">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies" class="fade-in min-h-screen flex items-center px-6 max-w-6xl mx-auto py-20">
        <div class="w-full">
          <p class="text-sm uppercase tracking-widest text-gray-400 mb-4">Life Outside Work</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-12">Currently on my<br />running era.</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="hobby in hobbies" :key="hobby.title"
              class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:-translate-y-1 duration-300">
              <div class="text-3xl mb-4">{{ hobby.emoji }}</div>
              <h3 class="font-semibold text-lg mb-2">{{ hobby.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ hobby.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="fade-in min-h-screen relative overflow-hidden flex items-center px-6 max-w-6xl mx-auto py-20">
        <div class="max-w-2xl relative z-10">
          <p class="text-sm uppercase tracking-widest text-gray-400 mb-4">Contact</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-8">Let's work<br />together.</h2>
          <p class="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Open to freelance projects, full-time roles, and interesting collaborations. Don't hesitate to reach out.
          </p>
          <div class="flex flex-col gap-4">
            <a href="mailto:eldrinbernardino01@gmail.com" class="text-2xl font-medium hover:text-blue-500 transition-colors">eldrinbernardino01@gmail.com</a>
            <a href="tel:+639053373211" class="text-lg text-gray-400 hover:text-blue-500 transition-colors">+63 905 337 3211</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const scrollContainer = ref(null)
const animatedOnce = ref(new Set())

const skills = [
  {
    title: 'Design',
    items: ['UI/UX Design', 'Wireframing & Prototyping', 'Design Systems', 'User Testing & QA']
  },
  {
    title: 'Technical Tools',
    items: ['Figma', 'Adobe Suite', 'Blender', 'MS Office / Google Suite']
  },
  {
    title: 'Analytical & Project',
    items: ['Requirement Gathering', 'Client Presentations', 'Cross-functional Collaboration', 'Process Management']
  }
]

const hobbies = [
  {
    emoji: '🏃',
    title: 'Running Era',
    desc: 'Completed a 21km race. Working toward sub-30 min 5km and sub-60 min 10km. Tuesday, Thursday, Sunday evenings — no excuses.'
  },
  {
    emoji: '🏊',
    title: 'Learning to Swim',
    desc: 'Self-taught via YouTube and AI. Training in residential and public pools with triathlon as the long-term goal.'
  },
  {
    emoji: '🚴',
    title: 'Future Bike Builder',
    desc: "Planning to build a bike from scratch someday. Not buy — build. Because that's just more interesting."
  },
  {
    emoji: '🎨',
    title: '3D & Motion',
    desc: 'Exploring Blender for 3D design and motion. Where the designer brain meets the tinkerer spirit.'
  }
]

const heroBg = ref(null)
const heroContent = ref(null)
const heroBgStyle = ref({})
const heroContentStyle = ref({})

const heroImage = ref('/eldrinBernardinoPortfolio/eldrin.jpg')

const sections = ['hero', 'about', 'skills', 'hobbies', 'contact']

function onScroll() {
  const container = scrollContainer.value
  if (!container) return

  const scrollTop = container.scrollTop

  // Hero parallax
  heroBgStyle.value = {
    transform: `translateY(${scrollTop * 0.4}px)`,
    backgroundImage: heroImage.value ? `url(${heroImage.value})` : 'none'
  }
  heroContentStyle.value = {
    transform: `translateY(${scrollTop * 0.15}px)`
  } 

  const original = document.getElementById('original')
  const originalHeight = original.offsetHeight

  // Silent teleport — when user scrolls into clone, jump back to same position in original
  if (container.scrollTop >= originalHeight) {
    container.scrollTop = container.scrollTop - originalHeight
  }

  // Scroll spy
  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
        history.replaceState(null, '', `#${id}`)
      }
    }
  })

  // Parallax on contact
  const contact = document.getElementById('contact')
  const bg = contact?.querySelector('.parallax-bg')
  if (contact && bg) {
    const rect = contact.getBoundingClientRect()
    const progress = -rect.top * 0.3
    bg.style.transform = `translateY(${progress}px)`
  }
}

onMounted(() => {
  const container = scrollContainer.value
  if (!container) return

  // Scroll to hash on load
  const hash = window.location.hash.replace('#', '')
  if (hash && sections.includes(hash)) {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Fade in observer — original sections only
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animatedOnce.value.has(entry.target.id)) {
        entry.target.classList.add('visible')
        animatedOnce.value.add(entry.target.id)
      }
    })
  }, { threshold: 0.5, root: container })

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) fadeObserver.observe(el)
  })
})
</script>