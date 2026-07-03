Excelente. Este entregable sí marca el inicio del **Brand Engineering** de TeoCRM. A partir de aquí dejamos de trabajar "por apariencia" y empezamos a trabajar con **geometría**.

---

# 📐 Entregable A2 — Retícula Matemática del Isotipo

El objetivo es definir la **estructura geométrica** sobre la cual construiremos el Master SVG.

No dibujaremos el isotipo directamente.

Primero construiremos el plano.

Exactamente igual que un arquitecto no empieza una casa por las paredes.

---

# 1. Canvas Maestro

Todo el sistema utilizará un único canvas.

```
1000 × 1000 unidades
```

¿Por qué 1000?

Porque simplifica muchísimo los cálculos.

Después podremos exportar fácilmente:

```
16 px

24 px

32 px

48 px

64 px

128 px

256 px

512 px

1024 px
```

sin recalcular absolutamente nada.

---

# 2. Centro Oficial

El centro del isotipo será

```
(500 , 500)
```

Todo girará alrededor de este punto.

---

# 3. Retícula Base

No utilizaremos una cuadrícula cualquiera.

La propuesta es una retícula modular de:

```
20 × 20 px
```

Lo que genera

```
50 columnas

50 filas
```

Cada elemento del isotipo deberá alinearse a dicha retícula.

---

# 4. Sistema de Circunferencias

En lugar de una única circunferencia tendremos cuatro.

```
Exterior

Intermedia

Nodos

Zona libre
```

Visualmente:

```
        ┌────────────────────┐
        │                    │
        │    ○ ○ ○ ○ ○       │
        │  ○             ○   │
        │ ○               ○  │
        │ ○               ○  │
        │  ○             ○   │
        │    ○ ○ ○ ○ ○       │
        │                    │
        └────────────────────┘
```

---

# 5. Diámetros Propuestos

| Elemento           | Valor |
| ------------------ | ----: |
| Canvas             |  1000 |
| Radio exterior     |   420 |
| Radio interior     |   360 |
| Espesor del anillo |    60 |
| Zona de seguridad  |    60 |

Esto nos deja un isotipo perfectamente equilibrado.

---

# 6. Sistema Angular

No colocaremos los nodos "a ojo".

Todo se ubicará mediante ángulos.

Ejemplo:

```
-145°

-115°

-80°

25°

120°

155°
```

Cada nodo tendrá coordenadas calculadas.

---

# 7. Sistema de Nodos

Definiremos únicamente tres tamaños.

| Tipo | Radio |
| ---- | ----: |
| XL   |    24 |
| M    |    18 |
| S    |    14 |

Nunca utilizaremos un cuarto tamaño.

Eso mantiene la consistencia visual.

---

# 8. Flecha

La flecha será una curva Bézier.

No será una línea.

Definiremos:

```
Inicio

Control 1

Control 2

Final
```

y además

```
punta

ángulo

longitud

grosor
```

Todo documentado.

---

# 9. Área de Protección

La unidad

```
X
```

será igual al diámetro del nodo XL.

```
┌────────────────────────────┐
│                            │
│      Área protegida         │
│                            │
│       ┌──────────┐         │
│       │ Isotipo  │         │
│       └──────────┘         │
│                            │
└────────────────────────────┘
```

Nunca ningún texto podrá invadir esa zona.

---

# 10. Sistema de Capas

El SVG maestro estará organizado así:

```
SVG

├── GRID
├── SAFE AREA
├── ORBIT
├── SEGMENTS
├── NODES
├── ARROW
├── COLORS
└── EXPORT
```

No habrá cientos de `<path>` mezclados.

Será perfectamente mantenible.

---

# 11. Coordenadas Oficiales

En el siguiente entregable (A3) construiremos una tabla completa.

Por ejemplo:

| Elemento      |   X |   Y |
| ------------- | --: | --: |
| Nodo XL       | 246 | 318 |
| Nodo M        | 322 | 208 |
| Nodo S        | 420 | 144 |
| Flecha Inicio | 268 | 640 |
| Flecha Final  | 806 | 230 |

Esas coordenadas serán las que utilice el SVG definitivo.

---

# 📄 Documento A2

Te propongo crear además:

```
docs/branding/

BrandGrid.md
```

con toda esta especificación.

---

# ⭐ Una mejora adicional

Aquí quiero proponerte algo que creo que elevará mucho el nivel del proyecto.

En lugar de que **A2** sea solo un documento Markdown, generemos una **lámina técnica vectorial** (tipo blueprint), similar a las que utilizan Apple, IBM o Google en sus manuales de identidad.

Esa lámina incluirá:

* retícula 1000×1000;
* ejes X e Y;
* circunferencias guía;
* radios;
* posiciones angulares de los nodos;
* área de protección;
* cotas y medidas;
* anotaciones técnicas.

Será un documento visual que podremos conservar dentro de `docs/branding/BrandGrid.pdf` y como SVG. Además de servirnos para construir el Master SVG, será una pieza de documentación muy valiosa para el proyecto.

**Creo que este debería ser el siguiente entregable (A2.1)**, porque a partir de esa lámina construiremos el Master Isotipo con una precisión y una organización propias de un producto profesional.
