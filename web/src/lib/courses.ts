import { IMG } from "./images";

export type CourseStatus = "open" | "full" | "soon";
export type CourseCategory = "ja" | "it" | "tokutei";

export type Course = {
  id: string;
  category: CourseCategory;
  name: { my: string; ja: string; en: string };
  level: string;
  startDate: string;
  duration: string;
  schedule: string;
  fee: string;
  status: CourseStatus;
  image: string;
};

// pktjapan.jp ရဲ့ ပညာရေးအမျိုးအစားများအပေါ် အခြေခံ (official types)
// ရက်/ကြေး က sample placeholder — နောက်ပိုင်း Laravel API ကနေ ရယူမည်
export const courses: Course[] = [
  {
    id: "n5-nov",
    category: "ja",
    name: {
      my: "ဂျပန်စာ N5 (အခြေခံ)",
      ja: "日本語 N5（初級）",
      en: "Japanese N5 (Beginner)",
    },
    level: "N5",
    startDate: "2026.11.15",
    duration: "5 လ",
    schedule: "တနင်္လာ – သောကြာ · 8:00–12:00",
    fee: "250,000 MMK",
    status: "open",
    image: IMG.education,
  },
  {
    id: "n4-nov",
    category: "ja",
    name: { my: "ဂျပန်စာ N4", ja: "日本語 N4", en: "Japanese N4" },
    level: "N4",
    startDate: "2026.11.20",
    duration: "5 လ",
    schedule: "တနင်္လာ – သောကြာ · 13:00–17:00",
    fee: "300,000 MMK",
    status: "open",
    image: IMG.students,
  },
  {
    id: "n3-soon",
    category: "ja",
    name: { my: "ဂျပန်စာ N3", ja: "日本語 N3", en: "Japanese N3" },
    level: "N3",
    startDate: "2026.12.01",
    duration: "6 လ",
    schedule: "စနေ – တနင်္ဂနွေ · 9:00–16:00",
    fee: "350,000 MMK",
    status: "soon",
    image: IMG.studyLaptop,
  },
  {
    id: "it-full",
    category: "it",
    name: {
      my: "ကျွမ်းကျင်လုပ်သား IT ပညာရေး",
      ja: "高度人材 IT教育",
      en: "Highly-Skilled IT Education",
    },
    level: "IT",
    startDate: "2026.11.10",
    duration: "6 လ",
    schedule: "တနင်္လာ – သောကြာ · 18:00–21:00",
    fee: "800,000 MMK",
    status: "full",
    image: IMG.coding,
  },
  {
    id: "kaigo-open",
    category: "tokutei",
    name: {
      my: "သီးသန့်ကျွမ်းကျင် (စောင့်ရှောက်)",
      ja: "特定技能（介護）",
      en: "Specified Skills (Care)",
    },
    level: "介護",
    startDate: "2026.11.25",
    duration: "4 လ",
    schedule: "တနင်္လာ – သောကြာ · 8:00–12:00",
    fee: "400,000 MMK",
    status: "open",
    image: IMG.care,
  },
  {
    id: "shukuhaku-soon",
    category: "tokutei",
    name: {
      my: "သီးသန့်ကျွမ်းကျင် (ဟိုတယ်)",
      ja: "特定技能（宿泊）",
      en: "Specified Skills (Hotel)",
    },
    level: "宿泊",
    startDate: "2026.12.05",
    duration: "4 လ",
    schedule: "တနင်္လာ – သောကြာ · 13:00–17:00",
    fee: "400,000 MMK",
    status: "soon",
    image: IMG.hotel,
  },
];
