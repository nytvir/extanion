# Warp Transition (mWqDyUiuoC0, 343 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: unreliable.
Plugins: none required; uses native AE **Warp effect** (or displacement via layer scaling/nesting).
Project: 1920x1080, 29.97 fps. Two clips with a warped distortion transition between them using null objects and scale animation.

## Core idea
A warp transition creates a directional warping/shearing effect between two clips by using null objects parented to clip layers, scaling and repositioning them to create the illusion of spatial distortion. The null's position and scale are keyframed to smoothly morph from one clip to the next, with easing applied to create a fluid, organic warp effect (similar to liquid or fabric bending/folding).

## Effect chain / properties

**Layer Structure**:
- Null 1 (parent of Clip 1): drives Clip 1's position and scale during transition
- Clip 1 (child of Null 1): undergoes warp via parent null's animation
- Null 2 (parent of Clip 2): drives Clip 2's position and scale during transition
- Clip 2 (child of Null 2): undergoes warp via parent null's animation
- Warp Transition Comp: main composition containing both clip + null pairs

**Null 1 (Clip 1 control)**:
- Position: keyframed (0, 0) at start → varies during transition (exact values unreadable)
- Scale: keyframed 100% at start → **unreadable value** at transition peak → 100% at transition end
- (Null's warp point controls Clip 1's distortion)

**Null 2 (Clip 2 control)**:
- Position: keyframed (opposite of Null 1 trajectory)
- Scale: keyframed 100% at Clip 1 start → **unreadable value** at transition → 100% at Clip 2 end
- (Null's warp point controls Clip 2's distortion in opposite direction)

**Keyframes on both nulls**:
- Keyframes set at transition start, mid-point (peak warp), and end.
- All keyframes have **Easy Ease (F9)** applied to create smooth, organic interpolation (not linear).
- Value graph shows curved interpolation paths (ease-in/ease-out on position and scale).

**No effects applied to clips directly**; the warp is entirely driven by parent null animation creating perspective/displacement.

## Step-by-step as captioned

INTRO (0:00-0:20)
- 0:00 Title: "WANT THIS?" (warp effect demo request).
- 0:10 Footage shown: anime character with distortion/warp effect visible (RGB shift, spatial warping).
- 0:15 Text overlay: "LINK TO THE CLIP IN THE DESCRIPTION" (project file available).

SETUP (0:20-1:20)
- 0:30 AE project open: multiple clips visible (Clp1.avi, Clp2.avi) on timeline; "warp transition" composition shown.
- 0:50 Pre-compose dialog: "Pre-compose" window visible (creating nested compositions). Name: "Clp1Avi Comp 1" (or similar).
- 1:05 Timeline structure: two main compositions with clips; null objects parented to each clip (visible in layer stack).

NULL & SCALE SETUP (1:20-2:30)
- 1:30 Caption: "SELECT THE FIRST NULL, PRESS S TO OPEN SCALE".
- 1:40 Null 1 selected (visible on-screen with red control box overlay).
- 1:50 Scale property opened (keyboard shortcut S) for Null 1.
- 2:00 Caption showing null control point can be dragged to position warp origin on clip.
- 2:10 Multiple keyframes set on Null 1 Scale and Position properties (visible as small diamonds in timeline).

KEYFRAME & EASING (2:30-3:40)
- 2:50 Caption: "OPEN UP THE VALUE GRAPH" — Graph Editor panel displayed.
- 3:00 Value graph shows curved keyframe interpolation (ease-in on position, ease-out on scale).
- 3:15 Caption: "SELECT THE KEYFRAMES AND PRESS (F9) TO EASY EASE THEM".
- 3:30 Multiple keyframes visible on timeline (Null 1, Null 2, Clip 1, Clip 2 layers).
- 3:45 Easy Ease applied (F9 shortcut); keyframe graph shows smooth bezier curves instead of linear connections.

RESULT & VARIATIONS (3:45-5:42)
- 4:00 Playback: warp transition effect applied; Clip 1 distorts (warps/shears) while Clip 2 emerges underneath.
- 4:30 Null 2 shown being keyframed (opposite direction to Null 1, creating symmetrical warp).
- 5:00 Different scale and position values tested (approx. scale range 50%-150% visible, position offsets 100-300px).
- 5:20 Final result: smooth, fluid warp transition from Clip 1 → Clip 2 with organic spatial distortion.
- 5:42 Clip finishes; transition complete.

