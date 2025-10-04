# Exercices sur les applications modernes

## Exercices sur la cryptographie historique

### Exercice 1 : Chiffrement de César
**Énoncé :** Utilisez le chiffrement de César avec un décalage de 3 pour chiffrer le message "MATHEMATIQUES".

**Solution :**
- **Message original** : M A T H E M A T I Q U E S
- **Décalage de 3** : +3 pour chaque lettre
- **Chiffrement** : P D W K H P D W L T X H V
- **Message chiffré** : PDWKHPDWLQXHV
- **Vérification** : Décryptage inverse confirme

### Exercice 2 : Cryptanalyse par fréquence
**Énoncé :** Analysez la fréquence des lettres dans ce texte chiffré et déterminez la méthode de chiffrement probable.

**Texte** : "KHOOR ZRUOG"

**Solution :**
- **Analyse des fréquences** :
  - O : 3 occurrences (27%)
  - R : 2 occurrences (18%)
  - H, L, Z, U, G : 1 occurrence chacune
- **Hypothèse** : Chiffrement de César (O = E, R = T)
- **Décalage probable** : 3 positions
- **Décryptage** : HELLO WORLD
- **Vérification** : Fréquence typique de l'anglais

### Exercice 3 : Chiffrement de Vigenère
**Énoncé :** Chiffrez le message "SECRET" avec la clé "KEY" en utilisant le chiffrement de Vigenère.

**Solution :**
- **Message** : S E C R E T
- **Clé répétée** : K E Y K E Y
- **Chiffrement** :
  - S + K = S (18) + K (10) = 28 → C (28-26=2)
  - E + E = E (4) + E (4) = 8 → I
  - C + Y = C (2) + Y (24) = 26 → Z
  - R + K = R (17) + K (10) = 27 → B (27-26=1)
  - E + E = E (4) + E (4) = 8 → I
  - T + Y = T (19) + Y (24) = 43 → Q (43-26=17)
- **Message chiffré** : CIZBIQ
- **Vérification** : Décryptage inverse

## Exercices sur les mathématiques et l'art

### Exercice 4 : Calcul du nombre d'or
**Énoncé :** Calculez la valeur exacte du nombre d'or φ en résolvant l'équation φ² = φ + 1.

**Solution :**
- **Équation** : φ² = φ + 1
- **Réarrangement** : φ² - φ - 1 = 0
- **Formule quadratique** : φ = (1 ± √(1 + 4))/2
- **Calcul** : φ = (1 ± √5)/2
- **Solution positive** : φ = (1 + √5)/2 ≈ 1.618
- **Vérification** : φ² = 2.618, φ + 1 = 2.618 ✓

### Exercice 5 : Construction du rectangle d'or
**Énoncé :** Construisez géométriquement un rectangle d'or de largeur 5 cm.

**Solution :**
- **Largeur** : 5 cm
- **Longueur** : 5 × φ = 5 × 1.618 = 8.09 cm
- **Vérification** : Rapport = 8.09/5 = 1.618 = φ
- **Construction** : Rectangle de 5 cm × 8.09 cm
- **Propriété** : Si on retire un carré de côté 5 cm, le rectangle restant a les mêmes proportions

### Exercice 6 : Perspective linéaire
**Énoncé :** Dans une perspective linéaire, un cube de 2 m de côté est placé à 10 m du plan de l'image. Calculez la taille de l'image sur le plan si l'œil est à 1.5 m de hauteur.

**Solution :**
- **Distance de l'objet** : 10 m
- **Hauteur de l'œil** : 1.5 m
- **Taille réelle** : 2 m
- **Calcul de la perspective** : Taille apparente = Taille réelle × (Hauteur œil / Distance)
- **Calcul** : Taille = 2 × (1.5 / 10) = 0.3 m = 30 cm
- **Vérification** : La taille diminue avec la distance

## Exercices sur les fractales

### Exercice 7 : Flocon de Koch
**Énoncé :** Calculez le périmètre et l'aire du flocon de Koch à l'itération n=3, en partant d'un triangle équilatéral de côté 1.

**Solution :**
- **Itération 0** : Triangle équilatéral de côté 1
  - Périmètre : 3
  - Aire : √3/4
- **Itération 1** : Chaque côté divisé en 3, triangle central ajouté
  - Périmètre : 3 × (4/3) = 4
  - Aire : √3/4 + 3 × (√3/4)/9 = √3/4 + √3/12 = √3/3
- **Itération 2** : Périmètre = 4 × (4/3) = 16/3
- **Itération 3** : Périmètre = (16/3) × (4/3) = 64/9 ≈ 7.11
- **Aire finale** : Limite vers 2√3/5

### Exercice 8 : Ensemble de Mandelbrot
**Énoncé :** Vérifiez si le point c = 0.25 + 0.5i appartient à l'ensemble de Mandelbrot en calculant les 5 premières itérations.

