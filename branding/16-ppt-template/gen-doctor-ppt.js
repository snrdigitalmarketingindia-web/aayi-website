'use strict';
const pptxgen = require('pptxgenjs');

// ── Brand colours (iOS system palette) ─────────────────────────────
const C = {
  amber:"E8A141", coral:"C94A35", olive:"9A8030", gold:"D99659",
  dark:"1C1C1E", mid:"3A3A3C", sub:"6D6D72", light:"8E8E93",
  sep:"E5E5EA", bg:"F2F2F7", bg2:"FFFFFF",
  amberT:"FFF4E5", coralT:"FDF0EE", oliveT:"F4F1E8", goldT:"FDF7EE",
};

function SD()  { return { type:"outer", blur:8,  offset:4, angle:270, color:"000000", opacity:0.08 }; }
function SD2() { return { type:"outer", blur:16, offset:6, angle:270, color:"000000", opacity:0.12 }; }

const LOGO_PATH  = "/Users/apple/Documents/aayi/aayi-website/branding/14-horizontal-logo/aayi-horizontal-logo-transparent-2.png";
const LOGO_RATIO = 2480/880;
const VIDEO_PATH = "/Users/apple/Documents/aayi/aayi-website/branding/15-videos/aayi-brand-film-FINAL.mp4";

// Shared header bar: white band, logo left, title right
function addHeader(pres, s, title) {
  s.addShape(pres.shapes.RECTANGLE, {
    x:0, y:0, w:10, h:0.82,
    fill:{ color:C.bg2 }, line:{ color:C.sep }, shadow:SD(),
  });
  const lh=0.52, lw=lh*LOGO_RATIO;
  s.addImage({ path:LOGO_PATH, x:0.22, y:(0.82-lh)/2, w:lw, h:lh });
  s.addText(title, {
    x:lw+0.5, y:0, w:10-(lw+0.6), h:0.82,
    fontSize:20, fontFace:"Calibri", bold:true, color:C.dark,
    align:"right", valign:"middle", margin:0,
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x:0, y:0.82, w:10, h:0.025,
    fill:{ color:C.sep }, line:{ color:"3A3A3C" },
  });
}

// ══════════════════════════════════════════════════════════════════
// SLIDE 1 — Brand Video
// ══════════════════════════════════════════════════════════════════
function slide1_video(pres) {
  const s = pres.addSlide();
  s.background = { color:C.dark };

  // Embed the video full-slide
  s.addMedia({
    type: "video",
    path: VIDEO_PATH,
    x:0, y:0, w:10, h:5.63,
  });

  s.addNotes("Brand film — 2 minutes. Click to play. Covers the aayi story and the problem it solves.");
}

