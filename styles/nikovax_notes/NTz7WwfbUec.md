# Anime to Manga (NTz7WwfbUec, 197 s)

Voiced: no voiceover (music + on-screen captions).
Plugins: No third-party plugins required. Uses native After Effects effects: Cartoon Mask, Threshold, Invert, Cartoon Blur, Black & White, Brightness & Contrast, Levels. The halftone screening pattern effect (scan lines) uses a combination of native AE tools (possibly Fill effects or custom layer-based generation).
Project: 29.97 fps. Single source composition "anime-to-manga" with one clip layer (anime footage). Output composition stacks multiple adjustment effects to create the manga conversion.

## Core idea
**Anime to Manga** is an effect technique that converts color anime footage into high-contrast black and white manga-style line art with halftone newspaper screening. The technique involves:

1. **Edge detection & masking**: Cartoon Mask isolates the character lines and edges from the background
2. **Tone mapping**: Threshold creates a high-contrast black and white image by converting mid-tones to either pure black or pure white
3. **Line preservation**: Cartoon Blur prevents over-blurring while keeping edges clean
4. **Color to grayscale**: Black & White conversion with specific channel adjustments (emphasizing certain colors)
5. **Halftone screening**: Generate effect adds horizontal scan lines to simulate newspaper/manga printing halftone pattern
6. **Contrast enhancement**: Brightness & Contrast and Levels refine the final appearance

The result is a striking print-like, manga/newspaper aesthetic that transforms anime character animation into illustrated comic book style. The halftone pattern adds authenticity by mimicking the offset printing process used in traditional manga.

## Effect chain / properties
Layer effects applied in order (top to bottom in effects panel):

1. **Cartoon Mask** (Matte extraction):
   - Creates a shape-based matte isolating high-contrast areas
   - Threshold value: unreadable
   - Expands or contracts the detected edges: parameters unreadable

2. **Threshold**:
   - Converts grayscale values to pure black or white based on a cutoff point
   - Threshold value: 0 (shown in controls; may be adjusted)
   - Creates the stark manga line art appearance

3. **Invert** (conditional):
   - Inverts black and white if needed
   - Checkbox appears enabled: yes

4. **Cartoon Blur**:
   - Blur Dimensions: Horizontal and Vertical, Repeat Edge Pixels
   - Blur radius: unreadable (appears moderate, ~5-15 pixels estimated)
   - Preserves edges while softening transitions

5. **Black & White** (Desaturate with channel mixing):
   - Reds: 600 (approx; high weight on red channel)
   - Greens: unreadable (appears moderate, ~50-100)
   - Blues: 600 (approx; high weight on blue channel)
   - Yellows: unreadable
   - Cyans: unreadable
   - Magentas: unreadable
   - Tint color: unreadable (white assumed)

6. **Generate** (Halftone screening effect):
   - Creates horizontal scan line pattern (paper texture)
   - Width dimension: ~2x150 or 24150 (unreadable exactly; controls line spacing)
   - Height dimension: ~50 (vertical spacing of lines)
   - Border/Spacing: ~50 (edge treatment)
   - Grid shape: Lines (horizontal)
   - Invert Grid: checked (inverts the pattern)
   - Color: white (scan lines are white on black background)
   - Opacity: 100%
   - Blending Mode: Sub Light or normal
   - Additional parameters: Anchor, Line Format unreadable

7. **Brightness & Contrast**:
   - Brightness: adjustable (unreadable exact value; appears near default)
   - Contrast: adjustable (unreadable exact value; appears boosted for strong blacks/whites)

8. **Levels** (optional enhancement):
   - Input/Output levels: unreadable
   - Used for final tonal range adjustment

## Step-by-step as captioned
- 0:05 Intro: "LINK IN THE CLIP INTO THE DESCRIPTION" or similar
- 0:30+ Start with color anime footage (character with newspaper)
- 0:45+ "ADD THRESHOLD TO THE CLIP" (caption directing viewer to apply Threshold effect)
  - Effect > Color Correction > Threshold (or Effects > Distort > Threshold depending on AE version)
  - Instantly converts image to high-contrast black and white
  - The anime character becomes bold black lines on white background
