export function markapCountryList(arr) {
  const markap = arr.reduce(
    (acc, { value, label }) => (acc += `<li data-id="${value}">${label}</li>`),
    ``
  );
  return markap;
}
