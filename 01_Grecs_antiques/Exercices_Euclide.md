# Exercices : Les Éléments d'Euclide

## Exercices de base

### **Exercice 1 : Somme des angles d'un polygone**

**Problème :** Calcule la somme des angles d'un hexagone régulier.

**Solution :**
1. **Hexagone régulier** : 6 côtés égaux
2. **Somme des angles** : (6 - 2) × 180° = 4 × 180° = 720°
3. **Angle intérieur** : 720° ÷ 6 = 120°

### **Exercice 2 : Triangle rectangle**

**Problème :** Dans un triangle rectangle, si un angle aigu vaut 35°, que vaut l'autre angle aigu ?

**Solution :**
1. **Somme des angles** : 180°
2. **Angle droit** : 90°
3. **Autres angles** : 180° - 90° = 90°
4. **Deuxième angle aigu** : 90° - 35° = 55°

### **Exercice 3 : Parallélogramme**

**Problème :** Dans un parallélogramme, si un angle vaut 65°, que valent les trois autres angles ?

**Solution :**
1. **Angles opposés égaux** : 65°, 65°
2. **Angles consécutifs supplémentaires** : 180° - 65° = 115°
3. **Les quatre angles** : 65°, 115°, 65°, 115°

## Exercices sur l'algorithme d'Euclide

### **Exercice 4 : PGCD simple**

**Problème :** Trouve le PGCD(36, 48) en utilisant l'algorithme d'Euclide.

**Solution :**
```
Étape 1 : 48 = 36 × 1 + 12
Étape 2 : 36 = 12 × 3 + 0
Résultat : PGCD(36, 48) = 12
```

### **Exercice 5 : PGCD de grands nombres**

**Problème :** Trouve le PGCD(2048, 1536).

**Solution :**
```
Étape 1 : 2048 = 1536 × 1 + 512
Étape 2 : 1536 = 512 × 3 + 0
Résultat : PGCD(2048, 1536) = 512
```

### **Exercice 6 : Simplification de fractions**

**Problème :** Simplifie la fraction 144/216 en utilisant le PGCD.

**Solution :**
1. **PGCD(144, 216)** :
   ```
   216 = 144 × 1 + 72
   144 = 72 × 2 + 0
   PGCD = 72
   ```
2. **Simplification** : 144/216 = (144÷72)/(216÷72) = 2/3

## Exercices d'algèbre géométrique

### **Exercice 7 : Résolution géométrique**

**Problème :** Résous géométriquement l'équation x² + 4x = 12.

**Solution :**
1. **Équation** : x² + 4x = 12
2. **Complétion** : x² + 4x + 4 = 12 + 4 = 16
3. **Factorisation** : (x + 2)² = 16
4. **Solution** : x + 2 = 4, donc x = 2

### **Exercice 8 : Moyenne géométrique**

**Problème :** Construis géométriquement la moyenne géométrique de 3 et 12.

**Solution :**
1. **Segment** AB de longueur 3 + 12 = 15
2. **Point C** : Milieu de AB
3. **Cercle** de diamètre AB
4. **Perpendiculaire** en C, coupant le cercle en D
5. **Résultat** : CD = √(3 × 12) = √36 = 6

### **Exercice 9 : Construction d'un carré**

**Problème :** Construis un carré d'aire égale à celle d'un rectangle de côtés 4 et 9.

**Solution :**
1. **Aire du rectangle** : 4 × 9 = 36
2. **Côté du carré** : √36 = 6
3. **Construction** : Carré de côté 6

## Exercices de démonstration

### **Exercice 10 : Angles alternes-internes**

**Problème :** Démontre que si deux droites parallèles sont coupées par une transversale, les angles alternes-internes sont égaux.

**Solution :**
1. **Hypothèse** : (AB) // (CD), transversale (EF)
2. **Angles correspondants** : ∠EGB = ∠EHD
3. **Angles opposés** : ∠EGB = ∠AGH
4. **Conclusion** : ∠AGH = ∠EHD (angles alternes-internes)

### **Exercice 11 : Médiane d'un triangle**

**Problème :** Démontre que les trois médianes d'un triangle se coupent en un même point.

