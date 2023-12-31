import sprite from "../../assets/sprite.svg";

function Spinner() {
  return (
    <div className="spinner">
      <svg>
        <use href={sprite + "#icon-loader"} />
      </svg>
    </div>
  );
}

export default Spinner;
