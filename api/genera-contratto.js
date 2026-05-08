export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { tipoContratto, dettagli } = req.body;
  const tipo = tipoContratto || "Contratto generico"

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [{
        role: 'user',
        content: `Sei un esperto legale italiano. Genera un contratto professionale e completo in italiano per: ${tipo}.\n\nDettagli aggiuntivi: ${dettagli || 'nessuno'}\n\nIl contratto deve essere formalmente corretto, includere tutte le clausole standard italiane, e pronto per essere firmato.\n\nIMPORTANTE: Non usare markdown, asterischi, hashtag o simboli di formattazione. Scrivi solo testo normale con titoli in MAIUSCOLO.`
      }]
    })
  });

  const data = await response.json();
  if (!response.ok) return res.status(500).json({ error: data.error?.message || 'Errore API' });

  res.status(200).json({ contratto: data.content[0].text });
}
