import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../../common/components/button/Button';
import ImageSelectorField from '../../../../../common/components/formFields/ImageSelectorField';
import TextInputField from '../../../../../common/components/formFields/TextInputField';
import ImageUploader from '../../../../../common/components/imageUploader/ImageUploader';
import { ADD_IMAGE_FIELDS, ADD_IMAGE_INITIAL_VALUES } from '../../../constants';
import { AddImageSettings } from '../../../types';
import { createAddImageValidationSchema } from '../../../utils';
import styles from './addImageForm.module.scss';

export interface AddImageFormProps {
  onCancel: () => void;
  onFileChange: (file: File) => void;
  onSubmit: (values: AddImageSettings) => void;
}

const AddImageForm: React.FC<AddImageFormProps> = ({
  onCancel,
  onFileChange,
  onSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={ADD_IMAGE_INITIAL_VALUES}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validateOnMount={true}
      validationSchema={createAddImageValidationSchema}
    >
      {({ values: { selectedImage, url }, isValid }) => {
        return (
          <Form className={styles.addImageForm}>
            <h3>{t('event.form.image.titleUseImportedImage')}</h3>
            <Field
              name={ADD_IMAGE_FIELDS.SELECTED_IMAGE}
              component={ImageSelectorField}
              disabled={Boolean(url)}
              multiple={false}
            />
            <div className={styles.separationLine} />

            <h3>{t('event.form.image.titleImportFromHardDisk')}</h3>
            <ImageUploader onChange={onFileChange} />
            <div className={styles.separationLine} />

            <h3>{t('event.form.image.titleImportFromInternet')}</h3>
            <div className={styles.imageUrlRow}>
              <div>
                <Field
                  disabled={Boolean(selectedImage.length)}
                  name={ADD_IMAGE_FIELDS.URL}
                  component={TextInputField}
                  label={t(`event.form.image.labelUrl`)}
                  placeholder={t(`event.form.image.placeholderUrl`)}
                />
              </div>
              <div className={styles.buttonsColumn}>
                <div>
                  <Button
                    fullWidth={true}
                    onClick={onCancel}
                    variant="secondary"
                  >
                    {t('common.cancel')}
                  </Button>
                </div>
                <div>
                  <Button disabled={!isValid} fullWidth={true} type="submit">
                    {t('common.add')}
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddImageForm;
