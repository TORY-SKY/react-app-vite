interface ButtonInterface {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

function Button({ children, onClick, color }: ButtonInterface) {
  return (
    <>
      <button type="button" className="btn btn-primary">
        {children}
      </button>
    </>
  );
}

export default Button;
