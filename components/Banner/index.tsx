export const Banner: IComponent = () => {
  return (
    <section className="flex px-20 flex-col w-full bg-default text-white pt-32 pb-64">
      <h1 className="md:text-6xl sm:text-3l text-3xl">
        We deliver high-standard software products for crypto market
      </h1>
      <p className="my-4 text-xl">
        We keep your application running smoothly in any level, from MVP to
        large scale application & up-to-date with the latest technology.
      </p>
      <button
        type="button"
        className="sm:w-1/2 md:w-1/2 lg:w-1/4 rounded-full bg-yellow-300 text-black focus:outline-none text-xl  px-5 py-2.5 text-center mr-2 mb-8"
      >
        Let&lsquo;s talk about your <b>IDEA</b>
      </button>
    </section>
  );
};
