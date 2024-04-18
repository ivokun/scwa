export default function DynamicBackgroundImage({
  imageURL,
  children,
}: Readonly<{
  children: React.ReactNode;
  imageURL: string;
}>) {
  //Background image should be fixed eventho the content is scrollable
  return (
    <div
      className="z-0 relative items-center justify-center w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="absolute inset-0 bg-fixed bg-gradient-to-t from-white via-white via-60% to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}
