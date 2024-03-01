const Curtain = ({ width, height, color, ...props }) => (
  <svg
    {...props}
    width={width || "24"}
    height={height || width || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.62543 23.9994H1.02935C0.633733 23.8331 0.500612 23.535 0.510612 23.11C0.532486 22.1819 0.517486 21.2532 0.517486 20.3245C0.517486 19.2476 0.518111 18.1708 0.516237 17.0939C0.516237 17.0083 0.55561 16.9058 0.431864 16.8546C0.208745 16.7614 0.0874977 16.5739 0.000624984 16.3589V12.984C0.111872 12.7872 0.230619 12.5978 0.459363 12.5172C0.541861 12.4878 0.516237 12.4147 0.516237 12.3572C0.517487 9.72225 0.517487 7.08794 0.516237 4.45301C0.516237 4.38676 0.539361 4.30301 0.449363 4.27301C0.214369 4.19427 0.108747 3.99427 0 3.79678V0.515612C0.110622 0.282493 0.278743 0.107497 0.514362 0H23.4381C23.7194 0.156871 23.9525 0.348116 23.9525 0.709982C23.9525 1.67808 23.9544 2.64618 23.9506 3.61428C23.9494 3.8849 23.8281 4.10427 23.5838 4.22177C23.4506 4.28614 23.4331 4.36926 23.4338 4.49551C23.4363 7.08732 23.4363 9.67975 23.4338 12.2716C23.4338 12.3909 23.455 12.4641 23.5775 12.5234C23.8206 12.6415 23.9494 12.8559 23.9506 13.1278C23.955 14.1428 23.9544 15.1577 23.9506 16.1727C23.9494 16.4346 23.8319 16.6496 23.6 16.7664C23.4513 16.8408 23.4338 16.9383 23.4338 17.0808C23.4369 19.0714 23.4275 21.0626 23.4425 23.0531C23.4456 23.4875 23.3244 23.8094 22.9244 24H16.3283C15.9902 23.86 15.7746 23.6313 15.7815 23.2419C15.8096 21.5944 16.1927 20.0445 17.0446 18.6239C17.0989 18.5333 17.1252 18.4439 17.1246 18.3383C17.1221 17.5339 17.1214 16.7289 17.1252 15.9246C17.1252 15.8146 17.0952 15.7358 17.0158 15.6583C15.7202 14.3996 14.834 12.8822 14.2215 11.1947C13.4434 9.05039 13.1353 6.82482 13.1134 4.55363C13.1115 4.37864 13.0784 4.30926 12.8847 4.31364C12.2847 4.32676 11.6841 4.32676 11.0835 4.31364C10.8847 4.30926 10.841 4.37239 10.8397 4.56301C10.826 6.42921 10.611 8.26978 10.1035 10.0697C9.501 12.2072 8.53728 14.1434 6.92669 15.7115C6.8517 15.7846 6.82982 15.8596 6.82982 15.9596C6.83295 16.7639 6.83232 17.5689 6.82982 18.3733C6.82982 18.4689 6.84232 18.5551 6.89357 18.6401C7.72542 20.0145 8.11604 21.5151 8.16666 23.1131C8.18354 23.6381 8.09541 23.7888 7.6248 24L7.62543 23.9994ZM1.92057 8.63478C1.92057 9.98599 1.92495 11.3372 1.91557 12.6884C1.91432 12.8728 1.96682 12.9597 2.13869 13.0309C3.35991 13.5409 4.57676 14.0609 5.79172 14.5846C5.93297 14.6452 6.01859 14.6409 6.13234 14.5234C6.78795 13.844 7.32793 13.0828 7.75605 12.2441C8.99789 9.80974 9.396 7.18981 9.43975 4.49301C9.44225 4.33926 9.37726 4.31364 9.24476 4.31551C8.77727 4.32114 8.30916 4.32739 7.84167 4.31301C7.6473 4.30676 7.61168 4.37551 7.61855 4.55301C7.66605 5.83047 7.55793 7.09544 7.29668 8.34728C7.15294 9.03539 6.96232 9.71037 6.72295 10.371C6.59795 10.7153 6.28171 10.9072 5.95859 10.8541C5.61985 10.7985 5.38048 10.541 5.35674 10.2035C5.34549 10.0429 5.40236 9.89724 5.45361 9.74912C6.03859 8.06292 6.27484 6.32609 6.22171 4.54426C6.21609 4.35614 6.15421 4.31301 5.97609 4.31364C4.7055 4.32051 3.43491 4.32176 2.16432 4.31301C1.97245 4.31176 1.91558 4.35926 1.91682 4.55676C1.92557 5.91547 1.9212 7.27481 1.9212 8.63415L1.92057 8.63478ZM22.0319 8.6229C22.0319 7.26356 22.0282 5.90422 22.0363 4.54488C22.0375 4.35551 21.9807 4.31239 21.8007 4.31364C20.522 4.32114 19.2432 4.32051 17.9645 4.31364C17.792 4.31239 17.7377 4.35926 17.7327 4.53426C17.6964 5.78922 17.8052 7.02982 18.082 8.25541C18.2058 8.80352 18.3733 9.33913 18.5533 9.87099C18.6876 10.2685 18.4933 10.6578 18.1227 10.7816C17.7527 10.9053 17.3864 10.7272 17.2358 10.3441C17.1733 10.1847 17.1221 10.0204 17.0689 9.85724C16.5089 8.13229 16.2708 6.36171 16.3333 4.55113C16.3396 4.37176 16.3008 4.30676 16.1083 4.31239C15.649 4.32676 15.1884 4.32239 14.7284 4.31426C14.574 4.31176 14.5096 4.34426 14.5115 4.51801C14.5346 6.52046 14.7834 8.48665 15.429 10.3916C15.9465 11.9172 16.6908 13.3097 17.8145 14.4809C17.9227 14.594 18.0045 14.6127 18.1527 14.549C19.3745 14.0196 20.5988 13.4978 21.8269 12.984C21.9932 12.9147 22.035 12.8253 22.0344 12.6534C22.0269 11.3097 22.03 9.96599 22.03 8.62228L22.0319 8.6229ZM11.9828 1.40621H9.17601C6.6967 1.40621 4.21739 1.40621 1.73745 1.40621C1.51204 1.40621 1.39934 1.52309 1.39934 1.75683C1.39934 2.03807 1.39684 2.31931 1.39934 2.60056C1.40309 2.95805 1.35121 2.91117 1.70746 2.91117C8.5379 2.91242 15.3677 2.9118 22.1982 2.9118C22.245 2.9118 22.2925 2.90742 22.3382 2.91242C22.5063 2.9318 22.5519 2.85243 22.5475 2.69368C22.5375 2.36556 22.53 2.03682 22.5494 1.70996C22.5638 1.47371 22.5038 1.39934 22.2507 1.39996C18.8276 1.40934 15.4046 1.40621 11.9822 1.40621H11.9828ZM1.92057 20.0845C1.92057 20.8732 1.92182 21.6613 1.91932 22.45C1.91932 22.5619 1.92057 22.64 2.07432 22.6394C3.57803 22.6344 5.08174 22.635 6.58545 22.6394C6.72107 22.6394 6.7367 22.5875 6.72295 22.4713C6.59858 21.4213 6.29859 20.4288 5.7786 19.5051C5.71235 19.3876 5.63735 19.2914 5.50673 19.2307C4.38426 18.7108 3.26179 18.1902 2.14557 17.6552C1.92682 17.5502 1.91495 17.6164 1.91682 17.8127C1.92557 18.5701 1.92057 19.327 1.92057 20.0845ZM22.0319 17.552C21.9288 17.5402 21.8657 17.5927 21.7976 17.6245C20.6976 18.1389 19.5995 18.6576 18.4983 19.1676C18.3483 19.237 18.2451 19.3326 18.1658 19.4751C17.6639 20.3801 17.3639 21.3482 17.2352 22.3738C17.2127 22.5519 17.2446 22.5975 17.4277 22.5969C18.8851 22.5894 20.3426 22.5882 21.7994 22.5982C22.0044 22.5994 22.0369 22.5325 22.0363 22.3469C22.0288 20.8163 22.0319 19.2857 22.0319 17.7558V17.552ZM22.5488 14.2053C22.4538 14.244 22.39 14.2684 22.3275 14.2953C21.2476 14.7552 20.167 15.2159 19.087 15.6758C18.7124 15.8358 18.5251 16.1219 18.5251 16.5339V17.6064C19.8639 16.9777 21.1569 16.3696 22.4519 15.764C22.5294 15.7277 22.55 15.6783 22.55 15.6008C22.5482 15.149 22.5488 14.6965 22.5488 14.2046V14.2053ZM5.42736 17.6445C5.42736 17.1227 5.41923 16.6396 5.43173 16.1577C5.43611 15.9958 5.37673 15.9296 5.23611 15.8702C4.14614 15.4121 3.05992 14.944 1.9712 14.4827C1.78933 14.4059 1.61558 14.3021 1.40371 14.264C1.40371 14.7234 1.40934 15.1684 1.39996 15.6127C1.39746 15.7421 1.46059 15.789 1.55996 15.834C1.88558 15.9821 2.20932 16.1352 2.53368 16.2877C3.48366 16.7333 4.43426 17.1789 5.42736 17.6445Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export default Curtain;