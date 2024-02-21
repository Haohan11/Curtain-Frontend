const toBsColor = color => color ? `var(--bs-${color})` : false

const ArrowLeft = ({className, width, height, bscolor, color}) => (
  <svg
    className={className}
    width={width || "2em"}
    height={height || "2em"}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_83_1133)">
      <path
        d="M12.7816 12.0001L15.6106 14.8281L14.1966 16.2431L9.95361 12.0001L14.1966 7.75708L15.6106 9.17208L12.7816 12.0001Z"
        fill={toBsColor(bscolor) || color || "currentColor"}
      />
    </g>
    <defs>
      <clipPath id="clip0_83_1133">
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

export default ArrowLeft