// ══════════════════════════════════════════════════════════════════
// SLIDE 2 — The Problem (3 doctor pain-point cards)
// ══════════════════════════════════════════════════════════════════
function slide2_problem(pres) {
  const s = pres.addSlide();
  s.background = { color:C.bg };
  addHeader(pres, s, "The Problem");

  const problems = [
    {
      num:"01", color:C.coral, tint:C.coralT,
      title:"Fragmented Patient Histories",
      body:"Consultation time is lost piecing together a month of symptoms, vitals, and concerns — with no structured record from between visits.",
      chip:"aayi: 30-sec AI Summary before every visit",
    },
    {
      num:"02", color:C.amber, tint:C.amberT,
      title:"Midnight Calls & Social Media Anxiety",
      body:"Instagram reels and panic scrolling turn routine worries into late-night messages — with zero clinical documentation and no continuity.",
      chip:"aayi: 24/7 evidence-based answers, doctor-connected",
    },
    {
      num:"03", color:C.olive, tint:C.oliveT,
      title:"Patient Compliance Gaps",
      body:"Lapses in vitamins, diet, and screening schedules stay invisible until the next visit — by then, it's too late to intervene early.",
      chip:"aayi: real-time compliance dashboard & alerts",
    },
  ];

  const cw=2.9, ch=3.8, gap=0.2, startX=0.55, cardY=1.2;
  problems.forEach((p, i) => {
    const cx = startX + i*(cw+gap);

    // Card
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:cardY, w:cw, h:ch,
      fill:{ color:C.bg2 }, line:{ color:C.sep }, shadow:SD2(), rectRadius:0.2,
    });
    // Tint top band
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:cardY, w:cw, h:1.05,
      fill:{ color:p.tint }, line:{ color:"none" }, rectRadius:0.2,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x:cx, y:cardY+0.64, w:cw, h:0.42,
      fill:{ color:p.tint }, line:{ color:"3A3A3C" },
    });
    // Number badge
    s.addShape(pres.shapes.OVAL, {
      x:cx+0.2, y:cardY+0.14, w:0.72, h:0.72,
      fill:{ color:p.color }, line:{ color:p.color },
    });
    s.addText(p.num, {
      x:cx+0.2, y:cardY+0.14, w:0.72, h:0.72,
      fontSize:13, fontFace:"Calibri", bold:true, color:C.bg2,
      align:"center", valign:"middle", margin:0,
    });
    // Title
    s.addText(p.title, {
      x:cx+0.16, y:cardY+1.14, w:cw-0.32, h:0.56,
      fontSize:14, fontFace:"Calibri", bold:true, color:C.dark,
      align:"left", valign:"top", margin:0, wrap:true,
    });
    // Separator
    s.addShape(pres.shapes.RECTANGLE, {
      x:cx+0.16, y:cardY+1.74, w:cw-0.32, h:0.025,
      fill:{ color:p.color }, line:{ color:"3A3A3C" },
    });
    // Body
    s.addText(p.body, {
      x:cx+0.16, y:cardY+1.8, w:cw-0.32, h:1.32,
      fontSize:11, fontFace:"Arial", color:C.sub,
      align:"left", valign:"top", margin:0, wrap:true,
    });
    // Solution chip
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx+0.14, y:cardY+3.2, w:cw-0.28, h:0.46,
      fill:{ color:p.tint }, line:{ color:p.color }, rectRadius:0.1,
    });
    s.addText(p.chip, {
      x:cx+0.14, y:cardY+3.2, w:cw-0.28, h:0.46,
      fontSize:9.5, fontFace:"Calibri", bold:true, color:p.color,
      align:"center", valign:"middle", margin:0, wrap:true,
    });
  });

  s.addNotes("Walk through each pain point. These are the three biggest friction points doctors report. Each card shows the problem and how aayi solves it.");
}

// ══════════════════════════════════════════════════════════════════
// SLIDE 3 — aayi Works For You (6 doctor benefit cards)
// ══════════════════════════════════════════════════════════════════
function slide3_for_doctors(pres) {
  const s = pres.addSlide();
  s.background = { color:C.bg };
  addHeader(pres, s, "aayi Works For You");

  const benefits = [
    { icon:"🔄", color:C.amber,  tint:C.amberT, title:"Continuous Care",          desc:"Support that carries on between clinic visits — no gaps in your patient's journey." },
    { icon:"📊", color:C.coral,  tint:C.coralT, title:"Patient Monitoring",        desc:"A clear, real-time view of each patient's compliance, vitals, and daily progress." },
    { icon:"🔔", color:C.olive,  tint:C.oliveT, title:"Follow-up Support",         desc:"Timely automated reminders that bring patients back on schedule — without extra calls." },
    { icon:"📋", color:C.gold,   tint:C.goldT,  title:"Practice Visibility",       desc:"Organised tracking from pregnancy through motherhood — all in one place." },
    { icon:"🩺", color:C.coral,  tint:C.coralT, title:"Doctor-Led Care",           desc:"Every answer aayi gives keeps your guidance central. aayi never replaces you." },
    { icon:"✅", color:C.amber,  tint:C.amberT, title:"Zero Clinical Overhead",    desc:"30-sec onboarding. Nothing to set up. Nothing to manage. You see more, without doing more." },
  ];

  const cols=3, cw=2.98, ch=1.8, gap=0.1, startX=0.28, startY=1.18;
  benefits.forEach((b, i) => {
    const col=i%cols, row=Math.floor(i/cols);
    const cx=startX+col*(cw+gap), cy=startY+row*(ch+0.1);

    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:cy, w:cw, h:ch,
      fill:{ color:C.bg2 }, line:{ color:C.sep }, shadow:SD(), rectRadius:0.18,
    });
    // Icon circle
    s.addShape(pres.shapes.OVAL, {
      x:cx+0.2, y:cy+0.22, w:0.58, h:0.58,
      fill:{ color:b.tint }, line:{ color:b.color },
    });
    s.addText(b.icon, {
      x:cx+0.2, y:cy+0.22, w:0.58, h:0.58,
      fontSize:16, align:"center", valign:"middle", margin:0,
    });
    // Title
    s.addText(b.title, {
      x:cx+0.88, y:cy+0.24, w:cw-1.04, h:0.38,
      fontSize:13, fontFace:"Calibri", bold:true, color:C.dark,
      align:"left", valign:"middle", margin:0,
    });
    // Body
    s.addText(b.desc, {
      x:cx+0.2, y:cy+0.88, w:cw-0.38, h:0.78,
      fontSize:10.5, fontFace:"Arial", color:C.sub,
      align:"left", valign:"top", margin:0, wrap:true,
    });
  });

  s.addNotes("Six core doctor benefits. Emphasise Doctor-Led Care — aayi never replaces the doctor.");
}

