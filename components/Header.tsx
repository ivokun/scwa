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
        "shadow-brutalism",
        "rounded-sm",
        "bg-white",
        "lg:flex",
        "lg:shadow-none",
        "lg:bg-transparent",
      )}
    >
      <p
        className={cn(
          "flex",
          "w-full",
          "py-7",
          "px-4",
          "lg:static",
          "lg:w-auto",
          "lg:rounded-sm",
          "lg:bg-white",
          "lg:border",
          "lg:border-black",
          "lg:p-4",
          "lg:shadow-brutalism",
        )}
      >
        ☀️ Super Cool Weather App
      </p>
    </div>
  );
}
