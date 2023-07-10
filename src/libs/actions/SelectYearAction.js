import React from 'react';

const onSelectYearRef = React.createRef();
const inputIdRef = React.createRef();

function set(onSelectYear) {
  onSelectYearRef.current = onSelectYear;
}

function emit(year) {
  if (!onSelectYearRef.current) return;
  onSelectYearRef.current(inputIdRef.current, year);
}

function updateInputID(inputID) {
  inputIdRef.current = inputID;
}

export {set, emit, updateInputID};
