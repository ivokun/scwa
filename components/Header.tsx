import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div
      className={cn(
        "z-10",
        "w-full",
        "max-w-5xl",
        "items-center",
        "justify-between",
        "text-sm",
        "lg:flex",
      )}
    >
      <p
        className={cn(
          "flex",
          "w-full",
          "border-b",
          "border-gray-300",
          "py-7",
          "px-4",
          "lg:static",
          "lg:w-auto",
          "lg:rounded-m",
          "lg:border",
          "lg:p-4",
        )}
      >
        ☀️ Super Cool Weather App
      </p>
    </div>
  );
}
