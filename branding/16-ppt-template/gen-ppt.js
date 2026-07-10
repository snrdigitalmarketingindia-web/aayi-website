const pptxgen = require("pptxgenjs");
const fs = require("fs");

const C = {
  amber:  "E8A141",
  coral:  "C94A35",
  olive:  "9A8030",
  gold:   "D99659",
  dark:   "2B1810",
  muted:  "7A5C48",
  cream:  "F5EDE0",
  cream2: "EDE0CE",
  white:  "FFFFFF",
};

const logoPath   = "/Users/apple/Documents/aayi/aayi-website/branding/14-horizontal-logo/aayi-horizontal-logo-transparent-2.png";
const symbolPath = "/Users/apple/Documents/aayi/aayi-website/branding/01-logo-transparent/aayi-logo-symbol-transparent-approved-artwork-1024x1024.png";
const logoBase64   = "image/png;base64," + fs.readFileSync(logoPath).toString("base64");
const symbolBase64 = "image/png;base64," + fs.readFileSync(symbolPath).toString("base64");

const LOGO_RATIO = 2480 / 880;
const SHADOW = () => ({ type: "outer", color: "000000", blur: 8, offset: 3, angle: 45, opacity: 0.12 });

function addHeader(pres, s, title, dark) {
  const bg = dark ? C.dark : C.cream;
  const textColor = dark ? C.white : C.dark;
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: bg }, line: { color: bg },
  });
  const lw = 1.6, lh = lw / LOGO_RATIO;
  s.addImage({ data: logoBase64, x: 0.35, y: (0.9 - lh) / 2, w: lw, h: lh });
  s.addText(title, {
    x: 2.1, y: 0.08, w: 7.5, h: 0.74,
    fontSize: 22, fontFace: "Calibri", bold: true, color: textColor,
    align: "left", valign: "middle", margin: 0,
  });
}

function slide1_title(pres) {
  const s = pres.addSlide();
  s.background = { color: C.dark };

  s.addShape(pres.shapes.OVAL, { x: 7.5, y: -0.3, w: 3.0, h: 2.2, fill: { color: C.amber, transparency: 83 }, line: { color: C.amber, transparency: 83 } });
  s.addShape(pres.shapes.OVAL, { x: 8.0, y: 3.5,  w: 2.5, h: 2.5, fill: { color: C.coral, transparency: 85 }, line: { color: C.coral, transparency: 85 } });

  const lw = 3.2, lh = lw / LOGO_RATIO;
  s.addImage({ data: logoBase64, x: 0.5, y: 0.42, w: lw, h: lh });

  s.addText("AI-Powered Continuous Maternity Care", {
    x: 0.5, y: 1.6, w: 6.0, h: 0.38,
    fontSize: 10, fontFace: "Arial", bold: true, color: C.gold,
    align: "left", valign: "middle", margin: 0, charSpacing: 0.8,
  });

  s.addText("Presentation Title", {
    x: 0.5, y: 2.1, w: 9.0, h: 1.5,
    fontSize: 46, fontFace: "Calibri", bold: true,
    color: C.white, align: "left", valign: "top", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.68, w: 0.55, h: 0.07,
    fill: { color: C.coral }, line: { color: C.coral },
  });

  s.addText("Presenter name  ·  Organisation  ·  Date", {
    x: 0.5, y: 3.9, w: 8.0, h: 0.46,
    fontSize: 14, fontFace: "Arial", color: "B09070",
    align: "left", valign: "middle", margin: 0,
  });

  s.addText("Your AI companion for pregnancy & motherhood", {
    x: 0.5, y: 5.05, w: 9.0, h: 0.42,
    fontSize: 12, fontFace: "Arial", italic: true, color: C.gold,
    align: "left", margin: 0,
  });

  s.addNotes("Title slide. Replace 'Presentation Title', presenter/org/date.");
}

function slide2_section(pres) {
  const s = pres.addSlide();
  s.background = { color: C.coral };

  s.addShape(pres.shapes.OVAL, { x: 7.2, y: -0.5, w: 3.0, h: 2.5, fill: { color: "FFFFFF", transparency: 88 }, line: { color: "FFFFFF", transparency: 88 } });
  // bottom-left blob removed — logo lives there

  s.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 1.6, w: 1.4, h: 1.4,
    fill: { color: "FFFFFF", transparency: 80 },
    line: { color: "FFFFFF", transparency: 60 },
  });
  s.addText("01", {
    x: 0.5, y: 1.6, w: 1.4, h: 1.4,
    fontSize: 34, fontFace: "Calibri", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });

  s.addText("Section Title", {
    x: 2.3, y: 1.75, w: 7.2, h: 1.1,
    fontSize: 40, fontFace: "Calibri", bold: true, color: C.white,
    align: "left", valign: "middle", margin: 0,
  });

  s.addText("One-line section subtitle or context goes here", {
    x: 2.3, y: 3.0, w: 7.2, h: 0.5,
    fontSize: 14, fontFace: "Arial", color: C.white,
    align: "left", valign: "top", margin: 0,
  });

  s.addImage({ data: symbolBase64, x: 7.5, y: 2.8, w: 2.2, h: 2.2, transparency: 82 });

  const lw = 2.2, lh = lw / LOGO_RATIO;
  s.addImage({ data: logoBase64, x: 0.4, y: 5.625 - lh - 0.18, w: lw, h: lh });

  s.addNotes("Section divider. Change '01' to actual section number. Update title and subtitle.");
}

