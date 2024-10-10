import { Typography, TypographyProps } from '@mui/material';
import { CTitleContentProps } from '../ts/CShowScheduleDef';

const CTitleContent = ({ content, variant = 'h5', subContent }: CTitleContentProps) => {
  return (
    <Typography variant={variant}>
      {content} {subContent}
    </Typography>
  );
};

export default CTitleContent;