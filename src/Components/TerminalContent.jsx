import { useEffect, useRef, useState } from "react";
import useWindowStore from "../Store";

const PROMPT = "krish@dev:~$";

const COMMANDS = {
  help: {
    description: "Show available commands",
    action: () => "Available commands: help, clear, whoami, projects, skills, contact",
    
  },
  clear: {
    action: () => "__CLEAR__",
  },
  whoami: {
    action: () => "Opening About Me window...",
  },
  projects: {
    action: () => "Opening Projects window...",
  },
  skills: {
    action: () => "Opening Skills window...",
  },
  contact:{
    action: () => "Opening Contact window...",
  }
};

export default function TerminalContent({ desktopSize}) {
  const openWindow = useWindowStore((s) => s.openWindow);

  const [lines, setLines] = useState([
    { type: "output", text: "Welcome to Krish's Portfolio Terminal" },
    { type: "output", text: "Type 'help' to see available commands." },
  ]);

  const [input, setInput] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines]);

  const runCommand = (cmd) => {
    const command = cmd.trim();

    if (!command) return;

    setLines((prev) => [
      ...prev,
      { type: "command", text: `${PROMPT} ${command}` },
    ]);

    const handler = COMMANDS[command];

    if (!handler) {
      setLines((prev) => [
        ...prev,
        { type: "output", text: `Command not found: ${command}` },
      ]);
      return;
    }

    const result = handler.action();

    if (result === "__CLEAR__") {
      setLines([]);
      return;
    }

    if (Array.isArray(result)) {
      setLines((prev) => [
        ...prev,
        ...result.map((line) => ({ type: "output", text: line })),
      ]);
    } else {
      setLines((prev) => [
        ...prev,
        { type: "output", text: result },
      ]);
    }

    // Window hooks (later tweakable)
    if (command === "whoami") openWindow?.("about", "About Me",desktopSize);
    if (command === "projects") openWindow?.("projects", "Projects",desktopSize);
    if (command === "skills") openWindow?.("skills", "Skills",desktopSize);
    if (command === "contact") openWindow?.("contact", "Let's Connect",desktopSize);

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <div
      ref={containerRef}
      className="
        h-full w-full
        bg-black
        text-white
        font-mono text-[14px]
        p-2
        overflow-y-auto
        select-text
      "
      onClick={() => {
        document.getElementById("terminal-input")?.focus();
      }}
    >
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {line.type === "command" ? (
            <>
              <span className="text-green-400">
                {PROMPT}
              </span>{" "}
              <span className="text-white">
                {line.text.replace(`${PROMPT} `, "")}
              </span>
            </>
          ) : (
            <span className="text-white">{line.text}</span>
          )}
        </div>
      ))}

      {/* ACTIVE INPUT LINE */}
      <div className="flex items-center">
        <span className="text-green-400">{PROMPT}</span>
        <input
          id="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="
            flex-1
            bg-transparent
            outline-none
            border-none
            text-white
            ml-2
          "
        />
      </div>
    </div>
  );
}
