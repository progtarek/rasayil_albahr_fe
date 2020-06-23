import React from 'react';
import { FormGroup, FormLabel, Field, ErrorMessage } from './input.styles';
import { useField } from 'formik';

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Field
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'invalid' : ''}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </FormGroup>
  );
};

export default FormInput;
