import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useWindowScrollPositions } from 'hooks/useWindowScrollPositions';
import Cover from 'components/pages/Cover';
import Greetings from 'components/pages/Greetings';
import LocationAndDate from 'components/pages/LocationAndDate';

function Pages({ pageNum }) {
  return (
      <div>
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
