import { IconArrowLeft } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import Button from '../../common/components/button/Button';
import LoadingSpinner from '../../common/components/loadingSpinner/LoadingSpinner';
import {
  EventFieldsFragment,
  PublicationStatus,
  useEventQuery,
} from '../../generated/graphql';
import getPathBuilder from '../../utils/getPathBuilder';
import Container from '../app/layout/Container';
import FormContainer from '../app/layout/FormContainer';
import PageWrapper from '../app/layout/PageWrapper';
import { eventPathBuilder, getEventFields } from '../event/utils';
import styles from './eventSavedPage.module.scss';

type EventSavedPageProps = {
  event: EventFieldsFragment;
};

const EventSavedPage: React.FC<EventSavedPageProps> = ({ event }) => {
  const { t } = useTranslation();
  const { publicationStatus } = getEventFields(event);

  return (
    <PageWrapper
      title={
        publicationStatus === PublicationStatus.Draft
          ? t('eventSavedPage.pageTitleDraftSaved')
          : t(`eventSavedPage.pageTitlePublished`)
      }
    >
      <Container>
        <FormContainer>
          <h1>
            {publicationStatus === PublicationStatus.Draft
              ? t('eventSavedPage.titleDraftSaved')
              : t(`eventSavedPage.titlePublished`)}
          </h1>

          <div className={styles.buttonPanel}>
            <Button iconLeft={<IconArrowLeft />} variant="secondary">
              {t('eventSavedPage.buttonBackToEvents')}
            </Button>
            <Button variant="primary">
              {t('eventSavedPage.buttonAddEvent')}
            </Button>
          </div>
        </FormContainer>
      </Container>
    </PageWrapper>
  );
};

const EventSavedPageWrapper = () => {
  const { id: eventId } = useParams<{ id: string }>();

  const { data: eventData, loading } = useEventQuery({
    skip: !eventId,
    variables: {
      id: eventId,

      createPath: getPathBuilder(eventPathBuilder),
    },
  });

  return (
    <LoadingSpinner isLoading={loading}>
      {eventData && <EventSavedPage event={eventData.event} />}
    </LoadingSpinner>
  );
};

export default EventSavedPageWrapper;
