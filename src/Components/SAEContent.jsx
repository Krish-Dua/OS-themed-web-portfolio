import React from 'react'

const SAEContent = () => {
  return (
       <div
      className="
        h-full w-full overflow-y-auto
        bg-neutral-200
        p-6
      "
    >
      <div
        className="
          max-w-5xl mx-auto
          grid md:grid-cols-[1fr_2fr]
          gap-6
        "
      >
        {/* LEFT COLUMN — EDUCATION (UNCHANGED) */}
        <div
          className="
            bg-linear-to-b from-slate-700 to-slate-800
            text-white
            rounded-lg
            px-4 py-8
            space-y-6
            h-min
          "
        >
          <h1 className="text-2xl font-semibold">
            Education
          </h1>

          <div className="space-y-6 text-base text-white/90">
            <div>
              <p className="font-medium">
                Bachelor of Computer Applications
              </p>
              <p className="text-white/70">
                Inderprastha Engineering College
              </p>
              <p className="text-white/60">
                2023 – Present
              </p>
            </div>

            <div>
              <p className="font-medium">
                Senior Secondary (12th)
              </p>
              <p className="text-white/70">
                Govt. Boys Sr. Sec. School, Chander Nagar
              </p>
              <p className="text-white/60">
                Completed in 2023
              </p>
            </div>

            <div>
              <p className="font-medium">
                Secondary (10th)
              </p>
              <p className="text-white/70">
                Biglow's Public School
              </p>
              <p className="text-white/60">
                Completed in 2021
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — SKILLS (LIGHT GRADIENT + BIGGER TEXT) */}
        <div
          className="
            bg-linear-to-br
            from-sky-50
            via-sky-150
            to-blue-200
            rounded-lg
            shadow-sm
            p-8
            space-y-9
            text-slate-700
          "
        >
          <h1 className="text-2xl font-semibold text-slate-900">
            Skills
          </h1>

          {/* PROGRAMMING LANGUAGES */}
          <section className="space-y-2">
            <h2 className="text-xl font-medium text-slate-900">
              Programming Languages
            </h2>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>JavaScript (ES6+)</li>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
            </ul>
          </section>

          {/* FRONTEND */}
          <section className="space-y-2">
            <h2 className="text-xl font-medium text-slate-900">
              Frontend
            </h2>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>HTML5, CSS3</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Component-based UI development</li>
            </ul>
          </section>

          {/* BACKEND */}
          <section className="space-y-2">
            <h2 className="text-xl font-medium text-slate-900">
              Backend
            </h2>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
              <li>Authentication & Authorization</li>
              <li>Rate Limiting</li>
              <li>File Uploads</li>

            </ul>
          </section>

          {/* DATABASES */}
          <section className="space-y-2">
            <h2 className="text-xl font-medium text-slate-900">
              Databases
            </h2>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>Data modeling</li>
              <li>Relational databases (MySQL)</li>
              <li>Non-Relational databases (MongoDb)</li>
            </ul>
          </section>


          {/* TOOLS */}
          <section className="space-y-2">
            <h2 className="text-xl font-medium text-slate-900">
              Tools
            </h2>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>Git & GitHub</li>
              <li>VS Code , Antigravity</li>
              <li>Postman</li>
              <li>Chrome & react dev tools for debugging</li>
              
            </ul>
          </section>

          {/* LEARNING */}
          <section className="space-y-2">
            <h2 className="text-xl font-medium text-slate-900">
              Currently Learning
            </h2>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>System & application architecture</li>
              <li>Backend Advanced concepts</li>
              <li>App development with react native</li>
              <li>Application security</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SAEContent
