'use client';

import * as React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { cn } from '@/lib/utils';

export interface CalendarProps {
  className?: string;
  selected?: Date;
  onChange?: (date: Date | null) => void;
}

function Calendar({
  className,
  selected,
  onChange,
  ...props
}: CalendarProps) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      className={cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
        'focus:outline-none focus:ring-1 focus:ring-ring',
        className
      )}
      wrapperClassName="w-full"
      dateFormat="MMMM d, yyyy"
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
