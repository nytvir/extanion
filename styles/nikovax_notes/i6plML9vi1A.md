# Text Tutorial (i6plML9vi1A, 856 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: junk (music lyrics). Truth is on screen.
Plugins: BCC (Boris Continuum Complete) Drop Shadow mentioned; most effects use native AE tools.
Project: 1920x1080, 29.97 fps. Multiple compositions demonstrating text animation presets and effects.

## Core idea
Comprehensive walkthrough of building professional text animation rigs using:
1. Multiple text layers with fills and strokes for visual depth
2. Text animators with range selectors for character-level animation
3. Effects (Drop Shadow, Glyph, color grading) layered on adjustment layers
4. Keyframe animation with opacity transitions
5. Masking and layer organization techniques

## Effect chain / properties

### Text Layer Base Setup
- **Text**: White text on black background (initial setup)
- **Text Color**: Cyan/light blue (approx hex 51CEEF or similar, unreadable exact value)
- **Font**: Varies by preset (e.g., Choose Rocks, Calibri Light, PendGramit Sal—exact spelling unreadable)
- **Font Size**: unreadable (approx 100-150 pt based on scale)

### Fill Layers
Multiple fill (FIL) layers stacked with different blend modes:
- FIL 1, FIL 2, FIL 3, FIL 4 (3-4 fill layers per text setup)
- Blend modes: Add, Normal, Inverted (exact modes unreadable from frames)
- Used to create visual depth and stroke effects

### Stroke Layer
- Layer named "Stroke"
- Creates decorative curved shapes above/around text
- Color: Pink/Magenta (unreadable exact hex)
- Animated with Scale keyframes

### Drop Shadow Effect
- **Effect**: Drop Shadow (native AE)
- **Direction**: 0x+155x (angle unreadable, approx 155°)
- **Distance**: unreadable (approx 10-20 px based on visible effect)
- **Softness**: unreadable
- **Shadow Only**: checkbox option shown

### Shape Layer Drop Shadow (Advanced)
- Applied to Shape Layer with "Roughen Edges" preset
- **Edge Type**: Soft
- **Border**: 0.00
- **Edge Sharpness**: 1.00
- **Fractal Influence**: 0.00
- **Fractal Detail**: 50.0
- **Offset (Turbulence)**: 100.00 (highlighted, key parameter)
- **Complexity**: 1
- **Evolution**: 0x+100x

### Lumetri Color (Adjustment Layer)
- **Effect**: Lumetri Color on Adjustment Layer 1
- **Input LUT**: None
- **White Balance**: unreadable (selector and temperature controls visible)
- **Tone Section**:
  - Shadows: 0.0
  - Midtones: unreadable
  - Highlights: 0.0
  - Whites: 0.0
  - Blacks: 0.0
- **Saturation**: 0 (unreadable, but shown in interface)
- **Creative section**: Color Wheels, Curves, HSL Secondary, Vignette (subsections visible but values unreadable)

### Text Animator with Range Selector
- **Animator 1**: Text animator property group
- **Range Selector 1**:
  - **Selector Type**: unreadable (default appears to be character-based)
  - **Tracking Type**: unreadable
  - **Tracking Amount**: unreadable
- Used for sequential character animation effects

### Layer Masking
- Mask shapes created with Mask Tool (keyboard shortcut G)
- Mask Path layer visible in hierarchy
- Used to reveal/conceal text portions

### Opacity Keyframes
- Set using keyboard shortcut T (Toggle Opacity)
- Keyframes with unreadable exact values
- Used for fade-in/fade-out transitions

## Step-by-step as captioned

### Part 1: Text Color & Basic Formatting (0:00-1:00 approx)
- Create text layer with default color (white)
- "CHANGE THESE SETTINGS" (caption)
- Open Text Color picker
- Change to cyan/light blue (hex unreadable)

### Part 2: Masking & Fill Layers (1:00-2:30 approx)
- "PRESS (G) FOR MASK TOOL AND MAKE A SIMILAR MASK" (caption)
- Create mask shapes around text
- Add multiple fill layers (FIL, FIL 2, FIL 3, FIL 4)
- Set blend modes to Add/Inverted

### Part 3: Stroke & Decorative Elements (2:30-4:00 approx)
- "MOVE FORWARD AROUND (9) FRAMES" (caption, navigation instruction)
- Create Stroke layer with pink/magenta curved shape
- Animate stroke with Scale keyframes
- Position anchor point on face (Pan Behind tool shortcut Y)

### Part 4: Drop Shadow Effect (4:00-5:30 approx)
- "OPEN THE TRACKING CONTROLS" (caption)
- Apply Drop Shadow effect
- Adjust Direction, Distance, Softness parameters
- Drop Shadow visible on character corners

### Part 5: Pre-compose Workflow (5:30-7:00 approx)
- "CREATE ADJUSTMENT LAYER CTRL+ALT+Y" (caption)
- Pre-compose text layers (Right-click > Pre-compose)
- Move all attributes, adjust duration unchecked
- New composition name: "text Comp 1"

### Part 6: Text Animators (7:00-9:00 approx)
- Create text animator with Range Selector
- "SET A KEYFRAME AT THE START" (caption)
- Configure character-level animation properties
- Set keyframes at composition start/end

### Part 7: Color Grading (9:00-11:00 approx)
- Add Adjustment Layer (Ctrl+Alt+Y)
- Apply Lumetri Color effect
- "SO TO AVOID THAT CHANGE IT FROM THE PARAGRAPH PANEL" (caption, avoiding text panel changes)
- Adjust tone and saturation sliders

