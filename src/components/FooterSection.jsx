function FooterSection() {
  return (
    <footer className="bg-[#1f1c1a] text-gray-200">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-8 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-xs uppercase tracking-wide text-gray-300">
          <p className="font-semibold text-gray-200">Get in touch</p>
          <p className="text-gray-400">mostafa@email.com</p>
          <p className="text-gray-400">+971 555 123 456</p>
        </div>

        <button className="border border-gray-500 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-gray-100 hover:border-gray-300">
          Contact me
        </button>

        <div className="flex items-center gap-3">
          {[
            { label: "in", name: "LinkedIn" },
            { label: "f", name: "Facebook" },
            { label: "t", name: "Twitter" },
          ].map((social) => (
            <span
              key={social.name}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-500 text-xs font-semibold uppercase text-gray-200"
              aria-label={social.name}
            >
              {social.label}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-800 py-3 text-center text-xs text-gray-500">
        Copyright 2019 KR
      </div>
    </footer>
  );
}

export default FooterSection;
