import { TIcon } from "@/types";

const LocationIcon = ({color = "currentColor", width = 24, height = 25}: TIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 10.8911C14.5 9.50986 13.3808 8.39062 12.0005 8.39062C10.6192 8.39062 9.5 9.50986 9.5 10.8911C9.5 12.2714 10.6192 13.3906 12.0005 13.3906C13.3808 13.3906 14.5 12.2714 14.5 10.8911Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9995 21.3906C10.801 21.3906 4.5 16.289 4.5 10.9539C4.5 6.77726 7.8571 3.39062 11.9995 3.39062C16.1419 3.39062 19.5 6.77726 19.5 10.9539C19.5 16.289 13.198 21.3906 11.9995 21.3906Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