// ══════════════════════════════════════════════════════════════════
// SLIDE 4 — Save Time Every Consultation (stats + features)
// ══════════════════════════════════════════════════════════════════
function slide4_save_time(pres) {
  const s = pres.addSlide();
  s.background = { color:C.bg };
  addHeader(pres, s, "Save Time Every Consultation");

  // 3 stat tiles top row
  const stats = [
    { num:"30", unit:"seconds", label:"Consultation Prep", sub:"aayi AI Summary ready before you walk in", color:C.amber, tint:C.amberT },
    { num:"24/7", unit:"", label:"Patient Support", sub:"aayi handles routine questions — no midnight calls", color:C.coral, tint:C.coralT },
    { num:"0", unit:"extra", label:"Clinical Overhead", sub:"30-sec onboarding — easy to get started", color:C.olive, tint:C.oliveT },
  ];

  const sw=2.9, sh=1.9, gap=0.2, sx=0.55, statsY=1.12;
  stats.forEach((st, i) => {
    const cx=sx+i*(sw+gap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:statsY, w:sw, h:sh,
      fill:{ color:st.tint }, line:{ color:st.color }, shadow:SD(), rectRadius:0.2,
    });
    s.addText(st.num, {
      x:cx+0.15, y:statsY+0.1, w:sw-0.3, h:0.78,
      fontSize:52, fontFace:"Calibri", bold:true, color:st.color,
      align:"center", valign:"middle", margin:0,
    });
    s.addText(st.unit ? st.unit.toUpperCase() : "", {
      x:cx+0.15, y:statsY+0.84, w:sw-0.3, h:0.22,
      fontSize:10, fontFace:"Arial", bold:true, color:st.color,
      align:"center", valign:"middle", margin:0,
    });
    s.addText(st.label, {
      x:cx+0.15, y:statsY+1.08, w:sw-0.3, h:0.3,
      fontSize:13, fontFace:"Calibri", bold:true, color:C.dark,
      align:"center", valign:"middle", margin:0,
    });
    s.addText(st.sub, {
      x:cx+0.15, y:statsY+1.42, w:sw-0.3, h:0.38,
      fontSize:10, fontFace:"Arial", color:C.sub,
      align:"center", valign:"middle", margin:0, wrap:true,
    });
  });

  // Feature detail cards bottom row
  const features = [
    { title:"AI Clinical Summary", desc:"Before you see a patient, aayi generates a structured summary — symptoms logged, compliance status, flagged concerns. You walk in prepared." },
    { title:"Who Needs Follow-up", desc:"aayi flags patients who missed check-ins, skipped vitamins, or logged concerning symptoms — so you prioritise without chasing." },
    { title:"One-View Patient Timeline", desc:"Every symptom, vital, mood check, and question — organised chronologically. No piecing together a month of scattered notes." },
  ];

  const fw=2.9, fh=1.86, fy=statsY+sh+0.22;
  features.forEach((f, i) => {
    const cx=sx+i*(fw+gap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:fy, w:fw, h:fh,
      fill:{ color:C.bg2 }, line:{ color:C.sep }, shadow:SD(), rectRadius:0.18,
    });
    s.addText(f.title, {
      x:cx+0.18, y:fy+0.16, w:fw-0.36, h:0.42,
      fontSize:13, fontFace:"Calibri", bold:true, color:C.dark,
      align:"left", valign:"top", margin:0, wrap:true,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x:cx+0.18, y:fy+0.62, w:fw-0.36, h:0.025,
      fill:{ color:C.sep }, line:{ color:"3A3A3C" },
    });
    s.addText(f.desc, {
      x:cx+0.18, y:fy+0.72, w:fw-0.36, h:1.0,
      fontSize:11, fontFace:"Arial", color:C.sub,
      align:"left", valign:"top", margin:0, wrap:true,
    });
  });

  s.addNotes("Emphasise the 30-second AI Summary — this is the biggest time-saver for busy OBGYNs. The patient history slide follows.");
}

