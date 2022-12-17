import React from 'react';

import usePageTitle from '../../../../shared/hooks/usePageTitle';

import styles from './PrivacyStatement.module.scss';

const PrivacyStatement: React.FC = () => {
  // The PrivacyStatement page.
  // This is an example of a static page that doesn't have any logic.

  usePageTitle('Privacy Statement');

  return (
    <div>
      We don't collect data, so there's nothing to see here.
    </div>
  );
}

export default PrivacyStatement;
