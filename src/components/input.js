const Input = (props) => {
  const { id, placeholder = "", label = "", type = "text", ...rest } = props;
  return (
    <>
      <input
        type={type}
        className={`w-2/5 border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4 px-2 py-1.5 text-primary outline-none text-base font-light rounded-md`}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

export default Input;
