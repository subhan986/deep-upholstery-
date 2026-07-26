import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // AI Furniture Restoration Consultation Endpoint
  app.post('/api/restore-consult', async (req, res) => {
    try {
      const { furnitureCategory, approxAge, issueDescription, desiredOutcome, hasPetsOrKids } = req.body;

      if (!issueDescription) {
        return res.status(400).json({ error: 'Please describe the condition or issue with your furniture.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Provide structured artisan recommendation fallback if API Key is not configured yet
        return res.json({
          structuralAnalysis: `Based on your description of a ${approxAge || 'vintage'} ${furnitureCategory || 'furniture piece'}, common issues include wood joint stress, spring fatigue, and fabric wear. A full teardown inspection is recommended.`,
          recommendedServices: [
            'Raw Frame Inspection & Joint Doweling',
            '8-Way Hand-Tied Coil Spring Re-Lacing',
            hasPetsOrKids ? 'High-Performance Crypton or Leather Cover' : 'High-Density Foam & Feather Top Core Wrap'
          ],
          materialRecommendations: hasPetsOrKids
            ? ['Crypton Performance Weave', 'Tuscan Full-Grain Leather']
            : ['Royal Cotton Velvet', 'Belgian Heavyweight Linen', 'Alps Wool Bouclé'],
          estimatedDifficulty: 'High Precision',
          estimatedCraftHours: '20 - 35 Artisanal Hours',
          longevityExpectancy: '25+ Years with proper structural rebuild',
          expertTips: [
            'Test hardwood frame joints for flex before applying new webbing.',
            'Opt for high-density 2.8lb Qualux foam core to prevent sagging.',
            hasPetsOrKids ? 'Apply nano-stain defense seal for stain and claw resistance.' : 'Condition natural fabrics with UV protective spray.'
          ]
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `
You are a Master Extraction Cleaning & Stain Removal Technician with 25 years of experience at "Restore DEEP Carpet & Upholstery Cleaning".
Analyze this customer's carpet or upholstery stain description and provide a professional, highly detailed extraction cleaning diagnostic.

Customer Input Details:
- Furniture Type: ${furnitureCategory || 'General Furniture'}
- Approximate Age / Era: ${approxAge || 'Unknown'}
- Condition & Damage Description: "${issueDescription}"
- Desired Outcome: ${desiredOutcome || 'Full Restoration'}
- Household Environment: ${hasPetsOrKids ? 'Has pets or young kids (Needs durable/stain-resistant materials)' : 'Standard adult household'}

Return a clean JSON object with EXACTLY the following keys:
1. "structuralAnalysis": Detailed 3-4 sentence professional breakdown of probable internal frame, spring, foam, and fabric status based on symptoms.
2. "recommendedServices": Array of 3-4 specific service steps (e.g. "8-Way Hand-Tied Coil Spring Lacing", "Joint Doweling & Clamp", "High-Density Foam Core").
3. "materialRecommendations": Array of 3 recommended fabric or leather types best suited for this piece and household environment.
4. "estimatedDifficulty": String, one of ["Moderate", "High Precision", "Master Restoration"].
5. "estimatedCraftHours": String range of labor hours (e.g., "18 - 26 Craftsman Hours").
6. "longevityExpectancy": String expectation (e.g., "30+ Years with Solid Oak Rebuild").
7. "expertTips": Array of 3 actionable artisan care and restoration advice points.

Respond ONLY with valid JSON, no markdown code blocks or additional text.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('Empty response from AI model');
      }

      const parsedData = JSON.parse(responseText);
      return res.json(parsedData);

    } catch (err: any) {
      console.error('Error in AI restore consult:', err);
      return res.status(500).json({
        error: 'Failed to process AI restoration diagnostic',
        details: err?.message || 'Internal error'
      });
    }
  });

  // Quote Generation & Submission Endpoint
  app.post('/api/quote', (req, res) => {
    const quoteData = req.body;
    const refNumber = 'DRU-' + Math.floor(100000 + Math.random() * 900000);
    return res.json({
      success: true,
      quoteRef: refNumber,
      message: 'Quote estimate created successfully.',
      createdAt: new Date().toISOString(),
      details: quoteData
    });
  });

  // Swatch Request Endpoint
  app.post('/api/swatch-request', (req, res) => {
    const { name, email, address, selectedSwatches } = req.body;
    const trackingId = 'SWATCH-' + Math.floor(10000 + Math.random() * 90000);
    return res.json({
      success: true,
      trackingId,
      message: `Free swatch sample kit dispatched to ${address || 'your address'}!`,
      swatchCount: selectedSwatches ? selectedSwatches.length : 0
    });
  });

  // Serve Vite in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Deep Restore Upholstery server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
