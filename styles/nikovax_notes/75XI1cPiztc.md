# Jugg Shake (75XI1cPiztc, 155 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: junk (music/background audio). Truth is on screen.
Plugins: none required (uses native AE effects).
Project: 1920x1080, 29.97 fps. Single composition demonstrating Wave Warp effect for "jiggle shake" animation.

## Core idea
Demonstrates using Wave Warp effect on an Adjustment Layer to create a "jiggle" or "shake" effect on video footage. The technique involves:
1. Creating an Adjustment Layer above the clip
2. Applying Wave Warp with Sine wave type
3. Animating Wave Height from high value down to zero over time
4. Applying easing to keyframes for smooth motion
5. Optional Motion Tile effect for edge handling
6. Customizing Direction and Wave Speed per clip

## Effect chain / properties

### Motion Tile (Adjustment Layer - optional/background)
- **Effect**: Motion Tile
- **Tile Center X**: 960
- **Tile Center Y**: 540 (unreadable exact, approx 540-1800)
- **Tile Width**: 1920
- **Tile Height**: 1080
- **Output Width**: 2000
- **Output Height**: unreadable (approx 1800)
- **Mirror Edges**: checkbox visible
- **Phase**: unreadable angle value
- **Horizontal Phase Shift**: unchecked

### Wave Warp Effect (Core effect on Adjustment Layer)
- **Effect name**: Wave Warp (native AE)
- **Wave Type**: Sine
- **Wave Height**: Animated from ~150 (or higher) down to 0
  - Start value: ~150 (unreadable exact, shown as animating from high value)
  - End value: 0
  - Animated over full composition duration (~155 s)
- **Wave Width**: unreadable exact value
- **Wave Speed**: unreadable exact value (appears to be a secondary animated property)
- **Direction**: Adjustable per clip (shown as ~155° to 185°; direction unreadable, approx 0x+155x to 3x+185x)
- **Phase**: unreadable angle value (dial control visible)
- **Pinning**: unreadable (dropdown menu)
- **Anti-aliasing (Best/Draft Quality)**: Low (selected)

### Keyframe Animation
- **Wave Height keyframes**: Multiple keyframes throughout composition (visible in timeline)
- **Easing**: Easy Ease (F9) applied to all keyframes
- **Graph shape**: Curve starts high and eases down to zero (smooth decline, not linear)

## Step-by-step as captioned

### Part 1: Setup (0:00-0:30 approx)
- Open footage clip (anime character - "Jugg" character)
- Create Adjustment Layer (Ctrl+Alt+Y, or Layer > New > Adjustment Layer)
- Project: jugg shake composition, 1920x1080, 29.97 fps

### Part 2: Motion Tile Configuration (0:30-1:00 approx)
- Add Motion Tile effect to Adjustment Layer
- Set Tile Center: 960 x 540 (center of 1920x1080)
- Set Tile Width: 1920, Tile Height: 1080
- Set Output Width: 2000, Output Height: unreadable (~1800)
- Enable Mirror Edges checkbox (to wrap edges with mirror instead of black)
- Phase: unreadable (angle control, set to taste)

### Part 3: Wave Warp Effect Setup (1:00-2:00 approx)
- Add Wave Warp effect to same Adjustment Layer
- "(COPY THESE SETTINGS)" caption (in orange/yellow)
- Wave Type: Sine
- Wave Height: Set initial value ~150 (exact unreadable)
- Wave Width: unreadable (appears to be adjusted)
- Direction: ~155° to 185° (direction dial, adjust per footage)
- Wave Speed: unreadable value
- Anti-aliasing: Low (or Best for quality vs performance tradeoff)

### Part 4: Animate Wave Height (2:00-3:30 approx)
- Set keyframe at composition start: Wave Height = ~150 (high value, strong wave effect)
- Set keyframe at composition end: Wave Height = 0 (no wave effect)
- Result: Wave effect animates in, creating the "shake" at start, fades out by end
- "YOU CAN ALWAYS CHANGE/MODIFY THE SETTINGS DEPENDING ON THE CLIP." caption (yellow/gray)

### Part 5: Graph Editor & Easing (3:30-4:30 approx)
- Open Value Graph for Wave Height keyframes (right-click keyframe > Value Graph, or use Graph Editor)
- "AND MAKE A SIMILAR GRAPH" caption
- Graph shows curve starting at ~150 and easing down to 0
- Apply easing: Select all keyframes on Wave Height property
- Press F9 (Easy Ease) or right-click > Keyframe Ease
- "SELECT THE KEYFRAMES AND PRESS (F9) TO EASY EASE THEM" caption (yellow)
- Result: Smooth ease-in and ease-out on Wave Height animation

### Part 6: Optional Wave Speed Animation (unreadable)
- Additional Wave Speed keyframes visible in timeline
- Likely animated similarly to Wave Height (from high to low/zero)
- Keyframes appear throughout composition

### Part 7: Final Result (4:30-2:35 approx)
- Preview animation: character appears to "jiggle" or shake due to wave distortion
- Effect starts strong and fades out smoothly
- Wave distortion creates bouncy/jiggly motion on character body parts
- Result playback shown without interface

