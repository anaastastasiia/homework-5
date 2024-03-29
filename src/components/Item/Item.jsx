import "./styles.css";

const Item = ({
  buttonLeftName,
  buttonRightName,
  list = [],
  onClick,
  onAddToLast,
}) => {
  return (
    <>
      <div className="itemWrapper">
        <ul>
          {list.map((i, index) => {
            return <li key={index}>{i.title}</li>;
          })}
        </ul>
        <div>
          <button onClick={onClick}>{buttonLeftName}</button>
          {buttonRightName && (
            <button onClick={onAddToLast}>{buttonRightName}</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