### Part 8: Opacity Transitions (11:00-12:00 approx)
- "PRESS (T) FOR OPACITY AND MAKE A TRANSITION" (caption)
- Set opacity keyframes for fade effects
- Create smooth transitions between scenes

### Part 9: Background Layer (12:00-13:00 approx)
- Create background composition (Dark Gray Solid 1)
- "NOTE:THIS IS ONLY USED AS BACKGROUND (SO YOU CAN ALWAYS DELETE IT)" (caption)
- Layer serves as reference, can be removed

### Part 10: Advanced Drop Shadow (13:00-14:00 approx)
- Shape layer with advanced Drop Shadow
- Roughen Edges preset
- "(CHANGE THESE SETTINGS)" caption
- Offset/Turbulence: 100.00 (key parameter)

## Numeric values

| Component | Property | Value | Notes |
|---|---|---|---|
| Text | Color | unreadable (approx #51CEEF) | Cyan/light blue |
| Fill Layers | Count | 3-4 layers | FIL, FIL 2, FIL 3, FIL 4 |
| Stroke | Color | Pink/Magenta | Exact hex unreadable |
| Drop Shadow | Direction | 0x+155x | Angle approx 155° |
| Drop Shadow | Distance | unreadable | Approx 10-20 px |
| Fractal Turbulence | Offset | 100.00 | Highlighted key value |
| Fractal Turbulence | Complexity | 1 | Fixed |
| Lumetri Tone | Shadows | 0.0 | |
| Lumetri Tone | Midtones | unreadable | |
| Lumetri Tone | Highlights | 0.0 | |
| Lumetri Tone | Whites | 0.0 | |
| Lumetri Tone | Blacks | 0.0 | |
| Mask | Tool Shortcut | G | Create/edit masks |
| Pan Behind | Shortcut | Y | Position anchor point |
| Opacity | Shortcut | T | Access opacity property |
| Adjustment Layer | Shortcut | Ctrl+Alt+Y | Create new adjustment layer |
| Pre-compose | Menu | Right-click > Pre-compose | Move all attributes, uncheck adjust-duration |

## Layer structure (final)

Typical hierarchy shown in tutorial:
1. [Adjustment Layer 1] (Lumetri Color effect)
2. [Dark Gray Solid 1] (Background composition, reference only)
3. [Comp Solid 1] (Intermediate composition)
4. [Stroke] (Decorative layer, pink/magenta curved shape)
5. [FIL 4] (Fill layer, Add blend mode)
6. [FIL 3] (Fill layer, Inverted blend mode)
7. [FIL 2] (Fill layer, Add blend mode)
8. [FIL] (Fill layer, Normal blend mode)
9. [Text] (Primary text layer, cyan color)
10. [Text Glow] (Optional glow layer)
11. [Text Layer 1] (Additional text variation)
12. [NIKOVAX] (Text content example)

Animators:
- Animator 1 (Range Selector 1 for character animation)

## Rebuild recipe (from scratch)

1. **Text Foundation**: Create text layer with sans-serif font (e.g., Calibri Light, Choose Rocks, or PendGramit Sal). Set color to cyan (#51CEEF approx). Font size ~100-150 pt.

2. **Fill Layers**: Create 3-4 solid fill layers beneath the text. Name them FIL, FIL 2, FIL 3, FIL 4. Set blend modes: FIL=Normal, FIL 2=Add, FIL 3=Inverted, FIL 4=Add. These create visual depth via color interaction.

3. **Masking**: Press G (Mask Tool). Draw mask shapes around text areas to define visible regions. Create "Mask Path" layer in hierarchy.

4. **Stroke Layer**: Create shape layer above fills named "Stroke". Draw curved path with pink/magenta stroke. Animate Scale property with keyframes—scale from large to normal size with ease-out.

5. **Effects - Drop Shadow**: Add Drop Shadow effect to stroke or text. Configure:
   - Direction: ~155° (adjust to taste)
   - Distance: ~10-20 px
   - Softness: ~5-10 px
   - Shadow Only: unchecked

6. **Pre-compose**: Right-click text layers > Pre-compose. Name "text Comp 1". Checkbox "Move all attributes". Keep "Adjust composition duration" unchecked.

7. **Text Animator**: In pre-composed text, add Animator 1 with Range Selector 1. Configure for character-by-character animation (selector type=character, unreadable exact settings). Set keyframes at composition start and end to drive sequential reveals.

8. **Adjustment Layer**: Create new Adjustment Layer (Ctrl+Alt+Y). Apply Lumetri Color. Set all Tone sliders to 0.0 (neutral). Adjust Saturation, Color Wheels, or other sections as needed for color grading.

9. **Opacity Animation**: Select any layer. Press T to reveal Opacity property. Create keyframes: 0% at start, 100% mid-animation, 0% at end (or other pattern). Smooth with Easy Ease (F9).

10. **Advanced Effects** (optional): For shape layers, apply Drop Shadow with Roughen Edges preset. Set Offset (Turbulence) to 100.00. Adjust Fractal Detail (50.0), Complexity (1.0) to taste.

11. **Background**: Create dark gray solid (optional reference layer). Note: "THIS IS ONLY USED AS BACKGROUND, SO YOU CAN ALWAYS DELETE IT."

12. **Testing**: Preview animation. Adjust Scale keyframes, Range Selector speed, Opacity timing, and effect parameters to achieve desired pacing and impact.

