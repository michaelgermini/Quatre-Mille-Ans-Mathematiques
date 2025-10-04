# Théorèmes et Formules : Référence complète

## Table des matières

### [Théorèmes géométriques](#théorèmes-géométriques)
- [Théorème de Thalès](#théorème-de-thalès)
- [Théorème de Pythagore](#théorème-de-pythagore)
- [Théorème d'Euclide](#théorème-deuclide)
- [Formules d'Archimède](#formules-darchimède)
- [Théorème d'Apollonius](#théorème-dapollonius)

### [Théorèmes algébriques](#théorèmes-algébriques)
- [Formules de Brahmagupta](#formules-de-brahmagupta)
- [Formules de Bhaskara](#formules-de-bhaskara)
- [Formules de Cardano](#formules-de-cardano)
- [Formules de Viète](#formules-de-viète)
- [Théorème de Galois](#théorème-de-galois)

### [Théorèmes d'analyse](#théorèmes-danalyse)
- [Formules de Newton](#formules-de-newton)
- [Formules d'Euler](#formules-deuler)
- [Théorème de Gauss](#théorème-de-gauss)
- [Théorème de Laplace](#théorème-de-laplace)
- [Formules de Lagrange](#formules-de-lagrange)

### [Théorèmes de théorie des nombres](#théorèmes-de-théorie-des-nombres)
- [Théorème de Diophante](#théorème-de-diophante)
- [Théorème de Ramanujan](#théorème-de-ramanujan)
- [Théorème de Fermat](#théorème-de-fermat)

---

## Théorèmes géométriques

### Théorème de Thalès

**Énoncé :** Si deux droites parallèles coupent deux droites sécantes, alors les segments correspondants sont proportionnels.

**Formulation :** Si (AB) // (CD), alors OA/OC = OB/OD = AB/CD

**Démonstration :**
1. Les triangles OAB et OCD sont semblables
2. Leurs côtés sont proportionnels
3. Donc OA/OC = OB/OD = AB/CD

**Applications :**
- Mesure de distances inaccessibles
- Construction de figures proportionnelles
- Calculs d'échelles

**Exemple :** Si OA = 3, OC = 6, AB = 4, alors CD = 8

### Théorème de Pythagore

**Énoncé :** Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.

**Formulation :** a² + b² = c²

**Démonstration géométrique :**
1. Construire un carré de côté (a + b)
2. Placer quatre triangles rectangles identiques
3. L'aire du grand carré = 4 × (ab/2) + c²
4. L'aire du grand carré = (a + b)² = a² + 2ab + b²
5. Donc a² + 2ab + b² = 2ab + c²
6. Donc a² + b² = c²

**Applications :**
- Calcul de distances
- Vérification d'angles droits
- Construction géométrique

**Exemple :** Triangle 3-4-5 : 3² + 4² = 9 + 16 = 25 = 5²

### Théorème d'Euclide

**Énoncé :** La somme des angles d'un triangle est égale à 180°.

**Démonstration :**
1. Tracer une parallèle à un côté passant par le sommet opposé
2. Les angles alternes-internes sont égaux
3. Les trois angles du triangle forment un angle plat
4. Donc leur somme vaut 180°

**Généralisation :** Pour un polygone à n côtés, la somme des angles vaut (n-2) × 180°

**Applications :**
- Calcul d'angles manquants
- Construction de polygones
- Vérification de figures

### Formules d'Archimède

#### Volume de la sphère
**V = (4/3)πr³**

#### Surface de la sphère
**S = 4πr²**

#### Volume du cylindre
**V = πr²h**

#### Volume du cône
**V = (1/3)πr²h**

**Démonstration par la méthode d'exhaustion :**
1. Approcher le solide par des polygones
2. Augmenter le nombre de côtés
3. Prendre la limite quand le nombre de côtés tend vers l'infini

### Théorème d'Apollonius

**Énoncé :** Les coniques sont obtenues en coupant un cône par un plan.

#### Cercle
- Plan perpendiculaire à l'axe
- Excentricité : e = 0
- Équation : x² + y² = r²

#### Ellipse
- Plan oblique ne coupant qu'une nappe
- Excentricité : 0 < e < 1
- Équation : x²/a² + y²/b² = 1

#### Parabole
- Plan parallèle à une génératrice
- Excentricité : e = 1
- Équation : y² = 4px

#### Hyperbole
- Plan coupant les deux nappes
- Excentricité : e > 1
- Équation : x²/a² - y²/b² = 1

---

## Théorèmes algébriques

### Formules de Brahmagupta

#### Règles avec zéro
- a + 0 = a
- a - 0 = a
- a × 0 = 0
- a ÷ 0 = "infini" (concept flou à l'époque)

#### Résolution d'équations quadratiques
Pour x² + bx = c :
1. Ajouter (b/2)² aux deux membres
2. Factoriser : (x + b/2)² = c + (b/2)²
3. Extraire la racine : x + b/2 = ±√(c + (b/2)²)
4. Solution : x = -b/2 ± √(c + (b/2)²)

#### Formule de Brahmagupta pour l'aire
Pour un quadrilatère cyclique de côtés a, b, c, d et demi-périmètre s = (a + b + c + d)/2 :
**Aire = √[(s-a)(s-b)(s-c)(s-d)]**

### Formules de Bhaskara

#### Formule d'approximation du sinus
**sin(x) ≈ (16x(π-x)) / (5π² - 4x(π-x))**

#### Formule de résolution des équations quadratiques
Pour ax² + bx + c = 0 :
**x = (-b ± √(b² - 4ac)) / 2a**

### Formules de Cardano

#### Résolution des équations cubiques
Pour x³ + ax² + bx + c = 0 :
1. Substituer x = y - a/3
2. Résoudre l'équation réduite y³ + py + q = 0
3. Appliquer la formule de Tartaglia

#### Nombres complexes
**i² = -1**
**i³ = -i**
**i⁴ = 1**

### Formules de Viète

#### Pour les équations quadratiques
Pour ax² + bx + c = 0 avec racines x₁ et x₂ :
- **x₁ + x₂ = -b/a**
- **x₁ × x₂ = c/a**

#### Pour les équations cubiques
Pour ax³ + bx² + cx + d = 0 avec racines x₁, x₂, x₃ :
- **x₁ + x₂ + x₃ = -b/a**
- **x₁x₂ + x₁x₃ + x₂x₃ = c/a**
- **x₁x₂x₃ = -d/a**

### Théorème de Galois

**Énoncé :** Une équation polynomiale est résoluble par radicaux si et seulement si son groupe de Galois est résoluble.

**Définition :** Un groupe est résoluble s'il existe une chaîne de sous-groupes normaux :
G = G₀ ⊃ G₁ ⊃ ... ⊃ Gₙ = {e}
où chaque quotient Gᵢ/Gᵢ₊₁ est abélien.

**Applications :**
- Résolubilité des équations
- Construction géométrique
- Théorie des nombres

---

## Théorèmes d'analyse

### Formules de Newton

#### Dérivée
**f'(x) = lim(h→0) [f(x+h) - f(x)]/h**

#### Règles de dérivation
- (xⁿ)' = nxⁿ⁻¹
- (eˣ)' = eˣ
- (sin x)' = cos x
- (cos x)' = -sin x

#### Intégrale
**∫ f(x) dx = F(x) + C** où F'(x) = f(x)

#### Séries infinies
- **eˣ = 1 + x + x²/2! + x³/3! + ...**
- **sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ...**
- **cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ...**

### Formules d'Euler

#### Formule fondamentale
**e^(iπ) + 1 = 0**

#### Formule généralisée
**e^(ix) = cos(x) + i sin(x)**

#### Conséquences
- **cos(x) = (e^(ix) + e^(-ix))/2**
- **sin(x) = (e^(ix) - e^(-ix))/(2i)**

### Théorème de Gauss

#### Théorème fondamental de l'algèbre
**Tout polynôme de degré n a exactement n racines complexes (comptées avec multiplicité).**

#### Loi de réciprocité quadratique
Pour des nombres premiers impairs p et q :
**(p/q)(q/p) = (-1)^((p-1)(q-1)/4)**

#### Méthode des moindres carrés
Pour ajuster une droite y = ax + b à des points (xᵢ,yᵢ) :
**a = (nΣxy - ΣxΣy)/(nΣx² - (Σx)²)**
**b = (Σy - aΣx)/n**

### Théorème de Laplace

#### Théorème central limite
**La somme de n variables aléatoires indépendantes suit approximativement une loi normale quand n est grand.**

#### Transformée de Laplace
**L{f(t)} = ∫₀^∞ e^(-st)f(t)dt**

#### Propriétés
- **Linéarité :** L{af(t) + bg(t)} = aL{f(t)} + bL{g(t)}
- **Dérivation :** L{f'(t)} = sL{f(t)} - f(0)
- **Intégration :** L{∫₀^t f(τ)dτ} = L{f(t)}/s

### Formules de Lagrange

#### Principe de moindre action
**Le mouvement d'un système physique minimise l'action S = ∫ L dt**

#### Équations de Lagrange
**d/dt(∂L/∂q̇ᵢ) - ∂L/∂qᵢ = 0**

#### Théorème des quatre carrés
**Tout entier positif peut s'écrire comme la somme d'au plus quatre carrés parfaits.**

---

## Théorèmes de théorie des nombres

### Théorème de Diophante

**Énoncé :** Une équation diophantienne est une équation polynomiale à coefficients entiers dont on cherche les solutions entières.

**Exemple :** Pour 2x + 3y = 12 :
- Solutions : x = 6 - 3k, y = 2k pour k entier
- Solutions particulières : (6,0), (3,2), (0,4)

### Théorème de Ramanujan

#### Formule pour π
**1/π = (2√2/99²) × Σ(k=0 to ∞) [(4k)! × (1103 + 26390k)] / [(k!)⁴ × 396⁴ᵏ]**

#### Théorème de Hardy-Ramanujan
**p(n) ≈ e^(π√(2n/3)) / (4n√3)**
où p(n) est le nombre de partitions de n.

#### Série divergente
**1 + 2 + 3 + 4 + ... = -1/12** (dans un sens analytique)

### Théorème de Fermat

#### Dernier théorème de Fermat
**L'équation xⁿ + yⁿ = zⁿ n'a pas de solutions entières positives pour n > 2.**

#### Petit théorème de Fermat
**Si p est premier et a n'est pas divisible par p, alors a^(p-1) ≡ 1 (mod p).**

---

## Formules trigonométriques

### Identités fondamentales
- **sin²(x) + cos²(x) = 1**
- **tan(x) = sin(x)/cos(x)**
- **cot(x) = cos(x)/sin(x)**

### Formules d'addition
- **sin(a + b) = sin(a)cos(b) + cos(a)sin(b)**
- **cos(a + b) = cos(a)cos(b) - sin(a)sin(b)**
- **tan(a + b) = (tan(a) + tan(b))/(1 - tan(a)tan(b))**

### Formules d'angle double
- **sin(2a) = 2sin(a)cos(a)**
- **cos(2a) = cos²(a) - sin²(a) = 2cos²(a) - 1 = 1 - 2sin²(a)**
- **tan(2a) = 2tan(a)/(1 - tan²(a))**

### Formules de Moivre
**(cos(x) + i sin(x))ⁿ = cos(nx) + i sin(nx)**

---

## Constantes mathématiques importantes

### π (Pi)
- **Valeur :** π ≈ 3.14159265359...
- **Définition :** Rapport circonférence/diamètre
- **Formules :** π = 4(1 - 1/3 + 1/5 - 1/7 + ...)

### e (Nombre d'Euler)
- **Valeur :** e ≈ 2.71828182846...
- **Définition :** e = lim(n→∞) (1 + 1/n)ⁿ
- **Formule :** e = 1 + 1 + 1/2! + 1/3! + 1/4! + ...

### φ (Nombre d'or)
- **Valeur :** φ = (1 + √5)/2 ≈ 1.61803398875...
- **Propriété :** φ = 1 + 1/φ
- **Suite de Fibonacci :** lim(n→∞) F(n)/F(n-1) = φ

### i (Unité imaginaire)
- **Définition :** i² = -1
- **Propriétés :** i³ = -i, i⁴ = 1
- **Formule d'Euler :** e^(iπ) = -1

---

## Applications pratiques

### Calculs d'aires et volumes
- **Cercle :** A = πr², C = 2πr
- **Sphère :** V = (4/3)πr³, S = 4πr²
- **Cylindre :** V = πr²h, S = 2πr(h + r)
- **Cône :** V = (1/3)πr²h, S = πr(r + l)

### Résolution d'équations
- **Linéaire :** ax + b = 0 → x = -b/a
- **Quadratique :** ax² + bx + c = 0 → x = (-b ± √(b²-4ac))/(2a)
- **Cubique :** Méthode de Cardano
- **Quartique :** Méthode de Ferrari

### Calculs de probabilités
- **Loi normale :** f(x) = (1/√(2πσ²))e^(-(x-μ)²/(2σ²))
- **Théorème central limite :** Convergence vers la loi normale
- **Loi de Poisson :** P(X = k) = (λᵏe^(-λ))/k!

---

[← Retour au livre principal](../README.md)