function slide3_content(pres) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(pres, s, "Slide Title", false);

  s.addText([
    { text: "Key Point One", options: { bold: true, color: C.coral, breakLine: true, fontSize: 15 } },
    { text: "Supporting detail explaining this point in one or two lines.\n", options: { color: C.muted, fontSize: 13, breakLine: true } },
    { text: "Key Point Two", options: { bold: true, color: C.amber, breakLine: true, fontSize: 15 } },
    { text: "Supporting detail explaining this point in one or two lines.\n", options: { color: C.muted, fontSize: 13, breakLine: true } },
    { text: "Key Point Three", options: { bold: true, color: C.olive, breakLine: true, fontSize: 15 } },
    { text: "Supporting detail explaining this point in one or two lines.", options: { color: C.muted, fontSize: 13 } },
  ], {
    x: 0.45, y: 1.1, w: 4.4, h: 4.1,
    fontFace: "Arial", align: "left", valign: "top", margin: 0,
  });

  const cards = [
    { label: "aayi Companion",      desc: "24×7 AI pregnancy & motherhood support",       color: C.amber },
    { label: "AI Clinical Summary", desc: "Full history ready before every consultation", color: C.coral },
    { label: "Doctor AI Co-Pilot",  desc: "Extends your practice beyond the clinic",     color: C.olive },
  ];
  const cardH = 1.3;
  const totalCardsH = cards.length * cardH;
  const contentH = 4.3;
  const gap = (contentH - totalCardsH) / (cards.length + 1);

  cards.forEach((c, i) => {
    const cy = 1.0 + gap + i * (cardH + gap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.1, y: cy, w: 4.5, h: cardH,
      fill: { color: C.cream }, line: { color: C.cream2 },
      shadow: SHADOW(), rectRadius: 0.1,
    });
    const dotSz = 0.42;
    const dotY = cy + (cardH - dotSz) / 2;
    s.addShape(pres.shapes.OVAL, {
      x: 5.28, y: dotY, w: dotSz, h: dotSz,
      fill: { color: c.color, transparency: 72 }, line: { color: c.color, transparency: 60 },
    });
    s.addText(c.label, {
      x: 5.85, y: cy + 0.14, w: 3.55, h: 0.4,
      fontSize: 13, fontFace: "Arial", bold: true, color: C.dark,
      align: "left", valign: "middle", margin: 0,
    });
    s.addText(c.desc, {
      x: 5.85, y: cy + 0.56, w: 3.55, h: 0.55,
      fontSize: 11, fontFace: "Arial", color: C.muted,
      align: "left", valign: "top", margin: 0,
    });
  });

  s.addNotes("Content slide. Replace key points and cards with actual content.");
}

function slide4_stats(pres) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(pres, s, "Impact in Numbers", true);

  const cardW = 2.95, cardH = 4.1;
  const gap = (10 - 3 * cardW) / 4;

  const stats = [
    { num: "60",  unit: "sec",        label: "AI Clinical Summary",   body: "Full pregnancy history,\nvitals & risk flags\nready before every visit", color: C.amber },
    { num: "280", unit: "days",       label: "Continuous Monitoring", body: "Nutrition, mood, kicks,\nsymptoms & medication\ntracked between visits",  color: C.coral },
    { num: "0",   unit: " extra hrs", label: "Your Time Cost",        body: "aayi works silently.\nYou receive intelligence.\nNo extra clinic load.",     color: C.amber },
  ];

  stats.forEach((st, i) => {
    const cx = gap + i * (cardW + gap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: 1.08, w: cardW, h: cardH,
      fill: { color: C.dark }, line: { color: C.dark },
      shadow: SHADOW(), rectRadius: 0.15,
    });
    s.addText([
      { text: st.num,  options: { color: st.color, bold: true,  fontSize: 52, fontFace: "Calibri" } },
      { text: st.unit, options: { color: C.gold,   bold: false, fontSize: 15, fontFace: "Arial"   } },
    ], { x: cx + 0.18, y: 1.22, w: cardW - 0.36, h: 1.05, valign: "middle", margin: 0 });

    s.addText(st.label.toUpperCase(), {
      x: cx + 0.18, y: 2.44, w: cardW - 0.36, h: 0.36,
      fontSize: 8, fontFace: "Arial", bold: true, color: C.gold,
      align: "left", valign: "top", charSpacing: 1, margin: 0,
    });
    s.addText(st.body, {
      x: cx + 0.18, y: 2.9, w: cardW - 0.36, h: 1.9,
      fontSize: 11, fontFace: "Arial", color: "CCBBAA",
      align: "left", valign: "top", margin: 0,
    });
  });

  s.addNotes("Stats slide. Update the three numbers and supporting text.");
}

