import Styles from 'styles/_variables.scss';

// replace is needed for removing quotes from breakpoints
export const screenSizes = {
  mobile: Styles.mobile.replace(/"+/g, ''),
  phone: Styles.phone.replace(/"+/g, ''),
  tablet: Styles.tablet.replace(/"+/g, ''),
  desktop: Styles.desktop.replace(/"+/g, ''),
  large: Styles.large.replace(/"+/g, ''),
  fullHD: Styles.fullHD.replace(/"+/g, '')
};

export const isMobile = () => window.matchMedia(screenSizes.phone).matches;
export const isPhone = () => window.matchMedia(screenSizes.phone).matches;
