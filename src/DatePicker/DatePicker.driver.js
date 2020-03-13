import inputDriverFactory from '../Input/Input.driver';
import calendarDriverFactory from '../Calendar/Calendar.driver';
import popoverDriverFactory from '../Popover/Popover.driver';

const datePickerDriverFactory = ({ element }) => {
  const calendarElement = popoverDriverFactory({ element }).getContentElement();
  const inputElement = popoverDriverFactory({ element }).getTargetElement();

  const inputDriver = inputDriverFactory({ element: inputElement });
  const calendarDriver = calendarDriverFactory({ element: calendarElement });

  const driver = {
    exists: () => !!element,
    open: () => inputDriver.focus(),
  };

  return {
    exists: driver.exists,
    driver,
    inputDriver,
    calendarDriver,
  };
};

export default datePickerDriverFactory;
