const size = {
  iPhoneX: '375px',
  smallMobile: '320px',
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

export const device = {
  iPhoneX: `(max-width: ${size.iPhoneX})`,
  smallMobile: `(max-width: ${size.smallMobile})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
