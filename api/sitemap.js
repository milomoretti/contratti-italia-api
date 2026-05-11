export default function handler(req, res) {
  const BASE = "https://contratti-italia.framer.website/contratti"

  const slugs = [
    "contratto-freelance-modello",
    "contratto-freelance-senza-partita-iva",
    "modello-contratto-freelance",
    "contratto-freelance-fac-simile",
    "nda-template-italiano",
    "accordo-riservatezza-modello",
    "accordo-riservatezza-fac-simile",
    "modello-nda-startup",
    "nda-tra-aziende-modello",
    "privacy-policy-sito-web-gratis",
    "privacy-policy-ecommerce-modello",
    "generatore-privacy-policy-italiano",
    "privacy-policy-blog-gratis",
    "termini-e-condizioni-sito-web-modello",
    "contratto-consulenza-professionale-modello",
    "contratto-consulenza-informatica-modello",
    "lettera-di-incarico-professionale",
    "lettera-incarico-consulente-modello",
    "contratto-collaborazione-occasionale-modello",
    "contratto-collaborazione-occasionale-fac-simile",
    "contratto-collaborazione-a-progetto",
    "contratto-di-agenzia-commerciale-modello",
    "contratto-agente-di-commercio-fac-simile",
    "procura-speciale-modello",
    "procura-generale-fac-simile",
    "contratto-affitto-commerciale-modello",
    "contratto-locazione-commerciale-fac-simile",
    "contratto-comodato-d-uso-gratuito-modello",
    "contratto-vendita-auto-privati-modello",
    "contratto-cessione-quote-srl-modello",
    "accordo-di-partnership-aziendale-modello",
    "memorandum-of-understanding-italiano",
    "lettera-di-intenti-commerciale-modello",
    "contratto-di-riservatezza-modello",
    "contratto-sviluppo-software-modello",
    "contratto-web-design-modello",
    "contratto-marketing-digitale-modello",
    "accordo-investimento-startup-modello",
    "contratto-socio-fondatore-modello",
    "patto-parasociale-modello",
    "contratto-fotografo-professionista",
    "contratto-grafico-freelance",
    "contratto-copywriter-modello",
    "contratto-social-media-manager",
    "contratto-traduzione-modello",
    "contratto-prestazione-occasionale-modello",
    "ricevuta-prestazione-occasionale",
    "contratto-lavoro-dipendente-modello",
    "contratto-apprendistato-modello",
    "contratto-tirocinio-modello",
    "contratto-subappalto-modello",
    "contratto-fornitura-modello",
    "contratto-appalto-modello",
    "contratto-di-vendita-modello",
  ]

  const urls = slugs
    .map(
      (slug) => `
  <url>
    <loc>${BASE}/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://contratti-italia.framer.website</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>${urls}
</urlset>`

  res.setHeader("Content-Type", "application/xml")
  res.setHeader("Cache-Control", "public, max-age=86400")
  res.status(200).send(xml)
}
