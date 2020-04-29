import { ROOT_FONT_SIZE } from '../constants/style.constants';

// returns the converted rem value from the given pixel value. Root Value set at 14px.
export const rem = (size) => `${size / ROOT_FONT_SIZE}rem`;

export const remToNumber = (value) => {
  return ROOT_FONT_SIZE * (+value.replace('rem', ''));
}

export const pixelToNumber = (value) => {
  return value.replace('px', '');
}

export const getLineHeight = (size) => {
  const newSize = size * 1.5;
  return rem(newSize);
} 
