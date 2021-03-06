import { useField } from 'formik';
import { IconMinusCircle, IconPlusCircle } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../common/components/button/Button';
import FormGroup from '../../../../common/components/formGroup/FormGroup';
import ImagePreview from '../../../../common/components/imagePreview/ImagePreview';
import { PAGE_SIZE as IMAGES_PAGE_SIZE } from '../../../../common/components/imageSelector/constants';
import Modal from '../../../../common/components/modal/Modal';
import Notification from '../../../../common/components/notification/Notification';
import { INPUT_MAX_WIDTHS } from '../../../../constants';
import {
  useImageQuery,
  useImagesLazyQuery,
  useUploadImageMutation,
} from '../../../../generated/graphql';
import getPathBuilder from '../../../../utils/getPathBuilder';
import parseIdFromAtId from '../../../../utils/parseIdFromAtId';
import { imagePathBuilder, imagesPathBuilder } from '../../../image/utils';
import { EVENT_FIELDS } from '../../constants';
import FieldColumn from '../../layout/FieldColumn';
import FieldRow from '../../layout/FieldRow';
import { AddImageSettings } from '../../types';
import AddImageForm from './addImageForm/AddImageForm';
import ImageDetailsFields from './imageDetailsFields/ImageDetailsFields';
import styles from './imageSection.module.scss';

const ImageSection = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsmodalOpen] = React.useState(false);
  const [{ value: type }] = useField({ name: EVENT_FIELDS.TYPE });

  const [uploadImageMutation] = useUploadImageMutation();
  const [{ value: images }, , { setValue: setImagesValue }] = useField({
    name: EVENT_FIELDS.IMAGES,
  });

  const [refetchImages] = useImagesLazyQuery({
    fetchPolicy: 'network-only',
    variables: {
      createPath: getPathBuilder(imagesPathBuilder),
      pageSize: IMAGES_PAGE_SIZE,
    },
  });

  const imageAtId = images[0];

  const { data: imagesData } = useImageQuery({
    skip: !imageAtId,
    variables: {
      createPath: getPathBuilder(imagePathBuilder),
      id: parseIdFromAtId(imageAtId) as string,
    },
  });

  const imageUrl = imagesData?.image.url;

  const openModal = () => {
    setIsmodalOpen(true);
  };

  const closeModal = () => {
    setIsmodalOpen(false);
  };

  const handleAddImageFormSubmit = (values: AddImageSettings) => {
    /* istanbul ignore else  */
    if (values.selectedImage.length) {
      setImagesValue(values.selectedImage);
      closeModal();
    } else if (values.url) {
      uploadImage({ url: values.url });
    }
  };

  const removeImage = () => {
    setImagesValue([]);
  };

  const uploadImage = async ({
    image,
    url,
  }: {
    image?: File;
    url?: string;
  }) => {
    try {
      const data = await uploadImageMutation({
        variables: {
          input: { image, name: '', url },
        },
      });

      setImagesValue([data.data?.uploadImage.atId]);
      closeModal();
      // Update images for image selector to show new image as a first item
      refetchImages();
    } catch (e) {
      // Network errors will be handled on apolloClient error link. Only show error on console here.
      /* istanbul ignore next  */
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        shouldCloseOnEsc={false}
        title={t(`event.form.modalTitleImage`)}
      >
        <AddImageForm
          onCancel={closeModal}
          onFileChange={(image: File) => {
            uploadImage({ image });
          }}
          onSubmit={handleAddImageFormSubmit}
        />
      </Modal>
      <h3>{t(`event.form.titleImage.${type}`)}</h3>
      <FieldRow
        notification={
          <Notification
            label={t(`event.form.notificationTitleImage.${type}`)}
            type="info"
          >
            <p>{t(`event.form.infoTextImage1.${type}`)}</p>
            <p>{t(`event.form.infoTextImage2`)}</p>
            <p>{t(`event.form.infoTextImage3`)}</p>
          </Notification>
        }
      >
        <FieldColumn
          className={styles.imagePreviewWrapper}
          maxWidth={INPUT_MAX_WIDTHS.MEDIUM}
        >
          <ImagePreview
            imageUrl={imageUrl}
            label={t(`event.form.buttonAddImage.${type}`)}
            onClick={openModal}
          />
        </FieldColumn>
      </FieldRow>
      <FieldRow>
        <FieldColumn>
          <FormGroup>
            {!!images.length ? (
              <Button
                fullWidth={true}
                iconLeft={<IconMinusCircle />}
                onClick={removeImage}
              >
                {t(`event.form.buttonRemoveImage.${type}`)}
              </Button>
            ) : (
              <Button
                fullWidth={true}
                iconLeft={<IconPlusCircle />}
                onClick={openModal}
              >
                {t(`event.form.buttonAddImage.${type}`)}
              </Button>
            )}
          </FormGroup>

          <ImageDetailsFields
            field={EVENT_FIELDS.IMAGE_DETAILS}
            imageAtId={imageAtId}
          />
        </FieldColumn>
      </FieldRow>
    </>
  );
};

export default ImageSection;
