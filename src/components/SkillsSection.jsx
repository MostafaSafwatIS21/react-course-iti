const focusItems = [
  "UI/UX Design",
  "Responsive Design",
  "Web Design",
  "Mobile App Design",
];

const skillBars = [
  { label: "HTML", value: 90 },
  { label: "CSS", value: 85 },
  { label: "JavaScript", value: 80 },
  { label: "React", value: 75 },
  { label: "Photoshop", value: 65 },
  { label: "Adobe XD", value: 60 },
  { label: "Node.js", value: 55 },
  { label: "WordPress", value: 50 },
];

function SkillsSection() {
  return (
    <section className="bg-[#3d3d3d] text-gray-100">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <h2 className="text-center text-3xl font-semibold tracking-wide">
          Skills
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-300">
              MY FOCUS
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              {focusItems.map((item) => (
                <li key={item} className="text-gray-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            {skillBars.map((skill) => (
              <div key={skill.label} className="flex items-center gap-4">
                <span className="w-24 text-xs font-semibold text-gray-200">
                  {skill.label}
                </span>
                <div className="h-3 w-full bg-[#ededed]">
                  <div
                    className="h-full bg-[#bfb9b2]"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
