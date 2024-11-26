export default function UsageHome() {
  return (
    <div className=" w-full flex flex-col items-center overflow-x-hidden  px-4 sm:px-6 ">
      <h1 className="font-semibold text-2xl sm:text-3xl text-white flex justify-start items-center w-full h-12 mt-4 ml-4 sm:ml-6 lg:ml-10">
        Introduction
      </h1>
      <div className="w-full flex items-start justify-start p-2 ml-4 sm:ml-6 lg:ml-10">
        <div className="max-w-full sm:max-w-lg lg:max-w-xl font-normal text-base sm:text-lg text-muted-foreground tracking-wide">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </div>
      </div>
      <div className="mt-8 sm:mt-10 flex flex-col items-start justify-start w-full">
        <div className="w-full flex flex-col items-start justify-start gap-y-6 sm:gap-y-8 lg:gap-y-10 px-4 sm:px-6 lg:px-10">
          <section className="font-normal text-start w-full text-base sm:text-lg text-white">
            This is NOT a component library. It&apos; a collection of re-usable
            components that you can copy and paste into your apps.
          </section>
          <section className="font-normal text-start w-full text-base sm:text-lg text-white">
            What do you mean by not a component library? I mean you do not
            install it as a dependency. It is not available or distributed via
            npm. Pick the components you need.
          </section>
          <section className="font-normal text-start w-full text-base sm:text-lg text-white">
            Copy and paste the code into your project and customize to your
            needs. The code is yours. Use this as a reference to build your own
            component libraries.
          </section>
        </div>
      </div>
    </div>
  );
}
