const Upload = ({width, height, color, ...props}) => (
  <svg
    {...props}
    width={width || "25"}
    height={height || width || "24"}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_89_1971)">
      <path
        d="M15.9536 4H5.95361V20H19.9536V8H15.9536V4ZM3.95361 2.992C3.95361 2.444 4.40061 2 4.95261 2H16.9536L21.9536 7V20.993C21.9545 21.1243 21.9296 21.2545 21.8802 21.3762C21.8308 21.4979 21.7579 21.6087 21.6657 21.7022C21.5735 21.7957 21.4637 21.8701 21.3428 21.9212C21.2218 21.9723 21.0919 21.9991 20.9606 22H4.94661C4.68399 21.9982 4.43263 21.8931 4.24683 21.7075C4.06103 21.5219 3.95571 21.2706 3.95361 21.008V2.992ZM13.9536 12V16H11.9536V12H8.95361L12.9536 8L16.9536 12H13.9536Z"
        fill={color || "currentColor"}
      />
    </g>
    <defs>
      <clipPath id="clip0_89_1971">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.953613)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Upload;
