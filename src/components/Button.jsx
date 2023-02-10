const Button = ({ style, children }) => (
  <button
    type="button"
    className={`${style} px-8 py-5 bg-blue-gradient text-primary text-poppins text-[18px] font-medium leading-[27px] rounded-lg`}
  >
    {children}
  </button>
);

export default Button;
