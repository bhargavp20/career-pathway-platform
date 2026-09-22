# CaP — Career Pathway

### Discover Your Possibilities

CaP (Career Pathway) is an AI-assisted career exploration platform designed for Class 11 and 12 students.

Many students know only a few familiar career options such as engineering or medicine. CaP helps students explore multiple possible pathways based on their subjects, activities, interests, strengths and goals.

> CaP does not choose a career for the student. It helps students discover and understand pathways they may not have considered.

---

## 🚀 Problem

Career information is often scattered across different websites.

Students may need to separately search for:

- Courses and degrees
- Eligibility
- Entrance exams
- Skills
- Career opportunities
- Higher studies
- Colleges
- Scholarships
- Salary information

This makes career exploration confusing, especially for students who are unsure about what options are available to them.

---

## 💡 Solution

CaP brings career exploration into one structured experience.

A student can:

1. Enter their academic subjects
2. Select activities they enjoy
3. Select areas of interest
4. Discover matching career pathways
5. Explore individual pathways
6. Compare different pathways
7. View possible career roles and indicative salary information
8. Ask the AI Career Guide for additional possibilities

---

## ✨ Key Features

### 🎯 Personalized Pathway Discovery

CaP matches pathways using:

- Subjects
- Activities
- Interests

The matching system presents multiple possibilities instead of selecting a single career for the student.

### 🧭 Pathway Exploration

Each pathway provides structured information including:

- Description
- Relevant subjects
- Activities
- Interests
- Degree options
- Skills
- Career roles
- Higher-study possibilities
- Salary information

### ⚖️ Pathway Comparison

Students can compare pathways side by side to understand how they differ.

### 🤖 AI Career Guide

CaP uses Google's Gemini API to generate additional career pathway suggestions based on the student's profile.

The AI is designed to:

- Suggest possibilities
- Explain why a pathway may match
- Suggest skills to develop
- Describe typical degree routes

The AI does not rank pathways or tell students which career they should choose.

### 💰 Career Salary Information

CaP displays indicative salary estimates for major career roles in India.

Salary information is presented as an estimate and may vary depending on:

- Experience
- Location
- Skills
- Employer
- Industry

---

## 🔄 How CaP Works

```text
Student Profile
      ↓
Subjects + Activities + Interests
      ↓
Pathway Matching
      ↓
Multiple Career Pathways
      ↓
Explore a Pathway
      ↓
Compare Options
      ↓
Make an Informed Decision




Student Profile
      ↓
Next.js API Route
      ↓
Google Gemini API
      ↓
Career Pathway Suggestions
      ↓
CaP Interface




career-pathway-platform/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── career-ai/
│   │   │       └── route.ts
│   │   │
│   │   ├── compare/
│   │   │   └── page.tsx
│   │   │
│   │   ├── explore/
│   │   │   └── page.tsx
│   │   │
│   │   ├── pathway/
│   │   │   └── page.tsx
│   │   │
│   │   ├── results/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ThemeMenu.tsx
│   │   └── ThemeProvider.tsx
│   │
│   └── data/
│       └── pathways.ts
│
├── public/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md