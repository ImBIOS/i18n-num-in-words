import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['execa', 'is-stream', 'npm-run-path'],
    },
  },
  site: 'https://i18n-num-in-words.vercel.app',
  integrations: [
    preact(),
    starlight({
      title: 'i18n-num-in-words Docs',
      description: 'Documentation for i18n-num-in-words',
      social: {
        github: 'https://github.com/ImBIOS/i18n-num-in-words',
      },
      sidebar: [
        {
          label: 'Start Here',
          autogenerate: { directory: 'start-here' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        ar: {
          label: 'العربية',
          dir: 'rtl',
        },
        id: {
          label: 'Bahasa Indonesia',
        },
        ru: {
          label: 'Русский',
        },
      },
    }),
  ],
});
