import { IMG } from "./images";

export type NewsCategory = "activity" | "notice" | "event";

export type NewsItem = {
  slug: string;
  date: string;
  category: NewsCategory;
  title: { my: string; ja: string; en: string };
  image: string;
};

// pktjapan.jp ရဲ့ တကယ့်သတင်းများ (official content)
// TODO: နောက်ပိုင်း Laravel API ကနေ ရယူမည်
export const news: NewsItem[] = [
  {
    slug: "taunggyi-japanese-program",
    date: "2026.03.06",
    category: "activity",
    title: {
      my: "တောင်ကြီးကျောင်း ဂျပန်စာပညာရေး အစီအစဉ် မိတ်ဆက်",
      ja: "タウンジー校での日本語教育プログラムについてご紹介",
      en: "Introducing the Japanese education program at Taunggyi",
    },
    image: IMG.education,
  },
  {
    slug: "taunggyi-open",
    date: "2026.03.05",
    category: "notice",
    title: {
      my: "PKT တောင်ကြီးကျောင်း တရားဝင် ဖွင့်လှစ်",
      ja: "PKTタウンジー校が正式にオープン",
      en: "PKT Taunggyi school officially opens",
    },
    image: IMG.team,
  },
  {
    slug: "local-visit",
    date: "2026.03.04",
    category: "event",
    title: {
      my: "ဒေသခံများ လာရောက်အားပေးခဲ့ကြသည်",
      ja: "地域の皆様にお越しいただきました",
      en: "Local residents came to visit",
    },
    image: IMG.students,
  },
  {
    slug: "opening-ceremony",
    date: "2026.03.03",
    category: "event",
    title: {
      my: "တောင်ကြီးကျောင်း ဖွင့်ပွဲအခမ်းအနား ကျင်းပ",
      ja: "タウンジー校開校記念式典を盛大に開催",
      en: "Taunggyi opening ceremony held grandly",
    },
    image: IMG.torii,
  },
  {
    slug: "welcome-students",
    date: "2026.03.02",
    category: "activity",
    title: {
      my: "တောင်ကြီးကျောင်း ကျောင်းသားအသစ်များကို ကြိုဆို",
      ja: "タウンジー校の新しい生徒たちをお迎えしました",
      en: "Welcomed new students at Taunggyi school",
    },
    image: IMG.studyLaptop,
  },
  {
    slug: "opening-address",
    date: "2026.03.01",
    category: "activity",
    title: {
      my: "တောင်ကြီးကျောင်း ဖွင့်ပွဲတွင် ကိုယ်စားလှယ် မိန့်ခွန်း",
      ja: "タウンジー校開校式にて代表挨拶",
      en: "Representative's address at the Taunggyi opening",
    },
    image: IMG.consultation,
  },
  {
    slug: "grand-opening",
    date: "2026.02.28",
    category: "notice",
    title: {
      my: "PKT တောင်ကြီးကျောင်း Grand Opening ကျင်းပ",
      ja: "PKTタウンジー校グランドオープニングを開催しました",
      en: "Held the PKT Taunggyi grand opening",
    },
    image: IMG.fuji,
  },
  {
    slug: "mandalay-new-course",
    date: "2025.12.15",
    category: "notice",
    title: {
      my: "မန္တလေးကျောင်း သင်တန်းအသစ် စတင်",
      ja: "マンダレー校で新コース開始",
      en: "New course started at Mandalay",
    },
    image: IMG.consultation,
  },
  {
    slug: "yangon-graduation",
    date: "2025.11.20",
    category: "activity",
    title: {
      my: "ရန်ကုန်ကျောင်း ဘွဲ့နှင်းသဘင် ကျင်းပ",
      ja: "ヤンゴン校で卒業式を開催",
      en: "Graduation ceremony held in Yangon",
    },
    image: IMG.students,
  },
];

export const newsCategoryLabel: Record<
  NewsCategory,
  { my: string; ja: string; en: string }
> = {
  activity: { my: "လှုပ်ရှားမှု", ja: "活動報告", en: "Activity" },
  notice: { my: "အသိပေးချက်", ja: "お知らせ", en: "Notice" },
  event: { my: "ပွဲ", ja: "イベント", en: "Event" },
};