- 1:00+ Apply **Cartoon Mask**:
  - Effect > Matte > Cartoon Mask
  - Fine-tunes the edge detection to preserve character lines
  - Settings adjusted (specific values unreadable)
- 1:15+ Apply **Cartoon Blur**:
  - Effect > Blur & Sharpen > Cartoon Blur
  - Settings: Blur Dimensions Horizontal and Vertical
  - Smooths the hard edges slightly while preserving them
- 1:30+ Apply **Black & White**:
  - Effect > Color Correction > Black & White
  - Channel weights shown: Reds 600, Blues 600, Greens/Yellows/Cyans/Magentas unreadable
  - Converts any remaining color to proper grayscale
- 1:45+ "ADD BRIGHTNESS & CONTRAST" (caption)
  - Effect > Color Correction > Brightness & Contrast
  - Boosts contrast to enhance blacks and whites
  - Adjusts brightness for optimal appearance
- 2:00+ Apply **Generate** (halftone screening):
  - Effect > Render > [Render library or custom grid effect]
  - Creates horizontal scan line pattern (like newspaper halftone)
  - Width: controls spacing between lines
  - Height: controls line thickness
  - Border: edge treatment
  - Invert Grid: checkbox to invert black/white of pattern
- 2:30+ Apply **Levels** (optional):
  - Effect > Color Correction > Levels
  - Fine-tunes final tonal range for print authenticity
- 2:45+ Adjust all parameters for final manga aesthetic
- 3:00+ Playback showing final result: anime character rendered as manga-style black and white line art with newspaper halftone screening
- 3:15+ Final frames demonstrate the striking print-like appearance with the character visible as bold lines and shapes

## Numeric values
| Effect | Parameter | Value |
|---|---|---|
| Threshold | Threshold | 0 (or near-default) |
| Cartoon Mask | (all) | unreadable |
| Cartoon Blur | Blur Dimensions | Horizontal & Vertical, Repeat Edge Pixels |
| Cartoon Blur | Blur Radius | unreadable (approx 5-15) |
| Black & White | Reds | 600 |
| Black & White | Blues | 600 |
| Black & White | Greens | unreadable (approx 50-100) |
| Black & White | Yellows/Cyans/Magentas | unreadable |
| Generate | Width spacing | ~2x150 or 24150 (unreadable) |
| Generate | Height spacing | ~50 |
| Generate | Border | ~50 |
| Generate | Grid shape | Lines (horizontal) |
| Generate | Invert Grid | checked |
| Generate | Color | white |
| Generate | Opacity | 100% |
| Generate | Blending Mode | Sub Light or Normal |
| Brightness & Contrast | Brightness | unreadable |
| Brightness & Contrast | Contrast | unreadable (boosted) |
| Levels | (all parameters) | unreadable |
| Project | Frame Rate | 29.97 fps |

Many numeric values are unreadable due to small text in video. Estimates based on visual appearance and typical ranges for similar effects.

## Layer structure (final)
Main Composition "anime-to-manga" (29.97 fps):
1. Anime footage clip (base layer)
2. Effects applied directly to clip layer (or via adjustment layer above):
   - Cartoon Mask
   - Threshold
   - Invert (optional)
   - Cartoon Blur
   - Black & White
   - Generate (halftone)
   - Brightness & Contrast
   - Levels

Alternative structure (if using adjustment layers):
- [Adjustment Layer] with all effects above
- [Anime clip] (original footage, unmodified)

