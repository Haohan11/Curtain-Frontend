const ArrowRight = ({ width, height, color, ...props }) => (
  <svg
    {...props}
    width={width || "25"}
    height={height || width || "24"}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_83_1138)">
      <path
        d="M13.1254 12.0001L10.2964 9.17208L11.7104 7.75708L15.9534 12.0001L11.7104 16.2431L10.2964 14.8281L13.1254 12.0001Z"
        fill={color || "currentColor"}
      />
    </g>
    <defs>
      <clipPath id="clip0_83_1138">
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

export default ArrowRight;
