export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col max-w-xl items-center text-center gap-6 mb-28 py-28 mx-4 md:mx-auto"
      >
        <h2 className="font-normal text-center text-lg text-amber-300 mb-0 mt-3">
          What&apos;s Next?
        </h2>
        <p className="text-5xl sm:text-6xl font-bold text-gray-300">
          Get In Touch
        </p>
        <p className="text-gray-400">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a href="mailto:tubagusariqnaufal@gmail.com">
        <button className="mt-2 px-6 py-3 rounded-2xl text-lg font-normal bg-gray-800 text-amber-300 hover:bg-gray-800 hover:border-2 hover:border-gray-700 hover:-translate-y-2 transition-transform ease-out">
          Say, Hello!
        </button>
        </a>
      </div>
    </>
  );
}
