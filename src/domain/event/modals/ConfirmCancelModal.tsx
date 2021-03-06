import { IconCalendarCross, LoadingSpinner } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../common/components/button/Button';
import Modal from '../../../common/components/modal/Modal';
import { EventFieldsFragment } from '../../../generated/graphql';
import EventHierarchy from '../eventHierarchy/EventHierarchy';
import styles from './modals.module.scss';

export interface ConfirmCancelModalProps {
  event: EventFieldsFragment;
  isOpen: boolean;
  isSaving: boolean;
  onCancel: () => void;
  onClose: () => void;
}

const ConfirmCancelModal: React.FC<ConfirmCancelModalProps> = ({
  event,
  isOpen,
  isSaving,
  onCancel,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      shouldCloseOnEsc={true}
      size="m"
      title={t('event.cancelEventModal.title')}
      type="alert"
    >
      <p>
        <strong>{t('event.cancelEventModal.warning')}</strong>
      </p>
      <p className={styles.warning}>
        <strong>{t('common.warning')}</strong>
      </p>
      <p>{t('event.cancelEventModal.text1')}</p>
      <p>{t('event.cancelEventModal.text2')}</p>
      <EventHierarchy event={event} />
      <div className={styles.modalButtonWrapper}>
        <Button
          iconLeft={
            isSaving ? (
              <LoadingSpinner className={styles.loadingSpinner} small={true} />
            ) : (
              <IconCalendarCross />
            )
          }
          onClick={onCancel}
          type="button"
          variant="danger"
        >
          {t('event.cancelEventModal.buttonCancel')}
        </Button>
        <Button
          onClick={onClose}
          theme="black"
          type="button"
          variant="secondary"
        >
          {t('common.cancel')}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmCancelModal;
