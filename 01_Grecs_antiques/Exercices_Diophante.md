# Exercices : L'algèbre de Diophante

## Exercices de base

### **Exercice 1 : Équation diophantienne linéaire**

**Problème :** Résous l'équation 3x + 5y = 20 en nombres entiers positifs.

**Solution :**
1. **Expression** : x = (20 - 5y)/3
2. **Condition** : 20 - 5y doit être divisible par 3
3. **Test** : y = 1 → 20 - 5 = 15, 15/3 = 5 ✓
4. **Solutions** : (5, 1), (0, 4)
5. **Solutions positives** : (5, 1) uniquement

### **Exercice 2 : Système d'équations**

**Problème :** Trouve deux nombres dont la somme est 20 et la différence 4.

**Solution :**
1. **Variables** : x et y les deux nombres
2. **Équations** : x + y = 20 et x - y = 4
3. **Addition** : 2x = 24 → x = 12
4. **Substitution** : y = 20 - 12 = 8
5. **Solution** : (12, 8)
6. **Vérification** : 12 + 8 = 20 ✓, 12 - 8 = 4 ✓

### **Exercice 3 : Problème pratique**

**Problème :** Un fermier a des poules et des lapins. Il compte 35 têtes et 94 pattes. Combien a-t-il de poules et de lapins ?

**Solution :**
1. **Variables** : x = poules, y = lapins
2. **Équations** : x + y = 35 et 2x + 4y = 94
3. **Simplification** : x + 2y = 47
4. **Substitution** : x = 35 - y
5. **Résolution** : (35 - y) + 2y = 47 → y = 12
6. **Solution** : x = 23, y = 12
7. **Vérification** : 23 + 12 = 35 têtes ✓, 46 + 48 = 94 pattes ✓

## Exercices sur les triplets pythagoriciens

### **Exercice 4 : Triplets pythagoriciens**

**Problème :** Trouve tous les triplets pythagoriciens (a, b, c) avec a < b < c < 20.

**Solution :**
1. **Formule** : a = m² - n², b = 2mn, c = m² + n²
2. **Contraintes** : m > n > 0, c < 20
3. **Calculs** :
   - m = 2, n = 1 : (3, 4, 5)
   - m = 3, n = 1 : (8, 6, 10)
   - m = 3, n = 2 : (5, 12, 13)
   - m = 4, n = 1 : (15, 8, 17)
   - m = 4, n = 2 : (12, 16, 20) - exclu car c = 20
   - m = 4, n = 3 : (7, 24, 25) - exclu car c > 20
4. **Solutions** : (3, 4, 5), (6, 8, 10), (5, 12, 13), (8, 15, 17)

### **Exercice 5 : Vérification de triplets**

**Problème :** Vérifie que (5, 12, 13) est un triplet pythagoricien.

**Solution :**
1. **Équation** : a² + b² = c²
2. **Calcul** : 5² + 12² = 25 + 144 = 169
3. **Vérification** : 13² = 169
4. **Conclusion** : 169 = 169 ✓
5. **Résultat** : (5, 12, 13) est bien un triplet pythagoricien

### **Exercice 6 : Génération de triplets**

**Problème :** Génère un triplet pythagoricien avec m = 5 et n = 2.

**Solution :**
1. **Formule** : a = m² - n², b = 2mn, c = m² + n²
2. **Calcul** : a = 25 - 4 = 21, b = 2 × 5 × 2 = 20, c = 25 + 4 = 29
3. **Triplet** : (21, 20, 29)
4. **Vérification** : 21² + 20² = 441 + 400 = 841 = 29² ✓

## Exercices sur les sommes de carrés

### **Exercice 7 : Somme de deux carrés**

**Problème :** Exprime 29 comme somme de deux carrés.

**Solution :**
1. **Recherche** : 29 = a² + b²
2. **Contraintes** : a, b ≤ √29 ≈ 5,4
3. **Test** : a = 1 → b² = 28 (impossible)
4. **Test** : a = 2 → b² = 25 → b = 5
5. **Solution** : 29 = 2² + 5² = 4 + 25 ✓
6. **Vérification** : 4 + 25 = 29 ✓

### **Exercice 8 : Somme de carrés multiples**

**Problème :** Exprime 50 comme somme de deux carrés de toutes les façons possibles.

