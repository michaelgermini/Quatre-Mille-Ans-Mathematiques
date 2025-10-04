# Exercices : Mathématiques et médecine

## S6.1 Anatomie mathématique

### **Exercice 1 : Proportions vitruviennes**

**Contexte** : Vous êtes un architecte de la Renaissance étudiant les proportions de l'homme de Vitruve de Léonard de Vinci.

**Données** :
- Hauteur totale d'un individu : 180 cm
- Largeur des épaules : 45 cm
- Longueur du bras étendu : 90 cm

**Questions** :
1. **Calculer les proportions** selon le canon vitruvien :
   - Tête = 1/8 de la hauteur totale
   - Torse = 3/8 de la hauteur totale
   - Jambes = 4/8 de la hauteur totale

2. **Vérifier l'inscription** dans un cercle :
   - Le rayon du cercle doit être égal à la demi-hauteur
   - Calculer le périmètre du cercle

3. **Analyser les proportions** :
   - Comparer avec les proportions idéales
   - Identifier les écarts éventuels

**Solution** :
1. **Proportions calculées** :
   - Tête : 180 ÷ 8 = 22,5 cm
   - Torse : 180 × 3/8 = 67,5 cm
   - Jambes : 180 × 4/8 = 90 cm

2. **Cercle** :
   - Rayon = 180 ÷ 2 = 90 cm
   - Périmètre = 2π × 90 = 565,5 cm

3. **Analyse** : Les proportions respectent le canon vitruvien.

### **Exercice 2 : Calcul de l'IMC**

**Contexte** : Vous êtes un médecin calculant l'indice de masse corporelle (IMC) de vos patients.

**Formule** : IMC = masse (kg) / [taille (m)]²

**Données** :
- Patient A : 70 kg, 1,75 m
- Patient B : 85 kg, 1,80 m
- Patient C : 60 kg, 1,65 m

**Questions** :
1. **Calculer l'IMC** de chaque patient

2. **Classifier selon l'OMS** :
   - < 18,5 : Maigreur
   - 18,5-24,9 : Normal
   - 25-29,9 : Surpoids
   - ≥ 30 : Obésité

3. **Analyser les résultats** et donner des recommandations

**Solution** :
1. **Calculs** :
   - Patient A : IMC = 70/(1,75)² = 22,9
   - Patient B : IMC = 85/(1,80)² = 26,2
   - Patient C : IMC = 60/(1,65)² = 22,0

2. **Classification** :
   - Patient A : Normal (22,9)
   - Patient B : Surpoids (26,2)
   - Patient C : Normal (22,0)

## S6.2 Épidémiologie

### **Exercice 3 : Modèle SIR**

**Contexte** : Vous êtes un épidémiologiste modélisant la propagation d'une épidémie de grippe.

**Données** :
- Population totale : N = 10 000 habitants
- Taux de transmission : β = 0,0003
- Taux de guérison : γ = 0,1
- Conditions initiales : S₀ = 9990, I₀ = 10, R₀ = 0

**Questions** :
1. **Calculer le nombre de reproduction** R₀ = β/γ

2. **Prédire l'évolution** sur 30 jours avec un pas de temps de 1 jour

3. **Identifier le pic épidémique** et le nombre maximum d'infectés

4. **Calculer le seuil d'immunité collective** (1 - 1/R₀)

**Solution** :
1. **R₀** = 0,0003/0,1 = 0,003

2. **Évolution** (équations SIR) :
   ```
   dS/dt = -βSI/N
   dI/dt = βSI/N - γI
   dR/dt = γI
   ```

3. **Pic épidémique** : Maximum de I(t)

