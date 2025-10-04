# 🤝 Guide de contribution

Merci de votre intérêt à contribuer au projet "Quatre mille ans de mathématiques" ! Ce guide vous aidera à comprendre comment contribuer efficacement au projet.

## 📋 Table des matières

- [Code de conduite](#code-de-conduite)
- [Types de contributions](#types-de-contributions)
- [Processus de contribution](#processus-de-contribution)
- [Standards de qualité](#standards-de-qualité)
- [Structure du projet](#structure-du-projet)
- [Conventions de nommage](#conventions-de-nommage)
- [Workflow Git](#workflow-git)

## 📜 Code de conduite

### Nos engagements

En participant à ce projet, vous vous engagez à maintenir un environnement accueillant et respectueux pour tous, indépendamment de :

- L'âge, la taille, le handicap, l'origine ethnique
- Les caractéristiques sexuelles, l'identité et l'expression de genre
- Le niveau d'expérience, l'éducation, le statut socio-économique
- La nationalité, l'apparence personnelle, la race
- La religion, l'identité et l'orientation sexuelle

### Comportements attendus

- ✅ **Respect mutuel** : Traitez tout le monde avec respect et considération
- ✅ **Collaboration** : Travaillez ensemble de manière constructive
- ✅ **Ouverture** : Acceptez les critiques constructives et les différentes perspectives
- ✅ **Empathie** : Soyez compréhensif envers les autres membres de la communauté

### Comportements inacceptables

- ❌ **Harcèlement** : Tout comportement de harcèlement sous quelque forme que ce soit
- ❌ **Discrimination** : Commentaires discriminatoires ou préjudiciables
- ❌ **Intimidation** : Intimidation publique ou privée
- ❌ **Spam** : Envoi de messages non sollicités ou répétitifs

## 🎯 Types de contributions

### 📝 Amélioration du contenu

#### Corrections et améliorations
- **Corrections d'erreurs** : Typos, erreurs de grammaire, fautes de frappe
- **Amélioration de la clarté** : Reformulation pour une meilleure compréhension
- **Ajout d'exemples** : Nouveaux exemples concrets et illustratifs
- **Mise à jour des informations** : Actualisation des données historiques

#### Nouveau contenu
- **Nouveaux chapitres** : Ajout de civilisations ou de mathématiciens
- **Sections transversales** : Nouvelles connexions et influences
- **Exercices** : Nouveaux exercices avec solutions détaillées
- **Bibliographie** : Ajout de références et sources

### 🔧 Amélioration technique

#### Documentation
- **README** : Amélioration de la documentation principale
- **Guide d'utilisation** : Instructions plus claires
- **Structure** : Amélioration de l'organisation des fichiers

#### Outils et automation
- **Scripts** : Outils pour faciliter la contribution
- **Templates** : Modèles pour les nouveaux chapitres
- **Workflows** : Automation des tâches répétitives

### 🌐 Traduction

#### Nouvelles langues
- **Traduction complète** : Traduction de l'ensemble du projet
- **Traduction partielle** : Traduction de chapitres spécifiques
- **Localisation** : Adaptation culturelle du contenu

#### Amélioration des traductions
- **Corrections** : Amélioration des traductions existantes
- **Cohérence** : Harmonisation du vocabulaire
- **Qualité** : Amélioration de la fluidité

## 🚀 Processus de contribution

### 1. Préparation

#### Fork et clonage
```bash
# Fork le repository sur GitHub
# Puis clonez votre fork
git clone https://github.com/VOTRE-USERNAME/Quatre-Mille-Ans-Mathematiques.git
cd Quatre-Mille-Ans-Mathematiques

# Ajoutez le repository original comme remote
git remote add upstream https://github.com/michaelgermini/Quatre-Mille-Ans-Mathematiques.git
```

#### Synchronisation
```bash
# Synchronisez avec le repository principal
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. Développement

#### Création d'une branche
```bash
# Créez une branche pour votre contribution
git checkout -b feature/nom-de-votre-contribution
```

#### Conventions de nommage des branches
- `feature/` : Nouvelles fonctionnalités
- `fix/` : Corrections de bugs
- `docs/` : Amélioration de la documentation
- `translation/` : Traductions
- `content/` : Nouveau contenu

### 3. Modification

#### Édition des fichiers
- Utilisez un éditeur compatible Markdown
- Respectez les conventions de nommage
- Suivez la structure existante
- Ajoutez des liens croisés appropriés

#### Validation
- Vérifiez la grammaire et l'orthographe
- Testez tous les liens
- Assurez-vous de la cohérence avec le style existant

### 4. Commit et Push

#### Commits descriptifs
```bash
# Exemples de messages de commit
git commit -m "docs: Add new chapter on Babylonian mathematics"
git commit -m "fix: Correct typo in Euler's biography"
git commit -m "feat: Add exercises for Japanese mathematics"
```

#### Convention des messages
- **Format** : `type: description courte`
- **Types** : `feat`, `fix`, `docs`, `style`, `refactor`, `test`
- **Description** : Maximum 50 caractères, en français

#### Push
```bash
git push origin feature/nom-de-votre-contribution
```

### 5. Pull Request

#### Création de la PR
1. Allez sur GitHub
2. Cliquez sur "New Pull Request"
3. Sélectionnez votre branche
4. Remplissez le template de PR

#### Template de PR
```markdown
## 📝 Description
Description claire de ce que fait cette PR.

## 🔗 Type de contribution
- [ ] Correction de bug
- [ ] Nouvelle fonctionnalité
- [ ] Documentation
- [ ] Traduction
- [ ] Autre (précisez)

## 🧪 Tests
- [ ] J'ai testé mes modifications
- [ ] Les liens fonctionnent correctement
- [ ] Le contenu est cohérent

## 📚 Références
Liens vers les sources utilisées (si applicable)

## 📸 Captures d'écran
Ajoutez des captures d'écran si nécessaire
```

## 📊 Standards de qualité

### 📝 Contenu

#### Rigueur scientifique
- **Sources fiables** : Utilisez des sources académiques reconnues
- **Précision historique** : Vérifiez les dates et les faits
- **Cohérence** : Respectez la terminologie établie
- **Objectivité** : Présentez les faits de manière neutre

#### Qualité pédagogique
- **Clarté** : Explications accessibles et progressives
- **Exemples** : Illustrations concrètes et pertinentes
- **Structure** : Organisation logique du contenu
- **Exercices** : Problèmes variés avec solutions détaillées

#### Style d'écriture
- **Ton** : Professionnel mais accessible
- **Langue** : Français correct et fluide
- **Longueur** : Sections équilibrées et digestes
- **Cohérence** : Style uniforme dans tout le projet

### 🔧 Technique

#### Format Markdown
- **Syntaxe** : Respectez la syntaxe Markdown standard
- **Structure** : Utilisez les en-têtes appropriés
- **Liens** : Vérifiez que tous les liens fonctionnent
- **Images** : Optimisez les images pour le web

#### Organisation
- **Nommage** : Noms de fichiers clairs et cohérents
- **Structure** : Respectez l'organisation des dossiers
- **Navigation** : Ajoutez des liens de navigation appropriés
- **Méta-données** : Incluez les informations de contexte

## 📁 Structure du projet

```
quatre-mille-ans-mathematiques/
├── README.md                           # Documentation principale
├── LICENSE                             # Licence MIT
├── CONTRIBUTING.md                     # Ce guide
├── .github/                           # Configuration GitHub
│   ├── workflows/                     # Actions automatisées
│   └── ISSUE_TEMPLATE/               # Templates d'issues
├── 00.5_Mathematiques_Mesopotamiennes/ # Mathématiques mésopotamiennes
├── 00.7_Mathematiques_Mayas/          # Mathématiques mayas
├── 01_Mathematiques_Grecques/         # Mathématiques grecques
├── 02_Mathematiques_Arabes/           # Mathématiques arabes
├── 02_Cosmologie_Mathematique/        # Cosmologie mathématique
├── 03_Mathematiques_Indiennes/        # Mathématiques indiennes
├── 04_Mathematiques_Chinoises/        # Mathématiques chinoises
├── 05_Mathematiciens_modernes/        # Mathématiciens modernes
├── 06.5_Mathematiques_Japonaises/     # Mathématiques japonaises
├── Sections_Transversales/            # Sections transversales
│   ├── S1_Histoire_Instruments/       # Histoire des instruments
│   ├── S2_Transmission/               # Transmission des connaissances
│   ├── S3_Femmes_Mathematiciennes/    # Femmes mathématiciennes
│   └── S4_Applications_Modernes/      # Applications modernes
└── 07_Annexes.md                      # Solutions et ressources
```

## 🏷️ Conventions de nommage

### 📁 Dossiers
- **Format** : `XX_Nom_Descriptif`
- **Exemple** : `01_Mathematiques_Grecques`
- **Sections transversales** : `SX_Nom_Section`

### 📄 Fichiers
- **Format** : `XX.Y_Nom_Descriptif.md`
- **Exemple** : `1.1_Geometrie_Euclidienne.md`
- **Sections transversales** : `SX.Y_Nom_Section.md`

### 🔗 Liens
- **Interne** : `[Nom](chemin/vers/fichier.md)`
- **Externe** : `[Nom](https://example.com)`
- **Ancres** : `[Nom](#section)`

## 🌿 Workflow Git

### Branches principales
- **main** : Branche principale stable
- **develop** : Branche de développement
- **feature/** : Nouvelles fonctionnalités
- **fix/** : Corrections de bugs
- **docs/** : Documentation
- **translation/** : Traductions

### Processus de review
1. **Auto-review** : Relisez vos modifications
2. **Tests** : Vérifiez que tout fonctionne
3. **Pull Request** : Créez une PR détaillée
4. **Review** : Attendez les commentaires
5. **Modifications** : Apportez les corrections demandées
6. **Merge** : Fusion après approbation

### Gestion des conflits
```bash
# En cas de conflit
git fetch upstream
git checkout main
git merge upstream/main
git checkout votre-branche
git rebase main
# Résolvez les conflits
git add .
git rebase --continue
```

## 🆘 Aide et support

### 📞 Contact
- **Issues** : [GitHub Issues](https://github.com/michaelgermini/Quatre-Mille-Ans-Mathematiques/issues)
- **Discussions** : [GitHub Discussions](https://github.com/michaelgermini/Quatre-Mille-Ans-Mathematiques/discussions)
- **Email** : [michael@germini.info](mailto:michael@germini.info)

### 📚 Ressources
- **Guide Markdown** : [GitHub Flavored Markdown](https://github.github.com/gfm/)
- **Git** : [Pro Git Book](https://git-scm.com/book)
- **GitHub** : [GitHub Documentation](https://docs.github.com/)

### 🐛 Signaler un problème
Utilisez les templates d'issues pour :
- **Bug reports** : Signaler des erreurs
- **Feature requests** : Demander des nouvelles fonctionnalités
- **Questions** : Poser des questions sur le contenu

## 🎉 Reconnaissance

### 👥 Contributeurs
Tous les contributeurs sont reconnus dans :
- **README** : Section remerciements
- **CONTRIBUTORS.md** : Liste détaillée
- **GitHub** : Page des contributeurs

### 🏆 Types de reconnaissance
- **Contributeurs réguliers** : Mention spéciale
- **Contributeurs majeurs** : Statut de maintainer
- **Traducteurs** : Reconnaissance linguistique
- **Reviewers** : Merci pour les reviews

---

## 📝 Checklist de contribution

Avant de soumettre votre contribution, vérifiez :

- [ ] J'ai lu et compris le guide de contribution
- [ ] Mon code respecte les standards de qualité
- [ ] J'ai testé mes modifications
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Mes commits sont descriptifs et clairs
- [ ] J'ai créé une PR détaillée
- [ ] J'ai suivi les conventions de nommage
- [ ] J'ai vérifié qu'il n'y a pas de conflits

Merci de contribuer à ce projet ! 🎉

---

<div align="center">

**Ensemble, créons une ressource exceptionnelle sur l'histoire des mathématiques ! 📚✨**

</div>
