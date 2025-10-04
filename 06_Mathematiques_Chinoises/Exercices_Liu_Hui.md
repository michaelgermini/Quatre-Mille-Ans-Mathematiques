# Exercices : Liu Hui (刘徽) - Le génie de la géométrie

## Exercices de base

### **Exercice 1 : Méthode d'exhaustion pour π**
Utilise la méthode de Liu Hui pour calculer π avec un polygone de 12 côtés inscrit dans un cercle de rayon 1.

**Solution :**
1. **Côté du dodécagone** : s₁₂ = √(2 - √3) ≈ 0,5176
2. **Périmètre** : P₁₂ = 12 × 0,5176 ≈ 6,2112
3. **Approximation** : π ≈ 6,2112/(2×1) = 3,1056
4. **Erreur** : |3,1056 - 3,14159| ≈ 0,036 (erreur ≈ 1,1%)
5. **Vérification** : Approximation acceptable pour 12 côtés

### **Exercice 2 : Volume de pyramide**
Calcule le volume d'une pyramide carrée de base 5 m × 5 m et de hauteur 8 m.

**Solution :**
1. **Aire de base** : A = 5 × 5 = 25 m²
2. **Formule** : Volume = (Aire de base × Hauteur) / 3
3. **Calcul** : V = (25 × 8) / 3 = 200 / 3 ≈ 66,67 m³
4. **Vérification** : Volume ≈ 66,67 m³

### **Exercice 3 : Volume de cône**
Calcule le volume d'un cône de rayon 4 m et de hauteur 9 m.

**Solution :**
1. **Identification** : r = 4 m, h = 9 m
2. **Formule** : Volume = πr²h/3
3. **Calcul** : V = π × 4² × 9 / 3 = π × 16 × 3 = 48π m³
4. **Approximation** : V ≈ 48 × 3,1416 ≈ 150,80 m³
5. **Vérification** : Volume ≈ 150,80 m³

### **Exercice 4 : Volume de sphère**
Calcule le volume d'une sphère de rayon 6 m.

**Solution :**
1. **Identification** : r = 6 m
2. **Formule** : Volume = (4/3)πr³
3. **Calcul** : V = (4/3)π × 6³ = (4/3)π × 216 = 288π m³
4. **Approximation** : V ≈ 288 × 3,1416 ≈ 904,78 m³
5. **Vérification** : Volume ≈ 904,78 m³

### **Exercice 5 : Calcul de π par hexagone**
Utilise la méthode d'exhaustion pour calculer π avec un hexagone régulier inscrit dans un cercle de rayon 1.

**Solution :**
1. **Côté de l'hexagone** : s = r = 1
2. **Périmètre** : P = 6 × 1 = 6
3. **Approximation** : π ≈ 6/(2×1) = 3
4. **Erreur** : |3 - 3,14159| ≈ 0,14159 (erreur ≈ 4,5%)
5. **Vérification** : Approximation de base

## Exercices avancés

### **Exercice 6 : Polygone de 24 côtés**
Calcule l'approximation de π avec un polygone de 24 côtés inscrit dans un cercle de rayon 1.

**Solution :**
1. **Méthode** : Itération de la formule de Liu Hui
2. **Côté du 24-gone** : s₂₄ ≈ 0,26105
3. **Périmètre** : P₂₄ ≈ 24 × 0,26105 ≈ 6,2653
4. **Approximation** : π ≈ 6,2653/2 = 3,13265
5. **Erreur** : |3,13265 - 3,14159| ≈ 0,0089 (erreur ≈ 0,28%)

### **Exercice 7 : Volume de pyramide tronquée**
Calcule le volume d'une pyramide tronquée carrée. La base inférieure mesure 10 m × 10 m, la base supérieure 6 m × 6 m, et la hauteur est de 8 m.

**Solution :**
1. **Volume de la grande pyramide** : V₁ = (10² × 20) / 3 = 2000/3 ≈ 666,67 m³
2. **Volume de la petite pyramide** : V₂ = (6² × 12) / 3 = 432/3 = 144 m³
3. **Volume du tronc** : V = V₁ - V₂ = 666,67 - 144 = 522,67 m³
4. **Vérification** : Volume ≈ 522,67 m³