## Numeric values

| Parameter | Value | Notes |
|---|---|---|
| Tile Center X | 960 | Center of 1920px width |
| Tile Center Y | 540 | Approx, unreadable exact |
| Tile Width | 1920 | Match comp width |
| Tile Height | 1080 | Match comp height |
| Output Width | 2000 | Slightly larger for tiling |
| Output Height | unreadable | Approx 1800 |
| Wave Type | Sine | String; smoothest wave shape |
| Wave Height Start | ~150 | Unreadable exact; high amplitude |
| Wave Height End | 0 | At composition end |
| Wave Width | unreadable | Affects wavelength |
| Wave Speed | unreadable | Affects wave animation speed |
| Direction | ~155-185° | Per-clip adjustment; angle unreadable exact |
| Phase | unreadable | Angle/offset of wave |
| Anti-aliasing | Low | Draft mode (can change to Best) |
| Keyframe Easing | F9 (Easy Ease) | Applied to Wave Height keyframes |
| Graph Shape | Curve from 150 to 0 | Smooth decline, not linear |

## Layer structure (final)

1. [P Adjustment Layer 1] (purple/pink colored in timeline)
   - Motion Tile effect
   - Wave Warp effect (core effect)
2. [jugg clip.mp4 1] (white colored, source footage)
3. [Dark Gray Solid 1] (optional reference background)

Properties expanded in timeline:
- Switch
- Anchor
- Position
- Enable
- Behaviour
- Operator Controls
- Wave Warp (effect group)
  - Wave Height (keyframed, ~150 to 0 with easing)
  - Wave Speed (keyframed, unreadable values)
  - Other Wave Warp parameters (Direction, Phase, etc.)

## Rebuild recipe (from scratch)

1. **Import Footage**: Bring anime clip or footage into project. Create new composition at 1920x1080, 29.97 fps (or match your footage specs).

2. **Add Clip to Composition**: Drag footage into composition. Name it "jugg clip" or similar.

3. **Create Adjustment Layer**: Right-click in timeline > New > Adjustment Layer (or press Ctrl+Alt+Y). Position above the clip. Name it "Adjustment Layer 1" or "Wave Effects".

4. **Add Motion Tile Effect** (optional, for edge handling):
   - Select Adjustment Layer.
   - Effects & Presets > Search "Motion Tile" or Effects > Distort > Motion Tile.
   - Configure:
     - Tile Center: 960 (X), 540 (Y)
     - Tile Width: 1920, Tile Height: 1080
     - Output Width: 2000, Output Height: ~1800
     - Mirror Edges: checked
     - Phase: adjust to taste (unreadable exact value)

5. **Add Wave Warp Effect** (core effect):
   - With Adjustment Layer selected, add Wave Warp effect.
   - Effects > Distort > Wave Warp.
   - Configure:
     - Wave Type: Sine (smooth, natural-looking waves)
     - Wave Width: adjust to control wavelength (unreadable exact)
     - Direction: adjust 0-360° per footage direction (start ~155-185°)
     - Wave Speed: set desired speed (unreadable exact value; affects animation speed)
     - Anti-aliasing: Low for draft, Best for final render
     - Other parameters (Phase, Pinning): leave at defaults or adjust per aesthetics

6. **Keyframe Wave Height**:
   - Click stopwatch next to Wave Height to enable animation (or press "U" to show keyframes).
   - Go to start of composition (0 frames).
   - Set Wave Height keyframe to ~150 (high value for strong effect). This creates the initial "jiggle."
   - Go to end of composition (~155 s = ~4674 frames at 29.97 fps, or end frame of clip).
   - Set Wave Height keyframe to 0 (no wave effect). This fades out the shake.

7. **Apply Easy Ease**:
   - Select all Wave Height keyframes (click first, then Shift+Click last, or select property and press Ctrl+A to select all keyframes on that property).
   - Press F9 or right-click keyframe > Keyframe Ease > Easy Ease.
   - Result: Wave Height animates smoothly from 150 to 0, creating a natural fade-out of the jiggle effect.

8. **Optional Animation of Wave Speed**:
   - Similar to Wave Height, keyframe Wave Speed to animate wave animation speed over time (unreadable exact values; adjust per preference).
   - Apply Easy Ease to Wave Speed keyframes as well.

9. **Adjust per Clip**:
   - "YOU CAN ALWAYS CHANGE/MODIFY THE SETTINGS DEPENDING ON THE CLIP."
   - Direction: Adjust to match clip orientation or desired shake direction.
   - Wave Height: Increase/decrease amplitude to taste (higher = more pronounced jiggle).
   - Wave Width: Adjust wavelength for different frequency of shake.
   - Wave Speed: Modify for faster/slower wave animation.

10. **Testing & Refinement**:
    - Preview animation.
    - Adjust Wave Height keyframe values if shake is too subtle or too extreme.
    - Adjust Direction for best visual result.
    - Tweak Wave Width and Speed for desired frequency/feel.
    - When satisfied, render or continue with additional effects.

