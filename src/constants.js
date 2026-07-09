export const CATEGORIES = {
  SKILLS: 'skills',
  PROJECTS: 'projects',
  WORK: 'work',
  IDEAS: 'ideas',
  EDUCATION: 'education'
};

export const INITIAL_STATE = {
  skills: [],
  projects: [],
  work: [],
  ideas: [],
  education: [],
  customPrompts: []
};

export const CATEGORY_LABELS = {
  skills: 'Skills',
  projects: 'Projects',
  work: 'Work Experience',
  ideas: 'Ideas',
  education: 'Education'
};

export const PROMPT_TEMPLATES = {
  projects: `I built a project called [PROJECT_NAME] between [START_DATE] and [END_DATE].
Technologies: [TECHNOLOGIES]
The core challenge was: [CHALLENGE]
The outcome was: [OUTCOME]

Please ask me 5–7 detailed questions to help me articulate the problem I solved,
my technical decisions, what I learned, and the impact of this project.`,
  
  skills: `I have been learning [SKILL_NAME] for [DURATION].
My current level is [PROFICIENCY_LEVEL].
I primarily use it for: [USE_CASE]

Please ask me questions to help me explain my depth of knowledge, how I apply
this skill, and what distinguishes my experience with it.`,

  work: `I held the role of [POSITION] at [ORGANIZATION] from [START] to [END].
Key responsibility: [RESPONSIBILITY]
Key achievement: [ACHIEVEMENT]

Please ask me questions to help me describe the impact of this role, what I
contributed, and how I grew professionally.`
};
