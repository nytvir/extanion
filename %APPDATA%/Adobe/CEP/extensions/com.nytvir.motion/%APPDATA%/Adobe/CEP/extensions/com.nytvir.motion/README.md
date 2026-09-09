# Nytvir Motion

After Effects CEP extension — cinematic motion-design preset library for personal-brand videos (crypto/forex trader content).

## Install (after fresh Windows/AE reinstall)

1. Enable unsigned CEP extensions:
   - Registry: `HKEY_CURRENT_USER\Software\Adobe\CSXS.11` (or `.10/.9/.12` per AE version)
   - Add DWORD `PlayerDebugMode` = `1`

2. Copy this whole folder to:
   `C:\Users\<you>\AppData\Roaming\Adobe\CEP\extensions\com.nytvir.motion`

3. Restart After Effects.

4. Open panel: `Window > Extensions > Nytvir Motion`

## Structure

- `CSXS/manifest.xml` — extension descriptor
- `client/index.html` + `CSInterface.js` — panel UI
- `host/main.jsx` — ExtendScript engine (all effects/scenes live here)

## Features

Pro Picks, Signature transitions, Glow cards, Edouard Kit, Crypto/Apple Kit, Premium Glass system, SRT cinematic scenes, Living Fog, BTC 3D flip, and many more presets.
