interface AAA {
  onclose: () => void;
}
function Alert({ onclose }: AAA) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> You just made the best decision this year
      my gee, congratulations
      <button
        type="button"
        className="btn-close "
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onclose}
      ></button>
    </div>
  );
}

export default Alert;
