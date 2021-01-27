import React from 'react';
// import { withStyles } from '@material-ui/core';
import {
   Select,
   FormControl,
   InputLabel,
   FormHelperText,
} from '@material-ui/core';

const renderFromHelper = ({ touched, error }) => {
   if (!(touched && error)) {
      return;
   }
   // eslint-disable-next-line consistent-return
   return <FormHelperText>{touched && error}</FormHelperText>;
};

const SelectField = ({
   input,
   label,
   meta: { touched, error },
   children,
   ...custom
}) => (
   <FormControl error={touched && error}>
      <InputLabel>{label}</InputLabel>
      <Select
         {...input}
         {...custom}
         inputProps={{
            name: input.name,
            id: 'color-native-simple',
         }}
         value={input.value}
      >
         {children}
      </Select>
      {renderFromHelper({ touched, error })}
   </FormControl>
);

export default SelectField;
