
# Navbar-Links aktualisieren

Die Navbar enthält noch die alten Service-Namen (z.B. "Technische SEO", "On-Page Optimierung", "Off-Page / Linkbuilding"). Diese werden an die neuen 10 Service-Bezeichnungen angepasst, die bereits auf der Startseite und den Unterseiten verwendet werden.

## Anderungen

**Datei:** `src/components/layout/Navbar.tsx`

Die `services`-Liste (Zeilen 7-18) wird aktualisiert:

| Alt | Neu |
|-----|-----|
| Technische SEO | SEO-Strategie |
| On-Page Optimierung | Webdesign & Entwicklung |
| Off-Page / Linkbuilding | Social Media Marketing |
| Content Marketing | Content Creation |
| Lokale SEO | Lokale & Globale SEO |
| Internationale SEO | Digitale Strategie |
| Google Ads (SEA) | Performance Marketing |
| Lead-Generierung | Performance & Speed |
| E-Commerce SEO | E-Commerce-Losungen |
| AI-Search (GEO) | KI-Optimierung (GEO) |

Die Pfade (`path`) bleiben unverandert, damit die bestehenden Routen weiterhin funktionieren. Die Reihenfolge wird an die ServicesSection auf der Startseite angeglichen.
