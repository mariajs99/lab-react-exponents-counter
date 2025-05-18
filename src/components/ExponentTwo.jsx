const ExponentTwo = (props) => {
  const result = props.count ** 2;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count} n²</p>
      <p className="exponent-result">
        {props.count} * {props.count} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
