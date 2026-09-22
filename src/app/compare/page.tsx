"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

const pathways = {
  "Data Science": {
    subjects: "Mathematics + Computer Science",
    coding: "High",
    statistics: "High",
    finance: "Low–Medium",
    degree: "B.Tech / B.Sc / BCA",
    skills: "Python, SQL, Statistics, Machine Learning",
    careers: "Data Scientist, Data Analyst, ML Engineer",
    higherStudies: "M.Sc / M.Tech / Master's Abroad",
  },

  "Actuarial Science": {
    subjects: "Mathematics",
    coding: "Low–Medium",
    statistics: "High",
    finance: "High",
    degree: "Degree + Actuarial Qualifications",
    skills: "Mathematics, Statistics, Finance",
    careers: "Actuary, Risk Analyst, Insurance Analyst",
    higherStudies: "Actuarial Qualifications / Master's",
  },

  Statistics: {
    subjects: "Mathematics",
    coding: "Medium",
    statistics: "Very High",
    finance: "Medium",
    degree: "B.Sc Statistics / Mathematics",
    skills: "Statistics, Data Analysis, Research",
    careers: "Statistician, Data Analyst, Research Analyst",
    higherStudies: "M.Sc Statistics / Master's Abroad",
  },
};

export default function ComparePage() {
  const [first, setFirst] = useState("Data Science");
  const [second, setSecond] = useState("Actuarial Science");

  const firstData = pathways[first as keyof typeof pathways];
  const secondData = pathways[second as keyof typeof pathways];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-5">
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
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Compare Pathways
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-3">
          Explore the differences.
        </h1>

        <p className="text-gray-600 text-lg mt-4 max-w-3xl">
          Compare different pathways based on their subjects, skills,
          degree routes and career opportunities.
        </p>

        {/* Select pathways */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div>
            <label className="font-semibold">
              Pathway 1
            </label>

            <select
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              className="w-full mt-2 p-3 rounded-xl border bg-white"
            >
              {Object.keys(pathways).map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold">
              Pathway 2
            </label>

            <select
              value={second}
              onChange={(e) => setSecond(e.target.value)}
              className="w-full mt-2 p-3 rounded-xl border bg-white"
            >
              {Object.keys(pathways).map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Comparison table */}

        <div className="mt-10 bg-white border rounded-2xl overflow-hidden">

          <div className="grid grid-cols-3 bg-gray-50 border-b">

            <div className="p-5 font-semibold">
              Category
            </div>

            <div className="p-5 font-bold text-blue-600">
              {first}
            </div>

            <div className="p-5 font-bold text-blue-600">
              {second}
            </div>

          </div>

          <CompareRow
            title="Relevant subjects"
            first={firstData.subjects}
            second={secondData.subjects}
          />

          <CompareRow
            title="Coding"
            first={firstData.coding}
            second={secondData.coding}
          />

          <CompareRow
            title="Statistics"
            first={firstData.statistics}
            second={secondData.statistics}
          />

          <CompareRow
            title="Finance"
            first={firstData.finance}
            second={secondData.finance}
          />

          <CompareRow
            title="Degree routes"
            first={firstData.degree}
            second={secondData.degree}
          />

          <CompareRow
            title="Key skills"
            first={firstData.skills}
            second={secondData.skills}
          />

          <CompareRow
            title="Career roles"
            first={firstData.careers}
            second={secondData.careers}
          />

          <CompareRow
            title="Higher studies"
            first={firstData.higherStudies}
            second={secondData.higherStudies}
          />

        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-2xl">

          <h2 className="font-bold text-lg">
            Compare, then decide
          </h2>

          <p className="text-gray-600 mt-2">
            Pathway does not choose a career for the student. The comparison
            simply helps students understand the differences between options.
          </p>

        </div>

      </section>

    </main>
  );
}

function CompareRow({
  title,
  first,
  second,
}: {
  title: string;
  first: string;
  second: string;
}) {
  return (
    <div className="grid grid-cols-3 border-b">

      <div className="p-5 font-medium">
        {title}
      </div>

      <div className="p-5 text-gray-600">
        {first}
      </div>

      <div className="p-5 text-gray-600">
        {second}
      </div>

    </div>
  );
}