import { ButtonStyle } from "@/app/hwanhee/style/ButtonStyle";

export type CustomButtonProps= {
    variant: 'text' | 'contained' | 'outlined';
    text: '확인' | '취소';
    onClick?: () => void;
    size?: keyof typeof ButtonStyle.size;
    color?: keyof typeof ButtonStyle.color;
  };