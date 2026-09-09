# REF-002 — "Turtle Traders" o'zbekcha smooth storytelling reel

- Manba: `00-inbox/ref-002/ref-002.mp4` — 720x1280 (9:16!), 30fps, 45.6s, o'zbekcha VO
- Tahlil: 2fps sheets (4 ta) + 15fps zoom 3 nuqtada (`01-frames/ref-002/`)
- Janr: hikoya-reel (Richard Dennis / Turtle Traders) — AYNAN bizning nisha format.
- REF-001'ning teskari qutbi: u tezlik/glitch, bu — sokinlik/silliqlik. Ikkalasida ham matn = umurtqa.

## "SMOOTH"LIK FORMULASI (o'lchangan, 5 ta qonun)

1. **Oq sahnalarda HARD CUT YO'Q** — barcha almashinuvlar 300–500ms opacity crossfade.
2. **Hech narsa statik turmaydi** — fon doim sekin drift/zoom qiladi (~2–4%/s Ken Burns).
   Ko'z buni sezmaydi, lekin "jonli" his qiladi. Statik kadr = o'lik kadr.
3. **Matn "nafas olib" keladi**: yangi so'z avval XIRA KULRANG + yengil blur holida paydo
   bo'ladi, ~300–400ms ichida to'liq qora/oqqa keskinlashadi. Slam yo'q, teleport yo'q.
4. **Bitta tez element** (shtamp) — qolgan hamma narsa sekin bo'lgani uchun u zarba beradi.
   Kontrast printsipi: smooth fonida bitta accent keskin.
5. **Grain + vinyetka + dot-grid** hamma sahnani bitta materialga birlashtiradi —
   sahnalar almashsa ham "bitta dunyo" bo'lib qoladi.

## STRUKTURA

| Vaqt | Sahna | Fon |
|---|---|---|
| 0–5.5s | Hook: polaroid + qizil sarlavha "TREYDERNI ATIGI 2 HAFTADA..." + shtamp | oq qog'oz |
| 5.5–11.5s | "RICHARD DENNIS 1980" — foto zoom davom, sarlavhalar crossfade | oq qog'oz |
| 11.5–14.5s | Foto chapga suriladi; so'zma-so'z matn + qizil ip boshlanadi | oq qog'oz |
| 14.5–21s | Qorong'i siluet-olomon; matn glow-pill ustida | qora |
| 21–24s | Candlestick chart fon; "aniq qoidalarni beradi" | qora |
| 24–28s | Turtle Traders logo reveal | oq qog'oz |
| 28–34s | Globus eskiz fon; "Ochiq manbalardagi baholarga ko'ra..." | oq |
| 34–39s | PUL HISOBLAGICHI: $ raqamlar roll → $100.000.000; kupyuralar yog'iladi | oq |
| 39–45.6s | Katta sitata qo'shtirnoq ichida, so'zma-so'z | oq |

## TEXNIKALAR (216–226)

### 216 — Paper Stage
Doimiy sahna: och-kulrang qog'oz + nozik dot-grid + kuchli vinyetka + grain. Hech qachon
statik emas — doim 2–4%/s zoom drift. AE: solid + grain + vignette + scale expression.
Tool potensiali: YUQORI (bir klik "sahna tayyorlash").

### 217 — Word-by-Word Dim Reveal (videoning YURAGI) — o'lchangan
- Yangi so'z: opacity ~40% kulrang + ~2px blur holida keladi
- ~300–400ms (9–12 kadr @30fps)da to'liq qora/oq va keskin bo'ladi
- Kadens: VO'ga sinxron, har 0.5–0.9s'da bitta so'z; oldingi so'zlar joyida qoladi
- Satrlar markazda, paragraf shakli oldindan joylashgan (matn sakramaydi)
AE: bitta text layer + opacity/blur text-animator, Range Selector so'zma-so'z keyframe.
Tool potensiali: ENG YUQORI — bizning kontent uchun oltin asbob.

### 218 — Polaroid Ken Burns
Yirtiq-qirrali foto (torn edges) + uzluksiz sekin zoom (~3%/s), pauza yo'q. Sahna
tugaganda foto chapga silliq surilib chiqib ketadi (~0.7s, soft ease).
AE: rough edges/matte + scale keys 2 ta, linear-ga yaqin. Tool: YUQORI.

### 219 — Soft Headline Crossfade — o'lchangan
Qizil condensed sarlavhalar bir-birini 300–500ms opacity dissolve bilan almashtiradi
(TREYDERNI... → RICHARD DENNIS → 1980). Slam YO'Q — smooth hissi shu yerdan.
Qatlamlar ketma-ket, foto zoom to'xtamaydi. Tool: O'RTA.

### 220 — Stamp Slam (kontrast-accent)
"ISHONCHI KOMILMASDAN" shtampi 2–3 kadrda tushadi, yengil burchak bilan, keyin
sekin so'nadi. Videodagi YAGONA tez harakat. AE: scale 1.6→1 + rotation, 3 kadr,
red rubber-stamp uslub. Tool: YUQORI (bizda stamp mavzusi bor edi — egasi sevadi).

### 221 — Red Thread (qizil ip)
Pastda doimiy qizil chiziq — hikoya davomida turadi, sahnalar almashsa ham qoladi.
Progress/taranglik metaforasi. AE: shape + trim path o'sish. Tool: PAST (oddiy).

### 222 — Scene Palette Alternation
Oq qog'oz ↔ qora siluet ↔ chart-qora ↔ oq — har 8–12s'da crossfade orqali. Ritm
rang bilan yasaladi, montaj bilan emas. Struktura vositasi.

### 223 — Glow Pill Backing
Qorong'i fonda matn orqasida blurred qora "yostiq" — o'qilish kafolati.
AE: text dublikat + fill qora + blur 20 + opacity 60. Tool: PAST (217 ichiga kiradi).

### 224 — Money Counter Roll — o'lchangan
Yashil $ raqamlar vertikal motion-blur bilan aylanadi, $100.000.000 da to'xtab
KESKINLASHADI (blur 0). Atrofda kupyuralar sekin aylanib yog'iladi. Raqam roll paytida
yarim-shaffof, to'xtaganda to'liq. AE: slider expression + directional blur bog'lash.
Tool: YUQORI (trading kontent uchun to'g'ridan-to'g'ri kerak).

### 225 — Quote Frame
Katta xira qo'shtirnoqlar orasida sitata so'zma-so'z (217 bilan) teriladi.
Tool: O'RTA (217 ustiga preset).

### 226 — Logo Soft Reveal
Logo + nom ikki bosqichda: belgi fade+scale (0.5s), nom so'zma-so'z dim-reveal.
Tool: PAST.

## REF-001 vs REF-002 — ikki qutb

| | REF-001 (Solana) | REF-002 (Turtle) |
|---|---|---|
| Energiya | tezlashuvchi, glitch | sokin, bir maromda |
| O'tishlar | hard cut, slam | 300–500ms crossfade |
| Matn | blok-slam, decode | so'zma-so'z dim-reveal |
| Rang | B&W → brend portlashi | qog'oz + qizil/yashil accent |
| Umumiy | matn=umurtqa, VO-sync, bitta accent tizimi | xuddi shu |

Xulosa: ikkala uslub bitta arsenalga sig'adi — "tez to'plam" (200-215) va
"smooth to'plam" (216-226). Kontent turiga qarab almashtiriladi.

## KEYINGI QADAMLAR
- [ ] VO transkript + so'z-timing (whisper) — 217 tool'ga to'g'ridan-to'g'ri input bo'ladi
- [ ] Egasi raqam tanlaydi → board/tool
