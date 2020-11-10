import classNames from 'classnames';
import { css } from 'emotion';
import { useField } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

import InputRow from '../../../../common/components/inputRow/InputRow';
import Notification from '../../../../common/components/notification/Notification';
import { useTheme } from '../../../app/theme/Theme';
import { EVENT_FIELDS } from '../../constants';
import EventTime from './EventTime';
import EventTimes from './EventTimes';
import styles from './timeSection.module.scss';

const TypeSection = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [{ value: type }] = useField(EVENT_FIELDS.TYPE);

  return (
    <div className={classNames(styles.timeSection, css(theme.timeSection))}>
      <h3>{t(`event.form.titleTime.${type}`)}</h3>

      <InputRow
        info={
          <Notification
            className={styles.notification}
            label={t(`event.form.notificationTitleEventTimes.${type}`)}
            type="info"
          >
            <p>{t(`event.form.infoTextEventTimes1.${type}`)}</p>
            <p>{t(`event.form.infoTextEventTimes2.${type}`)}</p>
            <p>{t(`event.form.infoTextEventTimes3.${type}`)}</p>
            <p>{t(`event.form.infoTextEventTimes4.${type}`)}</p>
            <p>{t(`event.form.infoTextEventTimes5.${type}`)}</p>
          </Notification>
        }
      >
        <EventTime eventTimePath="" type={type} />
        <EventTimes />
      </InputRow>
    </div>
  );
};

export default TypeSection;