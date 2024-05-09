const Input = ({ type, placeholder, changeHandler }) => {
  return (
    <div className="flex justify-start mt-2 ml-2">
      <input
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        // className="lg:p-2 lg:border-2 lg:border-black lg:rounded-lg lg:ml-2 lg:mt-2 lg:w-[1500px] "
        className=" p-2 border-2 border-black rounded-lg w-11/12 "
      />
    </div>
  );
};

export default Input;
