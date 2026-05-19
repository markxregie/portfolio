<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import experiences from "../data/project.json";

const leadership = [
  {
    organization: "Software Research Group (SRG) - Polytechnic University of the Philippines Quezon City",
    role: "Frontend Developer",
    dates: "Nov 2025 - Present",
    bullets: [
      "Built and optimized frontend interfaces for academic and experimental software projects within a university research group.",
      "Co-authored research paper: “A Framework for Promoting Ethical Awareness in Data Brokerage and Privacy” (PUPQC, 2025).",
    ],
  }
];

const publications = [
  {
    conference: "Nemesio Prudente International Research Conference",
    title: "Geosensei: A Web-based Learning Platform Integrating AI And Crowdsourced Geospatial Data For Gamified Geography Education.",
    year: "2025"
  },
  {
    conference: "Polytechnic University of the Philippines Quezon City",
    title: "A Framework for Promoting Ethical Awareness in Data Brokerage and Privacy",
    year: "2025"
  }
];

const certifications = [
  {
    category: "Security & Networking",
    items: "IBM Computer Networks & Network Security, Cisco Introduction to Cybersecurity, Cisco Networking Basics, Saylor Principles of Information Security (2025)."
  },
  {
    category: "Cloud, AI & Software",
    items: "Oracle Cloud Infrastructure AI Foundations Associate, PUP Associate in Application Defense, mabl Quality Assurance Foundations (2025)."
  }
];

const skills = [
  { label: "Technical", value: "Proficient in JavaScript (React), C# (ASP.NET), and Python (FastAPI); Strong command of HTML, CSS, and SQL." },
  { label: "Tools & Platforms", value: "Git/GitHub for version control, Figma for UI/UX design." },
  { label: "Languages", value: "Tagalog & English." },
  { label: "Interests", value: "Frontend Developement, Computer networking infrastructure, Web development, and Mobile Application Development." }
];

const projectRevealStart = 2;
const leadershipRevealIndex = projectRevealStart + experiences.length;
const publicationsRevealIndex = leadershipRevealIndex + 1;
const skillsRevealIndex = publicationsRevealIndex + 1;
const certificationsRevealIndex = skillsRevealIndex + 1;

const getShortYear = (dates) => {
  const match = dates.match(/\b20(\d{2})\b/);
  return match ? `'${match[1]}` : "";
};

const revealRefs = ref([]);
const visibleItems = ref({});
let observer;

