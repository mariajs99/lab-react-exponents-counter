function Exponent(num, exponent) {
  const result = num ** exponent;

  let reusableMultiplication;

  if (exponent === 2) {
    reusableMultiplication = `${num} * ${num}`;
  } else if (exponent === 3) {
    reusableMultiplication = `${num} * ${num} * ${num}`;
  } else if (exponent === 4) {
    reusableMultiplication = `${num} * ${num} * ${num} * ${num}`;
  } else if (exponent === 5) {
    reusableMultiplication = `${num} * ${num} * ${num} * ${num} * ${num}`;
  } else if (exponent === 6) {
    reusableMultiplication = `${num} * ${num} * ${num} * ${num} * ${num} * ${num}`;
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {" "}
        {num}n^{exponent}
      </p>
      <p className="exponent-result">
        {" "}
        = <span className="total">{result}</span>
      </p>
    </div>
  );
}

export default Exponent;
