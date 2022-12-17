import React from 'react';

import usePageTitle from 'shared/hooks/usePageTitle';
import PageHeader from 'shared/components/PageHeader';

import styles from './PrivacyStatement.module.scss';

const PrivacyStatement: React.FC = () => {
  // The PrivacyStatement page.
  // This is an example of a static page that doesn't have any logic.

  usePageTitle('Privacy Statement');

  return (
    <div className={styles.privacyStatement}>
      <PageHeader>
        Privacy Statement
      </PageHeader>

      We don't collect data, so there's nothing to see here.
    </div>
  );
}

export default PrivacyStatement;
