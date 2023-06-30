import React from 'react';

const onSelectCurrencyRef = React.createRef();

function set(onSelectCurrency) {
  onSelectCurrencyRef.current = onSelectCurrency;
}

function update(currency) {
  if (!onSelectCurrencyRef.current) return;
  onSelectCurrencyRef.current(currency);
}

export {set, update};
