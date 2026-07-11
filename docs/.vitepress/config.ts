import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/programming-teaching-kit/',
  title: "Programming Teaching Kit",
  description:
    "Programming lessons, teaching materials, code examples, exercises, projects, and skill assessments for learners at different levels.",
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "Programming Teaching Kit",
      description:
        "Programming lessons, examples, exercises, projects, and skill assessments.",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Courses", link: "/courses/" },
          { text: "About", link: "/about" },
        ],
        sidebar: {
          "/courses/c-fundamentals/": [
            {
              text: "C Programming Fundamentals",
              items: [
                { text: "Overview", link: "/courses/c-fundamentals/" },
                {
                  text: "Pre-course Skill Check",
                  link: "/courses/c-fundamentals/pre-course-assessment/",
                },
                { text: "Lessons", link: "/courses/c-fundamentals/lessons/" },
              ],
            },
          ],
          "/courses/pro-roblox-game-development/": [
            {
              text: "Professional Roblox Game Development",
              items: [
                { text: "Overview", link: "/courses/pro-roblox-game-development/" },
                {
                  text: "Lessons",
                  link: "/courses/pro-roblox-game-development/lessons/",
                },
              ],
            },
          ],
          "/courses/python-fundamentals/": [
            {
              text: "Python Programming Fundamentals",
              items: [
                { text: "Overview", link: "/courses/python-fundamentals/" },
                {
                  text: "Lessons",
                  link: "/courses/python-fundamentals/lessons/01-introduction",
                  items: [
                    {
                      text: "Introduction",
                      link: "/courses/python-fundamentals/lessons/01-introduction",
                    },
                    {
                      text: "Variables and Data Types",
                      link: "/courses/python-fundamentals/lessons/02-variables",
                    },
                  ],
                },
              ],
            },
          ],
        },
        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/Kritsanawipankhet/programming-teaching-kit",
          },
        ],
      },
    },

    // th: {
    //   label: "ไทย",
    //   lang: "th",
    //   link: "/th/",
    //   title: "Programming Teaching Kit",
    //   description:
    //     "บทเรียน ตัวอย่าง แบบฝึกหัด โปรเจกต์ และแบบประเมินทักษะด้านการเขียนโปรแกรม",
    //   themeConfig: {
    //     nav: [
    //       { text: "หน้าแรก", link: "/th/" },
    //       { text: "คอร์ส", link: "/th/courses/" },
    //       { text: "เกี่ยวกับ", link: "/th/about" },
    //     ],
    //     sidebar: {
    //       "/th/courses/c-fundamentals/": [
    //         {
    //           text: "C Programming Fundamentals",
    //           items: [
    //             { text: "Overview", link: "/th/courses/c-fundamentals/" },
    //             {
    //               text: "Pre-course Skill Check",
    //               link: "/th/courses/c-fundamentals/pre-course-assessment/",
    //             },
    //             {
    //               text: "Lessons",
    //               link: "/th/courses/c-fundamentals/lessons/",
    //             },
    //           ],
    //         },
    //       ],
    //       "/th/courses/python-fundamentals/": [
    //         {
    //           text: "Python Programming",
    //           items: [
    //             { text: "Overview", link: "/th/courses/python/" },
    //             { text: "Lessons", link: "/th/courses/python/lessons/" },
    //           ],
    //         },
    //       ],
    //     },
    //     socialLinks: [
    //       {
    //         icon: "github",
    //         link: "https://github.com/Kritsanawipankhet/programming-teaching-kit",
    //       },
    //     ],
    //     outline: {
    //       label: "เนื้อหาในหน้านี้",
    //     },

    //     docFooter: {
    //       prev: "หน้าก่อนหน้า",
    //       next: "หน้าถัดไป",
    //     },

    //     returnToTopLabel: "กลับขึ้นด้านบน",
    //     sidebarMenuLabel: "เมนู",
    //     darkModeSwitchLabel: "ธีม",
    //     lightModeSwitchTitle: "เปลี่ยนเป็นธีมสว่าง",
    //     darkModeSwitchTitle: "เปลี่ยนเป็นธีมมืด",
    //   },
    // },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  },
});
