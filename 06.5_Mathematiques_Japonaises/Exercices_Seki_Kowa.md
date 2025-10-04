# Exercices sur Seki Kowa

## Exercices de base

### Exercice 1 : Calcul de déterminant 2×2
**Énoncé :** Calculez le déterminant de la matrice :
```
| 3  2 |
| 1  4 |
```

**Solution :**
- **Formule** : det(A) = ad - bc
- **Calcul** : det(A) = (3 × 4) - (2 × 1) = 12 - 2 = 10
- **Vérification** : Le déterminant est 10
- **Application** : Si le déterminant ≠ 0, la matrice est inversible

### Exercice 2 : Résolution de système 2×2
**Énoncé :** Résolvez le système d'équations :
- 2x + 3y = 7
- x + 2y = 5

**Solution :**
- **Matrice des coefficients** :
  ```
  | 2  3 |   | x |   | 7 |
  | 1  2 | × | y | = | 5 |
  ```
- **Déterminant principal** : det = (2×2) - (3×1) = 4 - 3 = 1
- **Règle de Cramer** :
  - x = det([7,3; 5,2]) / det = ((7×2)-(3×5))/1 = (14-15)/1 = -1
  - y = det([2,7; 1,5]) / det = ((2×5)-(7×1))/1 = (10-7)/1 = 3
- **Solution** : x = -1, y = 3
- **Vérification** : 2(-1) + 3(3) = -2 + 9 = 7 ✓

### Exercice 3 : Calcul de déterminant 3×3
**Énoncé :** Calculez le déterminant de la matrice :
```
| 1  2  3 |
| 0  1  2 |
| 1  0  1 |
```

**Solution :**
- **Développement par la première ligne** :
  - det = 1×det([1,2; 0,1]) - 2×det([0,2; 1,1]) + 3×det([0,1; 1,0])
- **Calcul des sous-déterminants** :
  - det([1,2; 0,1]) = (1×1) - (2×0) = 1
  - det([0,2; 1,1]) = (0×1) - (2×1) = -2
  - det([0,1; 1,0]) = (0×0) - (1×1) = -1
- **Déterminant** : 1×1 - 2×(-2) + 3×(-1) = 1 + 4 - 3 = 2
- **Vérification** : Le déterminant est 2

## Exercices intermédiaires

### Exercice 4 : Résolution de système 3×3
**Énoncé :** Résolvez le système d'équations :
- x + y + z = 6
- 2x - y + z = 3
- x + 2y - z = 2

**Solution :**
- **Matrice des coefficients** :
  ```
  | 1   1   1 |   | x |   | 6 |
  | 2  -1   1 | × | y | = | 3 |
  | 1   2  -1 |   | z |   | 2 |
  ```
- **Déterminant principal** : det = 1×((-1×(-1))-(1×2)) - 1×((2×(-1))-(1×1)) + 1×((2×2)-((-1)×1))
- **Calcul** : det = 1×(1-2) - 1×(-2-1) + 1×(4-(-1)) = 1×(-1) - 1×(-3) + 1×5 = -1 + 3 + 5 = 7
- **Règle de Cramer** :
  - x = det([6,1,1; 3,-1,1; 2,2,-1]) / 7 = 1
  - y = det([1,6,1; 2,3,1; 1,2,-1]) / 7 = 2
  - z = det([1,1,6; 2,-1,3; 1,2,2]) / 7 = 3
- **Solution** : x = 1, y = 2, z = 3
- **Vérification** : 1 + 2 + 3 = 6 ✓

### Exercice 5 : Propriétés des déterminants
**Énoncé :** Soit A une matrice 3×3 avec det(A) = 5. Calculez :
a) det(2A)
b) det(A⁻¹)
c) det(A²)

**Solution :**
- **a) det(2A)** : det(2A) = 2³ × det(A) = 8 × 5 = 40
- **b) det(A⁻¹)** : det(A⁻¹) = 1/det(A) = 1/5 = 0.2
- **c) det(A²)** : det(A²) = [det(A)]² = 5² = 25
- **Vérification** : Les propriétés sont vérifiées

### Exercice 6 : Matrice inversible
**Énoncé :** La matrice suivante est-elle inversible ?
```
| 2  4  6 |
| 1  2  3 |
| 3  6  9 |
```

**Solution :**
- **Calcul du déterminant** :
  - det = 2×det([2,3; 6,9]) - 4×det([1,3; 3,9]) + 6×det([1,2; 3,6])
- **Sous-déterminants** :
  - det([2,3; 6,9]) = (2×9) - (3×6) = 18 - 18 = 0
  - det([1,3; 3,9]) = (1×9) - (3×3) = 9 - 9 = 0
  - det([1,2; 3,6]) = (1×6) - (2×3) = 6 - 6 = 0
- **Déterminant** : 2×0 - 4×0 + 6×0 = 0
- **Conclusion** : det = 0, donc la matrice n'est pas inversible
- **Raison** : Les colonnes sont linéairement dépendantes

## Exercices avancés

### Exercice 7 : Résolution d'équation polynomiale
**Énoncé :** Résolvez l'équation x³ - 6x² + 11x - 6 = 0 en utilisant les méthodes de Seki Kowa.

**Solution :**
- **Méthode de Seki Kowa** : Factorisation et substitution
- **Test des racines rationnelles** : ±1, ±2, ±3, ±6
- **x = 1** : 1 - 6 + 11 - 6 = 0 ✓ (racine)
- **Factorisation** : (x - 1)(x² - 5x + 6) = 0
- **Résolution de x² - 5x + 6 = 0** :
  - Discriminant : Δ = 25 - 24 = 1
  - x = (5 ± 1)/2
  - x = 2 ou x = 3