### **Exercice 8 : Calcul de π par polygone de 96 côtés**
Utilise la méthode de Liu Hui pour calculer π avec un polygone de 96 côtés.

**Solution :**
1. **Méthode** : Itération multiple de la formule
2. **Côté du 96-gone** : s₉₆ ≈ 0,06544
3. **Périmètre** : P₉₆ ≈ 96 × 0,06544 ≈ 6,2822
4. **Approximation** : π ≈ 6,2822/2 = 3,1411
5. **Erreur** : |3,1411 - 3,14159| ≈ 0,00049 (erreur ≈ 0,016%)

### **Exercice 9 : Volume de cône tronqué**
Calcule le volume d'un cône tronqué. Le rayon inférieur est de 8 m, le rayon supérieur de 4 m, et la hauteur est de 12 m.

**Solution :**
1. **Volume du grand cône** : V₁ = π × 8² × 24 / 3 = 512π m³
2. **Volume du petit cône** : V₂ = π × 4² × 12 / 3 = 64π m³
3. **Volume du tronc** : V = V₁ - V₂ = 512π - 64π = 448π m³
4. **Approximation** : V ≈ 448 × 3,1416 ≈ 1407,43 m³

### **Exercice 10 : Calcul de volume par tranches**
Un solide a une base circulaire de rayon 5 m. Chaque section horizontale à la hauteur h est un carré de côté 2√(25 - h²). Calcule le volume.

**Solution :**
1. **Côté du carré** : s(h) = 2√(25 - h²)
2. **Aire de la section** : A(h) = [2√(25 - h²)]² = 4(25 - h²) = 100 - 4h²
3. **Volume** : V = ∫₋₅⁵ (100 - 4h²) dh = 2∫₀⁵ (100 - 4h²) dh
4. **Calcul** : V = 2[100h - 4h³/3]₀⁵ = 2[500 - 500/3] = 2[1000/3] = 2000/3 m³
5. **Résultat** : V ≈ 666,67 m³

## Exercices pratiques

### **Exercice 11 : Application architecturale**
Un architecte doit construire un dôme sphérique de rayon 15 m. Calcule le volume de béton nécessaire.

**Solution :**
1. **Volume total** : V = (4/3)π × 15³ = (4/3)π × 3375 = 4500π m³
2. **Approximation** : V ≈ 4500 × 3,1416 ≈ 14137,20 m³
3. **Application** : Volume de béton ≈ 14137 m³
4. **Pratique** : Commande de 14200 m³ de béton

### **Exercice 12 : Calcul de volume de réservoir**
Un réservoir a la forme d'un cône inversé de rayon 10 m et de hauteur 12 m. Calcule sa capacité.

**Solution :**
1. **Identification** : r = 10 m, h = 12 m
2. **Formule** : Volume = πr²h/3
3. **Calcul** : V = π × 10² × 12 / 3 = π × 100 × 4 = 400π m³
4. **Approximation** : V ≈ 400 × 3,1416 ≈ 1256,64 m³
5. **Capacité** : ≈ 1257 m³

### **Exercice 13 : Problème de construction de tunnel**
Un tunnel a la forme d'un demi-cylindre de rayon 8 m et de longueur 200 m. Calcule le volume de terre excavée.

**Solution :**
1. **Volume du cylindre complet** : V = π × 8² × 200 = 12800π m³
2. **Volume du demi-cylindre** : V = 12800π / 2 = 6400π m³
3. **Approximation** : V ≈ 6400 × 3,1416 ≈ 20106,24 m³
4. **Volume excavé** : ≈ 20106 m³

### **Exercice 14 : Calcul de volume de silo**
Un silo cylindrique de rayon 6 m et de hauteur 20 m est surmonté d'un cône de même rayon et de hauteur 8 m. Calcule le volume total.

**Solution :**
1. **Volume du cylindre** : V₁ = π × 6² × 20 = 720π m³
2. **Volume du cône** : V₂ = π × 6² × 8 / 3 = 96π m³
3. **Volume total** : V = V₁ + V₂ = 720π + 96π = 816π m³
4. **Approximation** : V ≈ 816 × 3,1416 ≈ 2563,55 m³

