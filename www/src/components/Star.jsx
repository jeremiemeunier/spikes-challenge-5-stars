import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Star = ({ value, setHovered, setNotation, hoverder, notation }) => {
  return (
    <>
      <input
        type="radio"
        name="notation"
        value={value}
        id={`notation_${value}`}
        disabled={notation < value && notation > 0 ? true : false}
        onChange={() => {
          setNotation(value);
        }}
      />
      <label
        htmlFor={`notation_${value}`}
        onMouseEnter={() => {
          setHovered(value);
        }}
        onMouseLeave={() => {
          setHovered(0);
        }}
        className={`${hoverder >= 1 ? "hover" : ""} ${
          notation >= 1 ? "active" : ""
        }`}
      >
        <span
          className={
            hoverder >= value || notation >= value
              ? "material-symbols-outlined material-symbols-filled"
              : "material-symbols-outlined"
          }
        >
          star
        </span>
      </label>
    </>
  );
};

export default Star;
