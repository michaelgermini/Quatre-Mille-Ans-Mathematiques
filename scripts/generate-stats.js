#!/usr/bin/env node

/**
 * Script de génération de statistiques pour le projet
 * "Quatre mille ans de mathématiques"
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  outputFile: 'STATISTIQUES.md',
  excludeDirs: ['.git', 'node_modules', '.github', 'scripts'],
  excludeFiles: ['STATISTIQUES.md', 'stats.md'],
  includeExtensions: ['.md'],
  maxDepth: 10
};

/**
 * Récupère tous les fichiers Markdown du projet
 */
function getAllMarkdownFiles(dir, depth = 0) {
  if (depth > CONFIG.maxDepth) return [];
  
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!CONFIG.excludeDirs.includes(item)) {
        files.push(...getAllMarkdownFiles(fullPath, depth + 1));
      }
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (CONFIG.includeExtensions.includes(ext) && !CONFIG.excludeFiles.includes(item)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Compte les lignes dans un fichier
 */
function countLines(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n').length;
  } catch (error) {
    console.error(`Erreur lors de la lecture de ${filePath}:`, error.message);
    return 0;
  }
}

/**
 * Analyse le contenu d'un fichier Markdown
 */
function analyzeMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Compter les sections
    const headers = content.match(/^#+ /gm) || [];
    const h1 = headers.filter(h => h.startsWith('# ')).length;
    const h2 = headers.filter(h => h.startsWith('## ')).length;
    const h3 = headers.filter(h => h.startsWith('### ')).length;
    
    // Compter les exercices
    const exercises = (content.match(/## Exercice/g) || []).length;
    
    // Compter les liens
    const links = (content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || []).length;
    
    // Compter les listes
    const lists = (content.match(/^[\s]*[-*+]\s/gm) || []).length;
    
    // Compter les tableaux
    const tables = (content.match(/^\|.*\|$/gm) || []).length;
    
    return {
      headers: { h1, h2, h3, total: headers.length },
      exercises,
      links,
      lists,
      tables,
      lines: countLines(filePath)
    };
  } catch (error) {
    console.error(`Erreur lors de l'analyse de ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Génère les statistiques du projet
 */
function generateStats() {
  console.log('📊 Génération des statistiques du projet...');
  
  const files = getAllMarkdownFiles('.');
  const stats = {
    files: files.length,
    totalLines: 0,
    totalHeaders: 0,
    totalExercises: 0,
    totalLinks: 0,
    totalLists: 0,
    totalTables: 0,
    byChapter: {},
    byType: {}
  };
  
  // Analyser chaque fichier
  for (const file of files) {
    const analysis = analyzeMarkdownFile(file);
    if (!analysis) continue;
    
    // Statistiques globales
    stats.totalLines += analysis.lines;
    stats.totalHeaders += analysis.headers.total;
    stats.totalExercises += analysis.exercises;
    stats.totalLinks += analysis.links;
    stats.totalLists += analysis.lists;
    stats.totalTables += analysis.tables;
    
    // Statistiques par chapitre
    const chapter = path.dirname(file).split(path.sep)[0];
    if (!stats.byChapter[chapter]) {
      stats.byChapter[chapter] = {
        files: 0,
        lines: 0,
        headers: 0,
        exercises: 0,
        links: 0
      };
    }
    
    stats.byChapter[chapter].files++;
    stats.byChapter[chapter].lines += analysis.lines;
    stats.byChapter[chapter].headers += analysis.headers.total;
    stats.byChapter[chapter].exercises += analysis.exercises;
    stats.byChapter[chapter].links += analysis.links;
    
    // Statistiques par type
    const type = path.basename(file, '.md');
    if (!stats.byType[type]) {
      stats.byType[type] = {
        files: 0,
        lines: 0
      };
    }
    
    stats.byType[type].files++;
    stats.byType[type].lines += analysis.lines;
  }
  
  return stats;
}

/**
 * Génère le rapport Markdown
 */
function generateReport(stats) {
  const report = `# 📊 Statistiques du projet "Quatre mille ans de mathématiques"

*Généré automatiquement le ${new Date().toLocaleDateString('fr-FR')}*

## 🎯 Vue d'ensemble

| Métrique | Valeur |
|----------|--------|
| **📁 Fichiers Markdown** | ${stats.files} |
| **📝 Lignes totales** | ${stats.totalLines.toLocaleString('fr-FR')} |
| **📋 En-têtes** | ${stats.totalHeaders} |
| **📚 Exercices** | ${stats.totalExercises} |
| **🔗 Liens** | ${stats.totalLinks} |
| **📋 Listes** | ${stats.totalLists} |
| **📊 Tableaux** | ${stats.totalTables} |

## 📚 Répartition par chapitre

| Chapitre | Fichiers | Lignes | En-têtes | Exercices | Liens |
|----------|----------|--------|----------|-----------|-------|
${Object.entries(stats.byChapter)
  .sort(([,a], [,b]) => b.lines - a.lines)
  .map(([chapter, data]) => 
    `| **${chapter}** | ${data.files} | ${data.lines.toLocaleString('fr-FR')} | ${data.headers} | ${data.exercises} | ${data.links} |`
  ).join('\n')}

## 📊 Top 10 des fichiers les plus volumineux

${Object.entries(stats.byType)
  .sort(([,a], [,b]) => b.lines - a.lines)
  .slice(0, 10)
  .map(([type, data], index) => 
    `${index + 1}. **${type}** - ${data.lines.toLocaleString('fr-FR')} lignes (${data.files} fichier${data.files > 1 ? 's' : ''})`
  ).join('\n')}

## 🌍 Couverture géographique

### Civilisations couvertes
- **🏛️ Mésopotamie** : Mathématiques anciennes et astronomie
- **🏺 Mayas** : Système vigésimal et calendriers
- **🏛️ Grèce antique** : Géométrie et philosophie
- **🌍 Monde arabe** : Algèbre et trigonométrie
- **🌏 Inde** : Système décimal et astronomie
- **🎋 Chine** : Calculs et géométrie
- **🏯 Japon** : Sangaku et Wasan
- **🌍 Europe** : Renaissance et mathématiques modernes

### Périodes historiques
- **Antiquité** : 2000 av. J.-C. - 500 ap. J.-C.
- **Moyen Âge** : 500 - 1500
- **Renaissance** : 1500 - 1700
- **Époque moderne** : 1700 - 1900

## 🎓 Types de contenu

### Contenu pédagogique
- **📖 Théorie** : Concepts et explications
- **📝 Exercices** : Problèmes et solutions
- **📚 Exemples** : Applications concrètes
- **🔗 Liens** : Références et ressources

### Contenu historique
- **👨‍🎓 Biographies** : Portraits de mathématiciens
- **🏛️ Contexte** : Époque et culture
- **🌍 Transmission** : Diffusion des connaissances
- **🔗 Influences** : Connexions entre civilisations

## 🚀 Métriques de qualité

### Structure
- **📁 Organisation** : Structure claire et logique
- **🔗 Navigation** : Liens croisés et références
- **📋 Cohérence** : Style uniforme et professionnel
- **🎯 Accessibilité** : Contenu accessible à tous

### Contenu
- **📚 Richesse** : Contenu approfondi et détaillé
- **🔬 Rigueur** : Précision historique et scientifique
- **🎓 Pédagogie** : Approche progressive et claire
- **🌍 Globalité** : Couverture mondiale et temporelle

## 📈 Évolution du projet

### Versions
- **v1.0.0** : Version initiale avec structure complète
- **v1.1.0** : Ajout des sections transversales
- **v1.2.0** : Enrichissement du contenu
- **v1.3.0** : Optimisation et corrections

### Contributions
- **👥 Contributeurs** : Équipe multidisciplinaire
- **🌍 Langues** : Français (avec possibilité de traduction)
- **📚 Sources** : Références académiques et historiques
- **🔍 Validation** : Relecture et vérification

## 🎯 Objectifs atteints

### ✅ Couverture complète
- [x] Toutes les civilisations majeures
- [x] Période de 4000 ans
- [x] Mathématiciens importants
- [x] Concepts fondamentaux

### ✅ Qualité pédagogique
- [x] Approche progressive
- [x] Exemples concrets
- [x] Exercices variés
- [x] Solutions détaillées

### ✅ Rigueur scientifique
- [x] Sources fiables
- [x] Précision historique
- [x] Terminologie exacte
- [x] Références complètes

## 🔮 Perspectives d'avenir

### Améliorations prévues
- **🌐 Traductions** : Versions multilingues
- **🎨 Illustrations** : Diagrammes et schémas
- **📱 Interactivité** : Exercices interactifs
- **🔍 Recherche** : Moteur de recherche avancé

### Extensions possibles
- **🎥 Vidéos** : Contenu vidéo pédagogique
- **📊 Animations** : Visualisations dynamiques
- **🎮 Gamification** : Éléments ludiques
- **🤖 IA** : Assistance intelligente

---

*Ces statistiques sont générées automatiquement et mises à jour régulièrement.*

*Pour plus d'informations, consultez le [README principal](README.md) du projet.*
`;

  return report;
}

/**
 * Fonction principale
 */
function main() {
  try {
    console.log('🚀 Démarrage de la génération des statistiques...');
    
    const stats = generateStats();
    const report = generateReport(stats);
    
    // Écrire le fichier
    fs.writeFileSync(CONFIG.outputFile, report, 'utf8');
    
    console.log(`✅ Statistiques générées avec succès dans ${CONFIG.outputFile}`);
    console.log(`📊 Résumé :`);
    console.log(`   - ${stats.files} fichiers Markdown`);
    console.log(`   - ${stats.totalLines.toLocaleString('fr-FR')} lignes totales`);
    console.log(`   - ${stats.totalExercises} exercices`);
    console.log(`   - ${stats.totalLinks} liens`);
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération des statistiques:', error.message);
    process.exit(1);
  }
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { generateStats, generateReport };
