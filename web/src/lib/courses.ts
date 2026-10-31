export type CourseStatus = "open" | "full" | "soon";

export type Course = {
  id: string;
  category: "ja" | "it" | "tokutei";
  name: string;
  level: string;
  startDate: string;
  duration: string;
  schedule: string;
  fee: string;
  status: CourseStatus;
  image: string;
};

// TODO: ဒီ data ကို WordPress / Supabase ကနေ ရယူမယ် (လက်ရှိ sample placeholder)
// image က placehold (picsum) — တကယ့်သင်တန်းပုံ ရလာရင် URL အစားထိုးရုံပါပဲ
export const courses: Course[] = [
  {
    id: "n5-nov",
    category: "ja",
    name: "ဂျပန်စာ N5 (အခြေခံ)",
    level: "N5",
    startDate: "2026.11.15",
    duration: "5 လ",
    schedule: "တနင်္လာ – သောကြာ · 8:00–12:00",
    fee: "250,000 MMK",
    status: "open",
    image: "https://picsum.photos/seed/pkt-n5/600/400",
  },
  {
    id: "n4-nov",
    category: "ja",
    name: "ဂျပန်စာ N4",
    level: "N4",
    startDate: "2026.11.20",
    duration: "5 လ",
    schedule: "တနင်္လာ – သောကြာ · 13:00–17:00",
    fee: "300,000 MMK",
    status: "open",
    image: "https://picsum.photos/seed/pkt-n4/600/400",
  },
  {
    id: "n3-soon",
    category: "ja",
    name: "ဂျပန်စာ N3",
    level: "N3",
    startDate: "2026.12.01",
    duration: "6 လ",
    schedule: "စနေ – တနင်္ဂနွေ · 9:00–16:00",
    fee: "350,000 MMK",
    status: "soon",
    image: "https://picsum.photos/seed/pkt-n3/600/400",
  },
  {
    id: "it-full",
    category: "it",
    name: "IT အင်ဂျင်နီယာ (Web)",
    level: "IT",
    startDate: "2026.11.10",
    duration: "6 လ",
    schedule: "တနင်္လာ – သောကြာ · 18:00–21:00",
    fee: "800,000 MMK",
    status: "full",
    image: "https://picsum.photos/seed/pkt-it/600/400",
  },
  {
    id: "kaigo-open",
    category: "tokutei",
    name: "သီးသန့်ကျွမ်းကျင် (စောင့်ရှောက်)",
    level: "介護",
    startDate: "2026.11.25",
    duration: "4 လ",
    schedule: "တနင်္လာ – သောကြာ · 8:00–12:00",
    fee: "400,000 MMK",
    status: "open",
    image: "https://picsum.photos/seed/pkt-kaigo/600/400",
  },
  {
    id: "shukuhaku-soon",
    category: "tokutei",
    name: "သီးသန့်ကျွမ်းကျင် (ဟိုတယ်)",
    level: "宿泊",
    startDate: "2026.12.05",
    duration: "4 လ",
    schedule: "တနင်္လာ – သောကြာ · 13:00–17:00",
    fee: "400,000 MMK",
    status: "soon",
    image: "https://picsum.photos/seed/pkt-hotel/600/400",
  },
];
