import { Field, useField } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

import DatepickerField from '../../../../common/components/formFields/DatepickerField';
import TextInputField from '../../../../common/components/formFields/TextInputField';
import FormGroup from '../../../../common/components/formGroup/FormGroup';
import Notification from '../../../../common/components/notification/Notification';
import { EVENT_FIELDS, EXTENSION_COURSE_FIELDS } from '../../constants';
import styles from '../../eventPage.module.scss';
import FieldColumn from '../../layout/FieldColumn';
import FieldRow from '../../layout/FieldRow';

const AdditionalInfoSection = () => {
  const { t } = useTranslation();
  const [{ value: type }] = useField({ name: EVENT_FIELDS.TYPE });

  return (
    <>
      <h3>{t(`event.form.titleAudienceAge`)}</h3>
      <FieldRow
        notification={
          <Notification
            className={styles.notification}
            label={t(`event.form.titleAudienceAge`)}
            type="info"
          >
            <p>{t(`event.form.infoTextAudienceAge`)}</p>
          </Notification>
        }
      >
        <FieldColumn>
          <FormGroup>
            <Field
              name={EVENT_FIELDS.AUDIENCE_MIN_AGE}
              component={TextInputField}
              label={t(`event.form.labelAudienceMinAge`)}
              min={0}
              placeholder={t(`event.form.placeholderAudienceMinAge.${type}`)}
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <Field
              name={EVENT_FIELDS.AUDIENCE_MAX_AGE}
              component={TextInputField}
              label={t(`event.form.labelAudienceMaxAge`)}
              min={0}
              placeholder={t(`event.form.placeholderAudienceMaxAge.${type}`)}
              type="number"
            />
          </FormGroup>
        </FieldColumn>
      </FieldRow>

      <h3 className={styles.noTopMargin}>
        {t(`event.form.titleEnrolmentTime`)}
      </h3>
      <FieldRow
        notification={
          <Notification
            className={styles.notification}
            label={t(`event.form.titleEnrolmentTime`)}
            type="info"
          >
            <p>{t(`event.form.infoTextEnrolmentTime`)}</p>
          </Notification>
        }
      >
        <FieldColumn>
          <FormGroup>
            <Field
              name={`${EVENT_FIELDS.EXTENSION_COURSE}.${EXTENSION_COURSE_FIELDS.ENROLMENT_START_TIME}`}
              component={DatepickerField}
              label={t(`event.form.extensionCourse.labelEnrolmentStartTime`)}
              placeholder={t(`common.placeholderDateTime`)}
              timeSelector={true}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name={`${EVENT_FIELDS.EXTENSION_COURSE}.${EXTENSION_COURSE_FIELDS.ENROLMENT_END_TIME}`}
              component={DatepickerField}
              label={t(`event.form.extensionCourse.labelEnrolmentEndTime`)}
              placeholder={t(`common.placeholderDateTime`)}
              timeSelector={true}
            />
          </FormGroup>
        </FieldColumn>
      </FieldRow>

      <h3 className={styles.noTopMargin}>
        {t(`event.form.titleAttendeeCapacity`)}
      </h3>
      <FieldRow
        notification={
          <Notification
            className={styles.notification}
            label={t(`event.form.titleAttendeeCapacity`)}
            type="info"
          >
            <p>{t(`event.form.infoTextAttendeeCapacity`)}</p>
          </Notification>
        }
      >
        <FieldColumn>
          <FormGroup>
            <Field
              name={`${EVENT_FIELDS.EXTENSION_COURSE}.${EXTENSION_COURSE_FIELDS.MINIMUM_ATTENDEE_CAPACITY}`}
              component={TextInputField}
              label={t(
                `event.form.extensionCourse.labelMinimimAttendeeCapacity`
              )}
              min={0}
              placeholder={t(
                `event.form.extensionCourse.placeholderMinimimAttendeeCapacity`
              )}
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <Field
              name={`${EVENT_FIELDS.EXTENSION_COURSE}.${EXTENSION_COURSE_FIELDS.MAXIMUM_ATTENDEE_CAPACITY}`}
              component={TextInputField}
              label={t(
                `event.form.extensionCourse.labelMaximumAttendeeCapacity`
              )}
              min={0}
              placeholder={t(
                `event.form.extensionCourse.placeholderMaximumAttendeeCapacity`
              )}
              type="number"
            />
          </FormGroup>
        </FieldColumn>
      </FieldRow>
    </>
  );
};

export default AdditionalInfoSection;