// ══════════════════════════════════════════════════════════════════
// SLIDE 5 — Full Patient History at a Glance
// ══════════════════════════════════════════════════════════════════
function slide5_patient_history(pres) {
  const s = pres.addSlide();
  s.background = { color:C.bg };
  addHeader(pres, s, "Full Patient History at a Glance");

  // Left column — 4 feature cards stacked
  const items = [
    { color:C.coral,  tint:C.coralT, icon:"📋", title:"AI Clinical Summary",       desc:"Auto-generated before each visit — symptoms, vitals, compliance, mood. Structured and ready in 30 seconds." },
    { color:C.amber,  tint:C.amberT, icon:"⚠️",  title:"High-Risk Flags",           desc:"Patients with missed scans, abnormal vitals, or PHQ-9 concerns are automatically surfaced for priority review." },
    { color:C.olive,  tint:C.oliveT, icon:"📈",  title:"Compliance Dashboard",      desc:"See at a glance who followed their vitamin schedule, diet plan, and screening reminders between visits." },
    { color:C.gold,   tint:C.goldT,  icon:"💬",  title:"All Questions Logged",      desc:"Every question a patient asked aayi — with the response given — is visible to you. Nothing is invisible." },
  ];

  const lx=0.4, lw=4.5, ch=1.06, gap=0.1, startY=0.98;
  items.forEach((it, i) => {
    const cy=startY+i*(ch+gap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:lx, y:cy, w:lw, h:ch,
      fill:{ color:C.bg2 }, line:{ color:C.sep }, shadow:SD(), rectRadius:0.16,
    });
    // Tint strip left edge
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:lx, y:cy, w:0.18, h:ch,
      fill:{ color:it.tint }, line:{ color:it.color }, rectRadius:0.16,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x:lx+0.1, y:cy, w:0.1, h:ch,
      fill:{ color:it.tint }, line:{ color:"3A3A3C" },
    });
    // Icon
    s.addText(it.icon, {
      x:lx+0.28, y:cy+0.1, w:0.56, h:0.56,
      fontSize:20, align:"center", valign:"middle", margin:0,
    });
    // Title
    s.addText(it.title, {
      x:lx+0.9, y:cy+0.1, w:lw-1.08, h:0.3,
      fontSize:12.5, fontFace:"Calibri", bold:true, color:C.dark,
      align:"left", valign:"middle", margin:0,
    });
    // Desc
    s.addText(it.desc, {
      x:lx+0.9, y:cy+0.44, w:lw-1.08, h:0.52,
      fontSize:10, fontFace:"Arial", color:C.sub,
      align:"left", valign:"top", margin:0, wrap:true,
    });
  });

  // Right column — portal highlight card
  const rx=5.22, rw=4.38;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:rx, y:0.98, w:rw, h:4.52,
    fill:{ color:C.bg2 }, line:{ color:C.sep }, shadow:SD2(), rectRadius:0.2,
  });

  // Header bar of "portal card"
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:rx, y:0.98, w:rw, h:0.72,
    fill:{ color:C.coralT }, line:{ color:"none" }, rectRadius:0.2,
  });
  s.addText("Doctor Portal  ·  app.aayi.ai/doctor-portal", {
    x:rx+0.22, y:0.98, w:rw-0.44, h:0.72,
    fontSize:11, fontFace:"Calibri", bold:true, color:C.coral,
    align:"left", valign:"middle", margin:0,
  });

  // Patient record mock
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:rx+0.22, y:1.82, w:rw-0.44, h:0.7,
    fill:{ color:C.bg }, line:{ color:C.sep }, rectRadius:0.1,
  });
  s.addText("Priya Sharma  ·  28 weeks  ·  HIGH RISK", {
    x:rx+0.38, y:1.88, w:rw-0.72, h:0.26,
    fontSize:10.5, fontFace:"Calibri", bold:true, color:C.dark,
    align:"left", valign:"middle", margin:0,
  });
  s.addText("Next scan due in 3 days  ·  Missed iron supplement x2", {
    x:rx+0.38, y:2.14, w:rw-0.72, h:0.26,
    fontSize:9.5, fontFace:"Arial", color:C.coral,
    align:"left", valign:"middle", margin:0,
  });

  // AI Summary block
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:rx+0.22, y:2.66, w:rw-0.44, h:2.6,
    fill:{ color:C.amberT }, line:{ color:C.amber }, rectRadius:0.1,
  });
  s.addText("AI Clinical Summary", {
    x:rx+0.38, y:2.74, w:rw-0.72, h:0.3,
    fontSize:10.5, fontFace:"Calibri", bold:true, color:C.amber,
    align:"left", valign:"middle", margin:0,
  });
  const summaryLines = [
    "• Patient reports mild lower-back pain (logged 3× this week)",
    "• BP within normal range. Weight gain: +0.8 kg (on track)",
    "• PHQ-9 score 7 — mild anxiety. Suggested counselling.",
    "• Missed iron supplement: 2 of last 7 days",
    "• All scheduled scans completed. Next: anomaly scan Fri",
    "• 14 questions asked aayi this week — 2 flagged for doctor review",
  ];
  s.addText(summaryLines.join("\n"), {
    x:rx+0.38, y:3.08, w:rw-0.72, h:2.08,
    fontSize:9.5, fontFace:"Arial", color:C.dark,
    align:"left", valign:"top", margin:0, wrap:true,
  });

  s.addNotes("Show the doctor portal. The AI Summary and high-risk flags are the headline features here.");
}

