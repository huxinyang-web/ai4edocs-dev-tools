import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'
import path from 'path'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy Docs - Development Tools & Workflow',
  base: '/ai4edocs-dev-tools/',
  srcDir: '.',
  publicDir: '.vitepress/public',
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      alias: [
        {
          find: '/assets/',
          replacement: path.resolve(__dirname, './public/assets/') + '/'
        }
      ]
    }
  },
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Dev-Tools', icon: 'book', link: '/docs/' },
      { text: 'Cs-Basics', link: 'https://huxinyang-web.github.io/ai4edocs-cs-basics/' },
      { text: 'Modeling', link: 'https://huxinyang-web.github.io/ai4edocs-modeling/' },
      { text: 'Optimization', link: 'https://huxinyang-web.github.io/ai4edocs-optimization/' },
      { text: 'AI-Energy', link: 'https://huxinyang-web.github.io/ai4edocs-ai-energy/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'CS 进阶',
          collapsed: false,
          items: [
            { text: '简介', link: '/docs/03CSAdv/1-过程抽象.md' },
            { text: '过程抽象', link: '/docs/03CSAdv/1-过程抽象.md' },
            { text: '数据抽象', link: '/docs/03CSAdv/2-数据抽象.md' },
            { text: '再说说递归', link: '/docs/03CSAdv/3-再说说递归.md' },
            { text: '从符号到模型', link: '/docs/03CSAdv/4-从符号到模型.md' },
            { text: '抽象语法树', link: '/docs/03CSAdv/5-抽象语法树.md' },
            { text: '代码生成', link: '/docs/03CSAdv/6-代码生成.md' },
            { text: '领域特定语言', link: '/docs/03CSAdv/7-领域特定语言.md' },
            { text: '写个库还是创个语言', link: '/docs/03CSAdv/8-写个库还是创个语言.md' },
            { text: 'Ascend 等解构', link: '/docs/03CSAdv/9-Ascend 等解构.md' },
            { text: 'OpenFoam 解构', link: '/docs/03CSAdv/91-OpenFoam 解构.md' }
          ]
        },
        {
          text: '工具',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/91Tools/vscode_git.md' },
            { text: 'VSCode 和 Git', link: '/docs/91Tools/vscode_git.md' },
            { text: 'CoolProp', link: '/docs/91Tools/CoolProp.md' },
            { text: 'CSV_jl_use', link: '/docs/91Tools/CSV_jl_use.md' },
            { text: 'ssh-git 实操', link: '/docs/91Tools/3-ssh-git 实操.md' }
          ]
        },
        {
          text: '工作流',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/92Workflow/julia 的安装.md' },
            { text: 'julia 的安装', link: '/docs/92Workflow/julia 的安装.md' },
            { text: 'REPL-of-Julia', link: '/docs/92Workflow/REPL-of-Julia.md' },
            { text: 'julia_change_pkgserve', link: '/docs/92Workflow/julia_change_pkgserve.md' },
            { text: 'gitworkflow', link: '/docs/92Workflow/gitworkflow.md' },
            { text: '1-thinkaboutstudy', link: '/docs/92Workflow/1-thinkaboutstudy.md' },
            { text: 'vscodePlugin', link: '/docs/92Workflow/vscodePlugin.md' },
            { text: 'DocStructure', link: '/docs/92Workflow/DocStructure.md' }
          ]
        },
        {
          text: 'go-zero 教程',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/tutorial/01-docker-compose 环境准备.md' },
            { text: 'docker-compose 环境准备', link: '/docs/tutorial/01-docker-compose 环境准备.md' },
            { text: 'emqx 消息服务器准备', link: '/docs/tutorial/02-emqx 消息服务器准备.md' },
            { text: 'mysql 数据库准备', link: '/docs/tutorial/03-mysql 数据库准备.md' },
            { text: 'go-zero 环境准备', link: '/docs/tutorial/04-go-zero 环境准备.md' },
            { text: 'gateway 设置', link: '/docs/tutorial/05-gateway 设置.md' },
            { text: 'goctl 生成 api 服务', link: '/docs/tutorial/06-goctl 生成 api 服务.md' },
            { text: 'goctl 处理数据库模型', link: '/docs/tutorial/07-goctl 处理数据库模型.md' }
          ]
        }
      ]
    },

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/huxinyang-web/ai4edocs-dev-tools/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 2
    }
  },

  markdown: {
    config: (md) => {
      md.use(katex)
      md.use(mermaid)
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ]
})
