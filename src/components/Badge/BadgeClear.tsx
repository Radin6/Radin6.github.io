import { ReactNode } from "react";

interface BadgeClearProps {
  children?: ReactNode;
}

export function BadgeClear ({children} : BadgeClearProps) {
  return (
    <span className="text-red-800 border-[1px] border-red-800 font-semibold rounded-md p-1">{children}</span>
  )
}