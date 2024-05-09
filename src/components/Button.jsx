const Button = ({ clickHandler, buttonLabel }) => {
  return <button onClick={clickHandler}>{buttonLabel}</button>;
};

export default Button;
