import React from 'react';
import PropTypes from 'prop-types';
import Cover from 'components/pages/Cover';
import Greetings from 'components/pages/Greetings';
import LocationAndDate from 'components/pages/LocationAndDate';
import { useSwipeable } from 'react-swipeable';

function Pages({ pageNum, setPageNum, lastPageNum }) {
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (pageNum < lastPageNum) {
        setPageNum(pageNum + 1);
      }
    },
    onSwipedDown: () => {
      if (pageNum > 1) {
        setPageNum(pageNum - 1);
      }
    },
    // preventDefaultTouchmoveEvent: true,
    // swipeDuration: 500,
    // preventScrollOnSwipe: true,
    trackMouse: true
  });
  
  return (
      <div {...swipeHandlers}>
        <Cover pageNum={pageNum} />
        <Greetings pageNum={pageNum} />
        <LocationAndDate pageNum={pageNum} />
      </div>
    );
}

Pages.defaultProps = {
  open: false,
  close: false,
};

Pages.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.bool,
};

export default Pages;
