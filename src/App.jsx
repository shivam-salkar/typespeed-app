import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  // autofocus the invisible textarea so typing starts immediately
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div>
        
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="text-center animate-popup">
          <h1 className="text-6xl font-semibold tracking-[0.3em]">Fun Type.</h1>
        </div>

        {/* container sized by the blue box */}
        <div className="relative animate-popup">
          {/* blue background with the paragraphs */}
          <div
            className="w-[720px] h-auto text-3xl p-10 text-gray-400 leading-relaxed tracking-tight rounded-md"
            aria-hidden="true"
          >
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit provident,
              praesentium reprehenderit sequi totam! Suscipit repellat et quia aut dignissimos?
            </p>

            <p>
              Sit distinctio recusandae est cupiditate nobis et nisi pariatur? Nulla facilis
              perferendis facere, laborum velit quam natus.
            </p>
          </div>

          {/* transparent textarea overlay that exactly fits the blue box */}
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            // let it grow / wrap naturally; keep it visually aligned with the blue text
            className="absolute top-0 left-0 w-[720px] min-h-full h-auto p-10 text-3xl leading-relaxed tracking-tight resize-none
                       bg-transparent text-black font-normal  caret-black [caret-shape:bar] [caret-width-3px] border-none outline-none focus:outline-none focus:ring-0
                       placeholder:text-white/40"
            spellCheck={false}
            autoComplete="off"
            aria-label="Typing input"
            // allow keyboard to scroll the area if content grows
            style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
