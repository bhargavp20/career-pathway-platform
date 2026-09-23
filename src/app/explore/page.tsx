"use client";
import Link from "next/link";



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

  const totalSelected =
    selectedSubjects.length +
    selectedActivities.length +
    selectedInterests.length;

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-150px] h-[450px] w-[450px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-180px] top-[350px] h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[35%] h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>


      {/* Header */}
      <header className="border-b border-white/70 bg-white/50 backdrop-blur-xl">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

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

          <div className="text-sm font-medium text-slate-500">
            Career Discovery
          </div>

        </div>

      </header>


      {/* Main */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">

        {/* Intro */}
        <div className="mb-10">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Build your profile
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Let&apos;s understand what interests you.
              </h1>
            </div>

            <div className="hidden rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-md md:block">
              {totalSelected} selected
            </div>

          </div>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            There are many career paths beyond the obvious ones. Tell us a
            little about yourself and we&apos;ll help you explore them.
          </p>

        </div>



        {/* Subjects */}
        <div className="mb-6 rounded-3xl border border-white/80 bg-white/55 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl md:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 font-bold text-blue-700">
              01
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Which subjects do you enjoy?
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Select all that apply.
              </p>
            </div>

          </div>


          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {subjects.map((subject) => {
              const selected = selectedSubjects.includes(subject);

              return (
                <button
                  key={subject}
                  onClick={() =>
                    toggleSelection(
                      subject,
                      selectedSubjects,
                      setSelectedSubjects
                    )
                  }
                  className={`group flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                    selected
                      ? "border-blue-300 bg-blue-50/80 text-blue-700 shadow-sm"
                      : "border-white/80 bg-white/50 text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white/80"
                  }`}
                >

                  <span className="font-medium">
                    {subject}
                  </span>

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold transition ${
                      selected
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 text-transparent group-hover:border-blue-300"
                    }`}
                  >
                    ✓
                  </span>

                </button>
              );
            })}

          </div>

        </div>


        {/* Activities */}
        <div className="mb-6 rounded-3xl border border-white/80 bg-white/55 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl md:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 font-bold text-indigo-700">
              02
            </div>

            <div>
              <h2 className="text-xl font-bold">
                What do you enjoy doing?
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Select all that apply.
              </p>
            </div>

          </div>


          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {activities.map((activity) => {
              const selected = selectedActivities.includes(activity);

              return (
                <button
                  key={activity}
                  onClick={() =>
                    toggleSelection(
                      activity,
                      selectedActivities,
                      setSelectedActivities
                    )
                  }
                  className={`group flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                    selected
                      ? "border-indigo-300 bg-indigo-50/80 text-indigo-700 shadow-sm"
                      : "border-white/80 bg-white/50 text-slate-700 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white/80"
                  }`}
                >

                  <span className="font-medium">
                    {activity}
                  </span>

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold transition ${
                      selected
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-slate-300 text-transparent group-hover:border-indigo-300"
                    }`}
                  >
                    ✓
                  </span>

                </button>
              );
            })}

          </div>

        </div>


        {/* Interests */}
        <div className="mb-8 rounded-3xl border border-white/80 bg-white/55 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl md:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 font-bold text-cyan-700">
              03
            </div>

            <div>
              <h2 className="text-xl font-bold">
                What interests you most?
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Select all that apply.
              </p>
            </div>

          </div>


          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {interests.map((interest) => {
              const selected = selectedInterests.includes(interest);

              return (
                <button
                  key={interest}
                  onClick={() =>
                    toggleSelection(
                      interest,
                      selectedInterests,
                      setSelectedInterests
                    )
                  }
                  className={`group flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                    selected
                      ? "border-cyan-300 bg-cyan-50/80 text-cyan-700 shadow-sm"
                      : "border-white/80 bg-white/50 text-slate-700 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white/80"
                  }`}
                >

                  <span className="font-medium">
                    {interest}
                  </span>

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold transition ${
                      selected
                        ? "border-cyan-600 bg-cyan-600 text-white"
                        : "border-slate-300 text-transparent group-hover:border-cyan-300"
                    }`}
                  >
                    ✓
                  </span>

                </button>
              );
            })}

          </div>

        </div>


        {/* Bottom CTA */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/80 bg-white/50 p-5 shadow-xl shadow-slate-200/30 backdrop-blur-xl sm:flex-row">

          <div>
            <p className="font-semibold">
              Ready to discover your pathways?
            </p>

            <p className="text-sm text-slate-500">
              You can select as many options as you want.
            </p>
          </div>


          <button
            className="w-full rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
            onClick={() => {
              const profile = {
                subjects: selectedSubjects,
                activities: selectedActivities,
                interests: selectedInterests,
              };

              localStorage.setItem(
                "studentProfile",
                JSON.stringify(profile)
              );

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
