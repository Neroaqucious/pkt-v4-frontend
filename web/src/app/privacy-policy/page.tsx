import Link from "next/link";

export const metadata = {
  title: "ကိုယ်ရေးအချက်အလက် မူဝါဒ / Privacy Policy",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-brand">
        PKT MYANMAR
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 font-heading text-lg font-semibold text-ink">
        ကိုယ်ရေးအချက်အလက် မူဝါဒ
      </p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="font-heading text-base font-bold text-ink">
            1. အချက်အလက်များ စုဆောင်းခြင်း
          </h2>
          <p className="mt-2">
            ကျွန်ုပ်တို့သည် ဆက်သွယ်မေးမြန်းမှုနှင့် လျှောက်လွှာလုပ်ငန်းစဉ်အတွက်
            လိုအပ်သော အမည်၊ အီးမေးလ်၊ ဖုန်းနံပါတ် စသည့် အချက်အလက်များကို
            စုဆောင်းပါသည်။
          </p>
        </section>
        <section>
          <h2 className="font-heading text-base font-bold text-ink">
            2. အချက်အလက်များ အသုံးပြုခြင်း
          </h2>
          <p className="mt-2">
            စုဆောင်းထားသော အချက်အလက်များကို ဝန်ဆောင်မှုပေးခြင်း၊
            ဆက်သွယ်ဖြေကြားခြင်းနှင့် ဝန်ဆောင်မှု တိုးတက်စေရေးအတွက်သာ
            အသုံးပြုပါသည်။
          </p>
        </section>
        <section>
          <h2 className="font-heading text-base font-bold text-ink">
            3. တတိယပုဂ္ဂိုလ်များအား မျှဝေခြင်း
          </h2>
          <p className="mt-2">
            ဥပဒေအရ လိုအပ်သည့်အခါမှအပ သင့်အချက်အလက်များကို တတိယပုဂ္ဂိုလ်များထံ
            မျှဝေခြင်း မပြုပါ။
          </p>
        </section>
        <section>
          <h2 className="font-heading text-base font-bold text-ink">
            4. လုံခြုံရေး
          </h2>
          <p className="mt-2">
            သင့်အချက်အလက်များကို သင့်လျော်သော နည်းပညာနှင့်
            စီမံခန့်ခွဲမှုဆိုင်ရာ အကာအကွယ်များဖြင့် ထိန်းသိမ်းပါသည်။
          </p>
        </section>
        <section>
          <h2 className="font-heading text-base font-bold text-ink">
            5. ဆက်သွယ်ရန်
          </h2>
          <p className="mt-2">
            ကိုယ်ရေးအချက်အလက်နှင့် ပတ်သက်၍ မေးမြန်းလိုပါက
            ကျွန်ုပ်တို့၏ ဆက်သွယ်ရန် စာမျက်နှာမှတဆင့် ဆက်သွယ်နိုင်ပါသည်။
          </p>
        </section>
      </div>

      <Link
        href="/"
        className="mt-10 inline-block font-ui text-sm font-bold text-brand hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
