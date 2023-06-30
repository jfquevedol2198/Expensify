import React from 'react';

const onSelectCurrencyRef = React.createRef();

function attachCallback(onSelectCurrency) {
  onSelectCurrencyRef.current = onSelectCurrency;
}

function emitCallback(currency) {
  if (!onSelectCurrencyRef.current) return;
  onSelectCurrencyRef.current(currency);
}

export {attachCallback, emitCallback};
