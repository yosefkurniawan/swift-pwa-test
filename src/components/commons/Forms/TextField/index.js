import React, { useState } from 'react'
import useStyles from "./style";
import { TextField } from '@material-ui/core';

const Component = ({ placeholder = "", disabled = false, onChange = () => {}, value = '' }) => {
  const styles = useStyles();
  const [localValue, setValue] = useState(value)
  const onChangeText = (event) => {
      const { value } = event.target
      setValue(value)
      onChange(value)
  }
  return (
      <TextField 
        placeholder={placeholder}
        disabled={disabled}
        value={localValue}
        onChange={onChangeText}
        className={styles.container}
      />
  );
};

export default Component;
