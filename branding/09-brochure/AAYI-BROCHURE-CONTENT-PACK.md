# Aayi Brochure Final Content Pack — Ready to Paste into Canva
**A4 Bi-Fold · 4 Pages · Print-Ready · Doctor + Patient Facing**

---

## 0. Canva Setup (do this first)

| Setting | Value |
|---|---|
| Document size | A4 — 210 × 297 mm (create as 4 pages) |
| Bleed | 3 mm on all sides (File → Settings → Show print bleed) |
| Safe margin | Keep all text ≥ 10 mm from trim edge |
| Heading font | **Playfair Display** (SemiBold / Bold) |
| Body font | **Inter** (Regular / Medium) |
| Corner radius | 16–24 px on all cards, frames, and photo blocks |

### Brand Colors (exact hex — from the approved aayi brand kit)
| Role | Color | Hex |
|---|---|---|
| Background (all pages) | Soft cream | `#FAF7F4` |
| Secondary background / bands | Warm sand | `#F5EEE8` |
| Primary accent (headings, buttons, icons) | Terracotta coral | `#E86B52` |
| Deep accent (footer band, dark blocks) | Dark terracotta | `#C94A35` |
| Secondary accent (highlights, icons) | Mustard amber | `#F0A030` |
| Soft fill (cards, chips) | Peach blush | `#FFF0EE` |
| Body text | Deep maroon-ink | `#2A1008` |

> Note: the approved aayi UI palette uses **coral-terracotta + amber + cream + maroon**. Olive appears only inside the brand illustrations (logo art, hero art) — never as a UI/layout color. Use amber `#F0A030` wherever the brief says mustard/olive so the brochure matches the website and app exactly.

### Brand Assets (already in the repo)
| Asset | File |
|---|---|
| Cover logo (with tagline) | `branding/01-logo-transparent/aayi-logo-horizontal-transparent-with-tagline-2400x800.png` |
| Logo without tagline (back cover) | `branding/01-logo-transparent/aayi-logo-horizontal-transparent-no-tagline-1800x640.png` |
| App symbol (small accents) | `branding/01-logo-transparent/aayi-app-symbol-transparent-approved-artwork-1024x1024.png` |
| Cover illustration (text-free, approved art style) | `images/hero-art.png` — mother holding baby |
| QR code | `images/aayi-qr.png` — **verified: points to app.aayi.ai** (branded QR with app symbol center) |

---

## P1 — FRONT COVER (v4 — big logo lockup, 4 challenge tiles left, app-tile rail right)

### Layout (top → bottom)
1. **Top ~20%** — logo lockup, left-aligned: approved **app symbol** (`aayi-app-symbol-…-1024x1024.png`, ~150 px, rounded corners) beside a **large recreated wordmark**: “aayi” (~82 px, bold, near-black `#2E2A26`), coral underline bar, tagline “Your AI companion for pregnancy & motherhood” (~25 px, dark terracotta). The wordmark + tagline are ~2× the size they appear in the baked horizontal logo PNG — rebuild them as live text next to the symbol; do not stretch the PNG.
2. **Below, two columns**: **left ~58%** = cover title wrapped to 2 lines + 4 numbered challenge tiles; **right ~42%** = full-height vertical rail of **3 app feature tile screenshots from app.aayi.ai** (placeholders until shared). The rail starts level with the cover title, so it gets the full column height.
3. **Bottom** — thin dark-terracotta footer strip.

### Top / title copy (paste as-is)

