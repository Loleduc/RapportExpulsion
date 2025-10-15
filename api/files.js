import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const jsonDir = path.join(process.cwd(), 'json');
    
    if (!fs.existsSync(jsonDir)) {
      return res.status(200).json([]);
    }

    const files = fs.readdirSync(jsonDir)
      .filter(file => file.endsWith('.json'))
      .sort();
    
    res.status(200).json(files);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
}
