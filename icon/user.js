const User = ({ width, height, color, ...props }) => 
<svg
  {...props}
  width={width || "25"}
  height={height || width || "24"}
  viewBox="0 0 25 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_83_805)">
    <path
      d="M15.2096 21.744L12.9536 24L10.6976 21.744C6.26361 20.72 2.95361 16.744 2.95361 12C2.95361 6.48 7.43361 2 12.9536 2C18.4736 2 22.9536 6.48 22.9536 12C22.9536 16.744 19.6436 20.72 15.2096 21.744ZM6.97661 15.416C8.44461 17.606 10.6486 19 13.1136 19C15.5776 19 17.7826 17.607 19.2496 15.416C17.5854 13.8606 15.3916 12.9968 13.1136 13C10.8353 12.9966 8.64113 13.8604 6.97661 15.416ZM12.9536 11C13.7493 11 14.5123 10.6839 15.0749 10.1213C15.6375 9.55871 15.9536 8.79565 15.9536 8C15.9536 7.20435 15.6375 6.44129 15.0749 5.87868C14.5123 5.31607 13.7493 5 12.9536 5C12.158 5 11.3949 5.31607 10.8323 5.87868C10.2697 6.44129 9.95361 7.20435 9.95361 8C9.95361 8.79565 10.2697 9.55871 10.8323 10.1213C11.3949 10.6839 12.158 11 12.9536 11Z"
      fill={color || "currentColor"}
    />
  </g>
  <defs>
    <clipPath id="clip0_83_805">
      <rect
        width="24"
        height="24"
        fill="white"
        transform="translate(0.953613)"
      />
    </clipPath>
  </defs>
</svg>;


export default User;