import type { ThemeUserConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'
import { addonMeting } from 'valaxy-addon-meting'
import { addonWaline } from 'valaxy-addon-waline/index.js'
// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-ri-folder-2-line',
  'i-ri-archive-line',
  'i-ri-price-tag-3-line',
  'i-fa-chain',
  'i-line-md-moon-alt-to-sunny-outline-loop-transition',
  'i-line-md-sunny-outline-to-moon-loop-transition',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeUserConfig>({
  // site config see site.config.ts

  theme: 'sakura',
  devtools: false,
  unocss: {
    safelist,
  },

  themeConfig: {
    ui: {
      primary: '#fe9500',
    
      toggleDarkButton: {
        lightIcon: 'i-line-md-moon-alt-to-sunny-outline-loop-transition',
        darkIcon: 'i-line-md-sunny-outline-to-moon-loop-transition',
      },
      pinnedPost: {
        icon: 'i-fa-anchor'
      },
      postList: {
        icon: 'i-fa-envira'
      },
      scrollDown: {
        icon: 'i-fa-chevron-down',
      },

    },
    hero: {
      title: 'Hi, I am whisper3zzz!',
      urls: [
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-858k3j.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-rrdgp1.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-zyxq6j.jpg',
        'https://t.alcy.cc/fj',
        'https://f866f87.webp.li/090412-1557363852af44.jpg',
        'https://f866f87.webp.li/1%20(2).jpg'
    
      ],
      randomUrls: true,
      playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/theming-demos/mashiro/The Pet Girl of Sakurasou.mp4',
      // playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/PV/Original PV Little love song MONGOL 800 cover by Amatsuki.mp4',
      style: 'dim',
      fixedImg: true,
      typewriter: true,
      enableHitokoto: true,


    },
    pagination: {
      type: 'standard',
      animation: true,

      infiniteScrollOptions: {
        preload: true,
      },
    },
    postFooter: {
      navigationMerge: true
    },
    postList: {
      text: 'Discovery',
      isImageReversed: true,
      defaultImage: [

        'https://img.xjh.me/random_img.php?random?type=bg&ctype=acg/nature&return=302',

      ]
    },
    navbar: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-ri-home-line'
      },
      {
        text: 'Categories',
        link: '/categories',
        icon: 'i-ri-folder-2-line'
      },
      {
        text: 'Archives',
        link: '/archives',
        icon: 'i-ri-archive-line'
      },
      {
        text: 'Tags',
        link: '/tags',
        icon: 'i-ri-price-tag-3-line'
      },
      {
        text: 'Links',
        icon: 'i-fa-chain',
        link: '/links',
      },

    ],
    footer: {
      since: 2023,
      icon: {
        animated: true,
        url: 'https://whisper3zzz.top',
        title: 'whisper3zzz'
      },
      powered: true
    },
    navbarOptions: {
      favicon: false,
      title: 'whisper3zzzの小窝',
      invert: ['home'],
      autoHide: true,
      animIn: 'fadeIn',
      animOut: 'fadeOut',
      showMarker: true,
      tools: ['toggleDark', 'search', 'toggleLocale'],
      hamburgerStyle: 'uneven'
    },

  },
  addons: [
    // 暂时禁用 Waline 评论系统
    // addonWaline({
    //   serverURL: 'https://waline.whisper3zzz.top',
    //   comment: true,
    //   pageview: true,
    // }),
    addonMeting({
      global:true,
      props:{
        id:'2145269432',
        server: 'netease',
        type:'song',
        autoplay:true
      },options:{
         animationIn:true
      }
    })
  ]

})
