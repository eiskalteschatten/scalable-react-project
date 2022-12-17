import React from 'react';

import usePageTitle from '../../../../shared/hooks/usePageTitle';

import './Homepage.module.scss';

const Homepage: React.FC = () => {
  // The Homepage

  usePageTitle();

  return (
    <div>
      homepage
    </div>
  );
}

export default Homepage;
