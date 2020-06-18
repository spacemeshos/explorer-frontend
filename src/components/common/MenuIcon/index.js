// @flow
import * as React from 'react';

type Props = {
  name: string;
};

const MenuIcon = (props: Props) => {
  const { name } = props;

  let icon = '';

  switch (name) {
    case 'overview':
      icon = (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16.7317V16.7317H0V0ZM4.89243 7.27562V11.8387C4.89243 12.0785 5.08668 12.2728 5.32653 12.2728H6.62995V8.36582C6.62995 8.12597 6.82421 7.93171 7.06406 7.93171H9.6687C9.90855 7.93171 10.1028 8.12597 10.1028 8.36582V12.2728H11.404C11.6439 12.2728 11.8381 12.0785 11.8381 11.8387V7.27562L8.36528 4.57444L4.89243 7.27562ZM9.6754 13.1409H11.404C12.123 13.1409 12.7063 12.5576 12.7063 11.8386V7.06345C12.7063 6.92942 12.6445 6.80299 12.5387 6.72105L8.63171 3.6823C8.47489 3.56021 8.25567 3.56021 8.09885 3.6823L4.19188 6.72105H4.19187C4.08606 6.80298 4.0242 6.92942 4.0242 7.06345V11.8386C4.0242 12.5576 4.60753 13.1409 5.32652 13.1409H7.05736C7.05959 13.141 7.06182 13.141 7.06406 13.141C7.0663 13.141 7.06853 13.141 7.07076 13.1409H9.66201C9.66423 13.141 9.66647 13.141 9.6687 13.141C9.67094 13.141 9.67317 13.141 9.6754 13.1409ZM9.2346 12.2728V8.79993H7.49817V12.2728H9.2346Z" />
        </svg>
      );
      break;
    case 'epochs':
      icon = (
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.6106 0H0.878906V16.7317H17.6106V0ZM3.30564 8.36576C3.30564 5.0908 5.96932 2.42712 9.24428 2.42712C12.5192 2.42712 15.1829 5.0908 15.1829 8.36576C15.1829 11.6407 12.5192 14.3044 9.24428 14.3044C5.96932 14.3044 3.30564 11.6407 3.30564 8.36576ZM14.3911 8.36576C14.3911 5.51865 12.0914 3.21894 9.24428 3.21894C6.39716 3.21894 4.09746 5.51865 4.09746 8.36576C4.09746 11.2129 6.39716 13.5126 9.24428 13.5126C12.0914 13.5126 14.3911 11.2129 14.3911 8.36576ZM6.47292 6.78212C6.47292 6.49035 6.70902 6.25425 7.00079 6.25425C7.29257 6.25425 7.52867 6.49035 7.52867 6.78212C7.52867 7.0739 7.29257 7.31 7.00079 7.31C6.70902 7.31 6.47292 7.0739 6.47292 6.78212ZM8.00552 6.51664C8.07562 6.4388 8.17409 6.39189 8.27925 6.38622L8.27926 6.38622C8.29318 6.38571 8.30658 6.38571 8.3205 6.38622H11.6197C11.7259 6.38468 11.828 6.42592 11.9033 6.50015C11.979 6.57438 12.0213 6.67593 12.0213 6.78213C12.0213 6.88832 11.979 6.98988 11.9033 7.06411C11.828 7.13834 11.7259 7.17958 11.6197 7.17804H8.3205C8.21533 7.18371 8.11275 7.14711 8.03439 7.07648C7.95655 7.00638 7.90912 6.90791 7.90397 6.80275C7.89829 6.69758 7.9349 6.595 8.00552 6.51664ZM6.47292 8.36576C6.47292 8.07399 6.70902 7.83788 7.00079 7.83788C7.29257 7.83788 7.52867 8.07399 7.52867 8.36576C7.52867 8.65753 7.29257 8.89364 7.00079 8.89364C6.70902 8.89364 6.47292 8.65753 6.47292 8.36576ZM8.00552 8.10028C8.07562 8.02244 8.17409 7.97552 8.27925 7.96985L8.27926 7.96986C8.29318 7.96934 8.30658 7.96934 8.3205 7.96986H11.6197C11.7259 7.96831 11.828 8.00955 11.9033 8.08379C11.979 8.15802 12.0213 8.25957 12.0213 8.36577C12.0213 8.47196 11.979 8.57351 11.9033 8.64775C11.828 8.72198 11.7259 8.76322 11.6197 8.76167H8.3205C8.21533 8.76734 8.11275 8.73074 8.03439 8.66012C7.95655 8.59002 7.90912 8.49155 7.90397 8.38639C7.89829 8.28122 7.9349 8.17863 8.00552 8.10028ZM6.47292 9.9494C6.47292 9.65763 6.70902 9.42152 7.00079 9.42152C7.29257 9.42152 7.52867 9.65763 7.52867 9.9494C7.52867 10.2412 7.29257 10.4773 7.00079 10.4773C6.70902 10.4773 6.47292 10.2412 6.47292 9.9494ZM8.00552 9.68391C8.07562 9.60607 8.17409 9.55916 8.27925 9.55349L8.27926 9.5535C8.29318 9.55298 8.30658 9.55298 8.3205 9.5535H11.6197C11.7259 9.55195 11.828 9.59319 11.9033 9.66742C11.979 9.74166 12.0213 9.84321 12.0213 9.9494C12.0213 10.0556 11.979 10.1571 11.9033 10.2314C11.828 10.3056 11.7259 10.3469 11.6197 10.3453H8.3205C8.21533 10.351 8.11275 10.3144 8.03439 10.2438C7.95655 10.1737 7.90912 10.0752 7.90397 9.97002C7.89829 9.86486 7.9349 9.76227 8.00552 9.68391Z" />
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
