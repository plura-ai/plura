import SidebarContent from "./Link";

export default function Rightsidebar() {
  return (
    <aside
      role="complementary"
      aria-label="Secondary navigation"
      className="hidden lg:flex flex-col items-start justify-start w-[16rem] h-screen lg:top-8 lg:sticky overflow-y-auto"
    >
      <SidebarContent />
    </aside>
  );
}
