import { cn } from "@/lib/utils";

// Attribution to the original author by adding a link to the GitHub repository.
export default function Footer(props: {
  photoAuthor: string;
  authorURL: string;
}) {
  const authorURLWithRef = `${props.authorURL}?utm_source=scwa&utm_medium=referral`;
  return (
    <footer className="p-4 border-t border-black">
      <div
        className={cn(
          "flex",
          "flex-col",
          "gap-1",
          "text-xs",
          "text-gray-500",
          "md:text-sm",
          "md:text-center",
        )}
      >
        <p>{"<copyleft>"} Super Cool Weather App</p>
        <p>
          Weather data provided by{" "}
          <a href="https://openweathermap.org/">OpenWeather</a>
        </p>
        <p>
          Photo by{" "}
          <a href={authorURLWithRef} target="_blank" rel="noopener">
            {props.photoAuthor}
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/?utm_source=scwa&utm_medium=referral"
            target="_blank"
            rel="noopener"
          >
            Unsplash
          </a>
        </p>
        <p>
          Super Cool Weather App uses IP2Location.io{" "}
          <a href="https://www.ip2location.io">IP geolocation</a> web service.
        </p>
        <div className="self-center">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=ivokun&repo=scwa&type=star&count=true"
            width="100"
            height="20"
            title="GitHub"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