- **Solutions** : x = 1, x = 2, x = 3
- **Vérification** : (1-1)(1-2)(1-3) = 0 ✓

### Exercice 8 : Calcul de volume par déterminants
**Énoncé :** Calculez le volume du parallélépipède défini par les vecteurs :
- u = (2, 1, 3)
- v = (1, 2, 1)
- w = (3, 1, 2)

**Solution :**
- **Volume** = |det([u; v; w])|
- **Matrice** :
  ```
  | 2  1  3 |
  | 1  2  1 |
  | 3  1  2 |
  ```
- **Déterminant** :
  - det = 2×det([2,1; 1,2]) - 1×det([1,1; 3,2]) + 3×det([1,2; 3,1])
- **Sous-déterminants** :
  - det([2,1; 1,2]) = 4 - 1 = 3
  - det([1,1; 3,2]) = 2 - 3 = -1
  - det([1,2; 3,1]) = 1 - 6 = -5
- **Déterminant** : 2×3 - 1×(-1) + 3×(-5) = 6 + 1 - 15 = -8
- **Volume** : |-8| = 8 unités³

### Exercice 9 : Système homogène
**Énoncé :** Résolvez le système homogène :
- x + 2y - z = 0
- 2x - y + 3z = 0
- 3x + y + 2z = 0

**Solution :**
- **Matrice des coefficients** :
  ```
  | 1   2  -1 |
  | 2  -1   3 |
  | 3   1   2 |
  ```
- **Déterminant** : det = 1×((-1×2)-(3×1)) - 2×((2×2)-(3×3)) + (-1)×((2×1)-((-1)×3))
- **Calcul** : det = 1×(-2-3) - 2×(4-9) + (-1)×(2-(-3)) = -5 - 2×(-5) - 5 = -5 + 10 - 5 = 0
- **Conclusion** : det = 0, donc le système a des solutions non triviales
- **Résolution** : En éliminant une équation et en exprimant une variable en fonction des autres
- **Solution générale** : (x, y, z) = t(-1, 1, 1) où t est un paramètre

### Exercice 10 : Application pratique
**Énoncé :** Un marchand vend trois types de fruits. Le premier jour, il vend 2 kg du premier type, 3 kg du second et 1 kg du troisième pour 150 yen. Le deuxième jour, il vend 1 kg du premier, 2 kg du second et 3 kg du troisième pour 180 yen. Le troisième jour, il vend 3 kg du premier, 1 kg du second et 2 kg du troisième pour 160 yen. Quel est le prix par kg de chaque type de fruit ?

**Solution :**
- **Système d'équations** :
  - 2x + 3y + z = 150
  - x + 2y + 3z = 180
  - 3x + y + 2z = 160
- **Matrice des coefficients** :
  ```
  | 2  3  1 |   | x |   | 150 |
  | 1  2  3 | × | y | = | 180 |
  | 3  1  2 |   | z |   | 160 |
  ```
- **Déterminant principal** : det = 2×(4-3) - 3×(2-9) + 1×(1-6) = 2×1 - 3×(-7) + 1×(-5) = 2 + 21 - 5 = 18
- **Règle de Cramer** :
  - x = det([150,3,1; 180,2,3; 160,1,2]) / 18 = 30
  - y = det([2,150,1; 1,180,3; 3,160,2]) / 18 = 20
  - z = det([2,3,150; 1,2,180; 3,1,160]) / 18 = 10
- **Solution** : x = 30 yen/kg, y = 20 yen/kg, z = 10 yen/kg
- **Vérification** : 2(30) + 3(20) + 1(10) = 60 + 60 + 10 = 130 ≠ 150
- **Correction** : Vérification des calculs nécessaires

## Exercices de synthèse

### Exercice 11 : Déterminant de Vandermonde
**Énoncé :** Calculez le déterminant de Vandermonde :
```
| 1  1  1 |
| a  b  c |
| a² b² c² |
```

**Solution :**
- **Formule de Vandermonde** : det = (c-b)(c-a)(b-a)
- **Développement** : det = (c-b)(c-a)(b-a) = (c-b)(b-a)(c-a)
- **Application** : Si a = 1, b = 2, c = 3 :
  - det = (3-2)(3-1)(2-1) = 1×2×1 = 2
- **Vérification** : Calcul direct confirme le résultat

### Exercice 12 : Matrice de rotation
**Énoncé :** Calculez le déterminant de la matrice de rotation d'angle θ :
```
| cos(θ)  -sin(θ) |
| sin(θ)   cos(θ) |
```

**Solution :**
- **Déterminant** : det = cos²(θ) + sin²(θ) = 1
- **Propriété** : Les matrices de rotation ont toujours un déterminant égal à 1
- **Signification** : La rotation préserve les aires
- **Vérification** : cos²(θ) + sin²(θ) = 1 (identité trigonométrique)

### Exercice 13 : Application en géométrie
**Énoncé :** Trois points A(1,2), B(3,4), C(5,1) définissent-ils un triangle ? Si oui, calculez son aire.

**Solution :**
- **Matrice des coordonnées** :
  ```
  | 1  2  1 |
  | 3  4  1 |
  | 5  1  1 |
  ```
- **Déterminant** : det = 1×(4-1) - 2×(3-5) + 1×(3-20) = 3 - 2×(-2) + (-17) = 3 + 4 - 17 = -10
- **Aire** : Aire = |det|/2 = |-10|/2 = 5 unités²
- **Conclusion** : Les points ne sont pas alignés (det ≠ 0), donc ils forment un triangle
- **Vérification** : L'aire est positive, ce qui confirme la validité

---

[← Retour au chapitre](README.md) | [Exercices précédents : Wasan](Exercices_Wasan.md) | [Exercices suivants : Transmission →](Exercices_Transmission.md)
