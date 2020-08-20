import React from 'react';
import {
  FormGroup,
  CheckboxField,
  CheckboxLabel,
  StyledCheckbox,
} from './input.styles';
import { useField } from 'formik';

const CheckboxInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(field);
  console.log(meta);
  console.log(helpers);
  return (
    <FormGroup>
      <CheckboxLabel htmlFor={props.id || props.name}>
        <CheckboxField
          name={props.id || props.name}
          id={props.id || props.name}
          checked={field.checked}
          {...field}
          {...props}
        />
        <StyledCheckbox checked={field.checked}>
          {field.checked ? <span className='checkmark'>✔</span> : null}
        </StyledCheckbox>
        {label}
      </CheckboxLabel>
    </FormGroup>
  );
};

export default CheckboxInput;
