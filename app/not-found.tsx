import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="flex items-center self-center place-content-center">
      <div
        className={cn(
          "flex",
          "flex-col",
          "w-fit",
          "justify-center",
          "p-4",
          "gap-6",
          "bg-white",
          "rounded-sm",
          "shadow-brutalism",
          "border",
          "border-black",
          "md:items-center",
          "md:gap-12",
        )}
      >
        <h1 className={cn("text-4xl", "font-bold", "text-center")}>
          404 - Page Not Found
        </h1>
        <p className={cn("text-lg", "text-center")}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className={cn("text-lg", "text-center", "text-blue-500", "underline")}
        >
          Go back to the homepage
        </Link>
      </div>
    </main>
  );
}