## Numeric values
| Layer | Property | Keyframe 1 | Keyframe 2 (peak) | Keyframe 3 (end) | Notes |
|---|---|---|---|---|---|
| Null 1 | Position | (0, 0) | unreadable | (0, 0) | drives Clip 1 warp direction |
| Null 1 | Scale | 100% | unreadable (estimate 50-200%) | 100% | F9 easing applied |
| Null 2 | Position | offset | opposite of Null 1 | offset reset | drives Clip 2 warp direction |
| Null 2 | Scale | 100% | unreadable (estimate 50-200%) | 100% | F9 easing applied |
| All keyframes | Easing | Easy Ease (F9) | (curved bezier) | | smooth interpolation |

Exact null scale peak values and position offsets unreadable from on-screen display (approximate range 50-250% scale based on visual intensity of warp).

## Layer structure (final)
1. [Warp Transition] (main composition)
   - [Null 2] parent (Position & Scale keyframed)
   - [Clp2 Comp] child of Null 2 (Clip 2 composition)
   - [Null 1] parent (Position & Scale keyframed)
   - [Clp1 Comp] child of Null 1 (Clip 1 composition)

Each clip composition contains:
- [Clip.avi] (video layer)
- [Null] (optional local control null)

No effects; warp achieved entirely through parent-child parenting and null animation.

## Rebuild recipe (from scratch)

1. **Create main composition** 1920x1080, 29.97 fps, named "warp transition".

2. **Prepare clips**:
   - Create two precompositions, one per clip (right-click → Pre-compose, "Move all attributes").
   - Name them "Clp1 Comp" and "Clp2 Comp".
   - Set clip durations: Clp1 Comp (frames 0-60), Clp2 Comp (frames 60-120+).

3. **Create Null 1** (Ctrl+Alt+Shift+Y) above Clp1 Comp:
   - Trim to clip 1 duration (Ctrl+Shift+D).
   - Parent Clp1 Comp to Null 1 (pick-whip).

4. **Create Null 2** (Ctrl+Alt+Shift+Y) above Clp2 Comp:
   - Trim to clip 2 duration.
   - Parent Clp2 Comp to Null 2 (pick-whip).

5. **Keyframe Null 1 Position & Scale** (transition duration ~30 frames around cut):
   - Frame 55: Position (0, 0), Scale 100%.
   - Frame 60 (transition peak): Position (X, Y) [experiment: ±100-200px], Scale 50-200% [experiment; 150% suggested].
   - Frame 65: Position (0, 0), Scale 100%.
   - All keyframes: Press F9 to apply Easy Ease.

6. **Keyframe Null 2 Position & Scale** (opposite of Null 1):
   - Frame 55: Position (0, 0), Scale 100%.
   - Frame 60 (peak): Position (-X, -Y) [opposite of Null 1], Scale 50-200%.
   - Frame 65: Position (0, 0), Scale 100%.
   - Apply F9 Easy Ease.

7. **Optional**: Open Value Graph (right-click keyframe → Graph Editor) and adjust bezier handle curves manually for more organic warp timing (e.g., faster ease-in, slower ease-out).

8. **Preview and adjust**:
   - Scale range: 100% = no warp, 150-200% = strong warp, 50% = shrink/compress.
   - Position offset: ±50px = subtle directional shift, ±200px+ = extreme warp.
   - Easing curve shape: steep early/flat late = snappy, flat early/steep late = delayed impact.

9. **Render**: Export composition with both clip and null layers. Warp effect animates smoothly from frame 55-65 (adjust duration as needed).

## Notes
This tutorial demonstrates layer-based warping without the native Warp effect (which is primarily for grid/mesh distortion). Instead, it uses the principle of perspective transformation through parent-null scaling and positioning. For more control, apply native Warp effect (Effects → Distortion → Warp) on top of null-based animation, or use third-party plugins (Twixtor, Mocha for tracking-based warps).
