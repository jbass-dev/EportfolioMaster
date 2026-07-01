const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, TabStopType, TabStopPosition, LevelFormat
} = require('docx');
const fs = require('fs');

const ACCENT = '6B4E2E';
const BLACK  = '000000';
const GRAY   = '444444';

// Reusable divider line under section headers
function divider() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 1 } },
    spacing: { after: 100 },
    children: []
  });
}

// Section header (e.g. EXPERIENCE)
function sectionHeader(text) {
  return [
    new Paragraph({
      spacing: { before: 220, after: 60 },
      children: [new TextRun({ text, bold: true, size: 22, color: ACCENT, font: 'Arial' })]
    }),
    divider()
  ];
}

// Job title line — title bold, date plain (consistent throughout)
function jobLine(title, date) {
  const children = [new TextRun({ text: title, bold: true, size: 20, color: BLACK, font: 'Arial' })];
  if (date) children.push(new TextRun({ text: ` (${date})`, bold: false, size: 20, color: GRAY, font: 'Arial' }));
  return new Paragraph({ spacing: { before: 140, after: 40 }, children });
}

// Bullet point
function bullet(text) {
  return new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 40 },
    children: [new TextRun({ text, size: 20, color: BLACK, font: 'Arial' })]
  });
}

// Project line: bold name — italic stack. description
function projectLine(name, stack, description, url) {
  return new Paragraph({
    spacing: { after: 80 },
    children: [
      new TextRun({ text: name, bold: true, size: 20, color: BLACK, font: 'Arial' }),
      new TextRun({ text: ' — ', size: 20, color: BLACK, font: 'Arial' }),
      new TextRun({ text: stack + '.', italics: true, size: 20, color: BLACK, font: 'Arial' }),
      new TextRun({ text: ' ' + description + (url ? '. Live at ' : ''), size: 20, color: BLACK, font: 'Arial' }),
      ...(url ? [new TextRun({ text: url, size: 20, color: BLACK, font: 'Arial' })] : [])
    ]
  });
}

// Skills line: bold label, plain value
function skillLine(label, value) {
  return new Paragraph({
    spacing: { after: 60 },
    children: [
      new TextRun({ text: label + ': ', bold: true, size: 20, color: BLACK, font: 'Arial' }),
      new TextRun({ text: value, size: 20, color: BLACK, font: 'Arial' })
    ]
  });
}

const doc = new Document({
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{
        level: 0,
        format: LevelFormat.BULLET,
        text: '•',
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 480, hanging: 240 } } }
      }]
    }]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    children: [
      // ── NAME ──
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: 'John Bass', bold: true, size: 40, color: BLACK, font: 'Arial' })]
      }),
      // Subtitle
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: 'Full-Stack Software Engineer — React · Next.js · TypeScript', size: 22, color: ACCENT, font: 'Arial' })]
      }),
      // Contact
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 160 },
        children: [new TextRun({
          text: 'Coyle, Oklahoma • bassjohn159@yahoo.com • github.com/babyboy198331-coder • linkedin.com/in/john-b-1182183ba',
          size: 18, color: GRAY, font: 'Arial'
        })]
      }),

      // ── PROFESSIONAL SUMMARY ──
      ...sectionHeader('PROFESSIONAL SUMMARY'),
      new Paragraph({
        spacing: { after: 0 },
        children: [new TextRun({
          text: 'Full-Stack Software Engineer building responsive, pixel-perfect web applications with React, Next.js, TypeScript, and modern JavaScript, backed by Node.js/Express, PostgreSQL, and Docker on the backend. Experienced in REST API integration, state management, authentication, and payment flows, with deployed production projects and a focus on accessibility and performance (90+ Lighthouse scores). Brings seven years of management experience and a disciplined, deadline-driven work ethic to every build.',
          size: 20, color: BLACK, font: 'Arial'
        })]
      }),

      // ── TECHNICAL SKILLS ──
      ...sectionHeader('TECHNICAL SKILLS'),
      skillLine('Languages', 'JavaScript (ES6+), TypeScript, HTML5, CSS3'),
      skillLine('Frameworks & Libraries', 'React, Next.js, Redux, Tailwind CSS, Vite, React Router, Axios'),
      skillLine('Tools & Platforms', 'Git, GitHub, Vercel, Firebase, Stripe, REST APIs, EmailJS'),
      skillLine('Practices', 'Responsive design, API integration, debugging, accessibility (WCAG), performance optimization'),

      // ── EXPERIENCE ──
      ...sectionHeader('EXPERIENCE'),
      jobLine('Software Development Intern — Skinstric', '2026'),
      bullet('Built an AI skin-analysis platform to a pixel-perfect Figma spec using React and Vite'),
      bullet('Integrated live camera capture (getUserMedia) and base64 image upload to an AI REST API'),
      bullet('Developed an interactive demographics dashboard with editable confidence scores, fully responsive across desktop, tablet, and mobile'),
      bullet('Collaborated through Git/GitHub workflows and deployed to Vercel'),

      // ── PROJECTS ──
      ...sectionHeader('PROJECTS'),
      projectLine('OfferBound', 'React, Vite, Firebase Auth, Cloud Firestore',
        'Original job-application tracker built end to end — Google sign-in, per-user Firestore data, stats dashboard, follow-up reminders',
        'offerbound.vercel.app'),
      projectLine('Summarist', 'Next.js, TypeScript, Redux, Firebase, Stripe',
        'Subscription reading app with authentication, state management, and payment integration'),
      projectLine('Cinegalaxy', 'Next.js, TypeScript, Tailwind CSS',
        'Movie browsing app with responsive styling and a production Vercel workflow'),
      projectLine('NFT Marketplace', 'React, Firebase, Axios, React Router',
        'Marketplace with routing, reusable components, and API-driven data'),
      projectLine('AI Chat Interface', 'Next.js, TypeScript, Tailwind CSS',
        'Deployed AI chat interface clone with modern React patterns'),

      // ── ADDITIONAL EXPERIENCE ──
      ...sectionHeader('ADDITIONAL EXPERIENCE'),
      jobLine('Sandblaster & Monument Installer — Nelson Monument', '2025 – 2026'),
      bullet('Precision engraving, installation, and quality control under strict deadlines'),
      jobLine('Shop Manager — Shines Kwik Lube', '2018 – 2025'),
      bullet('Managed daily operations, inventory, and customer service; trained and supervised staff'),
      jobLine('Maintenance Technician — OSU Housing', 'Contract'),
      bullet('Structural, plumbing, electrical, and cosmetic repairs in residential facilities'),

      // ── EDUCATION ──
      ...sectionHeader('EDUCATION'),
      jobLine('Frontend Simplified — Frontend Development Program', '2026 – Present'),
      bullet('React, Next.js, TypeScript, REST APIs, version control, and deployment workflows'),
      jobLine('Redmond High School — Diploma', '2001'),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('public/Document.docx', buffer);
  console.log('Done! Saved to public/Document.docx');
});
