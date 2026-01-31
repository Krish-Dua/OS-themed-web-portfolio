import React from "react";
const AboutMeContent = () => {
  return (
    <div
      className="
      h-full w-full overflow-y-auto
      bg-neutral-100
      p-6
    "
    >
      <div
        className="
        max-w-5xl mx-auto
        grid md:grid-cols-[1fr_2fr]
        bg-white
        rounded-lg
        shadow-lg
        overflow-hidden
      "
      >
        {}
        <div
          className="
          bg-slate-800
          text-white
          p-6
          space-y-4
        "
        >
          <h1 className="text-2xl font-semibold">Krish Dua</h1>

          <p className="text-sm text-white/80 leading-relaxed">
            Bachelor of Computer Applications student at Inderprastha
            Engineering College, focused on building structured, reliable
            systems and applications with attention to architecture, behavior,
            and user experience.
          </p>
        </div>

        {}
        <div className="p-8 space-y-10 text-slate-700">
          <section className="space-y-2">
            <h2 className="text-lg font-medium text-slate-900">
              A Quick Intro
            </h2>
            <p className="leading-relaxed">
              Currently pursuing a Bachelor of Computer Applications at
              Inderprastha Engineering College, with a primary focus on
              developing full-stack web applications and strengthening core
              software fundamentals. Interest extends beyond surface-level
              implementation to understanding how technologies function
              internally, how systems are structured, and how different
              components interact.
              <br></br>
              Interest is centered on how web applications are structured
              internally, covering request handling, state flow, data
              management, and inter-layer communication.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-medium text-slate-900">
              How I Approach Building Software
            </h2>
            <p className="leading-relaxed">
              I approch development with an emphasis on structure and clarity.
              Attention is given to organizing code responsibly, separating
              concerns between frontend and backend, and managing application
              state in a predictable manner.
              <br />
              There is an active effort to understand system and architecture
              design concepts relevant to web applications, such as how
              components communicate, how data flows through an application,
              advanced backend concepts such as rate limiting, caching, queues,
              scaling, security, sockets etc and how applications can be
              structured to remain maintainable as they grow.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-medium text-slate-900">
              What I’m Aiming For
            </h2>
            <p className="leading-relaxed">
              The goal is to grow into a software engineer with a strong
              understanding of system design, application architecture, and
              product-oriented decision-making. Interest lies in contributing to
              real-world systems that put impact in users lives and solve
              meaningful problems.
              <br />
              Current focus is on strengthening architectural thinking and
              system design principles, AI integration, improving problem
              decomposition skills, and developing a deeper understanding of how
              large software systems are designed, built, and maintained over
              time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-medium text-slate-900">My Hobbies</h2>
            <p className="leading-relaxed">
              Beyond web development, interests include bike riding, music, and
              playing games with a particular interest in FPS shooting titles.
              Game development is pursued as a personal hobby alongside these
              interests.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default AboutMeContent;
