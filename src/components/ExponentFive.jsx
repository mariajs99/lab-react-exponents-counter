const ExponentFive = (props) => {

  const result = props.count **5;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}n⁵</p>
      <p className="exponent-result">
        {props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
