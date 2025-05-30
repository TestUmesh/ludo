import { TextInput } from 'react-native';

const InputFields = ({ title, style, ...rest }) => {
  return (
    <TextInput
      placeholder={title}
      style={style}
      {...rest} 
    />
  );
};

export default InputFields;