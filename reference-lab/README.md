# Reference Lab — uslublarni dekompilyatsiya qilish stansiyasi

Maqsad: reference videoni "ko'z bilan chamalab" emas, RAQAMLAR bilan ochish —
har bir texnikani kadr/parametr darajasida o'lchab, keyin AE tool sifatida qayta qurish.

## Papkalar

| Papka | Nima uchun | Git |
|---|---|---|
| `00-inbox/` | Xom reference videolar shu yerga tashlanadi | ignore (og'ir fayl) |
| `01-frames/` | ffmpeg kadrlar + tile contact-sheetlar | ignore |
| `02-transcripts/` | whisper transkriptlar (so'z-sinxron) | commit |
| `03-konspekt/` | Asosiy mahsulot: raqamlangan texnika konspektlari | commit |
| `04-audio/` | loudness/beat tahlillari (ebur128) | commit (txt) |
| `05-rebuild/` | AE'da qayta qurish uchun jsx qoralamalar (UNTESTED) | commit |

## Ish tartibi (bitta video uchun)

1. Video `00-inbox/<nom>/` ga tushadi. `git pull` — keyin boshlanadi.
2. `ffmpeg -i in.mp4 -vf fps=2 f%04d.png` → tile → umumiy oqimni ko'rish.
3. Qiziq momentlar 60fps'da kadrma-kadr kesiladi → animatsiya davomiyligi
   KADRLARDA o'lchanadi (masalan: pill kirish = 9 kadr, overshoot 1.06x, 4-kadr dissolve).
4. Whisper transkript (-ml 1, so'z-sinxron) — matn qachon qaysi so'zda almashadi.
5. Audio: beat/loudness — cut qaysi zarbaga tushgan.
6. Konspekt yoziladi: `03-konspekt/NNN-<texnika>.md` (raqamlash 200 dan, global).
7. Har texnika = plugin tool nomzodi → concept board → egasi raqam tanlaydi → quriladi.

## Konspekt formati (har texnika uchun majburiy maydonlar)

- Manba: video nomi + timestamp
- Nima bo'lyapti (1-2 gap)
- O'lchovlar: davomiylik (kadr), scale/position qiymatlari, ease xarakteri
  (linear/soft/bounce — grafik tavsifi), dissolve uzunligi, SFX momenti
- AE'da qanday quriladi (qaysi property, qaysi ifoda)
- Tool bo'la oladimi: ha/yo'q + taxminiy nom
