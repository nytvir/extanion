# REF-001 — Solana "Breakpoint London BP26" manifest promo

- Manba: `00-inbox/ref-001/ref-001.mp4` — 1280x720, 25fps, 53.9s, VO + captions (EN)
- Tahlil: 2fps contact sheets (5 ta) + 12.5fps kadr-zoom 3 nuqtada (`01-frames/ref-001/`)
- Janr: brend-manifest / konferensiya promo. ~40+ shot, o'rtacha kesim 1.2s.

## DRAMATURGIYA SKELETI (eng katta topilma — vizual emas, ARGUMENT)

Bu video 5 qismli ritorik isbot. Footage'ni butunlay almashtirsa ham skelet ishlayveradi:

| Akt | Vaqt | Matn (caption/VO) | Vizual til |
|---|---|---|---|
| 1. Tezis | 0.0–3.5 | "The world doesn't change because people accept the rules." | Qorong'i makro, ASCII-globus, pufak, KO'Z makro; qadimiy qoidalar: geliotsentrik sxema, F=Gm₁m₂/r², quyosh |
| 2. Antitezis | 4.0–11.5 | "It changes because someone breaks them." | Tarixiy portretlar → zamonaviy builder'lar foto-kaskadi |
| — Logo flash | 12.0–13.5 | "Built for Speed / HIGH-PERFORMANCE" | OQ fon slam, S-logo, yorug' panjara, tangalar |
| 3. Savollar seriyasi | 13.5–21.5 | "Why should crossing an ocean take weeks? / information take days to cross continents? / money stop at borders?" | Har savolga mos ARXIV footage: kema/samolyot, VHS/kod/soatlar/xarita, tanga/dollarlar |
| 4. Isbot | 22.0–29.5 | "Breakthroughs rewrite what's possible. Not overnight. Then all at once." | Raketa, astronavtlar, Jobs MacBook Air; tun → proyektor nuri |
| 5. NOW + CTA | 30.0–53.9 | "That's where we are NOW... Rebuilding value... TOKEN SUPERCYCLE... meet in London. COME FOR THE ALPHA. BUILD IT ON SOLANA. BP26" | Orbita spirallari, gigant NOW, dashboard, qog'oz stop-motion, duotone glitch shaharlar, decode end-card |

## RITM QONUNI (o'lchangan)

- Kesim uzunligi OXIRGA QARAB QISQARADI: savollar aktida ~2.0s/shot, portretlarda ~0.5s,
  finalda 0.3–0.8s. "Tezlik" mavzusi montajning o'zida ijro etilgan — accelerando.
- Captionlar DOIMIY: pastda kichik mono shrift, VO bilan sinxron — bu videoning umurtqasi.
- Rang intizomi: ~90% B&W/desaturatsiya. Brend ranglari (gradient spiral, blue/purple/green
  duotone) FAQAT finalda ochiladi — payoff effekti.
- Glitch boshida nozik (scanline), oxirida agressiv (pixel-stretch barlar) — kuchayish egri chizig'i.

## TEXNIKALAR (raqamlangan, tool-nomzodlar)

### 200 — Caption Rail
Pastda markazda kichik mono caption, har shot ustida turadi, VO-sync. AE: bitta text layer,
sourceText hold keyframes. Tool: subtitle satrlarini prompt'dan olib hold-key bilan teradigan asbob.

### 201 — Portrait Lineage (4.0–7.5s)
Qora fonda MARKAZDA kichik (~10% ekran) B&W portret, har ~12 kadrda (0.5s) keyingisiga hard-swap.
Markaz chizig'idan yupqa rangli data-scanline o'tadi (203). Tarixiy shaxslar ketma-ketligi =
"nasl-nasab" metaforasi. Tool potensiali: YUQORI (rasm papkasidan avtomatik lineage).

### 202 — Photo Cluster Cascade (8.0–11.5s) — o'lchangan
- Yangi foto har 4–8 kadrda pop-in; pop OLDIDAN 1–2 kadr OQ-YONGAN placeholder ko'rinadi
  (flash-frame), keyin rasm ochiladi — "chaqnab tug'ilish" hissi shundan.
- Klaster 3–6 fotodan iborat, sekin drift qiladi, har ~20 kadrda butun klaster yangisiga cut.
- Fotolar turli o'lchamda, ustma-ust, oq border yo'q — xom kolaj. Tool potensiali: YUQORI.

