# Apple Smooth Kodeksi — GitHub tadqiqoti

Manbalar: Apple Core Animation konstantalari (expo/react-apple-easing source'idan),
GetStream/swiftui-spring-animations (spring retseptlar reference'i), SwiftUI hujjatlari,
gre/bezier-easing, adrianhajdin/iphone (apple.com klon texnikasi), easings.net.

## 1. Apple'ning RASMIY bezier kurvalari (Core Animation, iOS/macOS'dagi har animatsiya)

| Konstanta | cubic-bezier | Qachon |
|---|---|---|
| **kCAMediaTimingFunctionDefault** | **(0.25, 0.10, 0.25, 1)** | Apple'ning asosiy easi — ikki tomoni yumshoq, biroz assimetrik |
| kCAMediaTimingFunctionEaseIn | (0.42, 0, 1, 1) | chiqib ketishlar |
| kCAMediaTimingFunctionEaseOut | (0, 0, 0.58, 1) | kirib kelishlar |
| kCAMediaTimingFunctionEaseInOut | (0.42, 0, 0.58, 1) | joy almashishlar |

E'tibor: Apple'ning default kurvalari easings.net'dagi expo/quint'lardan ancha MULOYIM.
Apple hech qachon keskin portlatmaydi — "tinch ishonch" hissi shu yumshoqlikdan.

## 2. Zamonaviy Apple = bezier emas, SPRING (fizika)

iOS 17+dan Apple animatsiyaning deyarli hammasi prujina. Rasmiy qiymatlar:

| Retsept | Parametrlar | Qachon |
|---|---|---|
| **Standart .spring()** | response **0.55s**, dampingFraction **0.825** | umumiy UI — Apple'ning "uy hissi" |
| interactiveSpring | response **0.15s**, dampingFraction **0.86** | barmoq ostidagi javob (drag/tap) |
| Smooth | duration 0.5, **bounce 0** | sheet, navigatsiya — overshoot YO'Q |
| Brisk | duration 0.5, **bounce 0.15** | tasdiqlar, tez UI javoblar |
| Playful | duration 0.5, **bounce 0.3** | o'yinqaroq aksentlar (ehtiyot!) |
| An'anaviy boshlang'ich | stiffness **170**, damping **15** | eski API; bouncy uchun damping→5 |

### Oltin qoidalar (GetStream reference'idan)
- Ikkilansang **bounce=0 dan boshla**, kerak bo'lsa sekin oshir.
- dampingFraction 0.825 = DEYARLI kritik so'ndirilgan: bitta mikro-overshoot (~2–3%),
  hech qachon ko'p marta tebranmaydi. **Apple smoothligi = bitta nafas, ko'p sakrash emas.**
- Spring'ning ustunligi: tezlik uzluksizligi — animatsiya yarmida uzilsa ham silliq davom etadi.

## 3. apple.com sahifalari (klon-repolardan o'rganilgan texnika)

- Scroll-bog'langan animatsiya (GSAP ScrollTrigger + scrub): harakat vaqtga emas,
  scroll pozitsiyasiga bog'lanadi — foydalanuvchi o'zi "playhead".
- Pin + persistent element: mahsulot ekranda qotib turadi, atrofi almashadi
  (bizning 221 Red Thread / 218 Ken Burns'ga qarindosh printsip).
- Katta sahna almashishlarida ham transform+opacity'dan boshqa deyarli hech narsa
  animatsiya qilinmaydi — soddalik, lekin mukammal kurvalar bilan.

## 4. AE'ga ko'chirish (bizning plugin uchun tayyor retseptlar)

### Bezier → keyframe influence
- CA Default (0.25,0.10,0.25,1) ≈ AE Easy Ease'ning yumshoqrog'i: influence ~**25/25**,
  outgoing/incoming speed 0.
- CA EaseOut (0,0,0.58,1) ≈ chiquvchi 0 / kiruvchi influence ~**58**.
- Bizning Soft Flow 75/75 Apple'nikidan OG'IRROQ — katta surilishlar uchun yaxshi,
  matn/UI mikro-harakatlar uchun Apple 25/25 to'g'riroq.

### Spring → AE expression (dampingFraction 0.825 analogi)
```javascript
// [SMTH] appleSpring: bitta mikro-overshoot bilan qo'nish (Apple .spring() hissi)
// amp: overshoot kuchi (0.03-0.05 = Apple), freq: tebranish/s, decay: so'nish
amp = .04; freq = 2.2; decay = 9;
n = 0;
if (numKeys > 0){ n = nearestKey(time).index; if (key(n).time > time) n--; }
if (n == 0){ value }
else {
  t = time - key(n).time;
  v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
  value + v*(amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t));
}
```
- `decay 9` = dampingFraction ~0.825 hissi (bitta nafas). `decay 4` = bounce 0.3 (playful).
- Bizning AM_BOUNCE'dan farqi: AM_BOUNCE ko'rinadigan sakrash beradi (entrance accent),
  appleSpring esa sezilmas qo'nish beradi (UI/matn). Ikkalasi arsenal'da tursin.

### Davomiyliklar (Apple standarti)
- Mikro UI javob: 0.15s · UI o'tish: 0.3–0.55s · Sahna: 0.5–0.8s.
- REF-002 o'lchovlarimiz (430ms so'z, 470ms crossfade) Apple oralig'iga aynan tushadi —
  demak Turtle video muallifi ham shu maktabdan.

## 5. Bitta jumlada
Apple smoothligi = muloyim assimetrik kurvalar (0.25,0.1,0.25,1) + deyarli kritik
so'ndirilgan prujinalar (0.825) + 0.3–0.55s davomiylik + faqat transform/opacity +
hech qachon ikki marta sakramaslik.
