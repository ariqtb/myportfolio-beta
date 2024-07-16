export default function Banner2() {
  return (
    <>
      <section id="#Home" className="flex flex-col justify-center min-h-screen sm:mx-4 md:mx-16">
        {/* <div className="w-4/5 min-h-fit pt-10 py-2 px-0 m-0"> */}
          <h2 className="text-xl pb-5 text-amber-300">Hi, my name is</h2>
          {/* <div className="py-2 font-bold"> */}
            <h1 className="w-fit text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50">Tubagus Ariq Naufal.</h1>
            <h1 className="w-fit mt-0 sm:mt-2 text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold">I build things for the web and mobile.</h1>
          {/* </div> */}
          <div className="w-full">
            <h2 className="max-w-screen-sm mt-6 text-l">
              I&apos;m a <a href="#" className="font-semibold text-amber-300 hover:text-amber-600 transition-colors">software engineer</a> specializing in building (ocassionally
              designing) digital experiences. Currently, I&apos;m available and
              focusing on react (flutter for mobile) and node.
            </h2>
          </div>
          <a href="#" className="flex w-fit border rounded-lg font-mono p-2 sm:p-4 px-2 sm:px-5 mt-10 border-amber-300 text-amber-300 hover:text-white hover:border-white transition-colors">
            <h2 className="text-sm sm:text-lg font-normal">
              Check out my course!
            </h2>
          </a>
        {/* </div> */}
      </section>
    </>
  );
}
