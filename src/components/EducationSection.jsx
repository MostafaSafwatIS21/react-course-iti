const portfolioItems = [
  "Web Design",
  "Mobile Design",
  "Logo Design",
  "Web Application Development",
  "Mobile Application Development",
  "PWA Development",
];

function EducationSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-[#3d3d3d]">Portfolio</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={item}
              className={`flex h-28 items-center justify-center text-center text-xs font-semibold tracking-wide shadow-md ${
                index % 2 === 0
                  ? "bg-[#9f9a92] text-white"
                  : "bg-[#3d3d3d] text-white"
              }`}
            >
              <span className="px-4 uppercase leading-5">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
