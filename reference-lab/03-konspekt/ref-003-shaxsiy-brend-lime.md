# REF-003 — Shaxsiy brend reklama (lime kinetik uslub)

- Manba: egasi yuborgan namuna video (Telegram), 62 s, 720x1280, 30 fps. Mahalliy nusxa: `00-inbox/ref-003/ref.mp4` (git'ga kirmaydi).
- Janr: gapiruvchi odam (talking head) + ustida kinetik grafika. Agentlik o'z xizmatini (shaxsiy brend qurish) sotadi.
- Kadrlar: `01-frames/ref-003/` (sheet_01..04 — 2 fps umumiy, seg_*.png — 6 fps lahzalar, bg/bg1..6.jpg — grafikasiz toza fonlar).

## Uslub tokenlari

| Token | Qiymat |
|---|---|
| Aksent | lime `#B0FC0A` (tekis chip, o'lchangan #AEF606), glow yorqin qismi `#E6FF5A`, soya tomoni `#C0D820` |
| Matn | oq `#FFFFFF`, ikkinchi daraja oq 75 % |
| Chip foni | qora 55-65 % (`rgba(0,0,0,.6)`), burchak 4-6 px (deyarli to'rtburchak) |
| Label | kichik BOSH HARF, harflar oralig'i keng (tracking ~+60), chapida 3-4 px lime vertikal chiziq |
| Katta so'z | juda qalin grotesk (Inter/SF Display Heavy tipida), ba'zan kursiv, tor harf oralig'i (-2..-3 %) |
| Kontur so'z | faqat oq stroke (2-3 px), ichi bo'sh, keyin lime glow bilan to'ladi |
| Glow | lime Gaussian blur 20-40 px, opacity 60-80 %, kirishda kuchli, keyin so'nadi |
| Joylashuv | markaz, odamning ko'krak/qorin sohasi (kadr balandligining 45-60 %), yuzni to'smaydi |

## Harakat qoidalari (kadrlardan o'lchangan, 6 fps)

- **Kirish:** blur (8-12 px) + shaffoflik 0→100 + 20-40 px surilish, ~0.25-0.35 s, oxirida yumshoq to'xtash (ease-out). Asosiy so'zlarda qisqa lime glow "chaqnash".
- **Chip pop:** scale 0.6→1.05→1, ~0.2 s, overshoot kichik.
- **Highlight bar:** lime to'rtburchak chapdan o'ngga matn ortidan supuriladi, ~0.3 s.
- **So'zma-so'z yig'ilish:** har so'z ~0.15-0.25 s oralig'ida, gapiruvchining nutqiga sinxron.
- **Yozish (typing):** ~12-15 belgi/s, caret yo'q yoki ingichka.
- **Hisoblagich:** raqamlar vertikal motion blur bilan aylanadi, ~1.5 s, oxirida sekinlashadi.
- **Chiqish:** tez (0.15-0.2 s) blur-out yoki keyingi blok ustiga almashish; ko'pincha oldingi blok kichrayib yuqoriga suriladi va xiralashadi.

## Texnikalar (global raqam, tool nomzodi)

| # | Vaqt | Nomi | Nima bo'lyapti | AE'da |
|---|---|---|---|---|
| 353 | 0:00-0:03 | Glitch Title Stack | Label `NAMANGANLIK` (lime chiziq + qora chip) → katta so'z `biznes` lime glow bilan harfma-harf chaqnab kiradi → `[egasi]` qavsli kichik so'z va lime chip `expert` → yonida 8 burchakli yashil stiker (odam ikonkasi) aylanib pop | text animator (opacity+blur per char), glow = duplicate + Gaussian + lime Fill, stiker = shape star + rotation spring |
| 354 | 0:03-0:10 | Post Frame Wrap | Video kichrayib oq "post" ramkasiga kiradi: tepada avatar + nik + menyu, pastda like/izoh/ulashish hisoblagichlari tinmay o'sadi (525→1204), izoh matni yoziladi, karusel nuqtalari | video precomp scale 100→78 %, oq rounded rect ramka, Source Text count-up expression (logo'siz, umumiy ikonkalar) |
| 355 | 0:04-0:08 | Kinetic Italic Pair | Lime chip `anchadan beri` → `Shaxsiy` (kursiv, juda qalin) blur-in → `Brendni` pastga-o'ngga siljigan holda ustma-ust → ostida kichik izoh so'zma-so'z | 2 text layer, offset stack, per-word reveal |
| 356 | 0:09-0:11 | Callout Arrows | Ikki qora chip (`qanaqa qilib`, `kim bilan`) odamning ikki yonida, lime qo'lda chizilgandek egri strelkalar odamga qarab chiziladi | path + Trim Paths end 0→100, arrowhead, chip pop |
| 357 | 0:10 | Pixel Glitch | Kadr almashishida lime piksel bloklari tarqalib-yig'iladi | Mosaic + Turbulent Displace yoki shape grid opacity random |
| 358 | 0:18-0:21 | Brand Pill + Year Strip | Oq pill ichida brend nomi pop → `Shu kungacha` yozuvi → gorizontal yil lentasi `2024 2025 2026`, faol yil lime chip ichida, lenta suriladi | pill shape + text, year texts in a row, position by state |
| 359 | 0:21-0:28 | Client Orbit Network | Fonga oq to'r (grid) va nuqtali o'sish chizig'i chiziladi; odam atrofida mijoz avatarlari (doira ichida foto + ism tegi) birin-ketin pop bo'ladi, har biriga yashil `+63k` chip | grid = repeater lines, dotted path + Trim, avatar = ellipse matte + photo placeholder |
| 360 | 0:24-0:27 | Money Rain Counter | Katta raqam `476,4..` motion blur bilan aylanib `500,000$` da to'xtaydi, ustidan 3D pul kupyuralari uchib tushadi, ustida qora chip `shaxsiy brendlari qo'rib` | Source Text count-up + Directional Blur by speed, falling cards with 3D rotation |
| 361 | 0:27-0:30 | Label Bar Headline | `MLNDAN ORTIQ` label → `OBUNACHILAR` KATTA harflar chapdan harfma-harf lime "dum" bilan yoziladi → izoh so'zma-so'z | per-char reveal with lime leading glyph |
| 362 | 0:31-0:36 | Premium Stack | `agar` va `siz` kichik so'zlar → markazda `Premium` + lime chip `mahsulot` → blok yuqoriga siljib kichrayadi, ostiga `Xizmat` kiradi, chapda lime vertikal chiziq o'sadi, ostida harf oralig'i keng `ko'rsatsangiz` yoziladi | 2-state stack, vertical rule scale Y |
| 363 | 0:38-0:42 | Highlight Bullets | `Maqsadingiz` sarlavha → lime nuqta + `sotuvlarni oshirish`, orqasidan lime highlight bar supuriladi → element kichrayib xiralashadi, keyingisi `sohangizda tanilish` xuddi shunday | rect scale X 0→1 anchor left, list shift |
| 364 | 0:44-0:48 | Glass Battery Bars | Headline yonida 2 ta vertikal shisha "batareya" (tepasida qo'l siqish va savat ikonkasi), ichida lime suyuqlik ko'tariladi, balandliklar farqli | rounded rect stroke + fill rect scale Y, icon on top |
| 365 | 0:49-0:52 | Floating Icon Pills | Odam atrofida doira ikonkalar (yuborish, chaqmoq, brend) suzib kiradi, markazda avatar-stack pill + ikonka, ostida o'sish chizig'i chiziladi, `baland bo'ladi` | icon circles pop + float wiggle, avatar stack pill |
| 366 | 0:53-0:57 | Process Card Fan | `BU JARAYONDA` label (lime chiziq) + ingichka to'q sariq/lime gorizontal chiziq → skrinshot kartalar markazdan yelpig'ichdek ochiladi, ustida kichik teg chiplar | cards with rotation/position fan by state |
| 367 | 0:57-1:00 | Outline Word + Chip | Tepada ikonka (olmos) `<< >>` qavslar bilan, `Sifatni` ulkan so'z avval lime glow bilan harfma-harf, keyin kontur (stroke) holatga o'tadi, ustiga lime chip `yuqotmaslik` qiyshiq pop | fill→stroke switch, chip rotation -4° |
| 368 | 1:00-1:03 | Search Bar Typing | Oq yumaloq qidiruv maydoni, matn yoziladi, oxirida pastga qaragan lime/oq chevronlar kaskad bo'lib yonadi | rect + typing Source Text + chevron shapes stagger |
| 369 | 1:04-1:07 | CTA Headline Build | `RO'YXATDAN O'TING` label → `Ko'rishib` blur-in → 2 qator izoh so'zma-so'z → oxirgi qator lime highlight | label + headline + word build + highlight bar |
| 370 | 0:55-0:57 | Word Caption + Key Chip | Subtitr qatorlari so'zma-so'z to'ladi, kalit ibora (`o'zimiz hal qilamiz`) lime chip ichiga "sakrab" kiradi | per-word opacity, chip behind key phrase |

## Nima olamiz, nima olmaymiz

- **Olamiz:** lime + oq palitra, label+chiziq tizimi, blur-in so'zlar, highlight bar, chip pop, hisoblagichlar, avatar tarmoq, batareya barlar, jarayon kartalari, qidiruv yozuvi — hammasi shaxsiy brend reklamalari uchun universal.
- **Moslashtiramiz:** post ramka (354) — egasi soxta tizim interfeysini yoqtirmaydi, shuning uchun logo'siz, umumiy "post" ramka sifatida. Brend nomi (AdClicks) va real mijoz fotolari o'rniga placeholder.
- **Tool bo'la oladi:** 353-370 hammasi (har biri prompt bilan matn/rang/raqam o'zgaradi, video ustiga qo'yiladi).
