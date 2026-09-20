"use client";

import { useEffect, useState } from "react";

type StudentProfile = {
  subjects: string[];
  activities: string[];
  interests: string[];
};

type Pathway = {
  title: string;
  description: string;
  skills: string[];
  reason: string;
  score: number;
};

const allPathways = [
  {
    title: "Data Science",
    description:
      "Use mathematics, statistics and programming to understand data and solve real-world problems.",
    skills: ["Python", "Statistics", "Machine Learning"],
    subjects: ["Mathematics", "Computer Science"],
    activities: ["Problem Solving", "Coding", "Working with Data"],
    interests: ["Technology", "Research", "Finance"],
  },

  {
    title: "Actuarial Science",
    description:
      "Use mathematics, statistics and financial analysis to understand and manage risk.",
    skills: ["Mathematics", "Statistics", "Finance"],
    subjects: ["Mathematics"],
    activities: ["Problem Solving", "Working with Data"],
    interests: ["Finance", "Research"],
  },

  {
    title: "Statistics",
    description:
      "Use statistical methods and data analysis to discover patterns and support decisions.",
    skills: ["Statistics", "Data Analysis", "Research"],
    subjects: ["Mathematics", "Computer Science"],
    activities: ["Problem Solving", "Working with Data", "Research"],
    interests: ["Research", "Technology", "Science"],
  },

  {
    title: "Bioinformatics",
    description:
      "Combine biology, computing and data analysis to study biological information.",
    skills: ["Biology", "Programming", "Data Analysis"],
    subjects: ["Biology", "Computer Science"],
    activities: ["Research", "Coding", "Working with Data"],
    interests: ["Healthcare", "Research", "Technology"],
  },

  {
    title: "Computational Biology",
    description:
      "Use computational methods to solve problems in biology and life sciences.",
    skills: ["Programming", "Biology", "Data Analysis"],
    subjects: ["Biology", "Computer Science"],
    activities: ["Research", "Coding", "Problem Solving"],
    interests: ["Healthcare", "Research", "Science"],
  },

  {
    title: "Biostatistics",
    description:
      "Apply statistics and data analysis to healthcare, medicine and biological research.",
    skills: ["Statistics", "Data Analysis", "Research"],
    subjects: ["Mathematics", "Biology"],
    activities: ["Research", "Working with Data", "Problem Solving"],
    interests: ["Healthcare", "Research", "Science"],
  },
];

export default function Results() {
  const [recommendations, setRecommendations] = useState<Pathway[]>([]);
  const [profile, setProfile] = useState<StudentProfile | null>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem("studentProfile");

    if (!savedProfile) {
      return;
    }

    const student: StudentProfile = JSON.parse(savedProfile);

    setProfile(student);

    const scoredPathways = allPathways.map((pathway) => {
      let score = 0;

      pathway.subjects.forEach((subject) => {
        if (student.subjects.includes(subject)) {
          score += 3;
        }
      });

      pathway.activities.forEach((activity) => {
        if (student.activities.includes(activity)) {
          score += 2;
        }
      });

      pathway.interests.forEach((interest) => {
        if (student.interests.includes(interest)) {
          score += 2;
        }
      });

      return {
        ...pathway,
        score,
        reason: buildReason(student, pathway),
      };
    });

    const sortedPathways = scoredPathways
      .filter((pathway) => pathway.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    setRecommendations(sortedPathways);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="text-2xl font-bold">Pathway</div>
        </div>
      </header>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Your Results
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Pathways you may want to explore.
          </h1>

          <p className="text-gray-600 text-lg mt-4">
            These pathways are based on the subjects, activities and interests
            you selected. They are possibilities to explore, not a decision
            about your future.
          </p>

        </div>

        {/* Selected profile */}
        {profile && (
          <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6">

            <h2 className="font-semibold text-lg">
              Your profile
            </h2>

            <div className="flex flex-wrap gap-2 mt-4">

              {[
                ...profile.subjects,
                ...profile.activities,
                ...profile.interests,
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        )}

        {/* Pathway Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {recommendations.map((pathway, index) => (

            <div
              key={pathway.title}
              className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg transition"
            >

              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                {index === 0 ? "Strong match" : "Good match"}
              </span>

              <h2 className="text-2xl font-bold mt-5">
                {pathway.title}
              </h2>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {pathway.description}
              </p>

              {/* Why */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">

                <p className="text-sm font-semibold">
                  Why am I seeing this?
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  {pathway.reason}
                </p>

              </div>

              {/* Skills */}
              <div className="mt-6">

                <p className="text-sm font-semibold">
                  Key skills
                </p>

                <div className="flex flex-wrap gap-2 mt-3">

                  {pathway.skills.map((skill) => (

                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

              <button className="w-full mt-7 px-5 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Explore Pathway →
              </button>

            </div>

          ))}

        </div>

        {/* No recommendations */}
        {recommendations.length === 0 && (
          <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-8 text-center">

            <h2 className="text-xl font-semibold">
              We need a little more information.
            </h2>

            <p className="text-gray-600 mt-2">
              Try selecting some subjects, activities or interests.
            </p>

          </div>
        )}

      </section>
    </main>
  );
}

function buildReason(
  student: StudentProfile,
  pathway: (typeof allPathways)[number]
) {
  const matches: string[] = [];

  pathway.subjects.forEach((subject) => {
    if (student.subjects.includes(subject)) {
      matches.push(subject);
    }
  });

  pathway.activities.forEach((activity) => {
    if (student.activities.includes(activity)) {
      matches.push(activity);
    }
  });

  pathway.interests.forEach((interest) => {
    if (student.interests.includes(interest)) {
      matches.push(interest);
    }
  });

  if (matches.length === 0) {
    return "This pathway is included as another option to explore.";
  }

  const shownMatches = matches.slice(0, 3);

  return `Your profile includes ${shownMatches.join(", ")}. These connect with this pathway.`;
}