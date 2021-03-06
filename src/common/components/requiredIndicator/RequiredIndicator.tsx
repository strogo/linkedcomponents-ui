import classNames from 'classnames';
import React from 'react';

import styles from './requiredIndicator.module.scss';

type RequiredIndicatorProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const RequiredIndicator = ({
  className,
  style,
}: RequiredIndicatorProps) => (
  <span
    aria-hidden
    className={classNames(styles.indicator, className)}
    style={style}
  >
    *
  </span>
);
