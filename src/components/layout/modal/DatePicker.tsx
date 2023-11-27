import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DateRangePicker, FocusedInputShape } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Moment } from 'moment';
import 'moment/locale/ko';
import { StyledButton } from '@/style/common/commonStyle';

interface DatePickerProps {
  setNights: React.Dispatch<React.SetStateAction<number>>;
  onSave: (startDate: Moment | null, endDate: Moment | null) => void;
  onCloseModal: () => void;
}
const DatePicker: React.FC<DatePickerProps> = ({
  setNights,
  onSave,
  onCloseModal,
}) => {
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null,
  );
  useEffect(() => {
    // moment.locale('ko');
    setFocusedInput('startDate');
  }, []);

  const handleDatesChange = ({
    startDate,
    endDate,
  }: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  console.log('StartDate: ' + startDate);
  console.log('endDate: ' + endDate);

  if (startDate && endDate) {
    const nights = endDate.diff(startDate, 'days');
    setNights(nights);
  } else {
    setNights(0);
  }
  const handleSave = () => {
    onSave(startDate, endDate);
    onCloseModal();
  };

  return (
    <DatePickerSection>
      <DateRangePicker
        startDatePlaceholderText="체크인"
        endDatePlaceholderText="체크아웃"
        monthFormat="YYYY[년] MMMM"
        showClearDates
        startDate={startDate}
        startDateId="start_date"
        endDate={endDate}
        endDateId="end_date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(newFocusedInput) => {
          if (newFocusedInput) {
            setFocusedInput(newFocusedInput);
          }
        }}
        displayFormat="YYYY-MM-DD"
        hideKeyboardShortcutsPanel
        keepOpenOnDateSelect
        noBorder
        onClose={() => {}}
      />
      <SmStyledButton $variant="primary" onClick={handleSave}>
        저장
      </SmStyledButton>
    </DatePickerSection>
  );
};

export default DatePicker;

const SmStyledButton = styled(StyledButton)`
  font-size: 12px;
  padding: 0.1rem 0.8rem;
  background-color: #000;
  margin-right: 10px;
  &:hover {
    background-color: #000;
  }
  &:focus {
    box-shadow: none;
  }
`;

const DatePickerSection = styled.section`
  display: flex;
  justify-content: space-between;

  .DayPicker__withBorder {
    box-shadow: none;
  }
  .DateInput_fangStroke {
    stroke: none;
  }
  .CalendarDay__default {
    border: none;
    border-radius: 50%;
  }
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background-color: #e4e7e7;
    color: #484848;
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background-color: #000;
    border-radius: 50%;
  }
  .CalendarDay__selected_span {
    background-color: #f5f5f5;
    color: #000;
    border-radius: 50%;
  }

  .DateRangePickerInput {
    /* border: 1px solid #e4e7e7; */
    border-radius: 3px;
  }
  .DateInput_input,
  .DateInput_input__focused {
    font-size: 1rem;
    font-weight: 400;
    border-bottom: none;
  }
  .DateInput_input__focused {
    box-shadow: 0 0 0 1px #000 inset;
    border-radius: 3px;
  }
  .DateRangePickerInput_arrow {
    display: none;
  }
  .DateRangePickerInput_clearDates {
    background: transparent;
    padding: 10px 15px;
    right: -20px;
  }
  .CalendarMonthGrid__horizontal {
    width: fit-content !important;
  }
`;