**Tagline (Inter, ~21 pt, dark terracotta, single line under the wordmark's coral underline):**
> Your AI companion for pregnancy & motherhood

**Cover title (Playfair Display SemiBold, ~26 pt, maroon, single line, full page width):**
> **Pregnancy, Motherhood & Child Care Companion**

The terracotta bar (4 px, rounded) starts right after the title text and **continues to the right page margin** — one continuous rule on the title line.

**Footer strip (white text on `#C94A35`):**
> aayi.ai   ·   Doctor-connected care, always with you

### LEFT 58% — 4 challenge tiles

**Tiles heading (Inter SemiBold, ~9.5 pt, uppercase, letter-spaced, dark terracotta, left-aligned):**
> KEY CHALLENGES AAYI HELPS SOLVE

Four compact horizontal tiles (14 px radius): big Playfair number on the left, then title → 2-line description → white solution chip. Tiles 02–04 are condensed from the live for-doctors page — keep the pain/solution pairing.

**Tile 01 (fill `#FFF0EE`, number in coral `#E86B52`):**
> **01 — Bridging the Gap**
> Between a 15-minute consultation and 30 days of patient choices at home, care loses continuity.
> *Solution chip:* **aayi: doctor-connected care between visits**

**Tile 02 (fill `#FFF8E8`, number in amber `#F0A030`):**
> **02 — Google Anxiety & Midnight Calls**
> Routine worries turn into panic searches and midnight messages — with zero clinical documentation.
> *Solution chip:* **aayi Companion — 24/7 evidence-based answers**

**Tile 03 (fill `#F5EEE8`, number in maroon-light `#5A2820`):**
> **03 — Patient Compliance Gaps**
> Lapses in vitamins, diet, and screening schedules stay invisible until the next visit.
> *Solution chip:* **aayi: real-time compliance dashboard & alerts**

**Tile 04 (fill `#FDE8E4`, number in dark terracotta `#C94A35`):**
> **04 — Fragmented Patient Histories**
> Consultation time is lost piecing together a month of symptoms, vitals, and concerns.
> *Solution chip:* **aayi: 30-second consultation prep summary**

> Source: these three tiles mirror “The Three Clinical Pain Points” section on the live for-doctors page (Google Anxiety & Midnight Calls → aayi Companion (formerly AI Saheli); Patient Compliance Gaps → Real-Time Compliance Dashboard; Fragmented Patient Histories → 30-Second Consultation Prep).

### RIGHT 40% — app feature tile rail (full height, top to bottom)

**Rail heading (Inter SemiBold, ~9.5 pt, uppercase, letter-spaced, dark terracotta, centered):**
> FROM THE AAYI APP

**Presentation: iPhone 17 Pro-style phone mockup.** Dark near-black bezel (`#1C1B1E`, 42 px outer radius, ~9 px bezel width), warm cream screen (`#FBF3EA`, 34 px radius), Dynamic Island pill centered at top (≈82×20 px), thin home-indicator bar at the bottom. **The phone's top edge aligns exactly with the top of tile 01 in the left column** (the “From the aayi App” heading sits above, on the same baseline as the left column's “Key Challenges” heading). Inside the screen, stack the five tile screenshots with tight, even spacing.

**Real tile screenshots captured from the live app dashboard (app.aayi.ai, patient/parent profile), saved at 3× resolution in `branding/09-brochure/assets/`:**
1. `aayi-tile-health-snapshot.png` — Health Snapshot (Daily Checklist, Weekly Insight, Health Score, Wellness Check PHQ-9)
2. `aayi-tile-ai-tools.png` — AI Tools (Aayi Companion, Cry Analyzer, AI Health, Wellness Insights)
3. `aayi-tile-trackers.png` — Trackers (Growth Charts, Vaccination Schedule, Health Trackers, Pregnancy Tools)
4. `aayi-tile-quick-actions.png` — Quick Actions (Library, Journal, Community, Myth Buster, Memory Book, Discover Hub, Up Next)
5. `aayi-tile-for-you-cards.png` — For You (personalized content + Milestone Reels) — cropped from `aayi-tile-for-you.png` to drop the “0 day streak” card; give the image bottom corner radius 18 px since the crop removes the section’s own bottom corners

> ⚠️ Before print: the Health Snapshot tile shows live demo values (“Daily Checklist 0/5”, “Health Score 35/100”). Set the demo account to flattering values and re-capture, or ask for a retouched tile.

---

## P2 — INNER LEFT · FOR DOCTORS

### Layout (top → bottom)
1. Section label chip (peach `#FFF0EE` pill, terracotta text): **FOR DOCTORS**
2. Panel headline (no intro paragraph)
3. 6 icon bullets in a 2×3 grid of rounded cards
4. Simplified Practice Management sub-block (warm sand `#F5EEE8` rounded card)
5. Screenshot frame at bottom right

### Copy (paste as-is)

**Panel headline (Playfair Display, ~26 pt):**
> **aayi stands with the doctor — never in place of one.**

*(No intro paragraph — the benefit cards start directly under the headline.)*

