function BioSection() {
  return (
    <div className="flex gap-5 w-2/3  p-10  m-auto mt-10">
      <div className="text-3xl font-bold ">About me</div>
      <div className=" space-y-3">
        <p className="">
          I am a software developer with a passion for creating innovative
          solutions to complex problems. With a strong background in computer
          science and experience in various programming languages, I enjoy
          working on projects that challenge me to think critically and
          creatively. I am always eager to learn new technologies and
          collaborate with others to build impactful applications.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default BioSection;