## Rebuild recipe (from scratch)
1. Create or import anime video footage into a new composition (29.97 fps or your target frame rate)
2. Place the anime clip on a layer in the composition
3. Apply effects in order (either directly to the layer or via adjustment layer on top):

   **Step 1: Cartoon Mask** (edge detection)
   - Select the anime layer
   - Effects > Matte > Cartoon Mask
   - Adjust threshold to capture character lines (unreadable in tutorial; start at default and fine-tune)
   - This creates a matte that isolates the character edges

   **Step 2: Threshold** (convert to black and white)
   - Effects > Color Correction > Threshold (or Distort > Threshold, path varies by AE version)
   - Set Threshold value to ~50-128 (0 appears in tutorial; this creates the stark black & white)
   - The anime should now appear as high-contrast black lines on white background

   **Step 3: Cartoon Blur** (smooth edges while preserving)
   - Effects > Blur & Sharpen > Cartoon Blur
   - Set Blur Dimensions: Horizontal and Vertical
   - Repeat Edge Pixels: checked
   - Blur Radius: 5-15 pixels (fine-tune to taste; smooths hard edges)

   **Step 4: Black & White** (color channel mixing for grayscale)
   - Effects > Color Correction > Black & White
   - Adjust color channel sliders:
     - Reds: 60 (or your preference; higher emphasizes red tones)
     - Greens: 50
     - Blues: 60
     - Yellows: 50
     - Cyans: 50
     - Magentas: 50
   - Tint: white (or black if inverted is preferred)
   - Achieves proper B&W conversion with specific color weighting

   **Step 5: Brightness & Contrast** (enhance blacks and whites)
   - Effects > Color Correction > Brightness & Contrast
   - Brightness: 0-10 (adjust for overall tone)
   - Contrast: 30-60 (increase for stronger blacks/whites; manga style benefits from high contrast)

   **Step 6: Generate Halftone Pattern** (add manga/newspaper aesthetic)
   - Effects > Render > [Grid or Halftone effect]
   - If no built-in halftone: Create a new layer above, apply Fill or use CC Grid, or use third-party halftone plugin
   - Pattern settings (typical; see tutorial for specific values):
     - Width: 2-3 (sets horizontal line spacing; smaller = closer lines)
     - Height: 50 (vertical line thickness)
     - Border/Spacing: 20-50
     - Shape: Lines (horizontal) or Grid
     - Invert: checked (to get white lines on black)
     - Color: white
     - Opacity: 80-100%
     - Blend Mode: Lighten, Screen, or Add (experiment)

   **Step 7: Levels** (final tonal adjustment, optional)
   - Effects > Color Correction > Levels
   - Adjust Input Levels (left slider = blacks, right slider = whites) to expand contrast
   - Adjust Output Levels if needed for slightly softer blacks
   - Preview and fine-tune

4. Review the result: Your anime footage should now appear as black and white line art with horizontal halftone screening, simulating manga/newspaper printing style
5. Fine-tune each effect's parameters to taste:
   - Increase Threshold to eliminate more mid-tones (more stark look)
   - Adjust Cartoon Blur radius for line smoothness
   - Modify color channel weights in Black & White for different emphasis
   - Scale halftone line spacing for finer or coarser paper texture
   - Boost Contrast if blacks/whites feel weak

**Key tuning tips**:
- **Cartoon Mask** isolates the character; too aggressive loses detail, too subtle leaves artifacts
- **Threshold** is the core effect; adjust around 50-100 for balance between line preservation and simplification
- **Cartoon Blur** should be subtle (5-10px) to smooth without losing definition
- **Color channel mixing** in Black & White affects which colors become darker or lighter in the grayscale result
- **Brightness & Contrast** should boost contrast significantly (40-60) for true manga look
- **Halftone spacing** is critical: wide spacing (2-3) = newsprint feel, narrow spacing = detailed pattern; horizontal lines (240°) mimic newspaper scan lines
- **Invert Grid** toggles between white lines on black vs black lines on white; choose based on preference
- Stack these effects for maximum control; order matters (threshold early, halftone last, brightness/contrast for final refinement)

Result: Strike black and white manga-style line art with authentic newspaper/halftone appearance, suitable for dramatic stylized anime-to-print effects.
