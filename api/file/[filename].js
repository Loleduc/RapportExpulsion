import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { filename } = req.query;
  
  if (!filename || !filename.endsWith('.json') || filename.includes('..')) {
    return res.status(400).json({ error: 'Nom de fichier invalide' });
  }

  const filepath = path.join(process.cwd(), 'json', filename);

  try {
    switch (req.method) {
      case 'GET':
        if (!fs.existsSync(filepath)) {
          return res.status(404).json({ error: 'Fichier non trouvé' });
        }
        const data = fs.readFileSync(filepath, 'utf8');
        return res.status(200).json(JSON.parse(data));

      case 'POST':
      case 'PUT':
        const jsonDir = path.join(process.cwd(), 'json');
        if (!fs.existsSync(jsonDir)) {
          fs.mkdirSync(jsonDir, { recursive: true });
        }
        fs.writeFileSync(filepath, JSON.stringify(req.body, null, 2));
        return res.status(200).json({ 
          success: true, 
          message: 'Fichier sauvegardé' 
        });

      case 'DELETE':
        if (!fs.existsSync(filepath)) {
          return res.status(404).json({ error: 'Fichier non trouvé' });
        }
        fs.unlinkSync(filepath);
        return res.status(200).json({ 
          success: true, 
          message: 'Fichier supprimé' 
        });

      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
