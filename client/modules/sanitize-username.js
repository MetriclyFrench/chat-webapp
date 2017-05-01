// This module exports the var 'value'
// after it has removed all punctuation (!@#$%&*)
// converted all letters to lowercase
// and lastly, stripped out any whitespaces (Abdul Yahya => abdulyahya)
export default function( value ) {
  return value.replace( /[^A-Za-z0-9\s]/g, '' ).toLowerCase().trim();
}
