import type I18nKeys from "../locales/keys";

interface Configuration {
  title: string;
  subTitle: string;
  brandTitle: string;

  description: string;

  site: string;

  locale: "en" | "zh-CN";

  navigators: { nameKey: I18nKeys; href: string }[];

  username: string;
  sign: string;
  avatarUrl: string;

  socialLinks: { icon: string; link: string }[];

  /**
   * 联系链接 - 友链页面"联系我"按钮的链接
   * 可以是邮箱地址、社交媒体链接或自定义页面
   */
  contactLink?: string;

  friends: {
    name: string;
    url: string;
    avatar?: string;
    description?: string;
    tags?: string[];
  }[];

  maxSidebarCategoryChip: number;
  maxSidebarTagChip: number;
  maxFooterCategoryChip: number;
  maxFooterTagChip: number;

  banners: string[];

  slugMode: "HASH" | "RAW";

  license: {
    name: string;
    url: string;
  };

  bannerStyle: "LOOP";
}

export type { Configuration };
