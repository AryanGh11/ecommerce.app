import { TabButtonProps } from "./index.interfaces";

export default function TabButton({
  id,
  label,
  active,
  onClick,
  variant,
}: TabButtonProps) {
  return (
    <button
      id={id}
      className={`px-4 py-1 text-grey-dark rounded-full ${
        active &&
        (variant === "filled"
          ? "bg-primary !text-background"
          : // styles for outlined variant
            "bg-transparent !text-primary !rounded-none border-solid border-0 border-b-2 border-primary")
      }`}
      onClick={() => onClick(id)}
    >
      {label}
    </button>
  );
}
