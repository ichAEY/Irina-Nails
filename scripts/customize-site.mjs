import { readFileSync, writeFileSync, appendFileSync } from "node:fs";
import site from "../site-data.mjs";

const mobilePath = "app/mobile-claytone.tsx";
const layoutPath = "app/layout.tsx";
const tuningPath = "app/site-tuning.css";
const nextConfigPath = "next.config.ts";

let mobile = readFileSync(mobilePath, "utf8");

mobile = mobile.replace(
  "const promotions = [];",
  "const promotions: Array<{ title: string; highlight: string; description: string; period: string; image: string; alt: string }> = [];",
);

mobile = mobile
  .replace(/<h2>До\s*\/\s*после<\/h2>/g, `<h2>Работы ${site.master.genitive || site.master.name}</h2>`)
  .replace(/Реальные примеры обработки, формы и покрытия/g, `Реальные фотографии работ ${site.master.genitive || site.master.name}`)
  .replace("const lightboxItems = [...beforeAfter, ...galleryWorks];", "const lightboxItems = galleryWorks;")
  .replace("<blockquote>«{review.text}»</blockquote>", "<blockquote>{review.text}</blockquote>");

if (!site.services.pedicure?.length) {
  mobile = mobile.replace(
    /<button className=\{`mct-tab\$\{category === "pedicure"[\s\S]*?<\/button>/,
    "",
  );
}

const icon = (label) => `<span className="mct-contact-icon" aria-hidden="true"><strong>${label}</strong></span>`;
const arrow = `<i className="mct-link-arrow" aria-hidden="true" />`;
const cards = [];

cards.push(`<a className="mct-final-secondary" href="${site.contacts.phoneHref}">
  ${icon("☎")}
  <span className="mct-contact-copy"><strong>Позвонить</strong><small>${site.master.dative || site.master.name} · ${site.contacts.phoneDisplay}</small></span>${arrow}
</a>`);

if (site.contacts.personalTelegramUrl) {
  cards.push(`<a className="mct-final-secondary" href="${site.contacts.personalTelegramUrl}" target="_blank" rel="noopener noreferrer">
    ${icon("TG")}
    <span className="mct-contact-copy"><strong>Telegram</strong><small>Написать ${site.master.dative || site.master.name}</small></span>${arrow}
  </a>`);
}

if (site.extraContacts?.whatsappUrl) {
  cards.push(`<a className="mct-final-secondary" href="${site.extraContacts.whatsappUrl}" target="_blank" rel="noopener noreferrer">
    ${icon("WA")}
    <span className="mct-contact-copy"><strong>WhatsApp</strong><small>Написать ${site.master.dative || site.master.name}</small></span>${arrow}
  </a>`);
}

if (site.extraContacts?.vkUrl) {
  cards.push(`<a className="mct-final-secondary" href="${site.extraContacts.vkUrl}" target="_blank" rel="noopener noreferrer">
    ${icon("VK")}
    <span className="mct-contact-copy"><strong>ВКонтакте</strong><small>Открыть страницу</small></span>${arrow}
  </a>`);
}

cards.push(`<a className="mct-final-secondary" href={mapUrl} target="_blank" rel="noopener noreferrer">
  ${icon("⌖")}
  <span className="mct-contact-copy"><strong>Яндекс Карты</strong><small>Отзывы и маршрут</small></span>${arrow}
</a>`);

const contactGrid = `<div className="mct-final-contact-grid" aria-label="Все способы связи с ${site.brand.name}">
${cards.join("\n")}
</div>`;

mobile = mobile.replace(
  /<div className="mct-final-contact-grid"[\s\S]*?<\/div>\n\s*<\/div>/,
  `${contactGrid}\n              </div>`,
);

writeFileSync(mobilePath, mobile, "utf8");

let layout = readFileSync(layoutPath, "utf8");
layout = layout
  .replace(/const yandexMetrikaCode = `[\s\S]*?`;\n\n/, "")
  .replace(/\n\s*<meta\s+httpEquiv="Content-Security-Policy"[\s\S]*?\/>/, "")
  .replace(/\n\s*<script\s+type="text\/javascript"[\s\S]*?dangerouslySetInnerHTML=\{\{ __html: yandexMetrikaCode \}\}[\s\S]*?\/>/, "")
  .replace(/\n\s*<noscript>[\s\S]*?<\/noscript>/, "")
  .replace(/\n\s*<a\s+id="yclients-booking-proxy"[\s\S]*?\/>/, "")
  .replace(/\n\s*<script src="tanem-metrika-events\.js[^>]*\/>/, "")
  .replace(/\n\s*<script\s+type="text\/javascript"[\s\S]*?src="\/noop\.js"[\s\S]*?\/>/, "");
writeFileSync(layoutPath, layout, "utf8");

writeFileSync(
  nextConfigPath,
  `import type { NextConfig } from "next";\n\nconst isGitHubPages = process.env.GITHUB_ACTIONS === "true";\n\nconst nextConfig: NextConfig = {\n  ...(isGitHubPages\n    ? {\n        output: "export",\n        trailingSlash: true,\n        images: { unoptimized: true },\n      }\n    : {}),\n};\n\nexport default nextConfig;\n`,
  "utf8",
);

let extraCss = `
/* Customer-specific data cleanup. The visual TANEM template remains unchanged. */
.mct-promotions,
a[href="#mobile-promotions"],
a.dct-top-icon[href=""],
a.mct-final-secondary[href=""],
.mct-ba-stage,
.mct-gallery-content > h3:first-of-type,
.mct-gallery-ba,
.mct-ba-labels {
  display: none !important;
}

.mct-final-contact-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
}

.mct-contact-icon > strong {
  font-size: 12px;
  letter-spacing: -0.03em;
}
`;

if (!site.master.experienceYears) {
  extraCss += `
.mct-stats .mct-stat:first-child,
.mct-about-experience {
  display: none !important;
}
.mct-stats {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
}
`;
}

appendFileSync(tuningPath, extraCss, "utf8");

console.log(`TANEM customer cleanup applied for ${site.brand.name}.`);
