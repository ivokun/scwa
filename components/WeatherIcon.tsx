import { WeatherIconSize, WeatherIconID, weatherToIconURL } from "@/lib/utils";

interface WeatherIconProps {
  size: WeatherIconSize;
  id: WeatherIconID;
  width?: number | undefined;
  height?: number | undefined;
}

// TODO implement the WeatherIcon component using https://v0.dev/t/H6IEqI7ZmMH
export default function WeatherIcon(props: WeatherIconProps) {
  const url = weatherToIconURL(props.id, props.size);
  return (
    <img
      className="rounded-full align-middle"
      src={url}
      width={props.width}
      height={props.height}
    />
  );
}
