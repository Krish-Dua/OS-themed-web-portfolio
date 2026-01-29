import React from 'react'

const ContactContent = () => {
  return (
    <div
      className="
        h-full w-full overflow-y-auto
        bg-gradient-to-br from-slate-100 via-sky-100 to-blue-200
        p-6
      "
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="
          max-w-3xl mx-auto
          bg-white/80 backdrop-blur-md
          rounded-xl
          shadow-lg
          overflow-hidden
          text-slate-700
        "
      >
        {/* HEADER */}
        <div
          className="
            px-8 py-6
            bg-gradient-to-r from-slate-800 to-slate-700
            text-white
          "
        >
          <h1 className="text-2xl font-semibold">
            Let's Connect
          </h1>
          <p className="text-sm text-white/80 mt-1">
            Open to opportunities, collaborations, and discussions related to software development.
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-6">

          {/* EMAIL */}
          <div
            className="
              group
              p-4 rounded-lg
              border border-slate-200
              bg-white
              hover:bg-sky-50
              transition
            "
          >
            <h2 className="text-lg font-medium text-slate-900">
              Email
            </h2>
            <a
              href="https://mail.google.com/mail/?view=cm&to=krishdua747@gmail.com&su=Portfolio%20Contact"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-1
                text-blue-600
                font-medium
                group-hover:underline
              "
            >
              krishdua747@gmail.com
            </a>
            <p className="text-sm text-slate-500 mt-1">
              Opens your email client with the address pre-filled
            </p>
          </div>

          {/* LINKEDIN */}
          <div
            className="
              group
              p-4 rounded-lg
              border border-slate-200
              bg-white
              hover:bg-sky-50
              transition
            "
          >
            <h2 className="text-lg font-medium text-slate-900">
              LinkedIn
            </h2>
            <a
              href="https://www.linkedin.com/in/krish-dua-6a8a05347"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-1
                text-blue-600
                font-medium
                group-hover:underline
              "
            >
              linkedin.com/in/krish-dua-6a8a05347
            </a>
          </div>

         

          {/* FOOTER */}
          <div className="pt-4 text-sm text-slate-500">
            Feel free to reach out using any of the options above.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactContent
