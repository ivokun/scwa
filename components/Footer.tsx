import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="p-4 border-t border-black">
      <div
        className={cn(
          "text-xs",
          "text-gray-500",
          "md:text-sm",
          "md:text-center",
        )}
      >
        <p>&copy; {new Date().getFullYear()} Super Cool Weather App</p>
        <p>Powered by the OpenWeather API. Background images from Unsplash.</p>
      </div>
    </footer>
  );
}
