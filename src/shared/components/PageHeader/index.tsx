import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './PageHeader.module.scss';

type Props = PropsWithChildren & HTMLAttributes<HTMLHeadingElement>

const PageHeader: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <h1
      className={clsx(styles.pageHeader, className)}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default PageHeader;
