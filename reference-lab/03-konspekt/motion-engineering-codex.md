# Motion Injiniring Kodeksi — GitHub'dagi 3 maktab

Apple kodeksining davomi. Manbalar: pmndrs/react-spring (config source), Framer Motion
(motiondivision/motion) defaults, greensock GSAP docs/skills, motiondeveloper/eKeys,
motionscript.com klassikasi, ethanmiller1/After-Effects-Expressions.

## Maktab 1 — SPRING FIZIKA (react-spring, Framer Motion, Apple)

### react-spring'ning mashhur presetlari (tension / friction) — sanoat standarti
| Preset | tension | friction | His |
|---|---|---|---|
| **default** | 170 | 26 | deyarli kritik so'ndirilgan — universal (ζ≈0.997!) |
| gentle | 120 | 14 | yumshoq, bir nafas |
| wobbly | 180 | 12 | o'ynoqi (ζ≈0.45) |
| stiff | 210 | 20 | tez va qat'iy |
| slow | 280 | 60 | og'ir, sekin |
| molasses | 280 | 120 | asal — juda og'ir |

### Framer Motion (hozirgi "Motion") defaults
- spring: stiffness **100**, damping **10**, mass **1**; Smooth preset {100, 20}, Bouncy {300, 10}
- tween default: **0.3s, easeOut** — UI mikro-harakat normasi

### Uch tilni bog'lash formulasi (bizniki, konvertatsiya uchun)
- ζ (dampingFraction) = friction / (2·√(tension·mass))
- response ≈ 2π / √(tension/mass)
- Tekshiruv: react-spring default 170/26 → ζ≈1.0, response≈0.48s — Apple'ning
  0.55/0.825'iga juda yaqin. **Ikkala maktab mustaqil ravishda bitta joyga kelgan:
  "deyarli kritik so'ndirilgan, ~0.5 soniya" — bu sanoatning oltin nuqtasi.**

## Maktab 2 — KURVA + STAGGER (GSAP)

- Defaults: ease **power1.out**, duration **0.5s** (gsap.defaults bilan o'zgaradi).
- Kurvalar oilasi: power1..power4 (out/in/inOut), expo, back(1.7) — overshoot kuchi
  parametrli!, elastic(amp, period), bounce.
- **STAGGER GRAMMATIKASI — eng qimmat topilma:**
  - `each: 0.1` — har element orasi 0.1s (bizning word-reveal = each 0.6-0.9)
  - `amount: 0.3` — JAMI vaqt elementlarga bo'linadi (element soni o'zgarsa ham temp saqlanadi)
  - `from: "start" | "center" | "edges" | "random"` — kaskad QAYERDAN boshlanadi
  - Bu dramaturgiya vositasi: markazdan tarqalish = portlash hissi, random = jonlanish,
    edges = yig'ilish. REF-001'dagi foto-kaskad = `each ~0.25, from: "random"`.

## Maktab 3 — KEYFRAME + EXPRESSION (AE'ning o'z GitHub ekotizimi)

- **motiondeveloper/eKeys** — keyframe'larni expression ichida JS obyekt sifatida yozish:
  `[{time, value, easeIn, easeOut}]` + bezier interpolator + tayyor easing funksiyalar
  (easeInOutQuart, easeInElastic...). Bizning tool'lar uchun IDEAL naqsh: script
  keyframe qo'ymasdan, expression bilan boshqariladigan animatsiya yozsa — foydalanuvchi
  keyin slider bilan sozlaydi. (Yonida: aeFunctions, eBox, create-expression-lib.)
- **MotionScript klassikasi** (bounce-and-overshoot): sanoatdagi barcha bounce
  expressionlarning otasi — bizning AM_BOUNCE ham shu naslchdan.
- ethanmiller1/After-Effects-Expressions — kinetik tipografiya uchun bounce to'plami.

## SINTEZ — bizning arsenal endi shunday quriladi

1. **Qo'nish/settle** → Apple/react-spring fizikasi: ζ 0.8–1.0, response 0.3–0.55s
   (appleSpring expression, decay 9).
2. **Kaskadlar** (so'zlar, foto-klasterlar, ro'yxatlar) → GSAP stagger grammatikasi:
   each/amount + from (start/center/random) — AE'da `index*delay` yoki marker asosida.
3. **Aksent zarba** (stamp, NOW slam) → back/elastic oilasi, parametrli overshoot
   (back 1.7 standart).
4. **Tool arxitekturasi** → eKeys naqshi: keyframe emas, expression + Slider Control —
   foydalanuvchi tool ishlagandan KEYIN ham vaqtlarni sozlay oladi.
5. Davomiyliklar: mikro 0.15–0.3s · standart 0.3–0.55s · sahna 0.5–0.8s ·
   drift cheksiz-linear.
