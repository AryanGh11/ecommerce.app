import { TabButtonProps } from "./index.interfaces";

export default function TabButton({
  id,
  label,
  active,
  onActiveChange,
}: TabButtonProps) {
  const isActive = (): boolean => {
    if (active === id) return true;
    return false;
  };

  return (
    <button
      id={id}
      className={`px-4 py-1 text-grey-dark rounded-full ${
        isActive() && "bg-primary !text-background"
      }`}
      onClick={() => onActiveChange(id)}
    >
      {label}
    </button>
  );
}
