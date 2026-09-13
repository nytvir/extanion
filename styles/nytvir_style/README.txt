NYTVIR TRADING STYLE — retsept (2026-08)
=========================================
Bu papka: STYLE_PIPELINE.jsx (asosiy skript) + shu fayl.
SFX: D:\edit\nytvir_sfx\ (plip1/2, plip_big, tick, ding_pos, thud_neg, swoosh_in, swoosh_out, modal, tap)

YANGI VIDEO UCHUN QADAMLAR
--------------------------
1. AE'da comp tayyorlang (video + [Cap] prefiksli caption'lar, ixtiyoriy).
2. STYLE_PIPELINE.jsx ni oching, tepadagi CONFIG ni to'ldiring:
   - compName: comp nomi boshlanishi
   - widgets[]: kichik shisha kartalar (vaqt, matnlar, rang: "red"/"grn")
   - insights: to'liq qorong'i hisobot ekrani (qatorlar, katta raqam, grafik yo'nalishi)
   - crash: qizil qulash ekrani + modal matnlari
   - sfx[]: [fayl, vaqt, dB] ro'yxati
   - audio: narrationWav (3-qadamdan), musicLayerPrefix (musiqa qatlami nomi)
3. GAPNI MASTER QILISH (terminalda, video yo'lini almashtiring):
   ffmpeg -y -i "VIDEO.MOV" -vn -ac 2 -ar 48000 -af "highpass=f=75,loudnorm=I=-14:TP=-1.5:LRA=9" "D:\edit\nytvir_sfx\narration_master.wav"
   So'ng CONFIG.audio.narrationWav ga shu yo'lni yozing, muteVideoAudio: true.
4. File > Scripts > Run Script File > STYLE_PIPELINE.jsx
5. Tekshirish: RAM preview. Miksni o'lchash (ixtiyoriy):
   aerender -project X.aep -comp Y -RStemplate "Best Settings" -OMtemplate "AIFF 48kHz" -output mix.aif
   ffmpeg -i mix.aif -af ebur128=peak=true -f null -
   Maqsad: I = -14..-17 LUFS, Peak <= -1.0 dBFS

STIL QOIDALARI (DNA)
--------------------
- Ranglar: fon #0e0e10, panel #1a1a1d, qizil #ff453a, yashil #30d158, teal #2dd4bf
- Shrift: UI = Arial Bold/Regular (AE'da ishonchli); caption = Segoe UI Light, bir qator
- Ekranlar 88% masshtab (chetlarda nafas), fon to'liq (BG teskari kompensatsiya)
- Animatsiya: fade + 0.7s spring (ease influence 80); pop faqat katta raqamlarda
- Chiqish: push-through (ekran 88->118% + video 100->106->100 kick + motion blur)
- Glow faqat urg'u raqamlarda (Glo2 yoki Deep Glow 2: Radius 60-80, Exposure 0.35-0.5)
- SFX: plip (elementlar), swoosh (ekranlar), ding/thud (natija), modal (ogohlantirish)
- Miks: gap -14..-16 LUFS / peak -1.4 dan past; musiqa gapdan ~13dB past; whooshda 4dB duck

CHART EXPLAINER (yangi, 2026-08-31)
-----------------------------------
CHART_EXPLAINER.jsx — neon chart-explainer generatori (reference: qora fon,
uzluksiz svechalar, kamera kuzatuvi, bounce, oltin annotatsiyalar, teal zonalar).
Ishlatish: CONFIG'da (1) candles.anchors = narx yo'li, (2) candles.times = paydo
bo'lish vaqtlari (SRT beatlariga), (3) camera = [vaqt, svechaIdx, zoom],
(4) beats = annotatsiyalar (hline/strike/circle/circleLow/label/dollar/
boxOutline/zone/chip/arrow/flash) — har biri narration vaqtiga bog'lanadi.
Natija: "CHART ZONE" precomp (mask bilan kesilgan), ichida [NEO] CAM null +
barcha elementlar editable. Yangi video: SRT bering -> men configni to'ldiraman.
Muhim: kamera keylari script OXIRIDA qo'yiladi (parent tuzog'i oldini olish).

HAR VIDEO BOSHQA BOZOR KO'RINISHI KERAK (seriya qoidasi, 2026-09-01):
foydalanuvchi talabi — chartlar videodan videoga bir xil ko'rinmasin.
Har yangi videoda kamida 3 tasini o'zgartir:
- svecha teksturasi: tana eni (26 ingichka / 34 to'la), wick uzunligi/qalinligi
- aksent rangi: video1=oltin #FFD461, video2=cyan #59D6FF; keyingilar: orange/#FF9F43, binafsha...
- volatillik xarakteri: silliq trend / chayqoq range / gap'li
- seed (narx shovqini) va spawn ritmi
- kamera zoom xarakteri
VA chart doim SRT strategiyasini VIZUAL isbotlashi shart (masalan support
haqida gapirilsa — narx unga bir necha marta TEGIB qaytishi ko'rinsin).

NEON CHART V2 — FINAL RETSEPT (2026-09-06, PTJ videosida tasdiqlangan)
-----------------------------------------------------------------------
"Birorta video tashlab shunaqa qil desam" — MANA SHU retsept ishlatiladi:
- Svecha: tana 45px, wick 5px, roundness 0 (O'TKIR!), oraliq 88px, flat fill
  (yashil #22e34e / qizil #f2372f), Glo2: threshold 150 (0-255!), radius 16, int 0.75
- Spawn: UZLUKSIZ (max 1.3s oraliq, o'lik pauza YO'Q) — scale [100,8]->[100,100] 0.45s ease80
- Kamera: FAQAT POSITION (scale statik ~94-100%), keylar ease 75, breathing
  expression: value + [sin(t*0.4)*3, cos(t*0.3)*2]; vertikal damping 0.45;
  keylar bolalar parent bo'lgach ENG OXIRIDA
- Element to'plami: grid (oq 10%), trail (aksent rang, trim UZUNLIK bo'yicha),
  vignette 26, dashed daraja-chiziq, aksent box, flash'lar, 50/50 mask + CTRL nullar
- Matn: SegoeUI-Light, applyFill=true/applyStroke=false SHART; har yozuv o'z
  sahnasining BO'SH zonasida, sahna tugagach fade-out; parent ichida koordinata
  LOKAL (world - [540,530])
- Shablonlar: NEON_CHART_V2_build.jsx (svecha/trail/grid/kamera qayta qurish),
  NEON_CHART_V2_full.jsx (to'liq element to'plami); jonli namuna: D:\edit\ptj_math.aep
- Pluginda: Nytvir Motion > Neon Chart PRO kartasi (neonChart) — bir bosishda
  24 editable svecha + CAM + grid + trail hozirgi kompga quriladi.

PRO EASE RIG (2026-09-06 — silliqlikning 6 siri, UI/karta kirishlari uchun)
---------------------------------------------------------------------------
Havaskor vs pro farqi easing'da. Har elementga:
1. ASIMMETRIK ease: chiqish influence ~33, kelish ~90 (otilib chiqib, suzib qo'nadi)
2. OVERSHOOT+SETTLE: pos/scale/rot 3 keyli: boshlanish -> +1.5% oshib ketish (t+0.44-0.5) -> qo'nish (t+0.66-0.7)
3. SURILGAN scale: scale keylari positiondan 2 kadr (0.07s) keyin boshlanadi
4. STAGGER: bolalar elementlar 0.1-0.15s farq bilan
5. UZUN davomiylik: entrance 0.6-0.7s (0.3 emas!)
6. YOY trayektoriya: kirish [x-16, y+120] dan (to'g'ri vertikal emas) + doimiy float expression
+ motionBlur hamma harakatlanuvchida. Kod namunasi: scratchpad lime_scenes2.jsx inUp().
LIME BRAND uslubi (Ismail reference): word-sync pill captionlar (whisper -ml 1 ->
token merge -> 2 layer: rect Size hold keylar + sourceText hold keylar, POP YO'Q —
keskin swap; och-lime #D6EBAE + zaytun matn lowercase, SegoeUI-Bold 46, y=1340),
kalit raqamlarga oq bold + lime ellips trim draw-on, pastel UI cutaway kartalar
(qiyshaygan, badge/chip/slider bilan), final pixelate (Mosaic DUPLIKAT video
layerda — CC Block Load/adjustment ishlamaydi!) + profil karta. Jonli namuna:
D:\edit\lime_proba.aep.

STORY REEL — KINO MINIMAL pipeline (2026-09-08, KINO_0906 SHIP oldi)
--------------------------------------------------------------------
"Sinatra-reel" uslubi: gap-ma-gap B-roll + markazda so'z-sinxron oq caption.
Konveyer (to'liq avtomatik, kliplarni ham o'zim topaman):
1. Narration -> whisper -ml 1 -> so'z timestamplar (words_data.jsx)
2. Gap-ma-gap beat xaritasi -> har gapga Pexels qidiruv so'zi
3. Klip topish: WebFetch pexels search -> video sahifa -> to'g'ridan to'g'ri
   mp4 URL (og:video) -> Invoke-WebRequest yuklash (fallback:
   pexels.com/download/video/{id}/ redirect)
4. Assembly (kino_build2.jsx shablon): har klip o'z beatida, startTime=beat,
   scale=max(1080/w,1920/h) fill, navbatma-navbat push-in/pull-out ~7%
   expression, HARD CUT so'z chiqqan freymda (cut-word lock!), yakuniy klip =
   foydalanuvchi kadri (startTime=0 sync + alohida grade: exp -22 / kon +12 /
   desat -14)
5. Grade: bitta adjustment (kontrast +22, desat -16) + tepa/past gradient
   parda 42% + vignette 38 — 13 xil klip BITTA film bo'ladi
6. Caption: bitta text layer, sourceText HOLD keylar, Arial-Bold 62 oq,
   markaz (540,935), punktuatsiya olib tashlanadi, urg'u zonasi CAPS,
   final gap so'z-so'z yig'iladi, raqamlarga 0.3s digit-roll (72->51->40%),
   scale clamp: width>920px bo'lsa avtomatik kichrayadi
   KEYINGISIGA: yorug' fonda matn ortiga qora gradient; uzun qator = 2 qator.
7. Kritik-darboza -> SHIP bo'lgach beriladi.
Jonli namuna: D:\edit\kino_0906.aep + D:\edit\broll_0906\ kliplar.

MASHHUR XATOLAR (qisqa)
-----------------------
- Parent qilishdan OLDIN parent'da keyframe bo'lmasin (125% bug)
- Null o'chirsangiz bolalari sakraydi — avval bolalarni unparent qiling
- Yangi matn 0x0 bo'lsa: AE prefs buzilgan (25.x papkani rename qilib reset)
- aerender'da "PNG Sequence" yo'q — "Photoshop" template + ffmpeg psd->png
