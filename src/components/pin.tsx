import React from "react";
import { Rate } from "antd";

interface PinProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckChange?: (checked: boolean) => void;
}

export const Pin = ({ checked, onCheckChange, ...restProps }: PinProps) => {
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheckChange?.(!!num)}
      {...restProps}
    />
  );
};