**Solution :**
- **Point** : c = 0.25 + 0.5i
- **Itération 0** : z₀ = 0
- **Itération 1** : z₁ = z₀² + c = 0 + 0.25 + 0.5i = 0.25 + 0.5i
- **Itération 2** : z₂ = z₁² + c = (0.25 + 0.5i)² + 0.25 + 0.5i
  - z₁² = 0.0625 + 0.25i - 0.25 = -0.1875 + 0.25i
  - z₂ = -0.1875 + 0.25i + 0.25 + 0.5i = 0.0625 + 0.75i
- **Itération 3** : z₃ = z₂² + c = (0.0625 + 0.75i)² + 0.25 + 0.5i
  - z₂² = 0.0039 + 0.09375i - 0.5625 = -0.5586 + 0.09375i
  - z₃ = -0.5586 + 0.09375i + 0.25 + 0.5i = -0.3086 + 0.59375i
- **Continuer** : Les valeurs restent bornées
- **Conclusion** : Le point appartient probablement à l'ensemble

## Exercices de synthèse

### Exercice 9 : Application cryptographique moderne
**Énoncé :** Expliquez comment les principes de la cryptographie historique (substitution, transposition) sont encore utilisés dans la cryptographie moderne.

**Solution :**
- **Substitution** : 
  - AES (Advanced Encryption Standard) : Substitution non-linéaire
  - DES : S-boxes de substitution
  - Applications : Chiffrement symétrique moderne
- **Transposition** :
  - Réseaux de Feistel : Permutation des bits
  - Applications : Structure des algorithmes de chiffrement
- **Évolution** : Complexité mathématique accrue
- **Sécurité** : Résistance aux attaques modernes

### Exercice 10 : Proportions dorées en design
**Énoncé :** Un designer veut créer une page web avec un rectangle d'or. Si la largeur est de 960 pixels, quelle doit être la hauteur pour respecter les proportions dorées ?

**Solution :**
- **Largeur** : 960 pixels
- **Nombre d'or** : φ = 1.618
- **Hauteur** : 960 × φ = 960 × 1.618 = 1553.28 pixels
- **Arrondi** : 1553 pixels
- **Vérification** : Rapport = 1553/960 = 1.618 ✓
- **Application** : Design harmonieux de la page

### Exercice 11 : Fractales et compression d'images
**Énoncé :** Expliquez comment les fractales peuvent être utilisées pour la compression d'images et quels sont les avantages.

**Solution :**
- **Principe** : Auto-similarité des fractales
- **Méthode** : 
  - Décomposition de l'image en fractales
  - Stockage des transformations
  - Reconstruction par itération
- **Avantages** :
  - Compression élevée
  - Qualité préservée
  - Zoom infini possible
- **Applications** : Compression d'images, textures

### Exercice 12 : Cryptographie quantique
**Énoncé :** Comparez la cryptographie classique et la cryptographie quantique en termes de sécurité et d'applications.

**Solution :**
- **Cryptographie classique** :
  - Sécurité basée sur la complexité computationnelle
  - Vulnérable aux ordinateurs quantiques
  - Applications : Internet, communications
- **Cryptographie quantique** :
  - Sécurité basée sur les lois de la physique quantique
  - Résistante aux ordinateurs quantiques
  - Applications : Communications ultra-sécurisées
- **Comparaison** : Sécurité absolue vs relative

### Exercice 13 : Art algorithmique
**Énoncé :** Concevez un algorithme simple pour générer une œuvre d'art basée sur les mathématiques.

**Solution :**
- **Algorithme** :
  1. Définir une grille de pixels
  2. Pour chaque pixel (x,y) :
     - Calculer une fonction mathématique f(x,y)
     - Assigner une couleur basée sur f(x,y)
  3. Afficher l'image
- **Exemple** : f(x,y) = sin(x/10) × cos(y/10)
- **Résultat** : Motif ondulé coloré
- **Variations** : Différentes fonctions, palettes de couleurs

### Exercice 14 : Sécurité des systèmes modernes
**Énoncé :** Quels sont les défis de sécurité actuels liés à l'utilisation des mathématiques en cryptographie ?

**Solution :**
- **Ordinateurs quantiques** : Menace pour la cryptographie classique
- **Attaques par canaux auxiliaires** : Fuites d'informations
- **Implémentations défaillantes** : Erreurs de programmation
- **Standards obsolètes** : Algorithmes dépassés
- **Solutions** : Cryptographie post-quantique, vérification formelle

### Exercice 15 : Applications futures
**Énoncé :** Prédisez comment les mathématiques continueront d'influencer l'art et la technologie dans les décennies à venir.

**Solution :**
- **Art** :
  - Intelligence artificielle créative
  - Réalité virtuelle et augmentée
  - Art génératif algorithmique
- **Technologie** :
  - Cryptographie post-quantique
  - Intelligence artificielle
  - Réseaux neuronaux
- **Impact** : Convergence des disciplines
- **Innovation** : Nouvelles possibilités créatives et techniques

---

[← Retour aux sections transversales](../README.md) | [Exercices précédents : Femmes mathématiciennes](Exercices_Femmes_Mathematiciennes.md) | [Exercices suivants : Conclusion →](../../07_Conclusion.md)