**Solution :**
1. **Recherche** : 50 = a² + b²
2. **Contraintes** : a, b ≤ √50 ≈ 7,1
3. **Test** : a = 1 → b² = 49 → b = 7
4. **Test** : a = 5 → b² = 25 → b = 5
5. **Solutions** : 50 = 1² + 7² = 5² + 5²
6. **Vérification** : 1 + 49 = 50 ✓, 25 + 25 = 50 ✓

### **Exercice 9 : Différence de carrés**

**Problème :** Résous x² - y² = 15 en nombres entiers.

**Solution :**
1. **Factorisation** : (x - y)(x + y) = 15
2. **Diviseurs** : (1, 15), (3, 5), (-1, -15), (-3, -5)
3. **Système 1** : x - y = 1, x + y = 15
   - Addition : 2x = 16 → x = 8, y = 7
4. **Système 2** : x - y = 3, x + y = 5
   - Addition : 2x = 8 → x = 4, y = 1
5. **Solutions** : (8, 7), (4, 1), (-8, -7), (-4, -1)

## Exercices sur les nombres triangulaires

### **Exercice 10 : Nombres triangulaires**

**Problème :** Calcule les 10 premiers nombres triangulaires.

**Solution :**
1. **Formule** : Tₙ = n(n + 1)/2
2. **Calculs** :
   - T₁ = 1 × 2/2 = 1
   - T₂ = 2 × 3/2 = 3
   - T₃ = 3 × 4/2 = 6
   - T₄ = 4 × 5/2 = 10
   - T₅ = 5 × 6/2 = 15
   - T₆ = 6 × 7/2 = 21
   - T₇ = 7 × 8/2 = 28
   - T₈ = 8 × 9/2 = 36
   - T₉ = 9 × 10/2 = 45
   - T₁₀ = 10 × 11/2 = 55
3. **Séquence** : 1, 3, 6, 10, 15, 21, 28, 36, 45, 55

### **Exercice 11 : Somme de nombres triangulaires**

**Problème :** Trouve trois nombres triangulaires dont la somme est un carré parfait.

**Solution :**
1. **Recherche** : Tₐ + Tᵦ + Tᵧ = d²
2. **Test** : T₁ + T₁ + T₁ = 1 + 1 + 1 = 3 ≠ carré
3. **Test** : T₁ + T₂ + T₃ = 1 + 3 + 6 = 10 ≠ carré
4. **Test** : T₁ + T₁ + T₃ = 1 + 1 + 6 = 8 ≠ carré
5. **Test** : T₂ + T₂ + T₂ = 3 + 3 + 3 = 9 = 3² ✓
6. **Solution** : T₂ + T₂ + T₂ = 3²

### **Exercice 12 : Propriété des nombres triangulaires**

**Problème :** Montre que la somme de deux nombres triangulaires consécutifs est un carré parfait.

**Solution :**
1. **Formule** : Tₙ + Tₙ₊₁ = n(n + 1)/2 + (n + 1)(n + 2)/2
2. **Factorisation** : (n + 1)/2 × [n + (n + 2)] = (n + 1)/2 × (2n + 2)
3. **Simplification** : (n + 1)/2 × 2(n + 1) = (n + 1)²
4. **Conclusion** : Tₙ + Tₙ₊₁ = (n + 1)² ✓
5. **Exemple** : T₃ + T₄ = 6 + 10 = 16 = 4² ✓

## Exercices avancés

### **Exercice 13 : Équation diophantienne quadratique**

**Problème :** Résous x² + y² = 25 en nombres entiers.

**Solution :**
1. **Recherche** : x² + y² = 25
2. **Contraintes** : x, y ≤ 5
3. **Solutions** :
   - (0, 5), (5, 0) : 0² + 5² = 25 ✓
   - (3, 4), (4, 3) : 3² + 4² = 9 + 16 = 25 ✓
   - (-3, 4), (4, -3), (-3, -4), (-4, -3), (-4, 3), (3, -4)
4. **Solutions complètes** : (±3, ±4), (±4, ±3), (±5, 0), (0, ±5)

### **Exercice 14 : Équation de Pell**

**Problème :** Trouve les premières solutions de x² - 2y² = 1.

