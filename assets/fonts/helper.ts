//this is for windows users.
export const getFontFamily = (baseFont = 'Inter', weight: string) => {
  switch (weight) {
    case '100':
      return `${baseFont}-thin`;
    case '200':
      return `${baseFont}-ExtraLight`;
    case '300':
      return `${baseFont}-Light`;
    case '400':
    case 'normal':
      return `${baseFont}-Regular`;
    case '500':
      return `${baseFont}-SemiBold`;
    case '600':
      return `${baseFont}-Medium`;
    case '700':
    case 'bold':
      return `${baseFont}-Bold`;
    case '800':
      return `${baseFont}-ExtraBold`;
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};