function setRevealRef(el, index) {
  if (el) {
    revealRefs.value[index] = el;
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.revealIndex);
        visibleItems.value = {
          ...visibleItems.value,
          [index]: entry.isIntersecting,
        };
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  revealRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <main class="mx-auto w-full max-w-6xl space-y-14 px-6 py-12 sm:space-y-20 sm:py-16">
    <section
      id="education"
      :ref="(el) => setRevealRef(el, 0)"
      data-reveal-index="0"
      :class="[
        'scroll-mt-24 transition-all duration-700',
        visibleItems[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
      ]"
    >
      <div class="mb-8 space-y-2 sm:mb-14">
        <h1 class="text-foreground text-3xl font-bold sm:text-5xl">
          Education
        </h1>
      </div>

      <div class="relative">
        <div class="bg-border absolute bottom-0 left-8 top-0 w-px -ml-px"></div>
        <div class="bg-foreground absolute bottom-0 left-8 h-2.5 w-2.5 -translate-x-[0.28rem] rounded-full"></div>
        <article class="relative flex items-start gap-6 sm:gap-8">
          <div class="bg-card text-foreground border-background relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[6px] text-sm font-semibold shadow-sm sm:text-lg">
            '26
          </div>

          <div class="bg-card border-border relative mt-1 flex-1 rounded-xl border p-6 shadow-sm sm:p-8">
            <div class="bg-card border-border absolute -left-2 top-6 h-4 w-4 rotate-45 border-b border-l"></div>
            <div class="space-y-4">
              <div class="text-muted-foreground text-xs font-semibold tracking-widest uppercase sm:text-sm">
                Quezon City Expected 2026
              </div>
              <div class="space-y-1">
                <h2 class="text-foreground text-xl font-semibold sm:text-3xl">
                  Polytechnic University of the Philippines
                </h2>
                <p class="text-muted-foreground text-sm font-medium sm:text-xl">
                  Candidate for Bachelor of Science in Information Technology
                </p>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>

    <section
      id="work-experience"
      :ref="(el) => setRevealRef(el, 1)"
      data-reveal-index="1"
      :class="[
        'scroll-mt-24 transition-all duration-700',
        visibleItems[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
      ]"
    >
      <div class="mb-8 space-y-2 sm:mb-14">
        <h1 class="text-foreground text-3xl font-bold sm:text-5xl">Work Experience</h1>
      </div>

      <div class="relative">
        <div class="bg-border absolute bottom-0 left-8 top-0 w-px -ml-px"></div>
        <div class="bg-foreground absolute bottom-0 left-8 h-2.5 w-2.5 -translate-x-[0.28rem] rounded-full"></div>
        <article class="relative flex items-start gap-6 sm:gap-8">
          <div class="bg-card text-foreground border-background relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[6px] text-sm font-semibold shadow-sm sm:text-lg">
            '26
          </div>

          <div class="bg-card border-border relative mt-1 flex-1 rounded-xl border p-6 shadow-sm sm:p-8">
            <div class="bg-card border-border absolute -left-2 top-6 h-4 w-4 rotate-45 border-b border-l"></div>
            <div class="space-y-4">
              <div class="text-muted-foreground text-xs font-semibold tracking-widest uppercase sm:text-sm">
                Feb 2026 – May 2026
              </div>
              <div class="space-y-1">
                <h2 class="text-foreground text-xl font-semibold sm:text-3xl">
                  Frontend Developer Intern
                </h2>
              </div>
              <ul class="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed sm:text-lg">
                <li class="flex gap-3">
                  <span class="text-foreground/50 mt-1.5 text-xs sm:text-sm">◆</span>
                  <span>Built reusable React components that improved development efficiency across multiple features while translating complex UI/UX wireframes into responsive, cross-browser-compatible web interfaces optimized for both desktop and mobile environments.</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-foreground/50 mt-1.5 text-xs sm:text-sm">◆</span>
                  <span>Collaborated in an agile development environment to build and deploy frontend features, contributing to efficient team workflows and consistent delivery of high-quality user-facing applications.</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-foreground/50 mt-1.5 text-xs sm:text-sm">◆</span>
                  <span>OEstablished project architecture and Git repository standards for internal applications, ensuring version control best practices, scalable development processes, and long-term clean code maintainability.</span>
                </li>
               
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="experience" class="scroll-mt-24">
      <div class="mb-8 space-y-2 sm:mb-14">
        <h1 class="text-foreground text-3xl font-bold sm:text-5xl">Projects & Experience</h1>

      </div>

      <div class="relative">
        <div class="bg-border absolute bottom-0 left-8 top-0 w-px -ml-px"></div>
        <div class="bg-foreground absolute bottom-0 left-8 h-2.5 w-2.5 -translate-x-[0.28rem] rounded-full"></div>
        <div class="space-y-12">
          <article
            v-for="(experience, index) in experiences"
            :key="experience.title"
            :ref="(el) => setRevealRef(el, index + projectRevealStart)"
            :data-reveal-index="index + projectRevealStart"
            :class="[
              'relative flex items-start gap-6 transition-all duration-700 sm:gap-8',
              visibleItems[index + projectRevealStart]
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0',
            ]"
          >
            <div class="bg-card text-foreground border-background relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[6px] text-sm font-semibold shadow-sm sm:text-lg">
              {{ getShortYear(experience.dates) }}
            </div>

            <div class="bg-card border-border relative mt-1 flex-1 rounded-xl border p-6 shadow-sm sm:p-8">
              <div class="bg-card border-border absolute -left-2 top-6 h-4 w-4 rotate-45 border-b border-l"></div>
              <div class="space-y-4">
                <div class="text-muted-foreground text-xs font-semibold tracking-widest uppercase sm:text-sm">
                  {{ experience.dates }}
                </div>
                <div class="space-y-1">
                  <h2 class="text-foreground text-xl font-semibold sm:text-3xl">
                    {{ experience.title }}
                  </h2>
                  <p class="text-muted-foreground text-sm font-medium sm:text-xl">
                    {{ experience.role }}
                  </p>
                </div>

                <ul class="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed sm:text-lg">
                  <li v-for="bullet in experience.bullets" :key="bullet" class="flex gap-3">
                    <span class="text-foreground/50 mt-1.5 text-xs sm:text-sm">◆</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      id="leadership"
      :ref="(el) => setRevealRef(el, leadershipRevealIndex)"
      :data-reveal-index="leadershipRevealIndex"
      :class="[
        'scroll-mt-24 transition-all duration-700',
        visibleItems[leadershipRevealIndex] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
      ]"
    >
      <h2 class="text-foreground mb-8 text-2xl font-bold sm:text-4xl">Leadership & Activities</h2>
      <div class="space-y-6">
        <article v-for="item in leadership" :key="item.organization" class="bg-card border-border rounded-xl border p-6 shadow-sm sm:p-8">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 class="text-foreground text-lg font-bold sm:text-2xl">{{ item.organization }}</h3>
              <p class="text-muted-foreground text-sm font-medium sm:text-lg">{{ item.role }}</p>
            </div>
            <span class="text-muted-foreground text-xs font-semibold tracking-widest uppercase sm:text-right sm:text-sm">
              {{ item.dates }}
            </span>
          </div>
          <ul class="text-muted-foreground mt-6 space-y-3 text-sm leading-relaxed sm:text-lg">
            <li v-for="bullet in item.bullets" :key="bullet" class="flex gap-3">
              <span class="text-foreground/50 mt-1.5 text-xs sm:text-sm">◆</span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section
      id="publications"
      :ref="(el) => setRevealRef(el, publicationsRevealIndex)"
      :data-reveal-index="publicationsRevealIndex"
      :class="[
        'scroll-mt-24 transition-all duration-700',
        visibleItems[publicationsRevealIndex] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
      ]"
    >
      <h2 class="text-foreground mb-8 text-2xl font-bold sm:text-4xl">Research Publication</h2>
      <div class="space-y-6">
        <article v-for="pub in publications" :key="pub.title" class="bg-card border-border rounded-xl border p-6 shadow-sm">
          <p class="text-muted-foreground mb-2 text-xs font-semibold tracking-widest uppercase sm:text-sm">
            {{ pub.conference }}
          </p>
          <p class="text-muted-foreground text-sm leading-snug sm:text-xl">
            "{{ pub.title }}"
          </p>
        </article>
      </div>
    </section>

    <section
      id="skills"
      :ref="(el) => setRevealRef(el, skillsRevealIndex)"
      :data-reveal-index="skillsRevealIndex"
      :class="[
        'scroll-mt-24 transition-all duration-700',
        visibleItems[skillsRevealIndex] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
      ]"
    >
      <h2 class="text-foreground mb-8 text-2xl font-bold sm:text-4xl">Skills & Interests</h2>
      <div class="bg-card border-border rounded-xl border p-6 shadow-sm">
        <ul class="space-y-4 text-sm sm:text-lg">
          <li v-for="skill in skills" :key="skill.label" class="text-muted-foreground leading-relaxed">
            <strong class="text-foreground">{{ skill.label }}:</strong> {{ skill.value }}
          </li>
        </ul>
      </div>
    </section>

    <section
      id="certifications"
      :ref="(el) => setRevealRef(el, certificationsRevealIndex)"
      :data-reveal-index="certificationsRevealIndex"
      :class="[
        'scroll-mt-24 pb-16 transition-all duration-700',
        visibleItems[certificationsRevealIndex] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
      ]"
    >
      <h2 class="text-foreground mb-8 text-2xl font-bold sm:text-4xl">Certifications</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <article v-for="cert in certifications" :key="cert.category" class="bg-card border-border rounded-xl border p-6 shadow-sm">
          <h3 class="text-foreground mb-3 text-lg font-bold sm:text-xl">{{ cert.category }}</h3>
          <p class="text-muted-foreground text-sm leading-relaxed sm:text-lg">
            {{ cert.items }}
          </p>
        </article>
      </div>
    </section>

  </main>
</template>
