import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">

      {/* Background glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-[300px] right-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[30%] h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">

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

        <button className="rounded-full border border-white/70 bg-white/50 px-5 py-2.5 font-medium shadow-sm backdrop-blur-md transition hover:bg-white/80">
          Sign In
        </button>

      </nav>


      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-8 md:pt-24">

        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/60 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Career Pathway Discovery
          </div>


          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">

            Discover what you can do

            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              with what you love.
            </span>

          </h1>


          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Explore career pathways based on your subjects, interests,
            activities and goals — and understand where each pathway can take you.
          </p>



        {/* Preview card */}
        <div className="mx-auto mt-20 max-w-5xl">

          <div className="rounded-3xl border border-white/80 bg-white/50 p-4 shadow-2xl shadow-slate-300/30 backdrop-blur-xl md:p-6">

            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 md:p-8">

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-sm font-medium text-blue-600">
                    YOUR PROFILE
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Discover pathways that fit you
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Subjects • Interests • Activities • Goals
                  </p>
                </div>

                <div className="flex -space-x-2">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-semibold text-blue-700">
                    M
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-sm font-semibold text-indigo-700">
                    CS
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-cyan-100 text-sm font-semibold text-cyan-700">
                    AI
                  </div>

                </div>

              </div>


              {/* Mini pathway cards */}
              <div className="mt-8 grid gap-4 md:grid-cols-3">

                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    Pathway
                  </p>

                  <h4 className="mt-2 font-bold">
                    Data Science
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Data • Technology • Research
                  </p>
                </div>


                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    Pathway
                  </p>

                  <h4 className="mt-2 font-bold">
                    Bioinformatics
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Biology • Computing • Research
                  </p>
                </div>


                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
                    Pathway
                  </p>

                  <h4 className="mt-2 font-bold">
                    Actuarial Science
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Mathematics • Finance • Analysis
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* How it works */}
      <section className="px-6 py-24 md:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              From who you are to where you can go.
            </h2>

            <p className="mt-4 text-slate-600">
              A simple way to discover and understand different career pathways.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-3xl border border-white/80 bg-white/55 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition hover:-translate-y-1">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 font-bold text-blue-700">
                01
              </div>

              <h3 className="text-xl font-bold">
                Tell us about yourself
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Share your subjects, interests, activities and goals.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-3xl border border-white/80 bg-white/55 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition hover:-translate-y-1">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 font-bold text-indigo-700">
                02
              </div>

              <h3 className="text-xl font-bold">
                Discover pathways
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Explore multiple pathways that connect with your profile.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-3xl border border-white/80 bg-white/55 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition hover:-translate-y-1">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 font-bold text-cyan-700">
                03
              </div>

              <h3 className="text-xl font-bold">
                Understand the journey
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                See courses, skills, careers and higher-study opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Core idea */}
      <section className="px-6 py-24 md:px-8">

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/80 bg-white/50 px-8 py-16 text-center shadow-2xl shadow-slate-200/40 backdrop-blur-xl md:px-16">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            OUR APPROACH
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            We don't choose a career for you.
            <span className="block text-blue-600">
              We help you discover your possibilities.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Compare different pathways, understand what each one requires,
            and make a decision with better information.
          </p>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-slate-200/70 px-6 py-8 text-center text-sm text-slate-500">
        Pathway — Career Pathway Discovery Platform
      </footer>

    </main>
  );
}
