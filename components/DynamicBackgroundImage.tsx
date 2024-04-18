export default function DynamicBackgroundImage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bgImage = `/bg3_saigetsu0425.jpeg`;

  return (
    <div
      className="z-0 relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white via-60% to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}
