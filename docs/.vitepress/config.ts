import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/programming-teaching-kit/",
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
          // "/courses/c-fundamentals/": [
          //   {
          //     text: "C Programming Fundamentals",
          //     items: [
          //       { text: "Overview", link: "/courses/c-fundamentals/" },
          //       {
          //         text: "Pre-course Skill Check",
          //         link: "/courses/c-fundamentals/pre-course-assessment/",
          //       },
          //       { text: "Lessons", link: "/courses/c-fundamentals/lessons/" },
          //     ],
          //   },
          // ],
          // "/courses/pro-roblox-game-development/": [
          //   {
          //     text: "Professional Roblox Game Development",
          //     items: [
          //       {
          //         text: "Overview",
          //         link: "/courses/pro-roblox-game-development/",
          //       },
          //       {
          //         text: "Lessons",
          //         link: "/courses/pro-roblox-game-development/lessons/",
          //       },
          //     ],
          //   },
          // ],
          "/courses/python-fundamentals/": [
            {
              text: "Python Programming Fundamentals",
              items: [
                { text: "Overview", link: "/courses/python-fundamentals/" },
                { text: "Pre-course Skill Check", link: "/courses/python-fundamentals/pre-course-assessment/" },
                {
                  text: "Getting Started",
                  items: [
                    {
                      text: "Overview",
                      link: "/courses/python-fundamentals/getting-started/",
                    },
                    {
                      text: "Install Python",
                      link: "/courses/python-fundamentals/getting-started/01-install-python",
                    },
                    {
                      text: "Install VS Code",
                      link: "/courses/python-fundamentals/getting-started/02-install-vscode",
                    },
                    {
                      text: "Install Python Extension",
                      link: "/courses/python-fundamentals/getting-started/03-install-python-extension",
                    },
                    {
                      text: "Verify Installation",
                      link: "/courses/python-fundamentals/getting-started/04-verify-installation",
                    },
                    {
                      text: "Create Your First Project",
                      link: "/courses/python-fundamentals/getting-started/05-create-first-project",
                    },
                    {
                      text: "Run Your First Program",
                      link: "/courses/python-fundamentals/getting-started/06-run-first-program",
                    },
                  ],
                },
                {
                  text: "Roadmap",
                  link: "/courses/python-fundamentals/roadmap/",
                },
                {
                  text: "Lessons",
                  items: [
                    {
                      text: "Introduction",
                      link: "/courses/python-fundamentals/lessons/01-introduction",
                    },
                    {
                      text: "Basic Syntax",
                      link: "/courses/python-fundamentals/lessons/02-basic-syntax",
                    },
                    {
                      text: "Variables and Data Types",
                      link: "/courses/python-fundamentals/lessons/03-variables-and-data-types",
                    },
                    {
                      text: "Input and Output",
                      link: "/courses/python-fundamentals/lessons/04-input-and-output",
                    },
                    {
                      text: "Operators",
                      link: "/courses/python-fundamentals/lessons/05-operators",
                    },
                    {
                      text: "Conditionals",
                      link: "/courses/python-fundamentals/lessons/06-conditionals",
                    },
                    {
                      text: "Loops",
                      link: "/courses/python-fundamentals/lessons/07-loops",
                    },
                    {
                      text: "Exceptions",
                      link: "/courses/python-fundamentals/lessons/08-exceptions",
                    },
                    {
                      text: "Functions & Built-Functions",
                      link: "/courses/python-fundamentals/lessons/09-functions-and-builtin-functions"
                    },
                    {
                      text: "Type Casting",
                      link: "/courses/python-fundamentals/lessons/10-type-casting"
                    },
                    {
                      text: "Lists",
                      link: "/courses/python-fundamentals/lessons/11-lists"
                    },
                    {
                      text: "Tuples",
                      link: "/courses/python-fundamentals/lessons/12-tuples"
                    },
                    {
                      text: "Sets",
                      link: "/courses/python-fundamentals/lessons/13-sets"
                    },
                    {
                      text: "Dictionaries",
                      link: "/courses/python-fundamentals/lessons/14-dictionaries"
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
