import inputDriverFactory from '../Input/Input.driver';
import calendarDriverFactory from '../Calendar/Calendar.driver';
import popoverDriverFactory from '../Popover/Popover.driver';

const datePickerDriverFactory = ({ element }) => {
  const popoverContent = () =>
    popoverDriverFactory({ element }).getContentElement();
  const calendarTestkit = () =>
    calendarDriverFactory({ element: popoverContent() });

  const calendarDriver = {
    ...Object.keys(calendarDriverFactory({ element })).reduce(
      (prev, current) => ({
        ...prev,
        [current]: args => {
          if (current === 'isVisible') {
            return popoverDriverFactory({ element }).isContentElementExists();
          }
          if (current === 'mouseClickOutside') {
            return popoverDriverFactory({ element }).clickOutside();
          }
          return calendarTestkit()[current](args);
        },
      }),
      {},
    ),
  };

  const inputElement = popoverDriverFactory({ element })
    .getTargetElement()
    .querySelector('.root');
  const inputDriver = inputDriverFactory({ element: inputElement });

  const driver = {
    exists: () => !!element,
    open: () => inputDriver.focus(),
    getWidth: () =>
      popoverDriverFactory({ element })
        .getTargetElement()
        .querySelector('[data-hook="date-picker-input"]').style.width,
  };

  return {
    exists: driver.exists,
    driver,
    inputDriver,
    calendarDriver,
  };
};

export default datePickerDriverFactory;