function slide5_visual(pres) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(pres, s, "Feature or Topic", false);

  s.addText("Feature Headline", {
    x: 0.4, y: 1.1, w: 4.4, h: 0.75,
    fontSize: 26, fontFace: "Calibri", bold: true, color: C.dark,
    align: "left", valign: "top", margin: 0,
  });
  s.addText([
    { text: "First benefit or highlight",  options: { bullet: true, breakLine: true, color: C.dark, fontSize: 13 } },
    { text: "Second benefit or highlight", options: { bullet: true, breakLine: true, color: C.dark, fontSize: 13 } },
    { text: "Third benefit or highlight",  options: { bullet: true, breakLine: true, color: C.dark, fontSize: 13 } },
    { text: "Fourth benefit or highlight", options: { bullet: true, color: C.dark, fontSize: 13 } },
  ], { x: 0.4, y: 2.0, w: 4.4, h: 1.9, fontFace: "Arial", align: "left", valign: "top" });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 4.1, w: 4.4, h: 1.1,
    fill: { color: C.amber, transparency: 82 }, line: { color: C.amber, transparency: 68 },
    rectRadius: 0.1,
  });
  s.addText('"aayi that never replaces the doctor.\nIt extends the doctor\'s care."', {
    x: 0.55, y: 4.1, w: 4.1, h: 1.1,
    fontSize: 11, fontFace: "Arial", italic: true, color: C.dark,
    align: "center", valign: "middle", margin: 0,
  });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 1.05, w: 4.55, h: 4.15,
    fill: { color: C.cream }, line: { color: C.cream2 },
    rectRadius: 0.15,
  });
  s.addText("[Insert Screenshot\nor Illustration Here]", {
    x: 5.1, y: 1.05, w: 4.55, h: 4.15,
    fontSize: 13, fontFace: "Arial", color: C.muted,
    align: "center", valign: "middle", margin: 0,
  });

  s.addNotes("Feature/visual slide. Replace placeholder with actual app screenshot or illustration.");
}

function slide6_closing(pres) {
  const s = pres.addSlide();
  s.background = { color: C.dark };

  s.addShape(pres.shapes.OVAL, { x: 7.8, y: -0.5, w: 3.0, h: 2.4, fill: { color: C.amber, transparency: 83 }, line: { color: C.amber, transparency: 83 } });
  s.addShape(pres.shapes.OVAL, { x: -0.4, y: 4.3, w: 2.2, h: 1.8, fill: { color: C.coral, transparency: 85 }, line: { color: C.coral, transparency: 85 } });

  const lw = 3.0, lh = lw / LOGO_RATIO;
  s.addImage({ data: logoBase64, x: (10 - lw) / 2, y: 0.52, w: lw, h: lh });

  s.addText("Thank You", {
    x: 0.5, y: 1.6, w: 9.0, h: 1.5,
    fontSize: 56, fontFace: "Calibri", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });

  s.addText("Your AI companion for pregnancy & motherhood", {
    x: 0.5, y: 3.2, w: 9.0, h: 0.45,
    fontSize: 14, fontFace: "Arial", italic: true, color: C.gold,
    align: "center", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.82, w: 10, h: 0.805,
    fill: { color: C.coral, transparency: 12 }, line: { color: C.coral, transparency: 12 },
  });
  s.addText("aayi.ai   ·   Book a live demo   ·   contact@aayi.ai", {
    x: 0.4, y: 4.82, w: 9.2, h: 0.805,
    fontSize: 14, fontFace: "Arial", color: C.white, bold: true,
    align: "center", valign: "middle", margin: 0,
  });

  s.addNotes("Thank you slide. Update contact details and website URL.");
}

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "aayi";
  pres.title  = "aayi Branding Template";

  slide1_title(pres);
  slide2_section(pres);
  slide3_content(pres);
  slide4_stats(pres);
  slide5_visual(pres);
  slide6_closing(pres);

  const out = "/Users/apple/Downloads/aayi-branding-template.pptx";
  await pres.writeFile({ fileName: out });
  console.log("Saved:", out);
})();