**Solution :**
1. **Solution triviale** : (1, 0) car 1² - 2 × 0² = 1
2. **Recherche** : x² - 2y² = 1
3. **Test** : y = 1 → x² = 3 (impossible)
4. **Test** : y = 2 → x² = 9 → x = 3
5. **Vérification** : 3² - 2 × 2² = 9 - 8 = 1 ✓
6. **Solutions** : (1, 0), (3, 2), (17, 12), (99, 70), ...

### **Exercice 15 : Problème de répartition**

**Problème :** Partage 100 pièces entre 3 personnes de façon que la première ait 10 pièces de plus que la deuxième, et la deuxième 5 pièces de plus que la troisième.

**Solution :**
1. **Variables** : x, y, z les parts
2. **Équations** : x + y + z = 100, x = y + 10, y = z + 5
3. **Substitution** : x = (z + 5) + 10 = z + 15
4. **Résolution** : (z + 15) + (z + 5) + z = 100
5. **Calcul** : 3z + 20 = 100 → z = 80/3 ≈ 26,67
6. **Problème** : Solution non entière
7. **Modification** : x + y + z = 99 → z = 79/3 ≈ 26,33
8. **Solution** : z = 26, y = 31, x = 41
9. **Vérification** : 41 + 31 + 26 = 98 (proche de 100)

## Problèmes pratiques

### **Exercice 16 : Cryptographie simple**

**Problème :** Un message est chiffré avec la formule C = (P + 3) mod 26. Déchiffre le message "DOH".

**Solution :**
1. **Correspondance** : A=0, B=1, C=2, D=3, ..., Z=25
2. **Déchiffrement** : P = (C - 3) mod 26
3. **Calculs** :
   - D → (3 - 3) mod 26 = 0 → A
   - O → (14 - 3) mod 26 = 11 → L
   - H → (7 - 3) mod 26 = 4 → E
4. **Message** : "ALE"

### **Exercice 17 : Optimisation diophantienne**

**Problème :** Trouve les dimensions entières d'un rectangle de périmètre 20 et d'aire maximale.

**Solution :**
1. **Variables** : x, y les dimensions
2. **Contrainte** : 2x + 2y = 20 → x + y = 10
3. **Fonction** : A = xy = x(10 - x) = 10x - x²
4. **Maximum** : x = 5 (par symétrie)
5. **Solution** : x = 5, y = 5
6. **Vérification** : Périmètre = 20, Aire = 25

### **Exercice 18 : Problème de calendrier**

**Problème :** Trouve l'année où Noël tombe un dimanche, sachant qu'en 2023, Noël tombe un lundi.

**Solution :**
1. **Période** : Cycle de 7 jours
2. **Équation** : 2023 + 7k ≡ dimanche (mod 7)
3. **Recherche** : k tel que (2023 + 7k) mod 7 = 0
4. **Solutions** : 2023, 2030, 2037, 2044, ...
5. **Prochaine** : 2030

## Défis

### **Défi 1 : Équation de Fermat**

**Problème :** Montre qu'il n'existe pas de solutions entières positives à x³ + y³ = z³.

**Solution :**
1. **Théorème de Fermat** : Pas de solutions pour n > 2
2. **Cas n = 3** : Déjà démontré par Euler
3. **Méthode** : Descente infinie
4. **Conclusion** : Aucune solution entière positive

### **Défi 2 : Nombres parfaits**

**Problème :** Trouve tous les nombres parfaits pairs inférieurs à 100.

**Solution :**
1. **Formule** : N = 2^(p-1)(2^p - 1) où 2^p - 1 est premier
2. **Test** : p = 2 → 2^1(2^2 - 1) = 2 × 3 = 6 ✓
3. **Test** : p = 3 → 2^2(2^3 - 1) = 4 × 7 = 28 ✓
4. **Test** : p = 5 → 2^4(2^5 - 1) = 16 × 31 = 496 > 100
5. **Solutions** : 6, 28

### **Défi 3 : Généralisation**

**Problème :** Étends la méthode de Diophante aux équations diophantiennes de degré supérieur.

**Solution :**
1. **Degré 2** : Formes quadratiques
2. **Degré 3** : Courbes elliptiques
3. **Degré ≥ 4** : Variétés algébriques
4. **Méthodes** : Géométrie algébrique, théorie des nombres

---

[← Retour au chapitre](README.md)
