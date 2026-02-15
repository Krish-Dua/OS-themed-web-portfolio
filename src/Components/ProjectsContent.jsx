export default function ProjectsWindow() {
  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* ================= CONNECTICX ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600" />

          <div className="p-10 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Connecticx</h2>
              <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                Connecticx is a full-stack social networking platform built
                using the MERN stack, designed to handle real-time interactions,
                secure authentication, and scalable backend logic. The
                application focuses on structured API design, protected routing.
              </p>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                It combines dynamic UI rendering with backend validation, media
                handling, and WebSocket-based communication to simulate a
                real-world social platform architecture.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Zustand",
                  "JWT Authentication",
                  "WebSockets",
                  "Cloudinary",
                  "REST APIs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Key Capabilities
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 text-base text-slate-700">
                <li>JWT authentication with cookies</li>
                <li>Protected routes & middleware validation</li>
                <li>Dynamic feed rendering & state updates</li>
                <li>Reels and post upload options</li>
                <li>Follow / unfollow relationship logic</li>
                <li>Like & comment interaction system</li>
                <li>Real-time chat via WebSockets</li>
                <li>Real-time notifications</li>
                <li>Media upload & storage using Cloudinary</li>
                <li>Modular backend structure</li>
                <li>Rate limiting on login route</li>
              </ul>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://connecticx.onrender.com"
                target="_blank"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Krish-Dua/SM"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
              >
                Source Code
              </a>
            </div>
            {/* Test Credentials (Connecticx) */}
            <div className="mt-4">
              <div className="rounded-lg bg-blue-50 border border-blue-100 p-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">
                  Test Credentials
                </h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>
                    <span className="font-semibold">Email:</span> demo@example.com
                  </li>
                  <li>
                    <span className="font-semibold">Passowrd:</span> demo@1234
                  </li>
                </ul>
             
              </div>
            </div>
          </div>
        </div>

        {/* ================= STUDYAI ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="h-3 bg-gradient-to-r from-emerald-500 to-teal-600" />

          <div className="p-10 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">StudyAI</h2>
              <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                StudyAI is an AI-powered academic assistant integrating the
                Gemini API to generate structured learning materials
                dynamically. The system processes user prompts on the backend
                and returns formatted educational content such as flashcards,
                summaries, and MCQs.
              </p>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                The project emphasizes API integration, response parsing,
                structured data handling, and building a consistent frontend
                experience around dynamic AI-generated outputs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Gemini API",
                  ,
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full bg-emerald-100 text-emerald-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Key Capabilities
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 text-base text-slate-700">
                <li>AI-generated flashcards</li>
                <li>Dynamic MCQ mock tests</li>
                <li>Structured content summarization</li>
                <li>Detailed notes generation</li>
                <li>Gemini API integration</li>
              </ul>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://studyai-dc2u.onrender.com"
                target="_blank"
                className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Cursey-Rahul/College-MP"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-50 transition"
              >
                Source Code
              </a>
            </div>
            {/* Test Credentials (StudyAI) */}
            <div className="mt-4">
              <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">
                  Test Credentials
                </h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>
                    <span className="font-semibold">email:</span> demo@example.com
                  </li>
                  <li>
                    <span className="font-semibold">password:</span> demo@1234
                  </li>
                </ul>
            
              </div>
            </div>
          </div>
        </div>

        {/* ================= URL SHORTENER ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="h-3 bg-gradient-to-r from-orange-500 to-red-500" />

          <div className="p-10 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                URL Shortener
              </h2>
              <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                A backend-focused utility application that generates unique
                shortened URLs and handles redirect routing with persistent
                database storage. The system emphasizes clean endpoint structure
                and reliable redirection logic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Short ID Generation",
                  "REST Endpoints",
                  "Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full bg-orange-100 text-orange-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Key Capabilities
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 text-base text-slate-700">
                <li>Unique short ID generation algorithm</li>
                <li>Redirect routing logic</li>
                <li>Database persistence for original URLs</li>
                <li>Error handling for invalid routes</li>
                <li>RESTful endpoint structure</li>
                <li>Live production deployment</li>
              </ul>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://shortly-dl2q.onrender.com"
                target="_blank"
                className="px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Krish-Dua/Shortly"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-orange-600 text-orange-600 font-medium hover:bg-orange-50 transition"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
