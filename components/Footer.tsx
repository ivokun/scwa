export default function Footer() {
  return (
    <footer className="p-4 border-t">
      <div className="container mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Super Cool Weather App</p>
        <p>Powered by the OpenWeather API. Background images from Unsplash.</p>
      </div>
    </footer>
  );
}
