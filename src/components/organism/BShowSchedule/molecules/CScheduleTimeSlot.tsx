import { Box } from '@mui/material';

import { CustomerTimeSlotProps, StyledTimeSlot } from '../ts/CShowScheduleDef';
import CScheduleTimeContent from './CScheduleTImeContent';
import CCustomerInfoContent from './CCustomerInfoContent';

//시간대와 사용자의 정보가 같이 나오도록 위치 배치한 컴포넌트
const CScheduleTimeSlot = ({ timeSlot, customer }: CustomerTimeSlotProps) => {
  return (
    <Box sx={{ ...StyledTimeSlot }}>
      <CScheduleTimeContent content={timeSlot} />
      <Box sx={{ width: '850px' }}>
        <CCustomerInfoContent customer={customer} />
      </Box>
    </Box>
  );
};

export default CScheduleTimeSlot;