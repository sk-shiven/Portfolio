# PRD: Personal Portfolio & Prompt Library Web App

**Author:** Shiven Kathuria
**Version:** v1.0
**Status:** Draft — Ready for Development
**Date:** May 2026

---

## Overview

A comprehensive personal knowledge base web app that captures skills, projects, work experience, ideas, and education in detail — far beyond a CV or LinkedIn profile. Includes AI-powered prompt generation to elaborate on any experience using Claude/ChatGPT.

---

## Navigation Structure

Three-tab interface:

| Tab | Purpose |
|-----|---------|
| **Portfolio** | Timeline view of all entries + stats bar + search/filter |
| **Prompt Library** | Generate structured LLM prompts from entry details |
| **Settings** | Export/Import data, clear all entries |

---

## Portfolio Tab

### Stats Bar
Real-time count of entries per category at the top of the tab: Skills, Projects, Work Experience, Ideas, Education.

### Timeline View
- Vertical timeline, chronologically ordered (most recent first)
- Each card shows: **Title + Date + Category icon** (minimal preview only)
- Click any card to expand full details in a modal
- **Search:** Keyword filter across all entry titles and descriptions
- **Filter:** Toggle buttons to show entries by category (or all)

### Entry Detail Modal
- Full view of all category-specific fields
- Edit and delete controls inline
- Opens as overlay or side panel

---

## Entry Categories & Fields

### Skills
| Field | Detail |
|-------|--------|
| Skill Name | e.g. React, DSA in Java, Statistics |
| Proficiency Level | Beginner / Intermediate / Advanced / Expert |
| Description | What you know, how you use it, relevant context |
| Years of Experience | Numeric or text (e.g. "Since Jan 2024") |
| Related Projects | Links to project entries that use this skill |
| Evidence / Links | GitHub repos, certificates, course links |
| Tags | Free-form (e.g. "Java", "Algorithms") |

### Projects
| Field | Detail |
|-------|--------|
| Project Name | Name of the project |
| Start Date | When work began |
| End Date | Completion date or "Ongoing" |
| Description | What it does and why it was built |
| Technologies Used | Comma-separated list |
| Outcomes / Results | Key metrics or impact |
| Challenges Faced | Problems encountered |
| Key Learnings | Technical and personal takeaways |
| Code Repository | GitHub or other repo URL |
| Media / Demo Links | Live demo, Loom, screenshots, Vercel, etc. |
| Reflections | What you'd do differently |
| Team Size | Solo or collaborative |
| Tags | Free-form (e.g. "ML", "Fullstack") |

### Work Experience
| Field | Detail |
|-------|--------|
| Position Title | e.g. Partnerships Head |
| Organization | Company or institution name |
| Start Date | When the role began |
| End Date | End date or "Present" |
| Description | Overview of the role and context |
| Key Responsibilities | Main duties |
| Achievements / Impact | Concrete outcomes, metrics improved |
| Team Size | People worked with or managed |
| Tools / Technologies | Platforms and software used |
| Learnings | Skills and professional growth |
| Reflections | Looking back — what you'd do differently |
| Tags | Free-form (e.g. "Leadership", "B2B") |

### Ideas
| Field | Detail |
|-------|--------|
| Idea Title | Name or headline |
| Category Type | Product Concept / Feature Idea / Research Direction / Business Idea |
| Description | What it is and why it matters |
| Status | Brainstorm / In Progress / On Hold / Completed / Abandoned |
| Skills Required | What would be needed to execute |
| Potential Impact | Who benefits and how |
| Notes / Next Steps | Open-ended notes and action items |
| Tags | Free-form (e.g. "AI", "EdTech") |

### Education
| Field | Detail |
|-------|--------|
| Institution Name | School, university, or platform |
| Degree / Program | What you studied |
| Start Date | Enrollment date |
| End Date | Graduation or expected date |
| Coursework / Subjects | Relevant courses |
| GPA / Score | Optional |
| Achievements / Honors | Awards, top grades, leadership |
| Key Learnings | Most impactful things learned |
| Related Projects | Projects completed as part of this education |
| Tags | Free-form (e.g. "Engineering", "Coursework") |

---

## Prompt Library Tab

### Workflow
1. Select a category (Skills / Projects / Work / Ideas / Education)
2. A category-specific prompt template appears with variable placeholders
3. User fills in the input fields
4. App generates a complete, structured prompt
5. User copies with one click → pastes into Claude / ChatGPT
6. *(Optional)* User saves the LLM's elaborated response back as a Portfolio entry

### Prompt Templates

**Projects**
```
I built a project called [PROJECT_NAME] between [START_DATE] and [END_DATE].
Technologies: [TECHNOLOGIES]
The core challenge was: [CHALLENGE]
The outcome was: [OUTCOME]

Please ask me 5–7 detailed questions to help me articulate the problem I solved,
my technical decisions, what I learned, and the impact of this project.
```