### **Exercice 15 : Calcul de surface de sphère**
Calcule la surface d'une sphère de rayon 7 m.

**Solution :**
1. **Identification** : r = 7 m
2. **Formule** : Surface = 4πr²
3. **Calcul** : S = 4π × 7² = 4π × 49 = 196π m²
4. **Approximation** : S ≈ 196 × 3,1416 ≈ 615,75 m²
5. **Surface** : ≈ 616 m²

## Exercices de défi

### **Exercice 16 : Calcul de π par méthode d'exhaustion avancée**
Utilise la méthode de Liu Hui pour calculer π avec un polygone de 192 côtés.

**Solution :**
1. **Méthode** : Itération multiple de la formule
2. **Côté du 192-gone** : s₁₉₂ ≈ 0,03274
3. **Périmètre** : P₁₉₂ ≈ 192 × 0,03274 ≈ 6,2861
4. **Approximation** : π ≈ 6,2861/2 = 3,14305
5. **Erreur** : |3,14305 - 3,14159| ≈ 0,00146 (erreur ≈ 0,046%)

### **Exercice 17 : Volume de solide complexe**
Un solide est formé d'un cylindre de rayon 5 m et de hauteur 10 m, surmonté d'une demi-sphère de même rayon. Calcule le volume total.

**Solution :**
1. **Volume du cylindre** : V₁ = π × 5² × 10 = 250π m³
2. **Volume de la sphère complète** : V₂ = (4/3)π × 5³ = (4/3)π × 125 = 500π/3 m³
3. **Volume de la demi-sphère** : V₃ = (500π/3) / 2 = 250π/3 m³
4. **Volume total** : V = V₁ + V₃ = 250π + 250π/3 = 750π/3 + 250π/3 = 1000π/3 m³
5. **Approximation** : V ≈ 1000 × 3,1416 / 3 ≈ 1047,20 m³

### **Exercice 18 : Calcul de volume par intégration**
Un solide a une base carrée de côté 4 m. Chaque section horizontale à la hauteur h est un triangle équilatéral de côté 4 - h. Calcule le volume.

**Solution :**
1. **Côté du triangle** : s(h) = 4 - h
2. **Aire du triangle** : A(h) = (√3/4) × (4 - h)²
3. **Volume** : V = ∫₀⁴ (√3/4) × (4 - h)² dh
4. **Substitution** : u = 4 - h, du = -dh
5. **Calcul** : V = (√3/4) ∫₀⁴ u² du = (√3/4) [u³/3]₀⁴ = (√3/4) × 64/3 = 16√3/3 m³
6. **Approximation** : V ≈ 16 × 1,732 / 3 ≈ 9,24 m³

### **Exercice 19 : Calcul de π par polygone circonscrit**
Utilise un polygone de 12 côtés circonscrit au cercle de rayon 1 pour encadrer π.

**Solution :**
1. **Côté du dodécagone circonscrit** : s = 2tan(π/12) ≈ 0,5359
2. **Périmètre** : P ≈ 12 × 0,5359 ≈ 6,4308
3. **Approximation supérieure** : π ≈ 6,4308/2 = 3,2154
4. **Encadrement** : 3,1056 < π < 3,2154
5. **Moyenne** : π ≈ (3,1056 + 3,2154)/2 = 3,1605

### **Exercice 20 : Volume de révolution**
Un triangle rectangle de côtés 3, 4, 5 tourne autour de son hypoténuse. Calcule le volume du solide obtenu.

**Solution :**
1. **Hauteur** : h = (3 × 4)/5 = 12/5 = 2,4
2. **Rayon de la base** : r = 2,4
3. **Volume** : V = (π × r² × h)/3 = π × (2,4)² × 2,4 / 3 = π × 5,76 × 2,4 / 3
4. **Calcul** : V = 13,824π / 3 = 4,608π m³
5. **Approximation** : V ≈ 4,608 × 3,1416 ≈ 14,48 m³

---

[← Précédent : Exercices Jiu Zhang](Exercices_Jiu_Zhang.md) | [Suite : Exercices généraux →](Exercices_Chinois.md)
