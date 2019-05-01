import {createElement} from 'react';
import clsx from 'clsx';
import {TypoColors, TypoVariants, TypoWeight} from './types';

import styles from './Typography.module.css';

const Typography = ({
  tag = 'div',
  color,
  variant,
  weight,
  className,
  children,
  ...others
}) => {
  const getColor = (color) => {
    switch (color) {
      case TypoColors.inherit:
        return styles.inherit;
      case TypoColors.black:
        return styles.black;
      case TypoColors.blueDark:
        return styles.blueDark;
      case TypoColors.blueLight:
        return styles.blueLight;
      case TypoColors.brassDark:
        return styles.brassDark;
      case TypoColors.brassLight:
        return styles.brassLight;
      case TypoColors.greyDark:
        return styles.greyDark;
      case TypoColors.grey:
        return styles.grey;
      case TypoColors.red:
        return styles.red;
      default:
        return TypoColors.black;
    }
  };

  const getVariant = (variant) => {
    switch (variant) {
      case TypoVariants.h1:
        return styles.h1;
      case TypoVariants.h2:
        return styles.h2;
      case TypoVariants.h3:
        return styles.h3;
      case TypoVariants.h4:
        return styles.h4;
      case TypoVariants.h5:
        return styles.h5;
      case TypoVariants.body:
        return styles.body;
      case TypoVariants.smallButton:
        return styles.smallButton;
      case TypoVariants.largeButton:
        return styles.largeButton;
      default:
        return TypoVariants.body;
    }
  };

  const getWeight = (weight) => {
    switch (weight) {
      case TypoWeight.light:
        return styles.light;
      case TypoWeight.regular:
        return styles.regular;
      case TypoWeight.medium:
        return styles.medium;
      case TypoWeight.semibold:
        return styles.semibold;
      default:
        return TypoWeight.regular;
    }
  };

  return createElement(
    tag,
    {
      ...others,
      className: clsx(
        className,
        getVariant(variant),
        getColor(color),
        getWeight(weight),
      ),
    },
    children,
  );
};

export default Typography;
