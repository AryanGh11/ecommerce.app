import { TabWrapperProps } from "./index.interface";

export default function TabWrapper({ children, className }: TabWrapperProps) {
  return (
    <div
      className={`flex items-center gap-2 w-full overflow-x-auto min-h-8 rounded-full scrollbar-none ${className}`}
    >
      {children}
    </div>
  );
}