**Skills**
```
I have been learning [SKILL_NAME] for [DURATION].
My current level is [PROFICIENCY_LEVEL].
I primarily use it for: [USE_CASE]

Please ask me questions to help me explain my depth of knowledge, how I apply
this skill, and what distinguishes my experience with it.
```

**Work Experience**
```
I held the role of [POSITION] at [ORGANIZATION] from [START] to [END].
Key responsibility: [RESPONSIBILITY]
Key achievement: [ACHIEVEMENT]

Please ask me questions to help me describe the impact of this role, what I
contributed, and how I grew professionally.
```

### Custom Prompts
Users can write and save custom prompts manually. Stored in the Prompt Library as a personal collection, editable and deletable at any time.

---

## Settings Tab

| Action | Behaviour |
|--------|-----------|
| Export as JSON | Downloads full portfolio data as `.json` |
| Export as CSV | Downloads all entries as a flat `.csv` |
| Import from JSON | File picker → merge or overwrite existing data |
| Clear All Data | Deletes everything — requires confirmation modal |

---

## Design Specifications

| Property | Value |
|----------|-------|
| Theme | Dark mode |
| Background | `#1A1A2E` (deep navy) |
| Card Background | `#2D2D44` |
| Primary Accent | `#6C63FF` (purple) — CTAs, headers, highlights |
| Secondary Accent | `#00B4A6` (teal) — Prompt Library, secondary actions |
| Font | Arial / system-ui |
| Border Radius | 8–12px (rounded cards) |

**Component inventory:** Tab bar, stats bar, vertical timeline, entry cards, entry detail modal, entry form modal, category filter chips, search bar, prompt variable form, generated prompt display, export/import controls, confirmation modals.

---

## Technical Stack

| Layer | Choice |
|-------|--------|
| Deliverable | Single standalone HTML file (no backend, no install) |
| Framework | React (CDN or bundled inline) |
| Styling | Tailwind CSS utility classes |
| State | React `useState` / `useReducer` |
| Persistence | Browser `localStorage` |
| Export | JSON + CSV via Blob download |
| Prompt Generation | Claude API (`claude-sonnet-4-20250514`) via fetch |

### localStorage Schema
```json
{
  "skills":        [{ "id": "", "title": "", "proficiency": "", "description": "", "years": "", "links": [], "tags": [] }],
  "projects":      [{ "id": "", "title": "", "startDate": "", "endDate": "", "description": "", "tech": [], "outcomes": "", "challenges": "", "learnings": "", "repoLink": "", "mediaLinks": [], "reflections": "", "team": "", "tags": [] }],
  "work":          [{ "id": "", "title": "", "org": "", "startDate": "", "endDate": "", "description": "", "responsibilities": "", "achievements": "", "teamSize": "", "tools": [], "learnings": "", "reflections": "", "tags": [] }],
  "ideas":         [{ "id": "", "title": "", "type": "", "description": "", "status": "", "skillsNeeded": [], "impact": "", "notes": "", "tags": [] }],
  "education":     [{ "id": "", "institution": "", "degree": "", "startDate": "", "endDate": "", "courses": [], "gpa": "", "achievements": "", "learnings": "", "projects": [], "tags": [] }],
  "customPrompts": [{ "id": "", "title": "", "category": "", "promptText": "", "createdAt": "" }]
}
```

---

## Key Interactions

| Action | Flow |
|--------|------|
| Add entry | Click `+` → Select category → Fill modal form → Save → Appears on timeline |
| Edit entry | Click card → Expand modal → Click Edit → Modify → Save |
| Delete entry | Expand modal → Click Delete → Confirm → Removed from timeline and storage |
| Generate prompt | Prompt Library → Select category → Fill variables → Generate → Copy |
| Export | Settings → Export JSON → Browser downloads `portfolio_data.json` |
| Import | Settings → Import JSON → File picker → Merge or overwrite |

---

## Scope

### v1.0 — In Scope
- All 5 category types with full field sets
- Vertical timeline with minimal-preview cards
- Full-detail modal with edit/delete
- Search and category filter
- Stats bar (entry counts per category)
- Prompt Library: 5 category templates + variable input + generated output
- Custom prompt saving
- `localStorage` persistence
- JSON + CSV export and import
- Dark mode design with purple/teal accents

### Future Versions — Out of Scope
- Cloud database (Firebase, Supabase)
- Public portfolio sharing / URL generation
- Real-time collaboration
- File/media upload (users provide URLs only for now)
- AI-powered auto-summarization of entries
- Knowledge graph / cross-linking between entries
- Mobile-optimized layout
- Analytics charts (skill distribution, projects over time)

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Functional completeness | All 5 entry types create, edit, delete without error |
| Data persistence | Entries survive browser refresh and tab close |
| Timeline performance | Renders 50+ entries without visible lag |
| Prompt quality | Generated prompts are coherent and category-specific |
| Export / import | Round-trip works without data loss |
| Search speed | Results appear in under 200ms |
| Copy to clipboard | Works across Chrome, Safari, Firefox |
