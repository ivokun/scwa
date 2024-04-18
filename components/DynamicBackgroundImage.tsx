import { cn } from "@/lib/utils";

export default function DynamicBackgroundImage({
  imageColor,
  imageURL,
  children,
}: Readonly<{
  children: React.ReactNode;
  imageURL: string;
  imageColor: string;
}>) {
  return (
    <div
      className={cn(
        "z-0",
        "relative",
        "items-center",
        "justify-center",
        "w-full",
        "h-full",
        "bg-cover",
        "bg-center",
        "bg-no-repeat",
        "bg-fixed",
      )}
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundColor: imageColor,
      }}
    >
      <div className="absolute inset-0 bg-fixed bg-gradient-to-t from-white via-white via-60% to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}
