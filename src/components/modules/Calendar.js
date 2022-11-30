import React from 'react';
import PropTypes from 'prop-types';

import "assets/styles/calendar.css";

function Calendar(props) {
  return (
    <div>
      <div className="react-datepicker">
        <div className="react-datepicker__month-container">
          <div className="react-datepicker__header ">
            <div className="react-datepicker__current-month">2023년 3월</div>
            <div className="react-datepicker__day-names">
              <div className="react-datepicker__day-name">일</div>
              <div className="react-datepicker__day-name">월</div>
              <div className="react-datepicker__day-name">화</div>
              <div className="react-datepicker__day-name">수</div>
              <div className="react-datepicker__day-name">목</div>
              <div className="react-datepicker__day-name">금</div>
              <div className="react-datepicker__day-name">토</div>
            </div>
          </div>
          <div className="react-datepicker__month" aria-label="month  2023-03" role="listbox">
            <div className="react-datepicker__week">
              <div
                className="react-datepicker__day react-datepicker__day--026 react-datepicker__day--weekend react-datepicker__day--outside-month"
                tabIndex="-1" aria-label="Choose Sunday, February 26th, 2023" role="option" aria-disabled="false"
                aria-selected="false">26
              </div>
              <div className="react-datepicker__day react-datepicker__day--027 react-datepicker__day--outside-month"
                   tabIndex="-1" aria-label="Choose Monday, February 27th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">27
              </div>
              <div className="react-datepicker__day react-datepicker__day--028 react-datepicker__day--outside-month"
                   tabIndex="-1" aria-label="Choose Tuesday, February 28th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">28
              </div>
              <div className="react-datepicker__day react-datepicker__day--001" tabIndex="-1"
                   aria-label="Choose Wednesday, March 1st, 2023" role="option" aria-disabled="false"
                   aria-selected="false">1
              </div>
              <div className="react-datepicker__day react-datepicker__day--002" tabIndex="-1"
                   aria-label="Choose Thursday, March 2nd, 2023" role="option" aria-disabled="false"
                   aria-selected="false">2
              </div>
              <div className="react-datepicker__day react-datepicker__day--003" tabIndex="-1"
                   aria-label="Choose Friday, March 3rd, 2023" role="option" aria-disabled="false"
                   aria-selected="false">3
              </div>
              <div className="react-datepicker__day react-datepicker__day--004 react-datepicker__day--weekend"
                   tabIndex="-1" aria-label="Choose Saturday, March 4th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">4
              </div>
            </div>
            <div className="react-datepicker__week">
              <div className="react-datepicker__day react-datepicker__day--005 react-datepicker__day--weekend"
                   tabIndex="-1" aria-label="Choose Sunday, March 5th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">5
              </div>
              <div className="react-datepicker__day react-datepicker__day--006" tabIndex="-1"
                   aria-label="Choose Monday, March 6th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">6
              </div>
              <div className="react-datepicker__day react-datepicker__day--007" tabIndex="-1"
                   aria-label="Choose Tuesday, March 7th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">7
              </div>
              <div className="react-datepicker__day react-datepicker__day--008" tabIndex="-1"
                   aria-label="Choose Wednesday, March 8th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">8
              </div>
              <div className="react-datepicker__day react-datepicker__day--009" tabIndex="-1"
                   aria-label="Choose Thursday, March 9th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">9
              </div>
              <div className="react-datepicker__day react-datepicker__day--010" tabIndex="-1"
                   aria-label="Choose Friday, March 10th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">10
              </div>
              <div className="react-datepicker__day react-datepicker__day--011 react-datepicker__day--weekend"
                   tabIndex="-1" aria-label="Choose Saturday, March 11th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">11
              </div>
            </div>
            <div className="react-datepicker__week">
              <div className="react-datepicker__day react-datepicker__day--012 react-datepicker__day--weekend"
                   tabIndex="-1" aria-label="Choose Sunday, March 12th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">12
              </div>
              <div className="react-datepicker__day react-datepicker__day--013" tabIndex="-1"
                   aria-label="Choose Monday, March 13th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">13
              </div>
              <div className="react-datepicker__day react-datepicker__day--014" tabIndex="-1"
                   aria-label="Choose Tuesday, March 14th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">14
              </div>
              <div className="react-datepicker__day react-datepicker__day--015" tabIndex="-1"
                   aria-label="Choose Wednesday, March 15th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">15
              </div>
              <div className="react-datepicker__day react-datepicker__day--016" tabIndex="-1"
                   aria-label="Choose Thursday, March 16th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">16
              </div>
              <div className="react-datepicker__day react-datepicker__day--017" tabIndex="-1"
                   aria-label="Choose Friday, March 17th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">17
              </div>
              <div className="react-datepicker__day react-datepicker__day--018 react-datepicker__day--weekend"
                   tabIndex="-1" aria-label="Choose Saturday, March 18th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">18
              </div>
            </div>
            <div className="react-datepicker__week">
              <div className="react-datepicker__day react-datepicker__day--019 react-datepicker__day--weekend"
                   tabIndex="-1" aria-label="Choose Sunday, March 19th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">19
              </div>
              <div className="react-datepicker__day react-datepicker__day--020" tabIndex="-1"
                   aria-label="Choose Monday, March 20th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">20
              </div>
              <div className="react-datepicker__day react-datepicker__day--021" tabIndex="-1"
                   aria-label="Choose Tuesday, March 21st, 2023" role="option" aria-disabled="false"
                   aria-selected="false">21
              </div>
              <div className="react-datepicker__day react-datepicker__day--022" tabIndex="-1"
                   aria-label="Choose Wednesday, March 22nd, 2023" role="option" aria-disabled="false"
                   aria-selected="false">22
              </div>
              <div className="react-datepicker__day react-datepicker__day--023" tabIndex="-1"
                   aria-label="Choose Thursday, March 23rd, 2023" role="option" aria-disabled="false"
                   aria-selected="false">23
              </div>
              <div className="react-datepicker__day react-datepicker__day--024" tabIndex="-1"
                   aria-label="Choose Friday, March 24th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">24
              </div>
              <div
                className="react-datepicker__day react-datepicker__day--025 react-datepicker__day--selected react-datepicker__day--weekend"
                tabIndex="0" aria-label="Choose Saturday, March 25th, 2023" role="option" aria-disabled="false"
                aria-selected="true">25
              </div>
            </div>
            <div className="react-datepicker__week">
              <div className="react-datepicker__day react-datepicker__day--026 react-datepicker__day--weekend"
                   tabIndex="-1" aria-label="Choose Sunday, March 26th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">26
              </div>
              <div className="react-datepicker__day react-datepicker__day--027" tabIndex="-1"
                   aria-label="Choose Monday, March 27th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">27
              </div>
              <div className="react-datepicker__day react-datepicker__day--028" tabIndex="-1"
                   aria-label="Choose Tuesday, March 28th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">28
              </div>
              <div className="react-datepicker__day react-datepicker__day--029" tabIndex="-1"
                   aria-label="Choose Wednesday, March 29th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">29
              </div>
              <div className="react-datepicker__day react-datepicker__day--030" tabIndex="-1"
                   aria-label="Choose Thursday, March 30th, 2023" role="option" aria-disabled="false"
                   aria-selected="false">30
              </div>
              <div className="react-datepicker__day react-datepicker__day--031" tabIndex="-1"
                   aria-label="Choose Friday, March 31st, 2023" role="option" aria-disabled="false"
                   aria-selected="false">31
              </div>
              <div
                className="react-datepicker__day react-datepicker__day--001 react-datepicker__day--weekend react-datepicker__day--outside-month"
                tabIndex="-1" aria-label="Choose Saturday, April 1st, 2023" role="option" aria-disabled="false"
                aria-selected="false">1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Calendar.defaultProps = {};

Calendar.propTypes = {};

export default Calendar;