**Icon bullets (6 rounded cards, terracotta icon + short label + one-liner):**
1. **Continuous Care** — Support that carries on between clinic visits.
2. **Patient Monitoring** — A clear view of each patient’s journey.
3. **Follow-up Support** — Timely reminders that bring patients back on schedule.
4. **Practice Visibility** — Organized tracking from pregnancy to motherhood.
5. **Doctor-Connected Care** — Every answer keeps your guidance central.
6. **Zero Extra Burden** — Nothing to set up, nothing to manage.

**Practice Management System sub-block:**

*Sub-heading:* **Simplified Practice Management**

*Body:*
> aayi quietly works as a light practice companion — monitoring each patient’s journey, showing you who needs follow-up, supporting communication, and keeping pregnancy-to-motherhood progress organized in one place. You see more, without doing more.

**Bottom visual — desktop web-app mockup (real captures, no placeholder):**
A macOS-style browser window: chrome bar `#EFE7DF` with three traffic-light dots + centered URL pill reading **app.aayi.ai/doctor-portal**; content area `#F3ECE4` containing two stacked live captures from the doctor portal:
1. `assets/aayi-doctor-patient-header.png` — patient record header (Simran Kaur · EXPECTING / HIGH RISK badges · purple **AI Summary** button), on a white rounded card
2. `assets/aayi-doctor-ai-summary.png` — the generated **Clinical Summary · AI** card
> ⚠️ Test-data note: the summary reads “gestational age not yet recorded.” Fill in the demo patient's data and hit Regenerate in the portal for a stronger summary, then re-capture.

---

## P3 — INNER RIGHT · FOR PREGNANT WOMEN

### Layout (top → bottom)
1. Section label chip: **FOR PREGNANT WOMEN**
2. Panel headline + warm intro paragraph
3. Phone mockup frame on the right (60% height), feature chips stacked on the left
4. Subtle pregnant-woman illustration or soft photo strip at the bottom

This panel should feel the warmest of the four — more peach `#FFF0EE`, softer shapes, slightly larger line spacing.

### Copy (paste as-is)

**Panel headline (Playfair Display, ~26 pt):**
> **A caring companion for every week of your pregnancy.**

**Intro paragraph (Inter, ~11 pt):**
> Questions don’t wait for your next appointment. aayi is with you day and night — with simple, reassuring answers, gentle reminders, and guidance for every stage — always connected to your doctor’s care. When something needs medical attention, aayi points you back to your doctor. That’s how it should be.

**Feature chips (7 rounded pills or cards, amber/terracotta icons; “aayi” highlighted in dark terracotta):**
- **24/7 aayi (AI) Companion** — someone to ask, any hour
- **Trackers** — daily health, vitamins, weight & BP — your everyday progress
- **Wellness Insights** — meal planner & PHQ-9 mood checks
- **Your Own Library** — journal your journey & connect with moms-to-be in the community
- **Doctor-Connected Support** — your doctor stays central
- **Helpful Reminders** — visits, routines, and care tasks
- **Simple, Reassuring Answers** — no confusing medical jargon

**Screenshot frame label (right column, phone-frame proportions):**
> “Pregnant Woman App Screen / Feature Screenshot Placeholder”

**Small reassurance line (italic, bottom of panel):**
> *aayi supports your doctor’s care — it never replaces it.*

---

## P4 — BACK COVER · FOR MOTHERS & PARENTS

### Layout (top → bottom)
1. Section label chip: **FOR MOTHERS & PARENTS**
2. Panel headline + short intro
3. Two columns: left ~58% = 7 feature cards stacked one per row; right ~42% = full-height feature screenshot placeholder
4. **Contact / conversion band** — full-width dark terracotta `#C94A35` rounded block at the bottom with QR + contact details in white

### Copy (paste as-is)

**Panel headline (Playfair Display, ~26 pt):**
> **The care doesn’t stop at delivery.**

**Intro paragraph (Inter, ~11 pt):**
> From the first night home to the toddler years, aayi keeps supporting mothers and parents — with child care guidance, routine reminders, and answers you can trust, whenever you need them.

**Feature cards — two-column layout: left ~58% = 7 stacked cards (one per row), right ~42% = full-height feature screenshot placeholder:**
- **Vaccination Schedule** — never miss a vaccine — automated reminders
- **Growth Chart Monitoring** — weight, height & head size vs WHO standards
- **Cry Analyser** — understand what your baby's cry means
- **Feeding Support** — breastfeeding & formula guidance
- **Milestone Tracker** — development from birth to age 12
- **Always-Available AI Support** — answers at 2 a.m. too
- **Doctor-Connected Care** — your pediatrician stays in the loop

