import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10"></div>

      {/* Header */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-white">Generate</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">study notes</span>{" "}
            <br />{" "}
            <span className="text-white">from</span>{" "}
            <span className="text-purple-400">PDFs</span>{" "}
            <span className="text-white">with</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">AI</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
    Upload your syllabus or lecture PDFs.
Instantly get summaries, Q&A, and flashcards powered by advanced AI.
          </p>
          <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-purple-700">
            Get started
          </button>
        </section>

        {/* Code editor image placeholder */}
        <section className="px-4 -mt-10">
          <div className="relative max-w-6xl mx-auto rounded-xl border border-white/10 bg-black/80 shadow-2xl shadow-purple-500/10 backdrop-blur-sm">
            <div className="p-2.5">
              <div className="aspect-video bg-gray-900/80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Code editor UI screenshot</p>
              </div>
            </div>
            <div className="absolute top-8 -right-12 hidden lg:flex flex-col gap-2">
              <Image
                src="https://placehold.co/40x40/f87171/f87171"
                width={40}
                height={40}
                alt="avatar"
                className="rounded-full"
              />
              <Image
                src="https://placehold.co/40x40/4ade80/4ade80"
                width={40}
                height={40}
                alt="avatar"
                className="rounded-full"
              />
              <Image
                src="https://placehold.co/40x40/60a5fa/60a5fa"
                width={40}
                height={40}
                alt="avatar"
                className="rounded-full"
              />
              <Image
                src="https://placehold.co/40x40/c084fc/c084fc"
                width={40}
                height={40}
                alt="avatar"
                className="rounded-full"
              />
              <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">
                Share
              </button>
            </div>
          </div>
        </section>

        {/* Company Logos */}
        <section className="py-24">
          <p className="text-center text-gray-500 text-sm">
            Trusted by the world's best companies
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            <p className="text-gray-200 font-semibold text-xl">Google</p>
            <p className="text-gray-200 font-semibold text-xl">Disney</p>
            <p className="text-gray-200 font-semibold text-xl">Netflix</p>
            <p className="text-gray-200 font-semibold text-xl">Shopify</p>
            <p className="text-gray-200 font-semibold text-xl">Spotify</p>
            <p className="text-gray-200 font-semibold text-xl">Slack</p>
          </div>
        </section>

        {/* Features Section 1 */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-purple-400">
                WORKFLOWS
              </span>
              <h3 className="text-4xl font-bold mt-2 tracking-tight">
                Create complex workflows instantly
              </h3>
              <p className="text-gray-400 mt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="mt-6 text-purple-400 font-semibold flex items-center gap-2 group">
                Get started{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              {/* Placeholder for progress bars */}
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://placehold.co/40x40/f87171/f87171"
                    width={40}
                    height={40}
                    alt="avatar"
                    className="rounded-full"
                  />
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-red-500 h-2.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://placehold.co/40x40/4ade80/4ade80"
                    width={40}
                    height={40}
                    alt="avatar"
                    className="rounded-full"
                  />
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://placehold.co/40x40/60a5fa/60a5fa"
                    width={40}
                    height={40}
                    alt="avatar"
                    className="rounded-full"
                  />
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section 2 */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first bg-[#111111] border border-white/10 rounded-lg p-6">
              {/* Placeholder for cards */}
              <div className="space-y-4 mt-4">
                <div className="bg-[#1C1C1C] p-4 rounded-lg flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-400/30 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Framer App</p>
                    <p className="text-sm text-gray-400">in 2 minutes</p>
                  </div>
                </div>
                <div className="bg-[#1C1C1C] p-4 rounded-lg flex items-center gap-4 relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-3 py-1 text-xs rounded-full font-semibold">
                    Recommended
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-yellow-400/30 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">JS token</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-purple-400">
                ALL IN ONE COLLABORATION
              </span>
              <h3 className="text-4xl font-bold mt-2 tracking-tight">
                Create complex workflows instantly
              </h3>
              <p className="text-gray-400 mt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-6 space-y-2 border-l-2 border-purple-500 pl-4">
                <a
                  href="#"
                  className="block font-semibold hover:text-purple-400"
                >
                  Custom integrations
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Detailed analytics
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="py-24 text-center">
          <span className="text-sm font-semibold text-purple-400">
            INTEGRATIONS
          </span>
          <h3 className="text-4xl font-bold mt-2 tracking-tight">
            Make nayzak your own with custom stuff
          </h3>

          {/* Mobile UI Placeholder */}
          <div className="mt-12 max-w-sm mx-auto bg-[#1C1C1C] border border-white/10 rounded-3xl p-4">
            <div className="aspect-[9/16] bg-black rounded-2xl flex items-center justify-center">
              <p className="text-gray-500">Mobile UI Mockup</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold tracking-tight">
                The universe of open source
              </h4>
              <p className="text-gray-400 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold tracking-tight">
                Countless creative
              </h4>
              <p className="text-gray-400 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold tracking-tight">Full control</h4>
              <p className="text-gray-400 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Logos Section */}
        <section className="py-12">
          <h3 className="text-center text-3xl font-bold tracking-tight">
            Make nayzak your own with custom stuff
          </h3>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-75">
            {/* Placeholder for logos */}
            <div className="w-16 h-16 rounded-full bg-red-500"></div>
            <div className="w-16 h-16 rounded-full bg-cyan-500"></div>
            <div className="w-16 h-16 rounded-full bg-green-500"></div>
            <div className="w-16 h-16 rounded-full bg-blue-500"></div>
            <div className="w-16 h-16 rounded-full bg-orange-500"></div>
            <div className="w-16 h-16 rounded-full bg-yellow-500"></div>
            <div className="w-16 h-16 rounded-full bg-purple-500"></div>
            <div className="w-16 h-16 rounded-full bg-sky-500"></div>
            <div className="w-16 h-16 rounded-full bg-pink-500"></div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="text-center">
            <p className="text-4xl font-bold opacity-25">“</p>
            <h3 className="text-3xl font-bold mt-2 tracking-tight">
              People sharing love all around the world
            </h3>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial cards */}
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <p>
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src="https://placehold.co/40x40/facc15/facc15"
                  width={40}
                  height={40}
                  alt="avatar"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Evren Shah</p>
                  <p className="text-sm text-gray-400">Lead Designer, Slack</p>
                </div>
              </div>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <p>
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src="https://placehold.co/40x40/f87171/f87171"
                  width={40}
                  height={40}
                  alt="avatar"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Leo Prasad</p>
                  <p className="text-sm text-gray-400">Lead Designer, Disney</p>
                </div>
              </div>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <p>
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src="https://placehold.co/40x40/60a5fa/60a5fa"
                  width={40}
                  height={40}
                  alt="avatar"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Dua Lipa</p>
                  <p className="text-sm text-gray-400">Lead Designer, Vercel</p>
                </div>
              </div>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <p>
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src="https://placehold.co/40x40/4ade80/4ade80"
                  width={40}
                  height={40}
                  alt="avatar"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Olivia Rodrigo</p>
                  <p className="text-sm text-gray-400">
                    Lead Designer, Spotify
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-24 text-center">
          <h3 className="text-3xl font-bold tracking-tight">
            Driven by a great community of pro developers
          </h3>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl">
                {/* Icon placeholder */}C
              </div>
              <h4 className="text-xl font-bold mt-4 tracking-tight">
                Community driven
              </h4>
              <p className="text-gray-400 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 text-2xl">
                {/* Icon placeholder */}E
              </div>
              <h4 className="text-xl font-bold mt-4 tracking-tight">
                Easy deployment
              </h4>
              <p className="text-gray-400 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-2xl">
                {/* Icon placeholder */}S
              </div>
              <h4 className="text-xl font-bold mt-4 tracking-tight">
                Enter-winning
              </h4>
              <p className="text-gray-400 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 text-2xl">
                {/* Icon placeholder */}O
              </div>
              <h4 className="text-xl font-bold mt-4 tracking-tight">
                Open source
              </h4>
              <p className="text-gray-400 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-purple-400">
              WORK FASTER
            </span>
            <h3 className="text-3xl font-bold mt-2 tracking-tight">
              Simple and affordable pricing plans for everyone
            </h3>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-[#111111] border border-white/10 rounded-lg p-8">
              <h4 className="text-xl font-bold tracking-tight">Starter</h4>
              <p className="text-gray-400 mt-2">All you need to get started</p>
              <p className="text-5xl font-bold mt-6">$44</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 10 seats
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 20GB storage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Template library
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Free hosting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Email support
                </li>
              </ul>
              <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
                Get started
              </button>
            </div>
            {/* Professional Plan */}
            <div className="bg-purple-600 border border-purple-400 rounded-lg p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-yellow-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight">Professional</h4>
              <p className="text-purple-200 mt-2">
                All you need to get started
              </p>
              <p className="text-5xl font-bold mt-6">$88</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-2">✓ 50 seats</li>
                <li className="flex items-center gap-2">✓ 500GB storage</li>
                <li className="flex items-center gap-2">✓ Template library</li>
                <li className="flex items-center gap-2">✓ Free hosting</li>
                <li className="flex items-center gap-2">✓ Priority support</li>
              </ul>
              <button className="w-full mt-8 bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-200">
                Get started
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center tracking-tight">
            Frequently asked questions
          </h3>
          <div className="mt-8 space-y-4">
            <div className="bg-[#111111] border border-white/10 p-4 rounded-lg">
              <details>
                <summary className="font-semibold cursor-pointer flex justify-between items-center">
                  How does this work?{" "}
                  <span className="text-2xl transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-gray-400 mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </details>
            </div>
            <div className="bg-[#111111] border border-white/10 p-4 rounded-lg">
              <details>
                <summary className="font-semibold cursor-pointer flex justify-between items-center">
                  Supported platforms{" "}
                  <span className="text-2xl transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-gray-400 mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </details>
            </div>
            <div className="bg-[#111111] border border-white/10 p-4 rounded-lg">
              <details>
                <summary className="font-semibold cursor-pointer flex justify-between items-center">
                  Payment methods{" "}
                  <span className="text-2xl transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-gray-400 mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold tracking-tight">
              Get monthly goodies, subscribe to our newsletter
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-gray-200">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="mt-8 flex justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-l-lg text-black w-80 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-black text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-800">
                Sign up
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-white/10 mt-12">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-md"></div>
              <h1 className="text-xl font-bold">nayzak</h1>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              &copy; 2023 Nayzak. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-bold">About</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Projects</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Browser extension
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Desktop app
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Community</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Affiliate program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Ambassadors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Company</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
