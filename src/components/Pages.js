import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cover from 'components/pages/Cover';
import Greetings from 'components/pages/Greetings';
import LocationAndDate from 'components/pages/LocationAndDate';
import { useSwipeable } from 'react-swipeable';
import PhotoAlbum from 'components/pages/PhotoAlbum';
import Contact from 'components/pages/Contact';

function Pages({ pageNum, setPageNum, lastPageNum, showPagination }) {
  const [swipeDisabled, setSwipeDisabled] = useState();

  const swipeHandlers = useSwipeable({
    delta: { up: 80, down: 80 },
    onSwipedUp: () => {
      if (swipeDisabled) return;
      if (pageNum < lastPageNum) {
        setPageNum(pageNum + 1);
      }
    },
    onSwipedDown: () => {
      if (swipeDisabled) return;
      if (pageNum > 1) {
        setPageNum(pageNum - 1);
      }
    },
    trackMouse: true
  });
  
  return (
    <>
      <div {...swipeHandlers}>
        <Cover pageNum={pageNum} />
        <Greetings pageNum={pageNum} />
        <PhotoAlbum
          pageNum={pageNum}
          showPagination={showPagination}
          disableSwipe={setSwipeDisabled}
        />
        <LocationAndDate pageNum={pageNum} disableSwipe={setSwipeDisabled}/>
        <Contact pageNum={pageNum} disableSwipe={setSwipeDisabled}/>
      </div>
    </>
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
