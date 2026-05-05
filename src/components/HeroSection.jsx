function HeroSection() {
  return (
    <div className="bg-[url('/public/image.avif')]   bg-cover bg-center">
      <div className="bg-black bg-opacity-50 h-[800px] flex flex-col items-start  justify-center  p-5">
        <h1 className="text-4xl font-bold text-white">Mostafa Safwa</h1>
        <p className="text-4xl font-bold text-white">Welcome to Our Website</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
