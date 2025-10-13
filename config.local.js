/**
 * Configuration Locale et Sensible
 * * !!! ATTENTION : CE FICHIER NE DOIT JAMAIS ÊTRE COMMITTÉ SUR GITHUB !!!
 * Il est ignoré grâce à .gitignore.
 * * Les variables globales (window.__github_...) sont définies ici 
 * pour être lues par la fonction uploadToGitHub() dans index.html.
 */

// --- 1. Remplacez les valeurs ci-dessous ---
const config = {
    // Le Jeton d'Accès Personnel (PAT) que vous avez généré sur GitHub
    PAT: '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', 
    
    // Votre nom d'utilisateur GitHub (Owner du dépôt)
    OWNER: 'Loleduc',
    
    // Le nom exact du dépôt où vous voulez téléverser les fichiers
    REPO: 'RapportExpulsion', 
    
    // Le nom du dossier dans ce dépôt (ex: 'json')
    FOLDER: 'json' 
};

// --- 2. Injection des valeurs dans les variables globales ---
// Le script principal (index.html) lira ces variables.
window.__github_pat = config.PAT;
window.__github_owner = config.OWNER;
window.__github_repo = config.REPO;
window.__github_folder = config.FOLDER;

console.log('Configuration locale chargée avec succès.');
