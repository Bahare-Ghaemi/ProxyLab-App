import { TIcon } from "@/types";

const MailIcon = ({color = "currentColor", width = 20, height = 25}: TIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9026 9.2417L13.4593 12.8547C12.6198 13.5207 11.4387 13.5207 10.5992 12.8547L6.11841 9.2417"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9089 21.3906C19.9502 21.399 22 18.9002 22 15.829V8.96064C22 5.88945 19.9502 3.39062 16.9089 3.39062H7.09114C4.04979 3.39062 2 5.88945 2 8.96064V15.829C2 18.9002 4.04979 21.399 7.09114 21.3906H16.9089Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;
