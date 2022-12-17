import React from 'react';

import usePageTitle from '../../../../shared/hooks/usePageTitle';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  // The 404 page

  usePageTitle('Page not found!');

  return (
    <div>
      404. The page you are looking for could not be found.
    </div>
  );
}

export default NotFound;
