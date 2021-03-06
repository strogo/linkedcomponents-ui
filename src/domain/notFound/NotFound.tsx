import { IconArrowLeft } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import Button from '../../common/components/button/Button';
import ErrorTemplate from '../../common/components/errorTemplate/ErrorTemplate';
import { ROUTES } from '../../constants';
import useLocale from '../../hooks/useLocale';
import MainContent from '../app/layout/MainContent';
import PageWrapper from '../app/layout/PageWrapper';
import { signIn } from '../auth/authenticate';
import styles from './notFound.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const locale = useLocale();
  const history = useHistory();

  const goToHome = () => {
    history.push(`/${locale}${ROUTES.HOME}`);
  };

  const handleSignIn = () => {
    signIn(`/${locale}${ROUTES.HOME}`);
  };

  return (
    <PageWrapper title={t('notFound.pageTitle')}>
      <MainContent>
        <ErrorTemplate
          buttons={
            <div className={styles.buttons}>
              <Button
                fullWidth={true}
                iconLeft={<IconArrowLeft />}
                onClick={goToHome}
                type="button"
                variant="secondary"
              >
                {t('common.goToHome')}
              </Button>
              <Button
                fullWidth={true}
                onClick={handleSignIn}
                type="button"
                variant="primary"
              >
                {t('common.signIn')}
              </Button>
            </div>
          }
          text={t('notFound.text')}
        />
      </MainContent>
    </PageWrapper>
  );
};

export default NotFoundPage;
