import { FieldProps, useField } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { getErrorText } from '../../../utils/validationUtils';
import Timepicker from '../timepicker/Timepicker';

interface Props extends FieldProps {
  className?: string;
  helperText: string;
  labelText: string;
  placeholder?: string;
}

const InputField: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const {
    className,
    field: { name, onBlur, onChange, ...field },
    form,
    helperText,
    ...rest
  } = props;
  const [, { touched, error }] = useField(name);

  const errorText = React.useMemo(() => getErrorText(error, touched, t), [
    error,
    t,
    touched,
  ]);

  const handleBlur = (val: string) => {
    onBlur({
      target: {
        id: name,
        value: val,
      },
    });
  };

  const handleChange = (val: string) => {
    onChange({
      target: {
        id: name,
        value: val,
      },
    });
  };

  return (
    <Timepicker
      {...field}
      {...rest}
      onChange={handleChange}
      onBlur={handleBlur}
      id={name}
      helperText={errorText || helperText}
      invalid={!!errorText}
      className={className}
    />
  );
};

export default InputField;