// ══════════════════════════════════════════════════════════════════
// SLIDE 6 — What Your Patients Get + Q&A (combined closing)
// ══════════════════════════════════════════════════════════════════
function slide6_close(pres) {
  const s = pres.addSlide();
  s.background = { color:C.bg };
  addHeader(pres, s, "What Your Patients Get");

  const TEAL = "2A9D78", TEALT = "E8F5F0", OLIVE_TINT = "EEF3E8";

  // ── LAYOUT CONSTANTS ─────────────────────────────────────────────
  // Slide: 10" × 5.63" | Header ends at 0.82" | usable bottom: 5.52"
  // Left panel x=0.28 w=5.1 | Right panel x=5.60 w=4.12
  // Both panels: y=0.92 → 5.52 (4.60" tall)

  const lx=0.28,  lw=5.10;
  const rx=5.60,  rw=4.12;
  const panelY=0.92, panelBot=5.52, panelH=panelBot-panelY; // 4.60

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LEFT PANEL — full-height AI features + standard chips
  // Layout (top→bottom, total must = 4.60):
  //   section label  0.22
  //   ai grid        3.16  (2 rows × 1.50 + 1 gap × 0.16)
  //   section label  0.20
  //   standard chips 0.68
  //   CTA pill       0.34
  //   total          4.60 ✓
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // AI section label
  s.addText("✦  AI-POWERED FEATURES", {
    x:lx, y:panelY, w:lw, h:0.22,
    fontSize:7.5, fontFace:"Calibri", bold:true, color:C.sub,
    align:"left", valign:"middle", charSpacing:2.5, margin:0,
  });

  // 2×2 AI grid
  const aiFeatures = [
    { icon:"🤖", label:"24/7 AI\nCompanion",   color:C.coral, tint:C.coralT  },
    { icon:"🧠", label:"AI Wellness\nInsights", color:C.amber, tint:C.amberT  },
    { icon:"📊", label:"AI Health\nSummary",    color:C.olive, tint:OLIVE_TINT },
    { icon:"🎙️", label:"Cry\nAnalyser",         color:TEAL,    tint:TEALT     },
  ];
  const aiCols=2, aiGap=0.16;
  const aiW=(lw-(aiCols-1)*aiGap)/aiCols;  // 2.47"
  const aiH=1.50, aiRowGap=0.16;
  const aiStartY=panelY+0.22;
  const iconBH=aiH*0.58;

  aiFeatures.forEach((f, i) => {
    const row=Math.floor(i/aiCols), col=i%aiCols;
    const cx=lx+col*(aiW+aiGap), cy=aiStartY+row*(aiH+aiRowGap);

    // White card with coloured border
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:cy, w:aiW, h:aiH,
      fill:{ color:C.bg2 }, line:{ color:f.color, transparency:30 },
      shadow:{ type:"outer", blur:16, offset:5, angle:270, color:"000000", opacity:0.1 },
      rectRadius:0.20,
    });
    // Full-height tinted icon band (top rounded)
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:cy, w:aiW, h:iconBH,
      fill:{ color:f.tint }, line:{ color:f.tint }, rectRadius:0.20,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x:cx+0.01, y:cy+iconBH-0.22, w:aiW-0.02, h:0.24,
      fill:{ color:f.tint }, line:{ color:f.tint },
    });
    // AI pill badge
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx+aiW-0.50, y:cy+0.09, w:0.40, h:0.20,
      fill:{ color:f.color }, line:{ color:f.color }, rectRadius:0.08,
    });
    s.addText("AI", {
      x:cx+aiW-0.50, y:cy+0.09, w:0.40, h:0.20,
      fontSize:7.5, fontFace:"Calibri", bold:true, color:C.bg2,
      align:"center", valign:"middle", charSpacing:1.5, margin:0,
    });
    // Emoji icon
    s.addText(f.icon, {
      x:cx, y:cy+0.04, w:aiW, h:iconBH-0.04,
      fontSize:30, align:"center", valign:"middle", margin:0,
    });
    // Feature label
    s.addText(f.label, {
      x:cx+0.08, y:cy+iconBH, w:aiW-0.16, h:aiH-iconBH,
      fontSize:13, fontFace:"Calibri", bold:true, color:C.dark,
      align:"center", valign:"middle", margin:0, wrap:true,
    });
  });

  // Standard features section label
  const aiGridEnd = aiStartY + 2*(aiH+aiRowGap) - aiRowGap;  // 4.54
  const stdLblY = aiGridEnd + 0.02;  // 4.56  — tight but visible
  s.addText("STANDARD FEATURES", {
    x:lx, y:stdLblY, w:lw*0.6, h:0.20,
    fontSize:7.5, fontFace:"Calibri", bold:true, color:C.sub,
    align:"left", valign:"middle", charSpacing:2.5, margin:0,
  });
  // Pricing tag right-aligned on same row
  s.addText("₹1,999/yr  ·  ₹2,999 lifetime  ·  Doctors free", {
    x:lx+lw*0.6, y:stdLblY, w:lw*0.4, h:0.20,
    fontSize:7, fontFace:"Calibri", bold:true, color:C.amber,
    align:"right", valign:"middle", margin:0,
  });

  // 5 standard feature chips (full row)
  const stdFeatures = [
    { icon:"📈", label:"Growth\nCharts" },
    { icon:"💉", label:"Vaccination\nSchedule" },
    { icon:"📅", label:"Health\nTrackers" },
    { icon:"👶", label:"Milestone\nTracker" },
    { icon:"🤰", label:"Pregnancy\nTools" },
  ];
  const chipGap=0.08, chipH=0.68;
  const chipW=(lw-(stdFeatures.length-1)*chipGap)/stdFeatures.length;
  const chipY=stdLblY+0.22;

  stdFeatures.forEach((f, i) => {
    const cx=lx+i*(chipW+chipGap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:chipY, w:chipW, h:chipH,
      fill:{ color:C.bg2 }, line:{ color:C.sep }, rectRadius:0.10,
      shadow:{ type:"outer", blur:8, offset:3, angle:270, color:"000000", opacity:0.07 },
    });
    s.addText(f.icon, {
      x:cx, y:chipY+0.04, w:chipW, h:0.28,
      fontSize:14, align:"center", valign:"middle", margin:0,
    });
    s.addText(f.label, {
      x:cx+0.02, y:chipY+0.32, w:chipW-0.04, h:chipH-0.34,
      fontSize:7, fontFace:"Calibri", bold:true, color:C.sub,
      align:"center", valign:"middle", margin:0, wrap:true,
    });
  });

  // CTA disclaimer — fills to bottom
  const ctaY=chipY+chipH+0.08;
  const ctaH=panelBot-ctaY;  // ~0.36
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:lx, y:ctaY, w:lw, h:ctaH,
    fill:{ color:C.amberT }, line:{ color:C.amber }, rectRadius:0.10,
  });
  s.addText("aayi supports your care — it never replaces it.", {
    x:lx, y:ctaY, w:lw, h:ctaH,
    fontSize:10, fontFace:"Calibri", bold:true, color:C.amber,
    align:"center", valign:"middle", margin:0,
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RIGHT PANEL — white card, full-height
  // Layout (inside card, y from panelY=0.92 → 5.52):
  //   Thank you amber header   0.88
  //   Q&A title + subtitle     0.72
  //   3 action buttons         0.84
  //   QR block (big)           1.60
  //   Contact/pricing bar      0.56
  //   total                    4.60 ✓
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // Outer card
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:rx, y:panelY, w:rw, h:panelH,
    fill:{ color:C.bg2 }, line:{ color:C.sep }, shadow:SD2(), rectRadius:0.22,
  });

  // — Thank you header (amber fill, rounded top) —
  const tyH=0.88;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:rx, y:panelY, w:rw, h:tyH,
    fill:{ color:C.amberT }, line:{ color:C.amberT }, rectRadius:0.22,
  });
  // Square off the bottom corners of the amber band
  s.addShape(pres.shapes.RECTANGLE, {
    x:rx+0.01, y:panelY+tyH-0.24, w:rw-0.02, h:0.26,
    fill:{ color:C.amberT }, line:{ color:C.amberT },
  });
  // Thin amber divider line at bottom of band
  s.addShape(pres.shapes.RECTANGLE, {
    x:rx, y:panelY+tyH-0.02, w:rw, h:0.02,
    fill:{ color:C.amber }, line:{ color:C.amber },
  });
  s.addText("Thank you", {
    x:rx+0.2, y:panelY, w:rw-0.4, h:tyH,
    fontSize:28, fontFace:"Calibri", bold:true, color:C.amber,
    align:"center", valign:"middle", margin:0,
  });

  // — Q&A block —
  const qaY=panelY+tyH+0.06;
  s.addText("Any Questions?", {
    x:rx+0.2, y:qaY, w:rw-0.4, h:0.46,
    fontSize:20, fontFace:"Calibri", bold:true, color:C.dark,
    align:"center", valign:"middle", margin:0,
  });
  s.addText("We'd love to hear from you", {
    x:rx+0.2, y:qaY+0.48, w:rw-0.4, h:0.24,
    fontSize:10, fontFace:"Arial", color:C.sub, italic:true,
    align:"center", valign:"middle", margin:0,
  });

  // — 3 action buttons —
  const btnData = [
    { icon:"📱", label:"Try aayi App" },
    { icon:"📅", label:"Book a Demo" },
    { icon:"🤝", label:"Partner With Us" },
  ];
  const bY=qaY+0.76, bH=0.84, bW=1.16, bGap=0.10, bX=rx+0.16;
  btnData.forEach((b, i) => {
    const cx=bX+i*(bW+bGap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:bY, w:bW, h:bH,
      fill:{ color:C.bg }, line:{ color:C.sep }, rectRadius:0.12,
      shadow:{ type:"outer", blur:8, offset:3, angle:270, color:"000000", opacity:0.07 },
    });
    s.addText(b.icon, {
      x:cx, y:bY+0.06, w:bW, h:0.34,
      fontSize:18, align:"center", valign:"middle", margin:0,
    });
    s.addText(b.label, {
      x:cx+0.04, y:bY+0.44, w:bW-0.08, h:0.30,
      fontSize:8.5, fontFace:"Calibri", bold:true, color:C.dark,
      align:"center", valign:"middle", margin:0, wrap:true,
    });
  });

  // — BIG QR block —
  const qrY=bY+bH+0.12, qrBlockH=1.60;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:rx+0.12, y:qrY, w:rw-0.24, h:qrBlockH,
    fill:{ color:C.amberT }, line:{ color:C.amber, transparency:20 }, rectRadius:0.16,
  });
  const qrSz=1.40;
  s.addImage({
    path:"/Users/apple/Documents/aayi/aayi-website/images/aayi-qr.png",
    x:rx+0.22, y:qrY+(qrBlockH-qrSz)/2, w:qrSz, h:qrSz,
    rounding: true,
  });
  const qtx=rx+0.22+qrSz+0.16, qtw=rw-0.24-qrSz-0.38;
  s.addText("Scan to Download", {
    x:qtx, y:qrY+0.08, w:qtw, h:0.36,
    fontSize:17, fontFace:"Calibri", bold:true, color:C.dark,
    align:"left", valign:"middle", margin:0,
  });
  // "aayi" with per-character brand colours
  s.addText([
    { text:"a", options:{ color:"E8A141" } },
    { text:"a", options:{ color:"C94A35" } },
    { text:"y", options:{ color:"9A8030" } },
    { text:"i", options:{ color:"D99659" } },
  ], {
    x:qtx, y:qrY+0.44, w:qtw, h:0.40,
    fontSize:26, fontFace:"Calibri", bold:true,
    align:"left", valign:"middle", margin:0,
  });
  s.addText("Free · iOS & Android", {
    x:qtx, y:qrY+0.88, w:qtw, h:0.22,
    fontSize:9, fontFace:"Arial", color:C.sub,
    align:"left", valign:"middle", margin:0,
  });
  s.addText("Takes 30 seconds to set up", {
    x:qtx, y:qrY+1.08, w:qtw, h:0.22,
    fontSize:9, fontFace:"Arial", color:C.sub,
    align:"left", valign:"middle", margin:0,
  });
  s.addText("app.aayi.ai", {
    x:qtx, y:qrY+1.34, w:qtw, h:0.22,
    fontSize:11, fontFace:"Calibri", bold:true, color:C.amber,
    align:"left", valign:"middle", margin:0,
  });

  // — Contact bar — fills to bottom
  const cbY=qrY+qrBlockH+0.08;
  const cbH=panelBot-cbY;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x:rx, y:cbY, w:rw, h:cbH,
    fill:{ color:C.coral }, line:{ color:C.coral }, rectRadius:0.14,
  });
  s.addText("hello@aayi.ai  ·  aayi.ai  ·  Book a live demo", {
    x:rx, y:cbY, w:rw, h:cbH,
    fontSize:11.5, fontFace:"Calibri", bold:true, color:C.bg2,
    align:"center", valign:"middle", margin:0,
  });

  s.addNotes("Highlight AI features — they're why aayi stands apart. Then open for Q&A. Direct doctors to scan the QR for a free download.");
}

// ══════════════════════════════════════════════════════════════════
(async () => {
  const pres = new pptxgen();
  pres.layout  = "LAYOUT_16x9";
  pres.author  = "aayi";
  pres.title   = "aayi — Doctor Presentation";
  pres.subject = "How aayi supports doctors and saves time";

  slide1_video(pres);
  slide2_problem(pres);
  slide3_for_doctors(pres);
  slide4_save_time(pres);
  slide5_patient_history(pres);
  slide6_close(pres);

  const out = "/Users/apple/Downloads/aayi-doctor-presentation.pptx";
  await pres.writeFile({ fileName:out });
  console.log("Saved:", out);
})();
