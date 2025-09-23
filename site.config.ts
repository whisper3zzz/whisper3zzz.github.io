import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: 'whisper3zzzの小窝',
  url: 'https://whisper3zzz.top',
  author: {
    name: 'whisper3zzz',
  },
  description: 'whisper3zzzの小窝',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/whisper3zzz',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },

    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=247102977',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },

    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1579790',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },

    {
      name: 'E-Mail',
      link: 'mailto:whisper3zzz@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },

  ],

  search: {
    enable: true,
  },
  comment: {
    enable: true
  },
  license:{
    enabled: false,
  },
  sponsor:{
    enable: false,
  }

})
