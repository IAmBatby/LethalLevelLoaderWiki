import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lethal Level Loader Wiki",
  description: "The official wiki for LLL.",
  base: '/LethalLevelLoaderWiki/',
  lang: 'en-US',
  
  cleanUrls: true,
  lastUpdated: true,
  
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Usage', link: '/usage' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Usage', link: '/usage' },
        ]
      }
    ],

    socialLinks: [
      {
        icon:
            {
              svg:
                  "<svg role=\"img\" viewBox=\"0 0 1000 896\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                  "<title>Thunderstore</title>" +
                  "<path d=\"M13.4223 496.845L209.485 838.17L300 650.202L200.99 477.966C189.992 458.897 189.992 436.945 200.99 417.779L324.555 202.755C335.561 183.611 354.447 172.666 376.421 172.675H442.857L314.286 462.366H473.143L257.143 881.384L690.941 361.014H557.588L648.593 172.675H808.03H900.762L1000 2.28882e-05H715.868H526.836H298.96C263.138 0.0084323 232.393 17.8324 214.461 48.9346L13.4223 398.9C-4.46781 430.078 -4.48036 465.827 13.4223 496.845ZM313.959 895.833H701.066C736.813 895.833 767.63 878.005 785.612 846.819L986.655 496.836C1004.44 465.827 1004.44 430.078 986.655 398.892L906.26 258.947H707.808L799.079 417.779C809.985 436.961 809.984 458.91 799.049 477.974L675.531 693.049C664.454 712.222 645.555 723.15 623.555 723.15H533.795L471.429 722.446L313.959 895.833Z\"/>\n" +
                  "</svg>"
            },
        link: 'https://thunderstore.io/c/lethal-company/p/IAmBatby/LethalLevelLoader/',
        ariaLabel: 'thunderstore'
      },
      { icon: 'discord', link: 'https://discord.com/channels/1168655651455639582/1193461151636398080' },
      { icon: 'github', link: 'https://github.com/IAmBatby/LethalLevelLoaderWiki' },
    ],

    editLink: {
      pattern: 'https://github.com/IAmBatby/LethalLevelLoaderWiki/edit/main/docs/:path'
    },
    
    docFooter: {
      prev: false,
      next: false,
    }
  }
})
