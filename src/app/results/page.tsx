"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { pathways, Pathway } from "@/data/pathways";


type StudentProfile = {
  subjects: string[];
  activities: string[];
  interests: string[];
};

type RecommendedPathway = Pathway & {
  reason: string;
  score: number;
};

export default function Results() {
  const router = useRouter();

  const [recommendations, setRecommendations] = useState<
  RecommendedPathway[]
>([]);
  const [profile, setProfile] = useState<StudentProfile | null>(null);

  // AI states
  const [aiResult, setAiResult] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  // Compare states
  const [compareFirst, setCompareFirst] = useState("");
  const [compareSecond, setCompareSecond] = useState("");

  useEffect(() => {
    const savedProfile = localStorage.getItem("studentProfile");

    if (!savedProfile) {
      return;
    }

    const student: StudentProfile = JSON.parse(savedProfile);

    setProfile(student);

    const scoredPathways: RecommendedPathway[] = pathways.map((pathway) => {
      let score = 0;

      // Subject match
      pathway.subjects.forEach((subject) => {
        if (student.subjects.includes(subject)) {
          score += 3;
        }
      });

      // Activity match
      pathway.activities.forEach((activity) => {
        if (student.activities.includes(activity)) {
          score += 2;
        }
      });

      // Interest match
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

    // Keep every pathway that actually matches.
    // No artificial limit such as .slice(0, 3).
    const sortedPathways = scoredPathways
      .filter((pathway) => pathway.score > 0)
      .sort((a, b) => b.score - a.score);

    setRecommendations(sortedPathways);
  }, []);

  // Ask Gemini
  async function askGemini() {
    if (!profile) return;

    setLoadingAI(true);
    setAiResult("");

    try {
      const response = await fetch("/api/career-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      const data = await response.json();

      if (data.result) {
        setAiResult(data.result);
      } else {
        setAiResult("Sorry, we could not generate AI suggestions.");
      }
    } catch (error) {
      console.error(error);
      setAiResult("Something went wrong while connecting to the AI.");
    }

    setLoadingAI(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-200px] top-[300px] h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[35%] h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      {/* Header */}
      <header className="border-b border-white/70 bg-white/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
              C
            </div>

            <div>
              <div className="text-2xl font-bold leading-none tracking-tight">
                CaP
              </div>

              <div className="mt-1 text-xs font-medium text-slate-500">
                Career Pathway
              </div>
            </div>
          </Link>

          <span className="hidden text-sm font-medium text-slate-500 sm:block">
            Your personalized discovery
          </span>

        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">

        {/* Hero */}
        <div className="max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Your Results
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Pathways you may want
            <span className="block text-blue-600">
              to explore.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            These pathways are based on the subjects, activities and interests
            you selected. They are possibilities to explore, not a decision
            about your future.
          </p>

        </div>

        {/* Profile */}
        {profile && (
          <div className="mt-10 rounded-3xl border border-white/80 bg-white/55 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl md:p-7">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                  Your profile
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  What you told Pathway
                </h2>
              </div>

              <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                Personalized results
              </div>

            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                ...profile.subjects,
                ...profile.activities,
                ...profile.interests,
              ].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        )}

        {/* Recommendations */}
        <div className="mt-14">

          <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Your suggested pathways
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              {recommendations.length} matching pathways
            </p>

          </div>

          {recommendations.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-3">

              {recommendations.map((pathway, index) => (

                <div
                  key={pathway.title}
                  className="group flex flex-col rounded-2xl border border-white/80 bg-white/60 p-5 shadow-lg shadow-slate-200/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Match */}
                  <div className="flex items-center justify-between">

                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                      {getMatchLabel(pathway.score)}
                    </span>

                    <span className="text-xs font-medium text-slate-400">
                      Match #{index + 1}
                    </span>

                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-xl font-bold tracking-tight">
                    {pathway.title}
                  </h2>

                  {pathway.category && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {pathway.category}
                    </p>
                  )}

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pathway.description}
                  </p>

                  {/* Why */}
                  <div className="mt-4 rounded-xl border border-blue-100/70 bg-blue-50/60 p-3">

                    <p className="text-sm font-semibold text-blue-900">
                      Why this appeared
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {pathway.reason}
                    </p>

                  </div>

                  {/* Skills */}
                  <div className="mt-4">

                    <p className="text-sm font-semibold text-slate-800">
                      Key skills
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">

                      {pathway.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Button */}
                  <button
                    onClick={() => {
                      localStorage.setItem(
                        "selectedPathway",
                        pathway.title
                      );

                      router.push("/pathway");
                    }}
                    className="mt-5 w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Explore Pathway →
                  </button>

                </div>

              ))}

            </div>
          )}

        </div>

        {/* AI Career Guide */}
        {profile && (
          <div className="mt-14 overflow-hidden rounded-3xl border border-white/80 bg-slate-900 p-7 text-white shadow-2xl shadow-slate-300/30 md:p-10">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  AI Career Guide
                </div>

                <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                  Want to explore more possibilities?
                </h2>

                <p className="mt-4 leading-relaxed text-slate-300">
                  Gemini can look at your profile and explain additional
                  career pathways you may want to explore.
                </p>

              </div>

              <button
                onClick={askGemini}
                disabled={loadingAI}
                className="shrink-0 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loadingAI ? "Thinking..." : "Ask AI for More Pathways"}
              </button>

            </div>

            {/* AI response */}
            {aiResult && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">

                <h3 className="text-lg font-bold">
                  AI Suggestions
                </h3>

                <div className="mt-4 whitespace-pre-line leading-relaxed text-slate-300">
                  {aiResult}
                </div>

              </div>
            )}

          </div>
        )}

        {/* Compare */}
        <div className="mt-14 rounded-3xl border border-white/80 bg-white/55 p-7 shadow-xl shadow-slate-200/40 backdrop-blur-xl md:p-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Compare
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Compare your pathways
            </h2>

            <p className="mt-3 text-slate-600">
              Put two recommended pathways side by side and understand how
              they differ.
            </p>

          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">

            <div>

              <label className="text-sm font-semibold text-slate-700">
                Pathway 1
              </label>

              <select
                value={compareFirst}
                onChange={(e) => setCompareFirst(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/80 bg-white/70 p-4 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select a pathway</option>

                {recommendations.map((pathway) => (
                  <option key={pathway.title} value={pathway.title}>
                    {pathway.title}
                  </option>
                ))}

              </select>

            </div>

            <div>

              <label className="text-sm font-semibold text-slate-700">
                Pathway 2
              </label>

              <select
                value={compareSecond}
                onChange={(e) => setCompareSecond(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/80 bg-white/70 p-4 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select a pathway</option>

                {recommendations.map((pathway) => (
                  <option key={pathway.title} value={pathway.title}>
                    {pathway.title}
                  </option>
                ))}

              </select>

            </div>

          </div>

          {/* Comparison table */}
          {compareFirst &&
            compareSecond &&
            compareFirst !== compareSecond && (
              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200/70 bg-white/70">

                <div className="min-w-[700px]">

                  <div className="grid grid-cols-3 border-b bg-slate-50/80">

                    <div className="p-5 font-semibold">
                      Category
                    </div>

                    <div className="p-5 font-bold text-blue-600">
                      {compareFirst}
                    </div>

                    <div className="p-5 font-bold text-blue-600">
                      {compareSecond}
                    </div>

                  </div>

                  {[
                      "description",
                      "skills",
                      "subjects",
                      "activities",
                      "interests",
                      "degreeOptions",
                      "careerRoles",
                      "salaryRoles",
                    ].map((category) => {
                      const first = recommendations.find(
                        (p) => p.title === compareFirst
                      );

                      const second = recommendations.find(
                        (p) => p.title === compareSecond
                      );

                      if (!first || !second) return null;

                      const firstValue =
                        category === "description"
                          ? first.description
                          : first[category as keyof Pathway];

                      const secondValue =
                        category === "description"
                          ? second.description
                          : second[category as keyof Pathway];

                      return (
                        <div
                          key={category}
                          className="grid grid-cols-3 border-b last:border-b-0"
                        >
                          <div className="p-5 font-semibold capitalize text-slate-700">
                            {formatCategory(category)}
                          </div>

                          {/* First pathway */}
                          <div className="p-5 text-sm leading-relaxed text-slate-600">
                            {category === "salaryRoles" ? (
                              <div className="space-y-4">
                                {first.salaryRoles.map((salary) => (
                                  <div key={salary.role}>
                                    <p className="font-medium text-slate-800">
                                      {salary.role}
                                    </p>

                                    <p className="mt-1 font-semibold text-blue-600">
                                      {salary.average}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : Array.isArray(firstValue) ? (
                              firstValue.join(", ")
                            ) : (
                              firstValue || "Not available"
                            )}
                          </div>

                          {/* Second pathway */}
                          <div className="p-5 text-sm leading-relaxed text-slate-600">
                            {category === "salaryRoles" ? (
                              <div className="space-y-4">
                                {second.salaryRoles.map((salary) => (
                                  <div key={salary.role}>
                                    <p className="font-medium text-slate-800">
                                      {salary.role}
                                    </p>

                                    <p className="mt-1 font-semibold text-blue-600">
                                      {salary.average}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : Array.isArray(secondValue) ? (
                              secondValue.join(", ")
                            ) : (
                              secondValue || "Not available"
                            )}
                          </div>
                        </div>
                      );
                    })}

                </div>

              </div>
            )}

          {compareFirst === compareSecond && compareFirst && (
            <p className="mt-5 text-sm text-amber-600">
              Please select two different pathways to compare.
            </p>
          )}

        </div>

        {/* No recommendations */}
        {recommendations.length === 0 && (
          <div className="mt-10 rounded-3xl border border-white/80 bg-white/60 p-10 text-center shadow-xl backdrop-blur-xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 font-bold text-blue-700">
              ?
            </div>

            <h2 className="mt-5 text-xl font-bold">
              We need a little more information.
            </h2>

            <p className="mt-2 text-slate-600">
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
  pathway: Pathway
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

  return `Your profile includes ${shownMatches.join(
    ", "
  )}. These connect with this pathway.`;
}

function getMatchLabel(score: number) {
  if (score >= 8) {
    return "Strong match";
  }

  if (score >= 5) {
    return "Good match";
  }

  return "Possible match";
}

function formatCategory(category: string) {
  const labels: Record<string, string> = {
    description: "Description",
    skills: "Key Skills",
    subjects: "Subjects",
    activities: "Activities",
    interests: "Interests",
    degreeOptions: "Degree Options",
    careerRoles: "Career Roles",
    salaryRoles: "Career Salaries",
  };

  return labels[category] ?? category;
}