4. **Immunité collective** : 1 - 1/0,003 = -332,3 (impossible, pas d'épidémie)

### **Exercice 4 : Analyse de survie**

**Contexte** : Vous analysez la survie de patients atteints d'un cancer.

**Données** (temps en mois) :
- Patient 1 : 12 (événement)
- Patient 2 : 18 (censure)
- Patient 3 : 24 (événement)
- Patient 4 : 30 (événement)
- Patient 5 : 36 (censure)

**Questions** :
1. **Calculer la probabilité de survie** à chaque temps

2. **Tracer la courbe de Kaplan-Meier**

3. **Calculer la médiane de survie**

4. **Calculer le taux de survie** à 2 ans

**Solution** :
1. **Probabilités** :
   - t=12 : S(12) = 4/5 = 0,8
   - t=18 : S(18) = 4/5 = 0,8
   - t=24 : S(24) = 3/4 = 0,75
   - t=30 : S(30) = 2/3 = 0,67
   - t=36 : S(36) = 2/3 = 0,67

2. **Courbe** : Décroissance par paliers

3. **Médiane** : t=24 mois (S(t)=0,5)

4. **Survie à 2 ans** : S(24) = 0,75 = 75%

## S6.3 Imagerie médicale

### **Exercice 5 : Reconstruction tomographique**

**Contexte** : Vous êtes un ingénieur en imagerie médicale travaillant sur la reconstruction d'images CT-scan.

**Données** :
- Matrice d'image : 512 × 512 pixels
- Résolution : 0,5 mm/pixel
- Nombre de projections : 360 (1° par projection)
- Intensité des rayons X : I₀ = 1000

**Questions** :
1. **Calculer la taille de l'image** en mm

2. **Calculer l'atténuation** selon la loi de Beer-Lambert :
   I = I₀ × e^(-μ×d)
   où μ = 0,02 cm⁻¹ et d = 20 cm

3. **Calculer le nombre de données** de projection

4. **Estimer la résolution angulaire** de reconstruction

**Solution** :
1. **Taille** : 512 × 0,5 = 256 mm

2. **Atténuation** : I = 1000 × e^(-0,02×20) = 670,3

3. **Données** : 360 × 512 = 184 320 données

4. **Résolution angulaire** : 1° par projection

### **Exercice 6 : Traitement d'image IRM**

**Contexte** : Vous analysez des images IRM du cerveau pour détecter des lésions.

**Données** :
- Image T1 : valeurs de 0 à 4095
- Image T2 : valeurs de 0 à 4095
- Seuil de détection : 2000

**Questions** :
1. **Calculer l'histogramme** de l'image T1

2. **Appliquer un filtre médian** 3×3 sur une région

3. **Calculer le gradient** de l'image

4. **Segmenter l'image** par seuillage

**Solution** :
1. **Histogramme** : Distribution des valeurs de 0 à 4095

2. **Filtre médian** : Remplacement par la valeur médiane

3. **Gradient** : Calcul des dérivées spatiales

4. **Segmentation** : Pixels > 2000 = lésion, sinon = tissu normal

## S6.4 Pharmacologie

### **Exercice 7 : Pharmacocinétique à un compartiment**

**Contexte** : Vous êtes un pharmacologue étudiant l'élimination d'un médicament.

**Données** :
- Dose administrée : D = 100 mg
- Volume de distribution : Vd = 50 L
- Constante d'élimination : ke = 0,1 h⁻¹

**Questions** :
1. **Calculer la concentration initiale** C₀ = D/Vd

2. **Calculer la demi-vie** t₁/₂ = ln(2)/ke

3. **Calculer la clairance** Cl = ke × Vd

4. **Prédire la concentration** après 8 heures

**Solution** :
1. **C₀** = 100/50 = 2 mg/L

2. **t₁/₂** = ln(2)/0,1 = 6,93 heures

3. **Cl** = 0,1 × 50 = 5 L/h

4. **C(8h)** = 2 × e^(-0,1×8) = 0,90 mg/L

### **Exercice 8 : Calcul de dose de maintien**

**Contexte** : Vous calculez la dose de maintien pour maintenir une concentration stable.

**Données** :
- Concentration cible : Css = 5 mg/L
- Clairance : Cl = 3 L/h
- Intervalle d'administration : τ = 8 h

**Questions** :
1. **Calculer la dose de maintien** D = Css × Cl × τ

2. **Calculer la concentration** juste avant la dose suivante

3. **Vérifier l'état stable** après 5 demi-vies

4. **Optimiser l'intervalle** pour minimiser les variations

**Solution** :
1. **Dose** = 5 × 3 × 8 = 120 mg

2. **Concentration** = Css × e^(-ke×τ) = 5 × e^(-0,1×8) = 2,25 mg/L

3. **État stable** : Atteint après 5 × t₁/₂ = 35 heures

4. **Optimisation** : Intervalle = 1-2 demi-vies pour stabilité

## Exercices avancés

### **Exercice 9 : Modèle épidémiologique avec vaccination**

**Contexte** : Vous modélisez l'impact d'une campagne de vaccination.

**Données** :
- Population : 100 000 habitants
- Efficacité vaccinale : 85%
- Couverture vaccinale : 70%
- R₀ sans vaccination : 3

**Questions** :
1. **Calculer le R₀ effectif** avec vaccination

2. **Prédire l'impact** sur l'épidémie

3. **Calculer le seuil de vaccination** nécessaire

4. **Optimiser la stratégie** de vaccination

**Solution** :
1. **R₀ effectif** = R₀ × (1 - efficacité × couverture) = 3 × (1 - 0,85 × 0,7) = 1,215

2. **Impact** : Réduction significative de l'épidémie

3. **Seuil** : Couverture > (1 - 1/R₀)/efficacité = 78%

4. **Stratégie** : Vaccination prioritaire des contacts

### **Exercice 10 : Optimisation de dosage personnalisé**

**Contexte** : Vous optimisez le dosage d'un médicament pour un patient spécifique.

**Données** :
- Patient : 70 kg, 45 ans, fonction rénale altérée
- Médicament : théophylline
- Concentration cible : 10-20 mg/L
- Clairance normale : 3 L/h
- Facteur d'ajustement rénal : 0,6

**Questions** :
1. **Calculer la clairance ajustée**

2. **Calculer la dose initiale**

3. **Calculer la dose de maintien**

4. **Prévoir le monitoring** nécessaire

**Solution** :
1. **Clairance ajustée** = 3 × 0,6 = 1,8 L/h

2. **Dose initiale** = 10 × 35 = 350 mg

3. **Dose de maintien** = 15 × 1,8 × 12 = 324 mg/12h

4. **Monitoring** : Dosage plasmatique après 3-5 jours

---

## Corrigés détaillés

### **Méthodologie de résolution**

#### **Pour les exercices d'anatomie** :
1. **Identifier les formules** appropriées
2. **Appliquer les proportions** standards
3. **Vérifier la cohérence** des résultats
4. **Interpréter cliniquement** les résultats

#### **Pour les exercices d'épidémiologie** :
1. **Définir les paramètres** du modèle
2. **Résoudre les équations** différentielles
3. **Analyser la dynamique** du système
4. **Interpréter épidémiologiquement** les résultats

#### **Pour les exercices d'imagerie** :
1. **Comprendre les principes** physiques
2. **Appliquer les algorithmes** de traitement
3. **Optimiser les paramètres** de reconstruction
4. **Évaluer la qualité** de l'image

#### **Pour les exercices de pharmacologie** :
1. **Identifier le modèle** pharmacocinétique
2. **Calculer les paramètres** du modèle
3. **Optimiser le dosage** selon les objectifs
4. **Planifier le monitoring** thérapeutique

### **Applications cliniques**

Ces exercices préparent à :
- **Diagnostic médical** assisté par l'imagerie
- **Épidémiologie** et santé publique
- **Pharmacologie clinique** et dosage personnalisé
- **Recherche médicale** et développement de médicaments

---

[← Retour au chapitre](README.md) | [Suite : Conclusion →](../Conclusion.md)
