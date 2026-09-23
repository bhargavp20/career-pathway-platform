"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import { pathways, Pathway } from "@/data/pathways";

export default function PathwayPage() {
  const [pathway, setPathway] = useState<Pathway | null>(null);

  useEffect(() => {
    const savedPathway = localStorage.getItem("selectedPathway");

    if (!savedPathway) {
      return;
    }

    const selected = pathways.find(
      (item) => item.title === savedPathway
    );

    if (selected) {
      setPathway(selected);
    }
  }, []);

  if (!pathway) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="rounded-3xl border border-white/80 bg-white/70 p-10 text-center shadow-xl backdrop-blur-xl">
          <h1 className="text-2xl font-bold text-slate-900">
            Pathway not found
          </h1>

          <p className="mt-3 text-slate-600">
            Please go back to your results and select a pathway.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute right-[-200px] top-[350px] h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="absolute bottom-[-200px] left-[30%] h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      {/* Header */}
      <header className="border-b border-white/70 bg-white/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-2">

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
            Career pathway explorer
          </span>

        </div>
       </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-12 pt-14 md:pt-20">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl md:p-12">

            <div className="max-w-4xl">

              <div className="flex flex-wrap items-center gap-3">

                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/70 px-4 py-2 text-sm font-semibold text-blue-700">

                  <span className="h-2 w-2 rounded-full bg-blue-600" />

                  Career Pathway

                </span>

                <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600">
                  {pathway.category}
                </span>

              </div>

              <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
                {pathway.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {pathway.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">

                {pathway.journey.map((step, index) => (
                  <div
                    key={`${step.stage}-${index}`}
                    className="flex items-center gap-3"
                  >

                    <span className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                      {step.title}
                    </span>

                    {index < pathway.journey.length - 1 && (
                      <span className="text-slate-400">
                        →
                      </span>
                    )}

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Journey */}
      <section className="px-6 py-10">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="THE JOURNEY"
            title="Your possible journey"
            description="A pathway is more than a degree. Explore how different stages can connect."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-5">

            {pathway.journey.map((step, index) => (

              <JourneyCard
                key={`${step.stage}-${index}`}
                number={String(index + 1).padStart(2, "0")}
                stage={step.stage}
                title={step.title}
                text={step.description}
              />

            ))}

          </div>

        </div>

      </section>

      {/* What is this pathway */}
      <section className="px-6 py-6">

        <div className="mx-auto max-w-7xl">

          <InfoCard>

            <SectionHeading
              eyebrow="UNDERSTAND THE FIELD"
              title={`What is ${pathway.title}?`}
            />

            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-600">
              {pathway.description}
            </p>

          </InfoCard>

        </div>

      </section>

      {/* Degree Options */}
      <section className="px-6 py-6">

        <div className="mx-auto max-w-7xl">

          <InfoCard>

            <SectionHeading
              eyebrow="EDUCATION"
              title="Degree / Course Options"
              description={`Possible undergraduate routes related to ${pathway.title}.`}
            />

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {pathway.degreeOptions.map((course) => (

                <div
                  key={course}
                  className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 font-medium text-blue-800 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  {course}
                </div>

              ))}

            </div>

          </InfoCard>

        </div>

      </section>

      {/* Skills */}
      <section className="px-6 py-6">

        <div className="mx-auto max-w-7xl">

          <InfoCard>

            <SectionHeading
              eyebrow="SKILLS"
              title="Important Skills"
              description={`Skills that can be developed while exploring ${pathway.title}.`}
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {pathway.skills.map((skill, index) => (

                <SkillCard
                  key={skill}
                  number={String(index + 1).padStart(2, "0")}
                  title={skill}
                />

              ))}

            </div>

          </InfoCard>

        </div>

      </section>

      {/* Career Roles */}
      <section className="px-6 py-6">

        <div className="mx-auto max-w-7xl">

          <InfoCard>

            <SectionHeading
              eyebrow="CAREER OPTIONS"
              title="Career Opportunities"
              description={`Possible roles related to ${pathway.title}.`}
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {pathway.careerRoles.map((career, index) => (

                <div
                  key={career}
                  className="group rounded-2xl border border-white/80 bg-white/60 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-sm font-bold text-indigo-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Career
                    </span>

                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {career}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    A possible career role to research within this pathway.
                  </p>

                </div>

              ))}

            </div>

          </InfoCard>

        </div>

      </section>

      {/* Salary */}
      <section className="px-6 py-6">

        <div className="mx-auto max-w-7xl">

          <InfoCard>

            <SectionHeading
              eyebrow="INDICATIVE INFORMATION"
              title="Salary in India"
              description="Salary can vary significantly depending on role, experience, location and employer."
            />

            <div className="mt-10">
  <div className="mb-5">
    <h2 className="text-2xl font-semibold text-slate-900">
      Career Salaries
    </h2>

    <p className="mt-2 text-sm text-slate-500">
      Indicative salary estimates for major career roles in India.
      Actual salaries vary by experience, location, skills and employer.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    {pathway.salaryRoles.map((salary) => (
      <div
        key={salary.role}
        className="rounded-2xl border border-white/60 bg-white/60 p-5 shadow-sm backdrop-blur-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-slate-900">
              {salary.role}
            </h3>

            <p className="mt-2 text-2xl font-bold text-blue-600">
              {salary.average}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Typical range: {salary.range}
            </p>
          </div>
        </div>

        <div className="mt-4 border-t border-slate-200/70 pt-3">
          <p className="text-xs text-slate-400">
            Source: {salary.source}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Updated: {salary.updated}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              Salary figures are indicative. Students should verify current
              figures for specific roles, locations and employers before making
              decisions.
            </p>

          </InfoCard>

        </div>

      </section>

      {/* Learning Resources */}
      <section className="px-6 py-6">

        <div className="mx-auto max-w-7xl">

          <InfoCard>

            <SectionHeading
              eyebrow="START LEARNING"
              title="Learning Resources"
              description={`Resources to begin exploring ${pathway.title}.`}
            />

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {pathway.learningResources.map((resource) => (

                <div
                  key={resource.title}
                  className="pathway-resource-card overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8"
                >

                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                    {resource.platform}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {resource.title}
                  </h3>
                  
                  <p className="mt-3 leading-relaxed !text-slate-600">
                    {resource.description}
                  </p>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Explore Resource →
                  </a>

                </div>

              ))}

            </div>

          </InfoCard>

        </div>

      </section>

      {/* Higher Studies */}
      <section className="px-6 py-6 pb-20">

        <div className="mx-auto max-w-7xl">

          <InfoCard>

            <SectionHeading
              eyebrow="WHAT COMES NEXT"
              title="Higher Studies"
              description={`Possible postgraduate directions after studying ${pathway.title}.`}
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {pathway.higherStudies.map((study) => (

                <div
                  key={study}
                  className="rounded-2xl border border-white/80 bg-white/70 p-5 text-center font-medium text-slate-700 shadow-sm backdrop-blur-md"
                >
                  {study}
                </div>

              ))}

            </div>

          </InfoCard>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 px-6 py-8 text-center text-sm text-slate-500">
        Pathway — Career Pathway Discovery Platform
      </footer>

    </main>
  );
}


/* -------------------------------------------------- */
/* Components */
/* -------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>

      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          {description}
        </p>
      )}

    </div>
  );
}


function InfoCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/80 bg-white/55 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl md:p-8">
      {children}
    </div>
  );
}


function JourneyCard({
  number,
  stage,
  title,
  text,
}: {
  number: string;
  stage: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/80 bg-white/60 p-6 shadow-lg shadow-slate-200/30 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-700">
          {number}
        </span>

        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {stage}
        </span>

      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {text}
      </p>

    </div>
  );
}


function SkillCard({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/60 p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-center gap-3">

        <span className="text-xs font-bold text-blue-600">
          {number}
        </span>

        <h3 className="font-bold">
          {title}
        </h3>

      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        Develop this skill progressively through coursework, projects and
        practical experience.
      </p>

    </div>
  );
}


function SalaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/80 bg-slate-50/70 p-6 backdrop-blur-md">

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

    </div>
  );
}
