import type { ThemeUserConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'
import { addonMeting } from 'valaxy-addon-meting'
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeUserConfig>({
  // site config see site.config.ts

  theme: 'sakura',
  devtools: true,
  themeConfig: {
    ui: {
      primary: '#fe9500',
      toggleDarkButton: {
        lightIcon: 'i-line-md-moon-alt-to-sunny-outline-loop-transition',
        darkIcon: 'i-line-md-sunny-outline-to-moon-loop-transition',
      }, pinnedPost: {
        icon: 'i-fa-anchor'
      }, postList: {
        icon: 'i-fa-envira'
      }, scrollDown: {
        icon: 'i-fa-chevron-down',
      }
    },
    hero: {
      title: 'Hi, I am whisper3zzz!',
      urls: [
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-858k3j.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-3l2vm3.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-3z9dz9.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-rrdgp1.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-zyxq6j.jpg',
        // Source: https://www.pixiv.net/artworks/72203573
        'https://valaxy-theme-sakura.s3.bitiful.net/home-wallpaper.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper/yae-miko-sunset-sakura-genshin-impact-moewalls-com.mp4',
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
        'https://www.dmoe.cc/random.php?random', 'https://img.xjh.me/random_img.php?random?type=bg&return=302'
      ]
    },
    navbar: [
      {
        icon: 'i-fa-fort-awesome',
        locale: 'menu.home',
        link: '/'
      },
      {
        text: 'Links',
        icon: 'i-fa-chain',
        link: '/links',
        items: [
        ]
      }
    ],
  
  },

})
