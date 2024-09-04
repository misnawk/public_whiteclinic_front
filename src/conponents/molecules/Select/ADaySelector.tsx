import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { Days } from '@/constants/Days';
import { SelectChangeEvent } from '@mui/material';

type ADaySelectorProps = {
  value: string;
  onChange: (value: string) => void;
};
const ADaySelector = ({ value, onChange }: ADaySelectorProps) => {
  const DayOptions = Days.map((day) => ({ text: day, value: day }));

  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as string);
  };
  return <ADropdownBox label="요일" value={value} onChange={handleChange} options={DayOptions} />;
};

export default ADaySelector;