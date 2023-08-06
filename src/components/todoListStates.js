import { useRecoilValue } from "recoil";
import { todoListStatesState } from "./selecter/todoListStatesState";

function TodoListStates() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, precentCompleted } =
    useRecoilValue(todoListStatesState);

  const formattedPercentCompleted = Math.round(precentCompleted * 100);

  return (
    <ul>
      <li>Total items : {totalNum}</li>
      <li>Items Completed : {totalCompletedNum}</li>
      <li>Items Uncompleted : {totalUncompletedNum}</li>
      <li>Precent Completed : {formattedPercentCompleted}</li>
    </ul>
  );
}

export default TodoListStates;
