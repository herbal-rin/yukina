import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

/**
 * Yukina 博客配置文件
 * 
 * 这个文件包含了博客的所有基本配置信息
 * 修改这个文件可以自定义你的博客外观、内容和功能
 */
const YukinaConfig: Configuration = {
  // ==================== 基本信息 ====================
  
  /**
   * 网站标题 - 显示在浏览器标签页和页面标题中
   * 建议：简洁明了，体现个人特色
   */
  title: "Herbalのblog站",
  
  /**
   * 网站副标题 - 显示在横幅区域
   * 建议：一句话描述你的博客主题
   */
  subTitle: "my blog",
  
  /**
   * 品牌标题 - 显示在导航栏左侧
   * 建议：简短的个人标识或昵称
   */
  brandTitle: "Herbal",

  /**
   * 网站描述 - 用于SEO和社交媒体分享
   * 建议：50-160字符，描述博客内容
   */
  description: "blog",

  /**
   * 网站域名 - 你的博客完整URL
   * 用于生成RSS、sitemap等
   */
  site: "https://blog.smember.top/",

  /**
   * 语言设置 - 控制界面语言和日期格式
   * 可选值: "zh-CN" (中文) | "en" (英文)
   */
  locale: "zh-CN",

  // ==================== 导航菜单 ====================
  
  /**
   * 导航菜单配置
   * 可以添加、删除或修改导航项
   * 
   * 常用图标集：
   * - line-md: 线性图标
   * - heroicons: Heroicons图标
   * - mdi: Material Design图标
   * - mingcute: Mingcute图标
   */
  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,    // 首页
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive, // 归档
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,  // 关于
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_friends, // 友链
      href: "/friends",
    },
  ],

  // ==================== 个人信息 ====================
  
  /**
   * 用户名 - 显示在个人资料区域
   */
  username: "herbal",
  
  /**
   * 个人签名 - 显示在个人资料下方
   * 建议：一句话座右铭或个人介绍
   */
  sign: "Ad Astra Per Aspera.",
  
  /**
   * 头像URL - 你的个人头像
   * 建议尺寸：200x200px 或更大
   * 支持格式：JPG, PNG, WebP
   * 
   * 推荐图床：
   * - GitHub (免费稳定)
   * - SM.MS (免费)
   * - 七牛云、阿里云OSS等
   */
  avatarUrl: "https://vip.123pan.cn/1846863100/yk6baz03t0l000d7w33fs4ouipuz04tdDIYxAqYzDweODcxvBIryBF==.png",

  /**
   * 社交链接 - 显示在个人资料区域
   * 可以添加多个社交平台链接
   * 
   * 常用图标：
   * - line-md:github-loop (GitHub)
   * - mingcute:bilibili-line (B站)
   * - mingcute:netease-music-line (网易云音乐)
   * - heroicons:envelope (邮箱)
   * - heroicons:globe-alt (个人网站)
   */
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/herbal-rin",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/435605544",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com/#/user/home?id=1986957869",
    },
  ],

  /**
   * 联系链接 - 友链页面"联系我"按钮的链接
   * 
   * 常用联系方式：
   * - 邮箱: "mailto:your-email@example.com"
   * - GitHub: "https://github.com/your-username"
   * - B站: "https://space.bilibili.com/your-uid"
   * - 个人网站: "https://your-website.com"
   * - QQ: "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=your-qq-number"
   * - 微信: 可以链接到个人介绍页面
   */
  contactLink: "mailto:herbal_rin@126.com", // 请替换为你的真实联系方式

  // ==================== 友链配置 ====================
  
  /**
   * 友链列表 - 友情链接配置
   * 
   * 每个友链包含：
   * - name: 友链名称
   * - url: 友链地址
   * - avatar: 友链头像 (可选)
   * - description: 友链描述 (可选)
   * - tags: 友链标签 (可选)
   */
  friends: [
    {
      name: "cannian",
      url: "https://blog.cannian.space/",
      avatar: "https://vip.123pan.cn/1826899604/yk6baz03t0m000d7w33girwfizdpc39iDIYvAqY2BIQOAcx1AdFy.jpg",
      description: "cannian的博客",
      tags: ["技术", "博客"]
    }
    // 可以继续添加更多友链...
  ],

  // ==================== 侧边栏配置 ====================
  
  /**
   * 侧边栏分类显示数量
   * 建议设置为2和3的公倍数 (如6, 12, 18)
   */
  maxSidebarCategoryChip: 6,
  
  /**
   * 侧边栏标签显示数量
   */
  maxSidebarTagChip: 12,
  
  /**
   * 页脚分类显示数量
   */
  maxFooterCategoryChip: 6,
  
  /**
   * 页脚标签显示数量
   */
  maxFooterTagChip: 24,

  // ==================== 横幅背景 ====================
  
  /**
   * 横幅背景图片列表
   * 支持多张图片轮播
   * 
   * 建议：
   * - 图片尺寸：1920x1080px (16:9比例)
   * - 文件大小：小于500KB
   * - 格式：JPG, PNG, WebP
   * - 内容：与博客主题相关的精美图片
   */
  banners: [
    "https://vip.123pan.cn/1846863100/yk6baz03t0n000d7w33hdnk2kew30jclDIYxAqYzDweODcxvBIryBF==.jpg",
    "https://vip.123pan.cn/1846863100/ymjew503t0n000d7w32ycblmrouv27cmDIYxAqYzDweODcxvBIryBF==.jpg",
    "https://vip.123pan.cn/1846863100/yk6baz03t0m000d7w33giuw44jggnff8DIYxAqYzDweODcxvBIryBF==.jpg",
    "https://vip.123pan.cn/1846863100/ymjew503t0l000d7w32xfbbshizmat8gDIYxAqYzDweODcxvBIryBF==.jpg", 
    "https://vip.123pan.cn/1846863100/yk6baz03t0l000d7w33fs4o7nyu90ufyDIYxAqYzDweODcxvBIryBF==.jpg", 
    "https://vip.123pan.cn/1846863100/yk6baz03t0l000d7w33fs4o6xdu80wi9DIYxAqYzDweODcxvBIryBF==.jpg",
    "https://vip.123pan.cn/1846863100/yk6baz03t0l000d7w33fs4o6xdu80wi9DIYxAqYzDweODcxvBIryBF==.jpg",
    // 你可以添加更多背景图片，或者只保留一张
  ],

  // ==================== 技术配置 ====================
  
  /**
   * URL生成模式
   * - "HASH": 使用哈希值生成URL (推荐)
   * - "RAW": 使用原始文件名生成URL
   */
  slugMode: "HASH",

  /**
   * 版权许可信息
   * 常用许可证：
   * - CC BY-NC-SA 4.0 (知识共享-署名-非商业性使用-相同方式共享)
   * - CC BY 4.0 (知识共享-署名)
   * - MIT License
   */
  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  /**
   * 横幅显示模式
   * - "LOOP": 轮播显示多张图片
   * - "STATIC": 静态显示第一张图片
   * - "HIDDEN": 隐藏横幅
   */
  bannerStyle: "LOOP",
};

export default YukinaConfig;