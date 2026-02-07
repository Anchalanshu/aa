import * as React from "react";

interface TooltipContextType {
  delayDuration?: number;
}

const TooltipContext = React.createContext<TooltipContextType>({
  delayDuration: 0,
});

function TooltipProvider({
  delayDuration = 0,
  children,
}: {
  delayDuration?: number;
  children: React.ReactNode;
}) {
  return (
    <TooltipContext.Provider value={{ delayDuration }}>
      {children}
    </TooltipContext.Provider>
  );
}

export { TooltipProvider };
