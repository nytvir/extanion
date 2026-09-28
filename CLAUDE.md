# Nytvir Motion — Claude uchun ish tartibi

Avval `AGENTS.md` ni to'liq o'qing (ExtendScript minalari, egasining didi, versiya qoidasi). Bu fayl faqat qo'shimcha.

## Egasi bilan ishlash

- Egasi ko'pincha **Telegram bot** orqali yozadi (telefonda). Javob: qisqa, toza lotin o'zbekcha, kirill harf yo'q.
- Ruxsat so'rab to'xtamang — ishni oxirigacha bajaring, keyin natijani ko'rsating.
- Natijani ko'rsatish: headless Chrome bilan PNG skrinshot, javob oxirida `SEND: /abs/path` qatorlari (bot faylni Telegramga yuboradi).

## UI tool oqimi (tasdiqlangan)

1. **Board** (mockup-first): `reference-lab/boards/board-NN-*.html`, Board 9 (`board-09-apple-variety.html`) andozasi — format tugmasi 9:16/4:5/1:1, tema, `#t=` freeze. Global raqamlash davom etadi (AGENTS.md dagi "currently at").
2. Egasi raqam tanlaydi ("hammasi" ham bo'lishi mumkin). Faqat tanlanganlari quriladi.
3. **Qurish**: S47 karkasi (`host/main.jsx` ichida "S47 APPLE UI SET"): `_s47Begin` -> helperlar (`_s47Rect/_s47Txt/_s47Seg/_s47Btn/_s47Card/_s47Path`) -> `_s47Finish`. Har tool: **kamida 10 brend preseti**, hamma matn/rang promptda tahrirlanadi, CTRL null (Tab keyfreymlari -> prujina `s`), 9:16/4:5/1:1 ga `x.K` orqali moslashadi. Apple uslubi (oq karta, #F2F2F7 qatorlar).
   **Ikonlar qo'lda chizilmaydi** (egasi talabi): `_s55Ico(x, name, key, box, sw, col, pos, opExpr, {fill, only})` + `S55_ICO` (Lucide, ISC, `licenses/lucide-LICENSE.txt`). Yangi ikon: `/Users/niytvir/extanion-dev/lucide/` ga svg yuklab, `conv.py` bilan `S55_ICO` ni qayta yarating.
4. **Tekshirish** (Mac'da AE yo'q): `node /Users/niytvir/extanion-dev/aemock.js --src host/main.jsx --fn _s47Price --preset 1 --w 1080 --h 1920 [--out f.html --times 0.6,1.8,3.2] [--lint part.jsx] [--sel 2]` -> `errors: 0`, LINT yo'q; kadrlarni PNG qilib ko'ring. Barcha presetlar x 3 format.
5. Dispatcher (`nytvir_execute` ichida `else if (cmd === ...)`), `client/index.html` karta **`tab:'lib'`** va sarlavha oxirida `(NNN)` raqam bilan, `AGENTS.md` versiya, commit `vX.YZ: ...`, push.
6. **UI Kit tartibi** (`client/index.html`): yangi soha bo'lsa `SOHA_ORDER/SOHA_NAMES` + `libSoha()` diapazoni; har raqamga `LIB_TAGS` (mexanika teglari: Tanlash, Slayder, Toggle, Raqam, Grafik, Taymer, Kalendar, Cheklist, Ro'yxat, Karta, Xarita, Yozish, Muhr, Tasdiq). Preview: `node /Users/niytvir/extanion-dev/previews.mjs client/previews 4.8` (board'lar server'da ochiq bo'lishi kerak) -> `client/previews/NNN.png`; yangi board faylini skriptdagi `BOARDS` ro'yxatiga qo'shing.

## Joylar

- Repo: `/Users/niytvir/extanion` (GitHub `nytvir/extanion`, public — sir/token yozmang).
- Mock va scratch: `/Users/niytvir/extanion-dev/`.
- Board'larni lokal ko'rish: `python3 -m http.server 8765 --directory reference-lab/boards`.
