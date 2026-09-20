"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const subjects = [
  "Mathematics",
  "Biology",
  "Computer Science",
  "Physics",
  "Chemistry",
];

const activities = [
  "Problem Solving",
  "Coding",
  "Research",
  "Working with Data",
  "Experimenting",
  "Working with People",
];

const interests = [
  "Technology",
  "Science",
  "Finance",
  "Healthcare",
  "Research",
];

export default function Explore() {
  const router = useRouter();

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleSelection = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((value) => value !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="text-2xl font-bold">Pathway</div>
        </div>
      </header>

      {/* Questionnaire */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Step 1 of 3
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Let&apos;s understand what interests you.
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            There are many career paths beyond the obvious ones. Tell us a
            little about yourself and we&apos;ll help you explore them.
          </p>
        </div>

        {/* Subjects */}
        <div className="bg-white rounded-2xl border border-gray-200 p-7 mb-6">
          <h2 className="text-xl font-semibold">
            1. Which subjects do you enjoy?
          </h2>

          <p className="text-gray-500 mt-2">
            Select all that apply.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() =>
                  toggleSelection(
                    subject,
                    selectedSubjects,
                    setSelectedSubjects
                  )
                }
                className={`text-left px-5 py-4 rounded-xl border transition ${
                  selectedSubjects.includes(subject)
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-blue-400"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-2xl border border-gray-200 p-7 mb-6">
          <h2 className="text-xl font-semibold">
            2. What do you enjoy doing?
          </h2>

          <p className="text-gray-500 mt-2">
            Select all that apply.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {activities.map((activity) => (
              <button
                key={activity}
                onClick={() =>
                  toggleSelection(
                    activity,
                    selectedActivities,
                    setSelectedActivities
                  )
                }
                className={`text-left px-5 py-4 rounded-xl border transition ${
                  selectedActivities.includes(activity)
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-blue-400"
                }`}
              >
                {activity}
              </button>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-2xl border border-gray-200 p-7 mb-8">
          <h2 className="text-xl font-semibold">
            3. What interests you most?
          </h2>

          <p className="text-gray-500 mt-2">
            Select all that apply.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {interests.map((interest) => (
              <button
                key={interest}
                onClick={() =>
                  toggleSelection(
                    interest,
                    selectedInterests,
                    setSelectedInterests
                  )
                }
                className={`text-left px-5 py-4 rounded-xl border transition ${
                  selectedInterests.includes(interest)
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-blue-400"
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Continue */}
        <div className="flex justify-end">
          <button
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            onClick={() => {
                const profile = {
                subjects: selectedSubjects,
                activities: selectedActivities,
                interests: selectedInterests,
                };

                localStorage.setItem("studentProfile", JSON.stringify(profile));

                router.push("/results");
            }}
            >
            Discover My Pathways →
            </button>
        </div>
      </section>
    </main>
  );
}