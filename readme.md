# Sports for Development — Project Website

> **README for:** Web Development & University Submission  
> **Version:** 1.0  
> **Last updated:** 2026-05-06 

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Target Audiences](#2-target-audiences)
3. [Key Questions](#3-key-questions)
4. [Website Structure & Pages](#4-website-structure--pages)
5. [Interactive Map Feature](#5-interactive-map-feature)
6. [Data Model](#6-data-model)
7. [Tech Stack](#7-tech-stack)
8. [Design Specifications](#8-design-specifications)
9. [Deployment](#9-deployment)

---

## 1. Project Overview

This website provides an introduction to the **Sports for Development (S4D)** approach as applied in international cooperation. It serves two distinct audiences: newcomers seeking a general introduction to the concept, and informed readers looking for actionable information about ongoing projects worldwide.

The greater mission of the website is to **grow the Sports for Development movement** by encouraging visitors to volunteer in S4D projects abroad.

---

## 2. Target Audiences

| Audience | Description | Primary Need |
|---|---|---|
| **Laypersons** | People with no prior knowledge of Sports for Development | A clear, accessible introduction to the concept |
| **Informed readers** | People already familiar with the topic | An interactive map to discover and explore ongoing S4D projects worldwide and find volunteering opportunities |

---

## 3. Key Questions

The website answers the following questions:

- What is Sports for Development?
- What are the advantages of this approach?
- What are the risks of this approach?
- Where do ongoing Sports for Development projects take place?
- Which organisations can one contact to pursue a volunteer stay abroad?

---

## 4. Website Structure & Pages

```
Home
├── About Sports for Development
│   ├── What is S4D?
│   ├── Thematics
    ├── Advantages
│   └── Risks & Challenges
├── Project Map          ← Core interactive feature
├── Get Involved / Volunteer
└── Contact
```

### Global Header (appears on every page)
- Site title: "Sport for Development Hub"
- Tagline: "Connecting volunteers with sport-based development 
   projects worldwide."
- Navigation links: Home | About | Project Map | Get Involved | Contact
- Background: Navy `#003459`
- Text: White `#FFFFFF`

### Global Footer (appears on every page)
- Credits: Valerie Vogel, Master in Development and Environment, UNIL
- Minimal design, navy background

### Page Descriptions

#### Home
A landing page introducing the website's purpose with a brief overview 
and calls to action (e.g. "Explore the Map", "Learn More").

**Hero Section**
Image: `assets/images/hero.jpg`
With site title and tagline overlaid.

**Tagline**
"Connecting volunteers with sport-based development projects worldwide."

#### About Sports for Development
Static informational content covering:

**What is S4D?**
Definition and background of the Sport for Development approach.

**Thematics**
Overview of key themes with project examples.

**Advantages**
Key benefits of using sport as a development tool.

**Risks & Challenges**
Known limitations and critical perspectives.

#### Project Map

The website's central interactive feature.

**Header**
See global header above.

**Layout Structure**
1. Filter bar — horizontal bar above the map
2. Main area — map on the left, side panel on the right

**Footer**
See global footer above.

See [Section 5](#5-interactive-map-feature) for full specification.

#### Get Involved / Volunteer
A page guiding users on how to volunteer, answering FAQ's.

> ⚠️ **[CONTENT TO BE ADDED]** — FAQ questions, volunteering steps, and any partner organisation links needed.

#### Contact
Information about the website's author/organisation and a contact form or email address.

Content:
<h1> Contact </h1>

<p>Valerie Vogel</p>
<p>Projet de Géovisualisation</p>
<p>Master in Development and Environment</p>
<p>valerie.vogel.1@unil.ch</p>

---

## 5. Interactive Map Feature

### Overview

The interactive map is the website's core feature. It displays pins for Sports for Development projects worldwide. Users can filter projects by multiple criteria and access further information about each project.

### Map Interaction & Pin Behaviour

This section will describe how interaction with the map will be organised and how and where pins on the map will be visible and how they will function.

### Default View
World map with all project pins visible.

---

### Desktop Behaviour

**Hover over a pin:**
Displays a small grey tooltip card connected to the pin by a line.
The tooltip is positioned away from the pin so it does not cover surrounding areas.
The tooltip shows:

| Field | Example |
|---|---|
| Project name | "Football for Peace" |
| Organisation | "Right to Play" |
| Sport | "Football" |

**Click on a pin:**
Opens a side panel to the right of the map (outside the map area) displaying the full project card.

---

### Mobile and Tablet Behaviour

**Tap on a pin:**
Opens a bottom sheet directly with the full project card.
No hover/tooltip step — the full information is shown immediately.
The map remains partially visible behind the bottom sheet.

---

### Project Card — Displayed Fields

Shown in the side panel (desktop) or bottom sheet (mobile) when a pin is clicked/tapped:

| Field | Example |
|---|---|
| Project name | "Football for Peace" |
| Organisation | "Right to Play" |
| Country & City | "Kenya, Nairobi" |
| Sport | "Football" |
| Target group | "Youth aged 10–18" |
| Brief description | Max. 2–3 sentences, 350 characters max (with spaces) |
| External link | "Visit organisation website →" (redirects to organisation's own website) |

---

### Filtered View
When filters are applied, only matching project pins remain visible on the map.
Non-matching pins are hidden.
Filter logic: AND across different filter categories, OR within the same filter category.

| Filter | Type | Description |
|---|---|---|
| `country` | Single/multi-select | Country where the project takes place |
| `region` | Single/multi-select | Geographic region (e.g. Sub-Saharan Africa, South-East Asia) |
| `topic` | Multi-select | Thematic focus (e.g. education, health, gender equality, peacebuilding) |
| `target_group` | Multi-select | Beneficiary group (e.g. youth, women, refugees) |
| `organisation` | Single/multi-select | Name of the implementing organisation |
| `organisation_type` | Multi-select | Type of organisation (e.g. NGO, UN agency, government body) |
| `sport` | Multi-select | Sport used in the project (e.g. football, basketball, athletics) |
| `skills_required` | Multi-select | Skills a volunteer needs (e.g. coaching, teaching, medical) |
| `language` | Multi-select | Language(s) required for volunteering |

### Filter Values

#### Region
- Africa
- Asia
- Australia
- Central America
- Europe
- Latin America and the Caribbean
- The Middle East
- North America
- Oceania

#### Topic
- Refugee context
- Gender equality
- Youth development
- Disability
- Health
- Violence prevention
- Child protection
- Democracy
- Environment and Sustainability
- Construction of Infrastructure
- Employment

#### Target Group
- Seniors
- Children
- Youth
- Adults
- Athletes
- Displaced persons
- Girls and women
- LGBTQI+
- People with disabilities
- Volunteers
- Indigenous communities

#### Organisation
- All

#### Organisation Type
- Non-profit organization
- Sports structure
- Educational structure
- Government body
- UN Agency
- Foundation
- Social enterprise
- Other

#### Sport
- Football
- Basketball
- Athletics
- Volleyball
- Water Sports
- Cricket
- Rugby
- Combat sports

#### Skills Required
- None
- Coaching
- Teaching
- Medical
- Administration
- Communication
- Leadership

#### Language
- English
- French
- Spanish
- Arabic
- Portuguese
- German

> Filter logic: AND (cumulative) across all filter categories
> Within a single filter (e.g. multiple sports selected): OR logic

---

## 6. Data Model

### Project Entry

Each project displayed on the map corresponds to one data record with the following structure:

```json
{
  "id": "unique-project-id",
  "name": "Project Name",
  "organisation": "Organisation Name",
  "organisation_type": "NGO",
  "country": "Kenya",
  "region": "Africa",
  "city": "Nairobi",
  "latitude": -1.286389,
  "longitude": 36.817223,
  "topic": ["education", "gender equality"],
  "target_group": ["youth", "girls"],
  "sport": ["football"],
  "skills_required": ["coaching", "teaching"],
  "language": ["English", "Swahili"],
  "description": "Short project description (2–3 sentences).",
  "website_url": "https://example.org/project"
}
```

The project data comes from a static file (`projects.json`), converted from `database_projects.xlsx` when ready.
No external API.
No database backend, only frontend.
No CMS.

Layout: Filters on top bar, map below.
The bottom sheet from mobile and tablet device behaviour shall display between the map and the filters, meaning that the filters are gonna stay on top of the mobile and tablet screen's device.

---

## 7. Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Plain HTML/CSS/JS | - |
| Map Library | [Leaflet.js](https://leafletjs.com/) | Open-source, no API key needed |
| Map Tiles | [OpenStreetMap](https://www.openstreetmap.org/) | Free tile layer for Leaflet |
| Data Source | Static `projects.json` file | Sufficient for a university prototype |
| Styling | CSS | - |
| Hosting | GitHub Pages | Sufficient for my project |

### File Structure (suggested)

```
/
├── index.html
├── about.html
├── map.html
├── volunteer.html
├── contact.html
├── README.md
├── /style
│   └── style.css
├── /js
│   └── app.js        ← data fetching only
│   └── map.js        ← Leaflet map, pins, side panel / bottom sheet
│   └── filters.js    ← filter UI and filter logic
├── /data
│   └── projects.json          ← used by the website
│   └── database_projects.xlsx ← source file (convert to JSON when ready)
└── /assets
    └── /images
```

---

## 8. Design Specifications

- **Colour palette** — 
primary: #003459
background: #FFF2F1
accent: #93C0A4
text colours:
Body text → Navy `#003459` on warm white background
Light text → White `#FFFFFF` on navy backgrounds (like the header)
- **Typography** — 
heading font: Montserrat
body font: Inter
- **Logo / branding** — no logo
- **Map pin style** — Default Leaflet pin
- **Language** — English only
- **Responsive design** — fully functional on laptop, mobile and tablet
- **Accessibility** — the website should meet WCAG 2.1 AA accessibility standards

---

## 9. Deployment

The site will be hosted publicly on GitHub Pages.
No custom domain required.

---