import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const codesPath = path.join(
      process.cwd(), 
      'public/Nouvelle structure json/Codes.json'
    );
    
    if (!fs.existsSync(codesPath)) {
      return res.status(404).json({ error: 'Codes.json non trouvé' });
    }
    
    const data = fs.readFileSync(codesPath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
}
