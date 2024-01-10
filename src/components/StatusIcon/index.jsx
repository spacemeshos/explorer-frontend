// @flow
type Props = {
  status: string;
};

const StatusIcon = (props: Props) => {
  const { status } = props;

  let icon = '';

  switch (status) {
    case 'success':
    case 'approved':
      icon = (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.387659" y="16.5091" width="14.0582" height="14.0582" transform="rotate(-90 0.387659 16.5091)" stroke="#65B042" strokeWidth="0.775317" />
          <rect x="1.79004" y="14.8335" width="14.8335" height="14.8335" transform="rotate(-90 1.79004 14.8335)" fill="#65B042" />
          <rect x="9.8014" y="9.03868" width="0.725452" height="0.596409" transform="rotate(90 9.8014 9.03868)" fill="white" stroke="white" strokeWidth="0.596409" />
          <rect x="8.60805" y="9.03868" width="0.725452" height="0.596408" transform="rotate(90 8.60805 9.03868)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="7.41469" y="7.71617" width="0.725456" height="0.596407" transform="rotate(90 7.41469 7.71617)" fill="white" stroke="white" strokeWidth="0.596407" />
          <rect x="7.41469" y="9.03868" width="0.725452" height="0.596408" transform="rotate(90 7.41469 9.03868)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="8.60805" y="10.359" width="0.725453" height="0.596408" transform="rotate(90 8.60805 10.359)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="6.22133" y="7.71617" width="0.725455" height="0.596408" transform="rotate(90 6.22133 7.71617)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="6.22133" y="6.39342" width="0.725453" height="0.596408" transform="rotate(90 6.22133 6.39342)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="5.0309" y="6.39342" width="0.725452" height="0.596409" transform="rotate(90 5.0309 6.39342)" fill="white" stroke="white" strokeWidth="0.596409" />
          <rect x="9.80141" y="7.71617" width="0.725454" height="0.596408" transform="rotate(90 9.80141 7.71617)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="10.9938" y="7.71617" width="0.725454" height="0.596408" transform="rotate(90 10.9938 7.71617)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="10.9938" y="6.39342" width="0.725454" height="0.596408" transform="rotate(90 10.9938 6.39342)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="12.1871" y="6.39391" width="0.725455" height="0.596408" transform="rotate(90 12.1871 6.39391)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="12.1871" y="5.07237" width="0.725455" height="0.596408" transform="rotate(90 12.1871 5.07237)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="13.3776" y="5.07237" width="0.725455" height="0.596408" transform="rotate(90 13.3776 5.07237)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="13.3776" y="3.74986" width="0.725455" height="0.596408" transform="rotate(90 13.3776 3.74986)" fill="white" stroke="white" strokeWidth="0.596408" />
          <rect x="14.5719" y="3.75035" width="0.725455" height="0.596408" transform="rotate(90 14.5719 3.75035)" fill="white" stroke="white" strokeWidth="0.596408" />
        </svg>
      );
      break;
    case 'processing':
      icon = (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.25" y="10.6465" width="9.06607" height="9.06607" transform="rotate(-90 0.25 10.6465)" stroke="#AA58B1" strokeWidth="0.5" />
          <rect x="1.15332" y="9.56616" width="9.56607" height="9.56607" transform="rotate(-90 1.15332 9.56616)" fill="#AA58B1" />
          <rect x="3.98242" y="2.42676" width="0.599107" height="0.599107" transform="rotate(90 3.98242 2.42676)" fill="white" />
          <rect x="4.58301" y="2.42676" width="0.599107" height="0.599107" transform="rotate(90 4.58301 2.42676)" fill="white" />
          <rect x="4.58301" y="3.02588" width="0.599107" height="0.599107" transform="rotate(90 4.58301 3.02588)" fill="white" />
          <rect x="5.18066" y="3.02588" width="0.599107" height="0.599107" transform="rotate(90 5.18066 3.02588)" fill="white" />
          <rect x="5.18066" y="7.21899" width="0.599107" height="0.599107" transform="rotate(90 5.18066 7.21899)" fill="white" />
          <rect x="7.57715" y="7.21899" width="0.599107" height="0.599107" transform="rotate(90 7.57715 7.21899)" fill="white" />
          <rect x="6.97754" y="6.62012" width="0.599107" height="0.599107" transform="rotate(90 6.97754 6.62012)" fill="white" />
          <rect x="5.18066" y="3.625" width="0.599107" height="0.599107" transform="rotate(90 5.18066 3.625)" fill="white" />
          <rect x="5.78027" y="3.625" width="0.599107" height="0.599107" transform="rotate(90 5.78027 3.625)" fill="white" />
          <rect x="5.78027" y="4.22388" width="0.599107" height="0.599107" transform="rotate(90 5.78027 4.22388)" fill="white" />
          <rect x="6.97754" y="4.22388" width="0.599107" height="0.599107" transform="rotate(90 6.97754 4.22388)" fill="white" />
          <rect x="6.97754" y="3.625" width="0.599107" height="0.599107" transform="rotate(90 6.97754 3.625)" fill="white" />
          <rect x="7.57715" y="3.02588" width="0.599107" height="0.599107" transform="rotate(90 7.57715 3.02588)" fill="white" />
          <rect x="7.57715" y="3.625" width="0.599107" height="0.599107" transform="rotate(90 7.57715 3.625)" fill="white" />
          <rect x="8.17578" y="3.02588" width="0.599107" height="0.599107" transform="rotate(90 8.17578 3.02588)" fill="white" />
          <rect x="8.17578" y="2.42676" width="0.599107" height="0.599107" transform="rotate(90 8.17578 2.42676)" fill="white" />
          <rect x="8.77539" y="1.82788" width="0.599107" height="0.599107" transform="rotate(90 8.77539 1.82788)" fill="white" />
          <rect x="3.98242" y="1.82788" width="0.599107" height="0.599107" transform="rotate(90 3.98242 1.82788)" fill="white" />
          <rect x="8.77539" y="2.42676" width="0.599107" height="0.599107" transform="rotate(90 8.77539 2.42676)" fill="white" />
          <rect x="8.17578" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 8.17578 7.21899)" fill="white" />
          <rect x="7.57715" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 7.57715 7.21899)" fill="white" />
          <rect x="7.57715" y="6.62012" width="0.599107" height="0.599107" transform="rotate(-90 7.57715 6.62012)" fill="white" />
          <rect x="6.97754" y="6.62012" width="0.599107" height="0.599107" transform="rotate(-90 6.97754 6.62012)" fill="white" />
          <rect x="6.97754" y="6.021" width="0.599107" height="0.599107" transform="rotate(-90 6.97754 6.021)" fill="white" />
          <rect x="6.37988" y="6.021" width="0.599107" height="0.599107" transform="rotate(-90 6.37988 6.021)" fill="white" />
          <rect x="6.37988" y="5.42188" width="0.599107" height="0.599107" transform="rotate(-90 6.37988 5.42188)" fill="white" />
          <rect x="5.18066" y="5.42188" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 5.42188)" fill="white" />
          <rect x="5.18066" y="6.021" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 6.021)" fill="white" />
          <rect x="4.58301" y="6.62012" width="0.599107" height="0.599107" transform="rotate(-90 4.58301 6.62012)" fill="white" />
          <rect x="4.58301" y="6.021" width="0.599107" height="0.599107" transform="rotate(-90 4.58301 6.021)" fill="white" />
          <rect x="3.98242" y="6.62012" width="0.599107" height="0.599107" transform="rotate(-90 3.98242 6.62012)" fill="white" />
          <rect x="3.98242" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 3.98242 7.21899)" fill="white" />
          <rect x="3.38379" y="7.81812" width="0.599107" height="0.599107" transform="rotate(-90 3.38379 7.81812)" fill="white" />
          <rect x="5.78027" y="7.81812" width="0.599107" height="0.599107" transform="rotate(-90 5.78027 7.81812)" fill="white" />
          <rect x="5.18066" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 7.21899)" fill="white" />
          <rect x="5.78027" y="6.67334" width="0.599107" height="0.599107" transform="rotate(-90 5.78027 6.67334)" fill="white" />
          <rect x="8.17578" y="7.81812" width="0.599107" height="0.599107" transform="rotate(-90 8.17578 7.81812)" fill="white" />
          <rect x="3.98242" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 3.98242 8.41699)" fill="white" />
          <rect x="3.38379" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 3.38379 8.41699)" fill="white" />
          <rect x="4.58301" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 4.58301 8.41699)" fill="white" />
          <rect x="5.18066" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 8.41699)" fill="white" />
          <rect x="5.78027" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 5.78027 8.41699)" fill="white" />
          <rect x="6.37988" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 6.37988 8.41699)" fill="white" />
          <rect x="6.97754" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 6.97754 8.41699)" fill="white" />
          <rect x="7.57715" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 7.57715 8.41699)" fill="white" />
          <rect x="8.17578" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 8.17578 8.41699)" fill="white" />
          <rect x="3.98242" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 3.98242 1.82788)" fill="white" />
          <rect x="3.38379" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 3.38379 1.82788)" fill="white" />
          <rect x="4.58301" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 4.58301 1.82788)" fill="white" />
          <rect x="5.18066" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 1.82788)" fill="white" />
          <rect x="5.78027" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 5.78027 1.82788)" fill="white" />
          <rect x="6.37988" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 6.37988 1.82788)" fill="white" />
          <rect x="6.97754" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 6.97754 1.82788)" fill="white" />
          <rect x="7.57715" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 7.57715 1.82788)" fill="white" />
          <rect x="8.17578" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 8.17578 1.82788)" fill="white" />
          <rect x="3.38379" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 3.38379 7.21899)" fill="white" />
        </svg>
      );
      break;
    case 'pending':
      icon = (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.25" y="10.6465" width="9.06607" height="9.06607" transform="rotate(-90 0.25 10.6465)" stroke="#BC83C1" strokeWidth="0.5" />
          <rect x="1.15332" y="9.56616" width="9.56607" height="9.56607" transform="rotate(-90 1.15332 9.56616)" fill="#BC83C1" />
          <rect x="3.98242" y="2.42676" width="0.599107" height="0.599107" transform="rotate(90 3.98242 2.42676)" fill="white" />
          <rect x="4.58301" y="2.42676" width="0.599107" height="0.599107" transform="rotate(90 4.58301 2.42676)" fill="white" />
          <rect x="4.58301" y="3.02588" width="0.599107" height="0.599107" transform="rotate(90 4.58301 3.02588)" fill="white" />
          <rect x="5.18066" y="3.02588" width="0.599107" height="0.599107" transform="rotate(90 5.18066 3.02588)" fill="white" />
          <rect x="5.18066" y="7.21899" width="0.599107" height="0.599107" transform="rotate(90 5.18066 7.21899)" fill="white" />
          <rect x="7.57715" y="7.21899" width="0.599107" height="0.599107" transform="rotate(90 7.57715 7.21899)" fill="white" />
          <rect x="6.97754" y="6.62012" width="0.599107" height="0.599107" transform="rotate(90 6.97754 6.62012)" fill="white" />
          <rect x="5.18066" y="3.625" width="0.599107" height="0.599107" transform="rotate(90 5.18066 3.625)" fill="white" />
          <rect x="5.78027" y="3.625" width="0.599107" height="0.599107" transform="rotate(90 5.78027 3.625)" fill="white" />
          <rect x="5.78027" y="4.22388" width="0.599107" height="0.599107" transform="rotate(90 5.78027 4.22388)" fill="white" />
          <rect x="6.97754" y="4.22388" width="0.599107" height="0.599107" transform="rotate(90 6.97754 4.22388)" fill="white" />
          <rect x="6.97754" y="3.625" width="0.599107" height="0.599107" transform="rotate(90 6.97754 3.625)" fill="white" />
          <rect x="7.57715" y="3.02588" width="0.599107" height="0.599107" transform="rotate(90 7.57715 3.02588)" fill="white" />
          <rect x="7.57715" y="3.625" width="0.599107" height="0.599107" transform="rotate(90 7.57715 3.625)" fill="white" />
          <rect x="8.17578" y="3.02588" width="0.599107" height="0.599107" transform="rotate(90 8.17578 3.02588)" fill="white" />
          <rect x="8.17578" y="2.42676" width="0.599107" height="0.599107" transform="rotate(90 8.17578 2.42676)" fill="white" />
          <rect x="8.77539" y="1.82788" width="0.599107" height="0.599107" transform="rotate(90 8.77539 1.82788)" fill="white" />
          <rect x="3.98242" y="1.82788" width="0.599107" height="0.599107" transform="rotate(90 3.98242 1.82788)" fill="white" />
          <rect x="8.77539" y="2.42676" width="0.599107" height="0.599107" transform="rotate(90 8.77539 2.42676)" fill="white" />
          <rect x="8.17578" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 8.17578 7.21899)" fill="white" />
          <rect x="7.57715" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 7.57715 7.21899)" fill="white" />
          <rect x="7.57715" y="6.62012" width="0.599107" height="0.599107" transform="rotate(-90 7.57715 6.62012)" fill="white" />
          <rect x="6.97754" y="6.62012" width="0.599107" height="0.599107" transform="rotate(-90 6.97754 6.62012)" fill="white" />
          <rect x="6.97754" y="6.021" width="0.599107" height="0.599107" transform="rotate(-90 6.97754 6.021)" fill="white" />
          <rect x="6.37988" y="6.021" width="0.599107" height="0.599107" transform="rotate(-90 6.37988 6.021)" fill="white" />
          <rect x="6.37988" y="5.42188" width="0.599107" height="0.599107" transform="rotate(-90 6.37988 5.42188)" fill="white" />
          <rect x="5.18066" y="5.42188" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 5.42188)" fill="white" />
          <rect x="5.18066" y="6.021" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 6.021)" fill="white" />
          <rect x="4.58301" y="6.62012" width="0.599107" height="0.599107" transform="rotate(-90 4.58301 6.62012)" fill="white" />
          <rect x="4.58301" y="6.021" width="0.599107" height="0.599107" transform="rotate(-90 4.58301 6.021)" fill="white" />
          <rect x="3.98242" y="6.62012" width="0.599107" height="0.599107" transform="rotate(-90 3.98242 6.62012)" fill="white" />
          <rect x="3.98242" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 3.98242 7.21899)" fill="white" />
          <rect x="3.38379" y="7.81812" width="0.599107" height="0.599107" transform="rotate(-90 3.38379 7.81812)" fill="white" />
          <rect x="5.78027" y="7.81812" width="0.599107" height="0.599107" transform="rotate(-90 5.78027 7.81812)" fill="white" />
          <rect x="5.18066" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 7.21899)" fill="white" />
          <rect x="5.78027" y="6.67334" width="0.599107" height="0.599107" transform="rotate(-90 5.78027 6.67334)" fill="white" />
          <rect x="8.17578" y="7.81812" width="0.599107" height="0.599107" transform="rotate(-90 8.17578 7.81812)" fill="white" />
          <rect x="3.98242" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 3.98242 8.41699)" fill="white" />
          <rect x="3.38379" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 3.38379 8.41699)" fill="white" />
          <rect x="4.58301" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 4.58301 8.41699)" fill="white" />
          <rect x="5.18066" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 8.41699)" fill="white" />
          <rect x="5.78027" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 5.78027 8.41699)" fill="white" />
          <rect x="6.37988" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 6.37988 8.41699)" fill="white" />
          <rect x="6.97754" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 6.97754 8.41699)" fill="white" />
          <rect x="7.57715" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 7.57715 8.41699)" fill="white" />
          <rect x="8.17578" y="8.41699" width="0.599107" height="0.599107" transform="rotate(-90 8.17578 8.41699)" fill="white" />
          <rect x="3.98242" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 3.98242 1.82788)" fill="white" />
          <rect x="3.38379" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 3.38379 1.82788)" fill="white" />
          <rect x="4.58301" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 4.58301 1.82788)" fill="white" />
          <rect x="5.18066" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 5.18066 1.82788)" fill="white" />
          <rect x="5.78027" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 5.78027 1.82788)" fill="white" />
          <rect x="6.37988" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 6.37988 1.82788)" fill="white" />
          <rect x="6.97754" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 6.97754 1.82788)" fill="white" />
          <rect x="7.57715" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 7.57715 1.82788)" fill="white" />
          <rect x="8.17578" y="1.82788" width="0.599107" height="0.599107" transform="rotate(-90 8.17578 1.82788)" fill="white" />
          <rect x="3.38379" y="7.21899" width="0.599107" height="0.599107" transform="rotate(-90 3.38379 7.21899)" fill="white" />
        </svg>
      );
      break;
    case 'invalid':
    case 'failure':
      icon = (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="17" height="17" fill="#E4622B" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="-10.509" y="-10.296" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-10.509" y="-9.167" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-11.76" y="-8.04" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-10.509" y="-8.04" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-9.259" y="-9.167" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-11.76" y="-6.912" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-13.009" y="-6.912" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-13.009" y="-5.785" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-11.76" y="-10.296" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <rect x="-11.76" y="-11.423" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 1.1102230246251565e-16, 1.1102230246251565e-16)" fill="white" />
          <g transform="matrix(1, 0, 0, 1, -0.9911680221557617, -2.34328293800354)">
            <rect x="-14" y="-14.895" width="1.25" height="1.128" transform="matrix(-1, 0, 0, -1, 0, 0)" fill="white" />
          </g>
          <rect x="6.509" y="6.913" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="6.509" y="8.042" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="5.258" y="9.169" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="6.509" y="9.169" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="7.759" y="8.042" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="5.258" y="10.297" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="4.009" y="10.297" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="4.009" y="11.424" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="5.258" y="6.913" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="5.258" y="5.786" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="4.009" y="5.786" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
          <rect x="4.009" y="4.657" width="1.25" height="1.128" fill="white" transform="matrix(1, 0, 0, 1, 1.1102230246251565e-16, 1.1102230246251565e-16)" />
        </svg>
      );
      break;
    default:
      break;
  }

  return (
    <span className="statusIcon">{icon}</span>
  );
};

export default StatusIcon;
