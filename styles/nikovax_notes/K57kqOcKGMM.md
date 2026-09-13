# FX Console + Shortkeys (K57kqOcKGMM, 164 s)

Voiced: no voiceover (music + on-screen captions showing "FX CONSOLE IS A USEFUL PLUGIN USED TO SEARCH THE EFFECTS MUCH FASTER").
Plugins: **FX Console 1.0.5** (third-party required; no native substitute exists for the shortcut system and effect search workflow).
Project: 3840x2160 (implied from Solid Settings screenshot showing "3840 px" width, "2160 px" height). Two compositions shown: one test composition with solids/nulls (text, solid, adjustment layer), and a main composition with anime footage (Shimmer, Color Grading effects).

## Core idea
FX Console is a workflow plugin that accelerates effect application by providing a searchable interface ("edgeglitch" search shown in frame 0005). The tutorial demonstrates:
1. Installing FX Console 1.0.5
2. Creating a test composition with basic elements (solid, null, text layer)
3. Setting up keyboard shortcuts for frequently-used effects (via Composition Shortcuts tab)
4. Applying shortcuts to animate effects on footage

The plugin allows searching effects and presets by name and assigning hotkeys to trigger them, significantly speeding up effect workflows.

## Effect chain / properties
- **FX Console v1.0.5** panel with search interface
- **Composition Shortcuts** tab visible in workspace
- Test composition effects applied:
  - **Solid layer** created with settings: Name "Dark Gray Solid 1", Width 3840 px, Height 2160 px, units pixels, color set to blue (RGB unreadable)
  - **Adjustment Layer 1** visible in timeline (unreadable exact effects)
- Main composition with footage:
  - **Shimmer** effect (blend mode shown; blend amount unreadable)
  - **Color Grading** adjustment
  - **Opacity** property keyframed (shown 100%)
  - Animation curve shown in graph editor (unreadable exact shape/values)

## Step-by-step as captioned
- 0:30 "FX Console is a useful plugin used to search the effects much faster"
- 0:40-1:00 Search for effects using "edgeglitch" search term shown in FX Console window (unreadable exact interface controls)
- 0:45+ Workspace shows Effects panel and Composition Shortcuts tab
- 1:00+ Create solid: File > New > Solid (Ctrl+Alt+Shift+Y shortcut mentioned)
- 1:10+ Solid Settings dialog: Name "Dark Gray Solid 1", Width 3840 px, Height 2160 px
- 1:20+ "Press ENTER TO RENAME IT" (layer renaming process shown)
- 1:30+ Create Null composition (Null 1-Comp 1 visible in layers)
- 2:00+ Composition Shortcuts tab shows: Shortcuts, Shimmer blend, Shimmer_mix, Comp1
- 2:20+ Animation setup shown with Position keyframes (unreadable exact values)
- 3:00+ Graph editor shown with what appears to be opacity or position curve ramping from ~0 to 100% over 28 seconds
- Remainder: Demo application of shortcuts to footage with "Shimmer" and "Color Grading" effects (exact parameters unreadable)

## Numeric values
| Element | Setting | Value |
|---|---|---|
| Solid Layer Name | Name | Dark Gray Solid 1 |
| Solid Layer Size | Width | 3840 px |
| Solid Layer Size | Height | 2160 px |
| Solid Layer | Pixel Aspect Ratio | Square Pixels |
| Solid Layer | Frame Aspect Ratio | 16:9 (1.78) |
| Solid Layer Color | RGB | unreadable |
| Graph Editor Curve | Duration | 28 seconds |
| Graph Editor Curve | Value range | 0 to ~100% |
| Opacity Animation | Final value | 100% |
| Animation Keyframe | Number | unreadable (approx 2-3 keyframes visible) |

Unreadable values (approx): solid color RGB values; exact keyframe times and all effect parameter values for Shimmer and Color Grading effects; all composition shortcut hotkey assignments.

## Layer structure (final)
Test Composition:
1. [Adjustment Layer 1] (effects unreadable)
2. [Dark Gray Solid 1] (3840x2160, blue-ish color)
3. [Null 1-Comp 1] (nested composition)
4. [Text] (visible in layers, content unreadable)
5. [Solid] (possibly "Folder" in hierarchy)

Main Composition (with anime footage):
1. [Shortcuts] (likely null or adjustment)
2. [Shimmer_mix] (blend mode layer)
3. [Shimmer blend] (effect layer)
4. [Comp1] (nested composition with footage)
5. [Color Grading] (adjustment/effect layer)
6. [Opacity] animated property visible on some layer

## Rebuild recipe (from scratch)
1. Install FX Console v1.0.5 plugin (download from editor if not present)
2. Create a new composition (3840x2160 or custom size)
3. Create a Solid layer: Ctrl+Alt+Shift+Y, name it "Dark Gray Solid 1", set size to 3840x2160px
4. Create a Null layer: Ctrl+Alt+Shift+Y again (or Layer > New > Null Object)
5. Duplicate the Null to create a nested composition structure (optional, for organization)
6. Open the Composition Shortcuts tab in FX Console panel
7. Search for and assign keyboard shortcuts to frequently-used effects (e.g., Shimmer, Color Grading)
8. For animation: select a property (Opacity, Position, etc.) and set keyframes using the assigned shortcuts
9. Use the graph editor (F9) to adjust animation curves
10. For a two-layer workflow: create an adjustment layer for Color Grading on top, create a blend layer for Shimmer effects, nest the main composition with footage
11. Test shortcuts by selecting layers and pressing the assigned hotkeys to apply effects rapidly

Note: The exact hotkey assignments and shortcut names are not legible in the video. This is a workflow optimization tutorial rather than a specific effect recipe; adaptation depends on which effects are most useful for your workflow.
