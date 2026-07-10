# AAYI Video Brand Instructions
## FEHMICON 2026 | AI in Obstetrics & Gynaecology

---

## VOICE CHARACTER | AAYI-VO-01

```
ID:           AAYI-VO-01
Gender:       Female
Age:          22 years old
Accent:       South Indian English
Tone:         Warm, confident, energetic yet emotionally sensitive
Pace:         Medium — slows for emotional moments, picks up for informational moments
Diction:      Clear, crisp, natural — not robotic, not overly dramatic
Personality:  Like a knowledgeable young South Indian friend walking you through a journey
Consistency:  Same voice, same energy, same accent across ALL 16 frames — one narrator, one story
Tool:         Google AI Studio TTS (aistudio.google.com) — Indian English Female voice
```

---

## MUSIC STYLE | AAYI-MX-01

```
ID:           AAYI-MX-01
Style:        Soft cinematic emotional — Indian classical meets modern ambient
Instruments:
  Opening     → Single veena or sitar note fading into soft piano
  Mid section → Gentle strings building warmth
  Climax      → Frame 14 (baby born) — full emotional swell, strings + piano
  End card    → Soft resolve, single piano note holds

Tempo:        Slow 60–70 BPM throughout
Tone:         Hopeful, warm, trustworthy — never sad, never clinical
Volume:       Always under the voice — rises only when no voice-over
Reference:    Premium Indian maternal health advertisement feel

AVOID:        Beats, drums, electronic sounds, western pop feel
```

---

## CHARACTER REFERENCES | Master Files

| ID | Character | Role | Seed | File |
|----|-----------|------|------|------|
| AAYI-DR-SUNITHA-01 | Dr. Sunitha | OB-GYN Doctor | 11041 | AAYI-DR-SUNITHA-01_seed11041.png |
| AAYI-RADHA-01 | Mrs. Radha | Pregnant Mother | 22052 | AAYI-RADHA-01_seed22052.png |
| AAYI-RAHUL-01 | Mr. Rahul | Husband | 33063 | AAYI-RAHUL-01_seed33063.png |
| AAYI-DR-ALI-01 | Dr. Ali | Pediatrician | 44074 | AAYI-DR-ALI-01_seed44074.png |
| AAYI-BABY-01 | Newborn Baby | Baby | 55085 | AAYI-BABY-01_seed55085.png |

---

## VISUAL STYLE | AAYI-VS-01

```
ID:             AAYI-VS-01
Aspect Ratio:   16:9
Camera Style:   ARRI Alexa cinematic film look
Lens Feel:      35mm / 50mm for scenes, 85mm for close-ups and baby
Lighting:       Soft natural light, warm highlights, gentle shadows, subtle rim light
Color Grade:    Warm amber-gold, premium emotional, clean medical brand tone
Depth of Field: Shallow — soft blurred backgrounds always
Skin Tones:     Realistic South Indian medium brown — never over-lightened or over-smoothed
Composition:    Clean centered subject, medium portrait or close-up, no clutter

AVOID:          Text overlays, watermarks, logos, extra people, cartoon look,
                harsh clinical lighting, western features, fashion shoot look
```

---

## IMAGE GENERATION INSTRUCTION (Gemini)

At the start of every Gemini session, attach all 5 character PNG files and send:

> "These are my 5 master character references for the aayi video.
> Match these exact faces, skin tones, hair and appearance in every image:
> - AAYI-DR-SUNITHA-01 = Dr. Sunitha (OB-GYN doctor)
> - AAYI-RADHA-01 = Mrs. Radha (pregnant mother)
> - AAYI-RAHUL-01 = Mr. Rahul (husband)
> - AAYI-DR-ALI-01 = Dr. Ali (pediatrician)
> - AAYI-BABY-01 = newborn baby
> Do not change skin tone, facial features, hair or identity in any generation."

---

## VIDEO ASSEMBLY

| Step | Tool | Purpose |
|------|------|---------|
| Character images | Gemini Pro | 16 scene images |
| Voice narration | Google AI Studio TTS | AAYI-VO-01 voice across all 16 frames |
| Video generation | Kling AI (free tier) | Image-to-video, 5–6 sec clips |
| Music | Suno / Epidemic Sound | AAYI-MX-01 style |
| Edit + assemble | CapCut (free) | Final 90-second cut |

---

## DEADLINE

**12 July 2026 — FEHMICON 2026 Presentation**
