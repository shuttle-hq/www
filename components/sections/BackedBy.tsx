import { YCombinatorOrange } from "components/svgs";

const BackedBy = () => {
  return (
    <div className="border-b border-t border-white/10 py-20 lg:py-40">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 sm:px-10 md:grid-cols-[minmax(auto,_675px)_auto] md:items-center lg:gap-20">
        <div>
          <h2 className="font-gradual text-4.5 font-bold leading-none dark:text-head lg:text-5xl">
            Backed by
          </h2>
          <p className="mt-3 max-w-[800px] text-xl sm:mt-5 lg:text-2xl">
            We’re continually working on rethinking the way development works in
            the cloud by building the best in class deployment system.
          </p>
        </div>

        <YCombinatorOrange />
      </div>
    </div>
  );
};

export default BackedBy;
