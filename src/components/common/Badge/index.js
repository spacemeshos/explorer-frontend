// @flow
import * as React from 'react';

type Props = {
  type: string;
  className?: string;
};

const Badge = (props: Props) => {
  const { type, className } = props;
  let badge = '';
  let customClassName = className ? `badge ${className}` : 'badge';

  switch (type) {
    case 'sent':
      badge = (
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="20" fill="#65B042" />
          <rect x="11.5" y="8.2561" width="1.24983" height="1.12781" fill="white" />
          <rect x="11.5" y="9.38477" width="1.24983" height="1.12782" fill="white" />
          <rect x="10.249" y="10.512" width="1.24983" height="1.12781" fill="white" />
          <rect x="11.5" y="10.512" width="1.24983" height="1.12781" fill="white" />
          <rect x="12.75" y="9.38477" width="1.24983" height="1.12782" fill="white" />
          <rect x="10.249" y="11.6404" width="1.24983" height="1.12782" fill="white" />
          <rect x="9" y="11.6404" width="1.24983" height="1.12781" fill="white" />
          <rect x="9" y="12.7673" width="1.24983" height="1.12781" fill="white" />
          <rect x="10.249" y="8.2561" width="1.24983" height="1.12781" fill="white" />
          <rect x="10.249" y="7.12891" width="1.24983" height="1.12782" fill="white" />
          <rect x="9" y="7.12891" width="1.24983" height="1.12782" fill="white" />
          <rect x="9" y="6" width="1.24983" height="1.12782" fill="white" />
          <path d="M22.3797 14.12C23.8197 14.12 24.6997 13.29 24.6997 12.25C24.6997 11.28 24.0597 10.83 23.2497 10.5L22.3297 10.1C21.7697 9.87 21.1597 9.64 21.1597 9.01C21.1597 8.42 21.6697 8.05 22.4297 8.05C23.1097 8.05 23.6097 8.29 24.0397 8.67L24.4797 8.13C23.9997 7.65 23.2797 7.32 22.4597 7.32C21.2097 7.32 20.3097 8.06 20.3097 9.06C20.3097 10.02 21.0697 10.49 21.7297 10.75L22.6697 11.16C23.3397 11.45 23.8497 11.65 23.8497 12.35C23.8497 12.96 23.3197 13.39 22.4197 13.39C21.6697 13.39 20.9897 13.06 20.4997 12.57L19.9997 13.15C20.5897 13.74 21.4197 14.12 22.3797 14.12ZM26.4658 14H30.6258V13.29H27.3058V10.91H30.0258V10.2H27.3058V8.14H30.5258V7.44H26.4658V14ZM32.1419 14H32.9419V10.57C32.9419 9.89 32.8619 9.19 32.8319 8.52H32.8519L33.4819 9.88L35.5819 14H36.5019V7.44H35.7019V10.84C35.7019 11.53 35.7819 12.27 35.8119 12.92H35.7919L35.1619 11.56L33.0619 7.44H32.1419V14ZM39.898 14H40.738V8.14H42.898V7.44H37.738V8.14H39.898V14Z" fill="white" />
        </svg>
      );
      break;
    case 'error':
      badge = (
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="20" fill="#E4622B" />
          <rect x="11.5" y="12.6392" width="1.24983" height="1.12781" transform="rotate(-180 11.5 12.6392)" fill="white" />
          <rect x="11.5" y="11.5105" width="1.24983" height="1.12782" transform="rotate(-180 11.5 11.5105)" fill="white" />
          <rect x="12.751" y="10.3833" width="1.24983" height="1.12781" transform="rotate(-180 12.751 10.3833)" fill="white" />
          <rect x="11.5" y="10.3833" width="1.24983" height="1.12781" transform="rotate(-180 11.5 10.3833)" fill="white" />
          <rect x="10.25" y="11.5105" width="1.24983" height="1.12782" transform="rotate(-180 10.25 11.5105)" fill="white" />
          <rect x="12.751" y="9.25488" width="1.24983" height="1.12782" transform="rotate(-180 12.751 9.25488)" fill="white" />
          <rect x="14" y="9.25488" width="1.24983" height="1.12781" transform="rotate(-180 14 9.25488)" fill="white" />
          <rect x="14" y="8.12793" width="1.24983" height="1.12781" transform="rotate(-180 14 8.12793)" fill="white" />
          <rect x="12.751" y="12.6392" width="1.24983" height="1.12781" transform="rotate(-180 12.751 12.6392)" fill="white" />
          <rect x="12.751" y="13.7664" width="1.24983" height="1.12782" transform="rotate(-180 12.751 13.7664)" fill="white" />
          <rect x="14" y="13.7664" width="1.24983" height="1.12782" transform="rotate(-180 14 13.7664)" fill="white" />
          <rect x="14" y="14.8953" width="1.24983" height="1.12782" transform="rotate(-180 14 14.8953)" fill="white" />
          <rect x="7.5" y="9.2561" width="1.24983" height="1.12781" fill="white" />
          <rect x="7.5" y="10.3848" width="1.24983" height="1.12782" fill="white" />
          <rect x="6.24902" y="11.512" width="1.24983" height="1.12781" fill="white" />
          <rect x="7.5" y="11.512" width="1.24983" height="1.12781" fill="white" />
          <rect x="8.75" y="10.3848" width="1.24983" height="1.12782" fill="white" />
          <rect x="6.24902" y="12.6404" width="1.24983" height="1.12782" fill="white" />
          <rect x="5" y="12.6404" width="1.24983" height="1.12781" fill="white" />
          <rect x="5" y="13.7673" width="1.24983" height="1.12781" fill="white" />
          <rect x="6.24902" y="9.2561" width="1.24983" height="1.12781" fill="white" />
          <rect x="6.24902" y="8.12891" width="1.24983" height="1.12782" fill="white" />
          <rect x="5" y="8.12891" width="1.24983" height="1.12782" fill="white" />
          <rect x="5" y="7" width="1.24983" height="1.12782" fill="white" />
          <path d="M17.4717 14H21.6317V13.29H18.3117V10.91H21.0317V10.2H18.3117V8.14H21.5317V7.44H17.4717V14ZM23.3278 14H24.1578V11.23H25.3278L26.9078 14H27.8578L26.1878 11.14C27.0778 10.91 27.6578 10.3 27.6578 9.28C27.6578 7.92 26.6978 7.44 25.3678 7.44H23.3278V14ZM24.1578 10.55V8.11H25.2478C26.2678 8.11 26.8278 8.42 26.8278 9.28C26.8278 10.13 26.2678 10.55 25.2478 10.55H24.1578ZM29.3239 14H30.1539V11.23H31.3239L32.9039 14H33.8539L32.1839 11.14C33.0739 10.91 33.6539 10.3 33.6539 9.28C33.6539 7.92 32.6939 7.44 31.3639 7.44H29.3239V14ZM30.1539 10.55V8.11H31.2439C32.2639 8.11 32.8239 8.42 32.8239 9.28C32.8239 10.13 32.2639 10.55 31.2439 10.55H30.1539ZM37.32 14.12C38.8 14.12 39.84 12.84 39.84 10.69C39.84 8.57 38.8 7.32 37.32 7.32C35.84 7.32 34.8 8.57 34.8 10.69C34.8 12.84 35.84 14.12 37.32 14.12ZM37.32 13.39C36.32 13.39 35.66 12.37 35.66 10.69C35.66 9.04 36.32 8.05 37.32 8.05C38.32 8.05 38.98 9.04 38.98 10.69C38.98 12.37 38.32 13.39 37.32 13.39ZM41.3161 14H42.1461V11.23H43.3161L44.8961 14H45.8461L44.1761 11.14C45.0661 10.91 45.6461 10.3 45.6461 9.28C45.6461 7.92 44.6861 7.44 43.3561 7.44H41.3161V14ZM42.1461 10.55V8.11H43.2361C44.2561 8.11 44.8161 8.42 44.8161 9.28C44.8161 10.13 44.2561 10.55 43.2361 10.55H42.1461Z" fill="white" />
        </svg>
      );
      break;
    case 'atx':
      badge = (
        <svg width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50.287" height="20" fill="#24AEA6" />
          <path d="M24.0619 10.33C24.2919 9.6 24.5019 8.88 24.7119 8.12H24.7519C24.9519 8.88 25.1719 9.6 25.4019 10.33L25.7119 11.33H23.7519L24.0619 10.33ZM22.0619 14H22.9119L23.5419 12H25.9219L26.5419 14H27.4219L25.2119 7.44H24.2719L22.0619 14ZM30.3179 14H31.1579V8.14H33.3179V7.44H28.1579V8.14H30.3179V14ZM34.274 14H35.154L36.134 12.23C36.304 11.91 36.474 11.58 36.664 11.18H36.704C36.924 11.58 37.104 11.91 37.284 12.23L38.274 14H39.194L37.234 10.65L39.064 7.44H38.184L37.284 9.12C37.124 9.42 36.994 9.69 36.814 10.07H36.774C36.564 9.69 36.414 9.42 36.244 9.12L35.324 7.44H34.404L36.234 10.61L34.274 14Z" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 12 14)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 11 14)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10 14)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10 10)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10 9)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 9 13)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 8 12)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 7 11)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 7 10)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 7 9)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 7 8)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 7 7)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 7 6)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 8 6)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 9 6)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10 6)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 11 6)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 12 6)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 6)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 7)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 8)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 9)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 10)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 11)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 12)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 13)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13 14)" fill="white" />
        </svg>
      );
      break;
    case 'coin':
      badge = (
        <svg width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50.287" height="20" fill="#AA58B1" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 8.92285 13.8452)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 7.71191 12.634)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 6.50098 11.4226)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 6.50098 10.2109)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 6.50098 9)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 6.50098 7.78882)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 7.71191 6.57764)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 8.92285 5.36621)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10.1338 5.36621)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 11.3457 5.36621)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 12.5576 6.57764)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13.7686 7.78882)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13.7686 9)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13.7686 10.2109)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 13.7686 11.4226)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 12.5576 12.634)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 11.3457 13.8452)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10.1338 13.8452)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10.1338 11.4226)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10.1338 10.2109)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10.1338 9)" fill="white" />
          <rect width="1.21107" height="1.21107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10.1338 7.78882)" fill="white" />
          <path d="M22.2538 14.12C23.1238 14.12 23.7638 13.77 24.2838 13.17L23.8138 12.66C23.3938 13.13 22.9338 13.39 22.3338 13.39C21.0738 13.39 20.2538 12.35 20.2538 10.7C20.2538 9.07 21.0738 8.05 22.3338 8.05C22.8838 8.05 23.3138 8.29 23.6538 8.65L24.1238 8.12C23.7438 7.7 23.1138 7.32 22.3338 7.32C20.6238 7.32 19.3938 8.61 19.3938 10.72C19.3938 12.86 20.6338 14.12 22.2538 14.12ZM27.7399 14.12C29.2199 14.12 30.2599 12.84 30.2599 10.69C30.2599 8.57 29.2199 7.32 27.7399 7.32C26.2599 7.32 25.2199 8.57 25.2199 10.69C25.2199 12.84 26.2599 14.12 27.7399 14.12ZM27.7399 13.39C26.7399 13.39 26.0799 12.37 26.0799 10.69C26.0799 9.04 26.7399 8.05 27.7399 8.05C28.7399 8.05 29.3999 9.04 29.3999 10.69C29.3999 12.37 28.7399 13.39 27.7399 13.39ZM31.686 14H35.786V13.29H34.156V8.14H35.786V7.44H31.686V8.14H33.316V13.29H31.686V14ZM37.5521 14H38.3521V10.57C38.3521 9.89 38.2721 9.19 38.2421 8.52H38.2621L38.8921 9.88L40.9921 14H41.9121V7.44H41.1121V10.84C41.1121 11.53 41.1921 12.27 41.2221 12.92H41.2021L40.5721 11.56L38.4721 7.44H37.5521V14Z" fill="white" />
        </svg>
      );
      break;
    default:
      break;
  }

  return (
    <span className={customClassName}>{badge}</span>
  );
};

export default Badge;