> Vaccination Tracker, Growth Charts (WHO standards), Milestone Tracker (birth to age 12), and feeding guidance are all live features on the for-parents page. **Cry Analyzer is confirmed** — it appears in the live app dashboard under AI Tools (see `assets/aayi-tile-ai-tools.png`).

**Screenshot frame label:**
> “Mother / Parent Feature Screen Placeholder”

### Contact / Conversion Band (white text on `#C94A35`)

Left side — copy:
> **Scan to explore aayi**
> Download the app and start your connected care journey today.

Right side — details:
- **QR code:** use `images/aayi-qr.png` → verified, links to **app.aayi.ai** (branded QR with the app symbol in the center — print-ready)
- **Website:** aayi.ai
- **Email:** hello@aayi.ai

**Legal microline (Inter, 7 pt, white at 70%, below the band):**
> aayi is a care companion and does not provide medical diagnosis or treatment. Always consult your doctor for medical decisions.

---

## Illustration Concepts — “problem → solved” visuals (to be commissioned/sourced)

**Style rule for both slots:** match the approved brand artwork (`images/hero-art.png` / logo art) — flat vector illustration, soft faceless Indian characters, terracotta/olive/mustard/cream palette, organic blob shapes, no gradients-heavy 3D, no cheesy stock look. If using photos instead, choose warm, natural-light, premium Indian-context photography and duotone/warm-grade it toward the brand palette.

### P1 slot — tall portrait (~1:2.9, roughly 275 × 810 px on page) under heading “aayi in Everyday Care”
1. **“2 a.m., answered.”** ✅ **DONE — generated and placed.** Asset: `assets/aayi-illustration-2am-answered.png` (724×2172, 1:3). Fit the slot with cover-crop, 18 px corner radius. Concept: vertical split — top half, a pregnant woman awake at night, phone glow, anxious search scribbles above her head; bottom half, the same woman calm, an empty aayi chat bubble — and an inset of the doctor sleeping undisturbed.
2. **“The bridge of care.”** — doctor at clinic desk (top) and mother at home with baby (bottom), joined by a flowing terracotta ribbon carrying small icons (reminder bell, heart log, summary card) — literally bridging the 15-minute consult and the 30 days at home.
3. **“One journey, connected.”** — vertical pregnancy→newborn→toddler timeline, a single thread running through every stage ending at a stethoscope — care that never breaks.

### P4 slot — portrait (~1:1.6, roughly 295 × 470 px on page), parenting themes
1. **“Night cry, decoded.”** ✅ **DONE — generated and placed.** Asset: `assets/aayi-illustration-night-cry-decoded.png` (1024×1536, 2:3). Fit the slot with cover-crop, 18 px corner radius. Concept: parent soothing a crying baby at night; phone shows a soft soundwave turning into a calm suggestion card. Pairs directly with the Cry Analyser tile beside it.
2. **“Vaccine day, on time.”** — parent and toddler leaving the clinic with a big calendar tick; pediatrician waves from a phone screen corner.
3. **“Growing right.”** — parent marking a toddler's height on the wall; the marks continue onto a phone as a rising WHO growth curve.

> Tip: generate these in the same AI-art pipeline that produced the approved hero artwork so palette and character style stay identical; deliver at 3× print size, portrait crops as above.

## Content Rules (checked against this copy)
- ✅ No claim that AI replaces doctors — every panel repeats doctor-connected framing
- ✅ No risky medical claims — no diagnosis/treatment/outcome language
- ✅ Simple, scannable, brochure-length copy
- ✅ Premium, reassuring, doctor-trusted tone

## Design Rules Recap for the Designer
- **Brand-name highlight:** every occurrence of “aayi” in copy is SemiBold dark terracotta `#C94A35` (use amber `#F0A030` on dark terracotta backgrounds like the contact band). Exception: the logo lockup itself keeps its own colors. Never plain black.
- Cream `#FAF7F4` base on all 4 pages; never pure white
- One dark band per page maximum (cover footer strip, back-cover contact band)
- Rounded corners everywhere (16–24 px); no sharp rectangles
- Playfair Display for display lines only; Inter for everything else
- Whitespace is part of the design — do not fill every gap
- All photo frames stay editable Canva frames; all placeholder labels stay until real screenshots arrive
- Print export: PDF Print, CMYK if available, crop marks + bleed ON
