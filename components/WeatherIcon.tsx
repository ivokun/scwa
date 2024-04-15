import {
  WeatherIconSize,
  WeatherIconID,
  weatherToIconURL,
  cn,
} from "@/lib/utils";

interface WeatherIconProps {
  size: WeatherIconSize;
  id: WeatherIconID;
  width?: number | undefined;
  height?: number | undefined;
}

export default function WeatherIcon(props: WeatherIconProps) {
  const url = weatherToIconURL(props.id, props.size);
  return (
    <div className={cn("relative", "width-[100px]", "h-[80px]", "mt-[-20px]")}>
      <img
        className="rounded-full"
        src={url}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
