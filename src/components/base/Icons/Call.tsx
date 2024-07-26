import { TIcon } from "@/types";

const CallIcon = ({color = "currentColor", width = 22, height = 25}: TIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.353 2.89062C18.054 3.30163 20.978 6.22163 21.393 9.92263"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.353 6.43359C16.124 6.77759 17.508 8.16259 17.853 9.93359"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0315 12.863C15.0205 16.851 15.9254 12.2373 18.4653 14.7754C20.9138 17.2234 22.3222 17.7138 19.2188 20.8153C18.8302 21.1276 16.3613 24.8849 7.68447 16.2103C-0.993406 7.53463 2.76157 5.06307 3.07394 4.67457C6.18377 1.56447 6.66682 2.98001 9.11539 5.42795C11.6541 7.96712 7.04254 8.87504 11.0315 12.863Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CallIcon;
