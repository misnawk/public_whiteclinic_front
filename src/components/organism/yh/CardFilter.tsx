import React from 'react';
import { Box } from '@mui/material';
import AFixedInput from '@/components/atom/Input/FixedInput/AFixedInput';
import ACard from '@/components/molecules/Card/ACard';
import { WorkerProps } from '@/constants/Workers';

type FilterProps = {
  data: [string, WorkerProps][];
  filter: string;
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemClick: (item: WorkerProps) => void;
}

const CardFilter = ({ data, filter, onFilterChange, onItemClick }: FilterProps) => {
  return (
    <>
      <AFixedInput
        placeholder="이름, 주소 또는 전화번호로 검색"
        value={filter}
        onChange={onFilterChange}
        width={300}
        sx={{ mb: 2 }}
        inputHeightSize="medium"
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
          overflowY: 'auto',
          height: '500px',
        }}
      >
        {data.map(([key, worker]) => (
          <ACard
            key={key}
            name={worker.name}
            tel={worker.tel}
            address={worker.address}
            available={worker.available.join(', ')}
            remark=""
            onClick={() => onItemClick(worker)}
          />
        ))}
      </Box>
    </>
  );
};

export default CardFilter;