export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          Pathway
        </div>

        <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
          Sign In
        </button>
      </nav>


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-24 text-center">

        <div className="max-w-4xl mx-auto">

          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-5">
            Career Pathway Discovery
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Discover what you can do
            <span className="text-blue-600">
              {" "}with what you love.
            </span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore career pathways based on your interests, subjects,
            goals and preferences — and understand where each pathway can take you.
          </p>


          <div className="mt-10 flex justify-center gap-4">

            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              Start Exploring
            </button>

            <button className="px-8 py-4 border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition">
              Explore Pathways
            </button>

          </div>

        </div>

      </section>


      {/* How it works */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Your journey starts here
          </h2>

          <p className="text-gray-600 text-center mt-4">
            Discover possibilities you may not have considered.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200">

              <div className="text-3xl mb-5">
                01
              </div>

              <h3 className="text-xl font-semibold">
                Tell us about yourself
              </h3>

              <p className="text-gray-600 mt-3">
                Share your subjects, interests, goals and preferences.
              </p>

            </div>


            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200">

              <div className="text-3xl mb-5">
                02
              </div>

              <h3 className="text-xl font-semibold">
                Discover pathways
              </h3>

              <p className="text-gray-600 mt-3">
                Explore multiple career pathways that match your profile.
              </p>

            </div>


            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200">

              <div className="text-3xl mb-5">
                03
              </div>

              <h3 className="text-xl font-semibold">
                Understand the journey
              </h3>

              <p className="text-gray-600 mt-3">
                See courses, skills, careers and higher-study opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Main Idea */}
      <section className="max-w-5xl mx-auto px-8 py-24 text-center">

        <p className="text-blue-600 font-semibold mb-4">
          OUR APPROACH
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          We don't choose a career for you.
          <br />
          We help you discover your possibilities.
        </h2>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Compare different pathways, understand what each one requires,
          and make a decision with better information.
        </p>

      </section>


      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
        Career Pathway Discovery Platform
      </footer>

    </main>
  );
}