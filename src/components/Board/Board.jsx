import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

import Item from "../Item/Item";
import { onChangeListValue, API_URL } from "../../utils/utils";

const Board = () => {
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [thirdList, setThirdList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(API_URL);
      console.log("data: ", data);
      setFirstList(data);
      console.log(firstList);
    })();
  }, []);

  const onAddToRight = () => {
    onChangeListValue(firstList, secondList, setFirstList, setSecondList);
  };

  const onAddToLeft = () => {
    onChangeListValue(secondList, firstList, setSecondList, setFirstList);
  };

  const onAddToLast = () => {
    onChangeListValue(secondList, thirdList, setSecondList, setThirdList);
  };

  const onRemoveLast = async () => {
    const lastElement = thirdList[thirdList.length - 1];
    setThirdList(thirdList.filter((item) => item.id !== lastElement.id));

    try {
      await axios.delete(`${API_URL}/${lastElement.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="boardWrapper">
        <Item
          buttonLeftName={"Transfer first to right"}
          list={firstList}
          onClick={onAddToRight}
        />
        <Item
          buttonLeftName={"Transfer first to left"}
          buttonRightName={"Transfer first to right"}
          list={secondList}
          onClick={onAddToLeft}
          onAddToLast={onAddToLast}
        />
        <Item
          buttonLeftName={"Remove last item"}
          list={thirdList}
          onClick={onRemoveLast}
        />
      </div>
    </>
  );
};

export default Board;