### 203 — Data Scanline
Gorizontal markaz chiziq bo'ylab uzluksiz RGB-split shovqin tasmasi (timeline/data-stream
metafora). Butun portret/kaskad seksiyasida yashaydi. AE: fractal noise 1px strip + RGB shift.

### 204 — White Flash Logo Interlude (12.0–13.5s)
Qorong'i oqimni OQ fon bilan yorib logo + pill-label ("HIGH-PERFORMANCE") ko'rsatish, 1.5s,
keyin yana qorong'iga. Kontrast-zarba sifatida ishlaydi.

### 205 — Rhetorical Question Series (struktura vositasi)
Har savol = 3–4 arxiv shot + bitta caption. Arxiv davri savolga mos (okean=paroxod kinosi,
axborot=VHS/terminal, pul=tanga makro). Nusxalashda eng ko'p o'tkazib yuboriladigan joy:
footage EMAS, savol-javob tuzilmasi.

### 206 — Vignette Spotlight
Arxiv kadr aylana vinyetka/spot ichida (samolyot, qayiq) — proyektor hissi. AE: ellipse mask
+ katta feather + film grain.

### 207 — "Then All At Once" Beam (28.5–29.5s)
To'liq qorong'idan proyektor nuri ochilishi → keyingi aktga o'tish darvozasi.

### 208 — Orbit Spirals (29.5–31.5s)
Brend-gradient (purple→blue→green) konsentrik orbita chiziqlari ichkariga burilib kiradi,
2s. AE: shape layer trim paths + rotation, gradient stroke.

### 209 — Typewriter Stack + NOW Slam (30.0–33.5s)
"THAT'S / WHERE / WE / ARE" mono typewriter bo'lib qator-qator teriladi (har so'z ~0.5s),
so'ng GIGANT rounded "NOW" crowd-timelapse ustiga slam. Kichik→katta shrift zarbasi.
Tool potensiali: YUQORI (bizning Paper Search caret'iga qarindosh).

### 210 — Paper Stop-Motion Token Rain (36.0–42.5s)
Qog'oz fonda soat kolaji PORTLAYDI (parchalar stop-motion), keyin qora silindrlar
(token metafora) yog'ilib turadi. Ustiga katta display type "THE TOKEN SUPERCYCLE" —
har kadrda 1–2px pozitsiya/scale jitter (bosma misregistration hissi, 12.5fps'da ko'rinadi).
AE: posterizeTime(12) + wiggle 1-2px + rough edges.

### 211 — Duotone City Slam (41.5–47.5s) — o'lchangan
Bir xil shahar-timelapse footage, rangi HARD-CUT bilan almashadi: blue → purple → green
(har rang ~1.5–2s, beat'ga). Vertikal pixel-stretch glitch barlar doimiy. Hech qanday
o'tish yo'q — rang o'zi montaj zarbasi. Tool potensiali: O'RTA-YUQORI (bir klik duotone slam).

### 212 — Glitch Type Reveal ("LONDON", 44.0–45.5s)
So'z glitch-wipe orqali ochiladi: avval buzilgan/siljigan bloklar, 2–3 kadrda joyiga tushadi.

### 213 — Cumulative Block Build (48.5–50.0s) — o'lchangan
Matn BLOKLAB yig'iladi: "BUILD" (3 tile ≈ 240ms) → "+IT" (560ms turadi) → "+ON" (400ms) →
SOLANA logo+wordmark BIR KADRDA (≤80ms) slam. Har qo'shilish typewriter emas — butun so'z
birdan. Tool potensiali: YUQORI.

### 214 — End Card Decode (51.5–53.9s)
"BP26 / NOV 15-17 • LONDON / SOLANA.COM/BREAKPOINT" — harflar random belgilardan to'g'ri
matnga "decode" bo'ladi (BP28→BP26, harf almashinishlari kadrlarda ko'rinadi), so'ng toza
holatda 2s turadi. Klassik text-scramble. Tool potensiali: YUQORI.

### 215 — Live Dashboard Insert (34.5–35.5s)
Haqiqiy metrikali UI (364ms, SOL raqamlar, xarita) — "isbot" sifatida real mahsulot ekrani.

## KEYINGI QADAMLAR

- [ ] Audio: beat-map + VO transkript (whisper o'rnatilgach) — kesimlar qaysi zarbaga tushganini aniqlash
- [ ] Ease-o'lchov: NOW slam va foto pop-in'larning scale kurvasini piksel bilan chizish
- [ ] Egasi tool-raqamlarni tanlaydi → concept board → qurish
