import { usePathname } from "next/navigation";
import React from "react";

export default function InfoBreadCrumb() {
  const page = usePathname();
  return (
    <div className="flex flex-col w-full items-start justify-center mb-6">
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold capitalize">
          {page.replace(/^\/+/, "")}
        </h2>
        {/* {page === 'conversation' && chatRoom && (
              <Loader
                loading={loading}
                className="p-0 inline"
              >
                <Switch
                  defaultChecked={realtime}
                  onClick={(e) => onActivateRealtime(e)}
                  className="data-[state=checked]:bg-orange data-[state=unchecked]:bg-peach"
                />
              </Loader>
            )} */}
      </div>
      <p className="text-muted-foreground text-sm pl-0">
        {page == "settings"
          ? "Manage your account settings, preferences and integrations"
          : page == "dashboard"
            ? "A detailed overview of your metrics, usage, customers and more"
            : page == "appointment"
              ? "View and edit all your appointments"
              : page == "email-marketing"
                ? "Send bulk emails to your customers"
                : page == "integration"
                  ? "Connect third-party applications into Corinna-AI"
                  : "Modify domain settings, change chatbot options, enter sales questions and train your bot to do what you want it to."}
      </p>
    </div>
  );
}
