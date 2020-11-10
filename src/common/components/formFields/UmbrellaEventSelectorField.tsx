import { FieldProps, useField } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OptionType } from '../../../types';
import { getStringErrorText } from '../../../utils/validationUtils';
import UmbrellaEventSelector, {
  UmbrellaEventSelectorProps,
} from '../umbrellaEventSelector/UmbrellaEventSelector';

type Props = UmbrellaEventSelectorProps & FieldProps;

const UmbrellaEventSelectorField: React.FC<Props> = ({
  field: { name, onBlur, onChange, value, ...field },
  form,
  helper,
  ...rest
}) => {
  const { t } = useTranslation();
  const [, { touched, error }] = useField(name);

  const errorText = React.useMemo(() => getStringErrorText(error, touched, t), [
    error,
    t,
    touched,
  ]);

  const handleBlur = () => {
    onBlur({ target: { id: name, value } });
  };

  const handleChange = (selected: OptionType) => {
    onChange({ target: { id: name, value: selected.value } });
  };

  return (
    <UmbrellaEventSelector
      {...rest}
      {...field}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      helper={helper}
      error={errorText}
      invalid={!!errorText}
    />
  );
};

export default UmbrellaEventSelectorField;