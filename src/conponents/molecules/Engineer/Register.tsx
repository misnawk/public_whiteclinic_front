import { Box } from '@mui/material';
import TwoButtons from '../Button/TwoButton';
import LabelInput from './ALabelInput';
import LabelCheckBox from './LabelCheckBox';

const Register = () => {
  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: '0 auto',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <LabelInput
        label="기사성함"
        onChange={(e) => console.log(e.target.value)}
        variant="standard"
      />
      <LabelInput label="연락처" onChange={(e) => console.log(e.target.value)} variant="standard" />
      <LabelInput
        label="거주지역"
        onChange={(e) => console.log(e.target.value)}
        variant="standard"
      />
      <LabelCheckBox textProps={{ text: '가능품목' }} />
      <LabelInput
        label="특이사항"
        onChange={(e) => console.log(e.target.value)}
        variant="standard"
      />
      <TwoButtons
        leftButton={{
          text: '취소',
          variant: 'contained',
          color: 'default',
          size: 'full',
        }}
        rightButton={{
          text: '등록',
          variant: 'contained',
          color: 'primary',
          size: 'full',
        }}
      />
    </Box>
  );
};
export default Register;