**Solution :**
1. **Triangle** ABC avec médianes AD, BE, CF
2. **Point G** : Intersection de AD et BE
3. **Parallèles** : Construire des parallèles aux côtés
4. **Proportions** : AG/GD = BG/GE = 2/1
5. **Conclusion** : CF passe aussi par G

### **Exercice 12 : Cercle circonscrit**

**Problème :** Démontre que les trois médiatrices d'un triangle se coupent en un même point.

**Solution :**
1. **Triangle** ABC
2. **Médiatrices** : Perpendiculaires aux milieux des côtés
3. **Point O** : Intersection de deux médiatrices
4. **Équidistance** : OA = OB = OC
5. **Conclusion** : O est le centre du cercle circonscrit

## Exercices avancés

### **Exercice 13 : Construction du pentagone**

**Problème :** Construis un pentagone régulier en utilisant le nombre d'or.

**Solution :**
1. **Cercle** de centre O et rayon R
2. **Diamètre** AB
3. **Perpendiculaire** à AB passant par O
4. **Point C** : Milieu de OB
5. **Cercle** de centre C et rayon CO
6. **Intersection** D avec le cercle initial
7. **Pentagone** : Construire à partir de AD

### **Exercice 14 : Division harmonique**

**Problème :** Divise un segment selon la proportion d'or.

**Solution :**
1. **Segment** AB
2. **Perpendiculaire** BC = AB/2
3. **Cercle** de centre C et rayon CB
4. **Intersection** D avec la droite AC
5. **Cercle** de centre A et rayon AD
6. **Intersection** E avec AB
7. **Résultat** : E divise AB selon la proportion d'or

### **Exercice 15 : Trisection d'un angle**

**Problème :** Peux-tu trisecter un angle de 60° avec la règle et le compas ?

**Solution :**
1. **Théorème** : La trisection générale d'un angle est impossible
2. **Cas particuliers** : Certains angles peuvent être trisectés
3. **Angle de 60°** : Peut être trisecté (angle de 20°)
4. **Méthode** : Utiliser des constructions spéciales

## Problèmes pratiques

### **Exercice 16 : Arpentage**

**Problème :** Un champ rectangulaire a une longueur de 120 m et une largeur de 90 m. Calcule sa diagonale.

**Solution :**
1. **Théorème de Pythagore** : d² = l² + L²
2. **Calcul** : d² = 120² + 90² = 14400 + 8100 = 22500
3. **Résultat** : d = √22500 = 150 m

### **Exercice 17 : Construction d'escalier**

**Problème :** Un escalier a une hauteur de 3 m et une profondeur de 4 m. Calcule la longueur de la rampe.

**Solution :**
1. **Triangle rectangle** : hauteur = 3 m, profondeur = 4 m
2. **Longueur de la rampe** : √(3² + 4²) = √25 = 5 m

### **Exercice 18 : Pavage**

**Problème :** Peux-tu paver un plan avec des pentagones réguliers ?

**Solution :**
1. **Angle intérieur** : 108°
2. **Somme autour d'un point** : 3 × 108° = 324° < 360°
3. **Conclusion** : Impossible de paver avec des pentagones réguliers seuls

## Défis

### **Défi 1 : Construction du heptagone**

**Problème :** Pourquoi ne peut-on pas construire un heptagone régulier avec la règle et le compas ?

**Solution :**
1. **Angle central** : 360°/7 ≈ 51,43°
2. **Construction** : Nécessite la trisection d'un angle
3. **Théorème** : Impossible avec la règle et le compas
4. **Généralisation** : Seuls les polygones de Fermat sont constructibles

### **Défi 2 : Problème de Dido**

**Problème :** Trouve la forme qui maximise l'aire pour un périmètre donné.

**Solution :**
1. **Problème classique** : Maximiser l'aire sous contrainte de périmètre
2. **Solution** : Le cercle maximise l'aire
3. **Démonstration** : Utiliser le calcul des variations
4. **Application** : Optimisation en physique et ingénierie

### **Défi 3 : Quadrature du cercle**

**Problème :** Peux-tu construire un carré d'aire égale à celle d'un cercle donné ?

**Solution :**
1. **Problème classique** : Construire √π
2. **Théorème** : π est transcendant
3. **Conclusion** : Impossible avec la règle et le compas
4. **Généralisation** : Problèmes de construction avec nombres transcendants

---

[← Retour au chapitre](README.md)
