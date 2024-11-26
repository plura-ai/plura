import { ScrollArea } from "./scroll-area";
export default function LeftSidebar() {
  const items = [
    { label: "Introduction" },
    { label: "Getting Started" },
    { label: "Features" },
    { label: "Pricing" },
    { label: "FAQ" },
    { label: "Blog" },
    { label: "Introduction" },
    { label: "Getting Started" },
    { label: "Features" },
    { label: "Pricing" },
    { label: "FAQ" },
    { label: "Blog" },
    { label: "Contact Us" },
    { label: "Introduction" },
    { label: "Getting Started" },
    { label: "Features" },
    { label: "Pricing" },
    { label: "FAQ" },
    { label: "Blog" },
    { label: "Contact Us" },
    { label: "Contact Us" },
  ];

  return (
    <div className="hidden lg:flex lg:flex-col md:mr-16 border-r text-sm lg:items-start lg:justify-start lg:w-full lg:h-full lg:top-8 lg:sticky lg:border-border lg:font-semibold">
      <ScrollArea className="w-full h-full">
        <div className="flex flex-col ml-4 w-full">
          <h1 className="text-white h-12 w-full text-base flex items-center mt-3">
            Getting Started
          </h1>
          <div className="w-full h-full">
            {items.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="text-white w-full h-10 flex items-center hover:opacity-90 cursor-pointer "
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
