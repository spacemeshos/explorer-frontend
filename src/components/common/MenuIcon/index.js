// @flow
import * as React from 'react';

import {
  OVERVIEW,
  EPOCHS,
  LAYERS,
  TXNS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
} from '../../../config/constants';

type Props = {
  name: string;
};

const MenuIcon = (props: Props) => {
  const { name } = props;

  let icon = '';

  switch (name) {
    case OVERVIEW:
      icon = (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16.7317V16.7317H0V0ZM4.89243 7.27562V11.8387C4.89243 12.0785 5.08668 12.2728 5.32653 12.2728H6.62995V8.36582C6.62995 8.12597 6.82421 7.93171 7.06406 7.93171H9.6687C9.90855 7.93171 10.1028 8.12597 10.1028 8.36582V12.2728H11.404C11.6439 12.2728 11.8381 12.0785 11.8381 11.8387V7.27562L8.36528 4.57444L4.89243 7.27562ZM9.6754 13.1409H11.404C12.123 13.1409 12.7063 12.5576 12.7063 11.8386V7.06345C12.7063 6.92942 12.6445 6.80299 12.5387 6.72105L8.63171 3.6823C8.47489 3.56021 8.25567 3.56021 8.09885 3.6823L4.19188 6.72105H4.19187C4.08606 6.80298 4.0242 6.92942 4.0242 7.06345V11.8386C4.0242 12.5576 4.60753 13.1409 5.32652 13.1409H7.05736C7.05959 13.141 7.06182 13.141 7.06406 13.141C7.0663 13.141 7.06853 13.141 7.07076 13.1409H9.66201C9.66423 13.141 9.66647 13.141 9.6687 13.141C9.67094 13.141 9.67317 13.141 9.6754 13.1409ZM9.2346 12.2728V8.79993H7.49817V12.2728H9.2346Z" />
        </svg>
      );
      break;
    case EPOCHS:
      icon = (
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.6106 0H0.878906V16.7317H17.6106V0ZM3.30564 8.36576C3.30564 5.0908 5.96932 2.42712 9.24428 2.42712C12.5192 2.42712 15.1829 5.0908 15.1829 8.36576C15.1829 11.6407 12.5192 14.3044 9.24428 14.3044C5.96932 14.3044 3.30564 11.6407 3.30564 8.36576ZM14.3911 8.36576C14.3911 5.51865 12.0914 3.21894 9.24428 3.21894C6.39716 3.21894 4.09746 5.51865 4.09746 8.36576C4.09746 11.2129 6.39716 13.5126 9.24428 13.5126C12.0914 13.5126 14.3911 11.2129 14.3911 8.36576ZM6.47292 6.78212C6.47292 6.49035 6.70902 6.25425 7.00079 6.25425C7.29257 6.25425 7.52867 6.49035 7.52867 6.78212C7.52867 7.0739 7.29257 7.31 7.00079 7.31C6.70902 7.31 6.47292 7.0739 6.47292 6.78212ZM8.00552 6.51664C8.07562 6.4388 8.17409 6.39189 8.27925 6.38622L8.27926 6.38622C8.29318 6.38571 8.30658 6.38571 8.3205 6.38622H11.6197C11.7259 6.38468 11.828 6.42592 11.9033 6.50015C11.979 6.57438 12.0213 6.67593 12.0213 6.78213C12.0213 6.88832 11.979 6.98988 11.9033 7.06411C11.828 7.13834 11.7259 7.17958 11.6197 7.17804H8.3205C8.21533 7.18371 8.11275 7.14711 8.03439 7.07648C7.95655 7.00638 7.90912 6.90791 7.90397 6.80275C7.89829 6.69758 7.9349 6.595 8.00552 6.51664ZM6.47292 8.36576C6.47292 8.07399 6.70902 7.83788 7.00079 7.83788C7.29257 7.83788 7.52867 8.07399 7.52867 8.36576C7.52867 8.65753 7.29257 8.89364 7.00079 8.89364C6.70902 8.89364 6.47292 8.65753 6.47292 8.36576ZM8.00552 8.10028C8.07562 8.02244 8.17409 7.97552 8.27925 7.96985L8.27926 7.96986C8.29318 7.96934 8.30658 7.96934 8.3205 7.96986H11.6197C11.7259 7.96831 11.828 8.00955 11.9033 8.08379C11.979 8.15802 12.0213 8.25957 12.0213 8.36577C12.0213 8.47196 11.979 8.57351 11.9033 8.64775C11.828 8.72198 11.7259 8.76322 11.6197 8.76167H8.3205C8.21533 8.76734 8.11275 8.73074 8.03439 8.66012C7.95655 8.59002 7.90912 8.49155 7.90397 8.38639C7.89829 8.28122 7.9349 8.17863 8.00552 8.10028ZM6.47292 9.9494C6.47292 9.65763 6.70902 9.42152 7.00079 9.42152C7.29257 9.42152 7.52867 9.65763 7.52867 9.9494C7.52867 10.2412 7.29257 10.4773 7.00079 10.4773C6.70902 10.4773 6.47292 10.2412 6.47292 9.9494ZM8.00552 9.68391C8.07562 9.60607 8.17409 9.55916 8.27925 9.55349L8.27926 9.5535C8.29318 9.55298 8.30658 9.55298 8.3205 9.5535H11.6197C11.7259 9.55195 11.828 9.59319 11.9033 9.66742C11.979 9.74166 12.0213 9.84321 12.0213 9.9494C12.0213 10.0556 11.979 10.1571 11.9033 10.2314C11.828 10.3056 11.7259 10.3469 11.6197 10.3453H8.3205C8.21533 10.351 8.11275 10.3144 8.03439 10.2438C7.95655 10.1737 7.90912 10.0752 7.90397 9.97002C7.89829 9.86486 7.9349 9.76227 8.00552 9.68391Z" />
        </svg>
      );
      break;
    case LAYERS:
      icon = (
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.755859 0H17.4876V16.7317H0.755859V0ZM7.10211 11.0101C7.53989 12.5399 8.94885 13.6597 10.6193 13.6597C12.6396 13.6597 14.2773 12.022 14.2773 10.0017C14.2773 8.44435 13.3041 7.11428 11.9326 6.58656C11.9342 6.63429 11.935 6.68222 11.935 6.73033C11.935 7.00494 11.9093 7.27355 11.8602 7.53389C12.7622 7.98834 13.381 8.92277 13.381 10.0017C13.381 11.5269 12.1446 12.7634 10.6193 12.7634C9.45391 12.7634 8.45708 12.0414 8.05166 11.0204C7.91097 11.0342 7.76831 11.0413 7.62398 11.0413C7.44734 11.0413 7.27318 11.0307 7.10211 11.0101ZM7.62364 9.49187C6.09842 9.49187 4.862 8.25544 4.862 6.73022C4.862 5.20501 6.09842 3.96858 7.62364 3.96858C9.14885 3.96858 10.3853 5.20501 10.3853 6.73022C10.3853 8.25544 9.14885 9.49187 7.62364 9.49187ZM3.96565 6.73022C3.96565 4.70998 5.60339 3.07224 7.62364 3.07224C9.64388 3.07224 11.2816 4.70998 11.2816 6.73022C11.2816 8.75047 9.64388 10.3882 7.62364 10.3882C5.60339 10.3882 3.96565 8.75047 3.96565 6.73022Z" />
        </svg>
      );
      break;
    case TXNS:
      icon = (
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.634766 0H17.3665V16.7317H0.634766V0ZM9.14688 13.8771L9.29135 13.7327C11.8852 13.5893 13.9648 11.5006 14.1093 8.91716C14.1147 8.82197 14.1174 8.72611 14.1174 8.62965C14.1174 8.41817 14.2879 8.24569 14.4986 8.24247L14.5046 8.24235C14.7268 8.24235 14.8918 8.4377 14.8918 8.64221C14.8918 11.8911 12.2424 14.5276 8.99378 14.5276C5.74525 14.5276 3.10842 11.8907 3.10842 8.64221C3.10842 5.65476 5.34426 3.18509 8.23314 2.81627C8.14533 2.68763 8.14619 2.5143 8.23066 2.38567C8.35042 2.19028 8.60183 2.15568 8.77266 2.2698L8.77298 2.27001L9.61618 2.82795C9.71539 2.88898 9.79214 3.0062 9.79214 3.14405C9.79214 3.27267 9.73591 3.38755 9.64036 3.46369L9.63819 3.46542L9.63817 3.4654L8.79784 4.10783C8.72231 4.17675 8.6197 4.19018 8.55893 4.19018C8.43899 4.19018 8.32537 4.13118 8.25144 4.0384L8.25068 4.03746L8.25069 4.03745C8.14802 3.90628 8.14583 3.7351 8.2209 3.60221C5.77191 3.97535 3.89555 6.08641 3.89555 8.64222C3.89555 11.4515 6.18419 13.741 9.00644 13.7406H9.00646C9.10205 13.7406 9.19703 13.7379 9.29133 13.7327L9.14686 13.8771H9.14688ZM9.29133 13.7327L14.1093 8.91716L9.29135 13.7327L9.29133 13.7327ZM14.7554 7.31147C14.7554 7.1702 14.7011 7.05405 14.6118 6.97461C14.525 6.89743 14.4133 6.8618 14.306 6.8618C14.1987 6.8618 14.0869 6.89743 14.0002 6.97461C13.9109 7.05405 13.8566 7.1702 13.8566 7.31147C13.8566 7.45267 13.9109 7.56874 14.0002 7.6481C14.087 7.72519 14.1988 7.76076 14.306 7.76076C14.4132 7.76076 14.525 7.72519 14.6117 7.6481C14.7011 7.56874 14.7554 7.45267 14.7554 7.31147ZM14.3563 6.15449C14.3563 6.01329 14.3019 5.89722 14.2126 5.81786C14.1258 5.74077 14.0141 5.7052 13.9068 5.7052C13.7996 5.7052 13.6878 5.74077 13.6011 5.81786C13.5118 5.89722 13.4574 6.01329 13.4574 6.15449C13.4574 6.2957 13.5118 6.41177 13.6011 6.49113C13.6878 6.56822 13.7996 6.60379 13.9068 6.60379C14.0141 6.60379 14.1258 6.56822 14.2126 6.49113C14.3019 6.41177 14.3563 6.2957 14.3563 6.15449ZM13.6093 5.07236C13.6093 4.93109 13.555 4.81495 13.4657 4.73551C13.3789 4.65833 13.2672 4.6227 13.1599 4.6227C13.0526 4.6227 12.9408 4.65833 12.8541 4.73551C12.7648 4.81495 12.7105 4.93109 12.7105 5.07236C12.7105 5.21357 12.7648 5.32963 12.8541 5.40899C12.9409 5.48609 13.0527 5.52166 13.1599 5.52166C13.2671 5.52166 13.3789 5.48609 13.4656 5.40899C13.555 5.32963 13.6093 5.21357 13.6093 5.07236ZM12.5776 4.13955C12.5776 3.99828 12.5233 3.88213 12.434 3.8027C12.3472 3.72552 12.2354 3.68989 12.1282 3.68989C12.0209 3.68989 11.9091 3.72552 11.8223 3.8027C11.733 3.88213 11.6787 3.99828 11.6787 4.13955C11.6787 4.28075 11.7331 4.39682 11.8224 4.47618C11.9092 4.55327 12.0209 4.58885 12.1282 4.58885C12.2354 4.58885 12.3471 4.55327 12.4339 4.47618C12.5232 4.39682 12.5776 4.28075 12.5776 4.13955ZM11.3451 3.49268C11.3451 3.35141 11.2908 3.23526 11.2015 3.15583C11.1147 3.07865 11.003 3.04302 10.8957 3.04302C10.7884 3.04302 10.6766 3.07865 10.5899 3.15583C10.5006 3.23526 10.4463 3.35141 10.4463 3.49268C10.4463 3.63388 10.5006 3.74995 10.5899 3.82931C10.6767 3.9064 10.7885 3.94197 10.8957 3.94197C11.0029 3.94197 11.1147 3.9064 11.2014 3.82931C11.2908 3.74995 11.3451 3.63388 11.3451 3.49268ZM8.14764 6.20309L8.2448 6.10593C8.16785 6.02899 8.0698 5.99056 7.96032 5.99056C7.86772 5.99056 7.75538 6.02578 7.67562 6.10615L6.66804 7.11373C6.51465 7.26712 6.51415 7.51643 6.66782 7.66984L7.67525 8.68941L7.67584 8.68999C7.75278 8.76694 7.85083 8.80537 7.96032 8.80537C8.06904 8.80537 8.16747 8.76792 8.24496 8.68983C8.3218 8.6129 8.36017 8.51492 8.36017 8.40551C8.36017 8.29703 8.32289 8.19879 8.24515 8.12138L7.9038 7.7728H10.9347C11.1657 7.8062 11.3452 7.60049 11.3452 7.39821L11.3452 7.39588C11.3439 7.18769 11.1749 6.99835 10.9453 6.99835H7.9087L8.2448 6.66225C8.39834 6.50871 8.39869 6.25906 8.24455 6.10569L8.14764 6.20309ZM8.24496 8.68983L8.2448 8.68999L8.1478 8.593L8.24528 8.68951L8.24496 8.68983ZM10.2221 11.3149C10.1423 11.3952 10.03 11.4305 9.93741 11.4305C9.82798 11.4305 9.72998 11.3921 9.65305 11.3152L9.65317 11.3153L9.75081 11.2172L9.65293 11.3151L9.65305 11.3152C9.49904 11.1618 9.49943 10.9123 9.65293 10.7588L9.98902 10.4227H6.95238C6.7228 10.4227 6.55378 10.2333 6.55252 10.0251L6.5525 10.0228C6.5525 9.82052 6.73199 9.61482 6.96305 9.64822H9.99392L9.65258 9.29964C9.57484 9.22223 9.53755 9.12399 9.53755 9.01551C9.53755 8.9061 9.57593 8.80811 9.65276 8.73119L9.65245 8.73151L9.75082 8.82891L9.65293 8.73103L9.65276 8.73119C9.73025 8.6531 9.82869 8.61565 9.93741 8.61565C10.0469 8.61565 10.1449 8.65408 10.2219 8.73103L10.2225 8.73161L11.2299 9.75118C11.3836 9.90459 11.3831 10.1539 11.2297 10.3073L10.2221 11.3149Z" />
        </svg>
      );
      break;
    case REWARDS:
      icon = (
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.511719 0H17.2434V16.7317H0.511719V0ZM11.7298 14.065C11.7298 14.1839 11.6633 14.2916 11.5573 14.3452C11.4513 14.3982 11.3247 14.3876 11.2293 14.3176L8.87591 12.5788L6.52248 14.3176C6.46713 14.3582 6.40178 14.3788 6.33583 14.3788C6.28755 14.3788 6.23926 14.3676 6.19451 14.3452C6.08853 14.2916 6.022 14.1839 6.022 14.065V9.53402C5.1906 8.74855 4.71602 7.65692 4.71602 6.51404C4.71602 4.21941 6.58257 2.35301 8.8766 2.35301C11.1712 2.35301 13.0376 4.21956 13.0376 6.51404C13.0376 7.65692 12.5625 8.74854 11.7311 9.53402V12.3702L11.7298 14.065ZM6.6496 13.442L8.68919 11.9358C8.80047 11.854 8.95121 11.854 9.0625 11.9358L11.1021 13.442V10.0245C11.0918 10.0313 11.0813 10.0372 11.0707 10.0431L11.0707 10.0431L11.0572 10.0507L11.0497 10.0552C11.0304 10.0671 11.0108 10.0784 10.991 10.0898C10.9788 10.0968 10.9665 10.1039 10.9543 10.1111C10.8848 10.1511 10.8148 10.1894 10.7435 10.2253L10.7215 10.2364L10.7215 10.2364L10.7215 10.2364L10.7214 10.2364C10.6958 10.2493 10.6701 10.2623 10.644 10.2742C10.561 10.3136 10.4768 10.3496 10.3914 10.3831L10.3833 10.3864L10.366 10.3938C10.3541 10.3989 10.3422 10.404 10.3302 10.4084C10.2242 10.4485 10.117 10.4832 10.0081 10.5144C9.98555 10.521 9.963 10.5265 9.94015 10.532L9.9401 10.532L9.92271 10.5362C9.84087 10.558 9.75784 10.5768 9.67483 10.5933C9.64773 10.5989 9.62031 10.6036 9.59304 10.6082L9.56296 10.6133C9.48347 10.6263 9.40339 10.6375 9.32332 10.6463C9.28858 10.6504 9.25384 10.6546 9.21851 10.6575C9.10487 10.6669 8.99065 10.6734 8.87583 10.6734C8.76101 10.6734 8.64679 10.6675 8.53315 10.6575C8.51226 10.6558 8.49178 10.6534 8.47123 10.651H8.47122H8.47121H8.4712C8.45701 10.6494 8.44277 10.6478 8.42834 10.6463C8.34768 10.6375 8.26819 10.6269 8.1887 10.6133L8.17416 10.6108L8.17412 10.6108L8.17408 10.6108L8.17405 10.6108C8.14171 10.6052 8.10905 10.5995 8.07683 10.5933C7.99381 10.5768 7.91078 10.5574 7.82895 10.5362C7.81717 10.5331 7.80549 10.5303 7.79387 10.5274C7.77702 10.5234 7.7603 10.5193 7.74357 10.5144C7.63464 10.4832 7.52748 10.4485 7.42091 10.4084C7.40886 10.404 7.39701 10.3989 7.38512 10.3938L7.38509 10.3938L7.38508 10.3938C7.37666 10.3902 7.36822 10.3865 7.35967 10.3831C7.27429 10.3496 7.19009 10.3136 7.10766 10.2742C7.0741 10.2583 7.04112 10.2418 7.00815 10.2253C6.9369 10.1894 6.86683 10.1511 6.79736 10.1111C6.78465 10.1036 6.77194 10.0962 6.75924 10.0889L6.75918 10.0888C6.74011 10.0778 6.72104 10.0668 6.70197 10.0552C6.69393 10.0502 6.68576 10.0456 6.67752 10.0409L6.67751 10.0409L6.6775 10.0409L6.67748 10.0409C6.66823 10.0357 6.6589 10.0304 6.64957 10.0245L6.6496 13.442ZM12.4087 6.51407C12.4087 4.56628 10.8236 2.98115 8.8758 2.98115C6.928 2.98115 5.34348 4.56568 5.34348 6.51407C5.34348 7.52505 5.78037 8.48945 6.54347 9.16188H6.54405C6.94857 9.5187 7.42373 9.77483 7.93246 9.91732C8.23745 10.0027 8.55483 10.0469 8.87631 10.0469C9.1978 10.0469 9.51458 10.0027 9.82017 9.91732C10.3289 9.77483 10.8041 9.5187 11.2092 9.16188H11.2097C11.9717 8.48888 12.4086 7.52445 12.4086 6.51407H12.4087ZM9.13438 4.57503L9.20113 4.67366L9.20112 4.67367L9.13186 4.57678L9.13333 4.57574L9.13438 4.57503ZM8.78053 5.81042C9.20489 5.47045 9.50636 5.30581 9.67623 5.23227C9.75385 5.19897 9.80031 5.12888 9.8131 5.05848C9.82597 4.98756 9.80652 4.90109 9.73319 4.84531L9.39523 4.5799L9.39087 4.57678C9.31326 4.5213 9.21125 4.52095 9.13333 4.57574C8.81237 4.79309 8.51145 5.05929 8.23481 5.3395L8.22689 5.34151C8.1083 5.2986 7.97093 5.32763 7.8779 5.42676L7.8748 5.43033C7.78921 5.52907 7.78117 5.66508 7.82812 5.77386C7.43604 6.23924 7.10273 6.72341 6.8419 7.13975C6.76698 7.25615 6.81988 7.37717 6.89813 7.43459C6.97578 7.49156 7.10701 7.50753 7.19567 7.40107C7.59375 6.93023 7.95027 6.55997 8.2612 6.26471L10.0108 8.1303C10.1597 8.2927 10.4192 8.32604 10.5975 8.17742L10.5985 8.17658C10.7928 8.01102 10.8012 7.72008 10.6194 7.54561L8.78053 5.82176V5.81042Z" />
        </svg>
      );
      break;
    case ACCOUNTS:
      icon = (
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.390625 0H17.1223V16.7317H0.390625V0ZM8.83927 6.29632C9.5516 6.34055 10.1308 6.94671 10.1308 7.66873C10.1308 8.41873 9.50586 9.02271 8.75585 9.02271C8.72818 9.02271 8.7007 9.02189 8.67345 9.02026C8.70101 9.02192 8.72879 9.02277 8.75678 9.02277C9.50679 9.02277 10.1318 8.41879 10.1318 7.66878C10.1318 6.94645 9.55203 6.34008 8.83927 6.29632ZM8.75585 6.68967C8.23492 6.68967 7.79746 7.12716 7.79746 7.66872C7.79746 8.17048 8.20334 8.59479 8.69869 8.62535C8.20376 8.59432 7.79839 8.17022 7.79839 7.66877C7.79839 7.12722 8.23585 6.68973 8.75678 6.68973C8.77672 6.68973 8.79652 6.69032 8.81616 6.69149C8.79622 6.69028 8.77611 6.68967 8.75585 6.68967ZM10.3708 7.66878C10.3708 6.78676 9.63876 6.05477 8.75678 6.05477C7.87007 6.05477 7.16378 6.79164 7.16378 7.66878C7.16378 8.55073 7.87476 9.26179 8.75678 9.26179C9.63399 9.26179 10.3708 8.55556 10.3708 7.66878ZM8.03742 7.66877C8.03742 7.2559 8.37116 6.92875 8.75678 6.92875C9.16633 6.92875 9.49681 7.25924 9.49681 7.66877C9.49681 8.05436 9.16964 8.38814 8.75678 8.38814C8.36789 8.38814 8.03742 8.05769 8.03742 7.66877ZM9.05219 4.66225C10.1589 4.73557 11.1343 5.21671 11.8808 5.94396C12.6723 6.73549 13.1513 7.83947 13.1513 9.04796C13.1513 10.2769 12.6723 11.3604 11.8808 12.1729C11.0683 12.9644 9.98527 13.4434 8.75585 13.4434C8.65462 13.4434 8.55411 13.4401 8.45446 13.4334C8.55454 13.4401 8.65549 13.4435 8.75717 13.4435C9.98658 13.4435 11.0696 12.9645 11.8821 12.173C12.6736 11.3605 13.1526 10.277 13.1526 9.04805C13.1526 7.83955 12.6736 6.73558 11.8821 5.94405C11.1353 5.21651 10.1595 4.73528 9.05219 4.66225ZM5.63142 11.5258C5.63132 11.5262 5.63121 11.5265 5.6311 11.5269C5.08957 10.8604 4.75613 9.98543 4.75613 9.04796C4.75613 7.9439 5.21426 6.94393 5.92269 6.2149C6.65172 5.50677 7.65169 5.04834 8.75575 5.04834C8.84438 5.04834 8.93235 5.05129 9.01955 5.05709C8.93278 5.05135 8.84525 5.04843 8.75706 5.04843C7.65301 5.04843 6.65304 5.50686 5.924 6.21499C5.21557 6.94402 4.75744 7.94399 4.75744 9.04805C4.75744 9.87995 5.02002 10.6626 5.45757 11.2941C5.51279 11.3738 5.5708 11.4511 5.63142 11.5258ZM11.9023 11.5258C11.902 11.5262 11.9017 11.5265 11.9013 11.5269C11.644 10.6962 10.8795 10.0717 9.98216 10.0112C10.7835 10.0648 11.4792 10.5681 11.8025 11.2666C11.8413 11.3504 11.8747 11.4369 11.9023 11.5258ZM9.95654 10.4059C9.91765 10.4033 9.87843 10.4019 9.8389 10.4019H7.69338C6.79749 10.4019 6.06846 11.0479 5.94345 11.9019C6.61287 12.5524 7.51073 12.9741 8.49186 13.0387C7.51124 12.9738 6.61389 12.5522 5.94477 11.9019C6.06977 11.048 6.79881 10.402 7.69469 10.402H9.84021C9.87929 10.402 9.91808 10.4033 9.95654 10.4059ZM5.48415 5.77504C6.26566 4.99349 7.33698 4.48105 8.51814 4.41974V4.41354H8.75717C10.0539 4.41354 11.1959 4.94185 12.0489 5.77284L12.0511 5.77502L12.0511 5.77503C12.8871 6.61106 13.3917 7.7757 13.3917 9.04805C13.3917 10.342 12.8864 11.4846 12.0533 12.3398L12.0489 12.3442L12.0489 12.3442C11.1937 13.1773 10.0516 13.6826 8.75717 13.6826C7.48527 13.6826 6.3202 13.178 5.48416 12.342L5.48196 12.3398C4.65095 11.4868 4.12267 10.3453 4.12267 9.04805C4.12267 7.77327 4.65024 6.60899 5.48415 5.77504ZM9.84021 10.6411C10.5541 10.6411 11.1567 11.1398 11.3109 11.8194C10.6535 12.432 9.75149 12.8085 8.75717 12.8085C7.78359 12.8085 6.88087 12.433 6.2036 11.8172C6.3584 11.1402 6.96029 10.6411 7.69469 10.6411H9.84021ZM7.69469 9.76741C6.77502 9.76748 5.96749 10.2819 5.5729 11.0357C5.21111 10.4656 4.99647 9.77698 4.99647 9.04805C4.99647 8.01263 5.42556 7.07211 6.09302 6.38404C6.78113 5.71681 7.72168 5.28745 8.75706 5.28745C9.79311 5.28745 10.7342 5.71707 11.4223 6.38522C12.1067 7.07021 12.5177 8.00925 12.5177 9.04805C12.5177 9.78193 12.3147 10.4721 11.957 11.0412C11.5521 10.287 10.7477 9.76741 9.84021 9.76741H7.69486H7.69469Z" />
        </svg>
      );
      break;
    case SMART_WALLET:
      icon = (
        <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.7656 0.832275H0.765625V14.8323H14.7656V0.832275ZM5.54177 3.57446C4.47562 3.57446 3.61133 4.43875 3.61133 5.5049V10.1598C3.61133 11.2259 4.47562 12.0902 5.54177 12.0902H9.98974C11.0559 12.0902 11.9202 11.2259 11.9202 10.1598V5.5049C11.9202 4.43875 11.0559 3.57446 9.98974 3.57446H5.54177ZM4.18635 5.5049C4.18635 4.75633 4.79319 4.14949 5.54177 4.14949H9.98974C10.7383 4.14949 11.3452 4.75633 11.3452 5.5049V10.1598C11.3452 10.9084 10.7383 11.5152 9.98974 11.5152H5.54177C4.79319 11.5152 4.18635 10.9084 4.18635 10.1598V5.5049ZM5.12671 5.73815C5.12671 5.41266 5.39056 5.1488 5.71605 5.1488H9.29622C9.90869 5.1488 10.4052 5.64531 10.4052 6.25778V9.44415C10.4052 10.0566 9.90869 10.5531 9.29622 10.5531H6.01788C5.5257 10.5531 5.12671 10.1541 5.12671 9.66195H5.70173C5.70173 9.83656 5.84328 9.9781 6.01788 9.9781H9.29622C9.59111 9.9781 9.83017 9.73904 9.83017 9.44415V6.25778C9.83017 5.96289 9.59111 5.72383 9.29622 5.72383H5.71605C5.70815 5.72383 5.70175 5.73022 5.70173 5.73812L5.70175 5.78604C5.70183 5.94483 5.57316 6.07362 5.41438 6.07369C5.25559 6.07377 5.1268 5.9451 5.12673 5.78631L5.12671 5.73815ZM5.41422 6.92964C5.57301 6.92964 5.70173 7.05836 5.70173 7.21715V7.26411C5.70173 7.42289 5.57301 7.55162 5.41422 7.55162C5.25543 7.55162 5.12671 7.42289 5.12671 7.26411V7.21715C5.12671 7.05836 5.25543 6.92964 5.41422 6.92964ZM5.41422 8.17253C5.57301 8.17253 5.70173 8.30126 5.70173 8.46005V8.507C5.70173 8.66579 5.57301 8.79451 5.41422 8.79451C5.25543 8.79451 5.12671 8.66579 5.12671 8.507V8.46005C5.12671 8.30126 5.25543 8.17253 5.41422 8.17253ZM7.76549 8.3103C8.01918 8.3103 8.22483 8.10465 8.22483 7.85097C8.22483 7.59728 8.01918 7.39163 7.76549 7.39163C7.51181 7.39163 7.30615 7.59728 7.30615 7.85097C7.30615 8.10465 7.51181 8.3103 7.76549 8.3103ZM7.76549 8.88533C8.33676 8.88533 8.79986 8.42223 8.79986 7.85097C8.79986 7.2797 8.33676 6.8166 7.76549 6.8166C7.19423 6.8166 6.73113 7.2797 6.73113 7.85097C6.73113 8.42223 7.19423 8.88533 7.76549 8.88533Z" />
        </svg>
      );
      break;
    case SMESHER:
      icon = (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.9993 0H0.267578V16.7317H16.9993V0ZM5.99428 2.98792L5.65801 3.78252L7.69899 5.87832L5.65801 7.97412L5.6586 8.62749L7.69783 10.7139L5.6586 12.8004L5.99428 13.5956H10.7119L11.0476 12.8004L9.00836 10.7139L11.0476 8.62749L11.0482 7.97412L9.00721 5.87832L11.0482 3.78252L10.7119 2.98792H5.99428ZM9.60184 3.92435L8.3531 5.20663L7.10436 3.92435H9.60184ZM6.64897 8.29991L8.3531 6.55L10.0572 8.29991L8.3531 10.0435L6.64897 8.29991ZM7.10716 12.6592L8.3531 11.3844L9.59903 12.6592H7.10716Z" />
        </svg>
      );
      break;
    default:
      break;
  }

  return (
    <span className="icon">{icon}</span>
  );
};

export default MenuIcon;
