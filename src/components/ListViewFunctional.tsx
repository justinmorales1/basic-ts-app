import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subtractCount} from '../actions';
import { countState } from '../reducers/count';
import { StoreState } from '../reducers';



interface AppProps {
  nums: countState; //State from the reduce
  addCount: typeof addCount; //Action Creator
  subtractCount: typeof subtractCount; //Action Creator
}


export const ListViewFunctional: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: StoreState) => state.nums.count)

  const addButton = () => {
    dispatch(addCount());
  }

  const subtractButton = () => {
    dispatch(subtractCount());
  }

  return (
    <div> 
      Hello There
      <div>The count is: {count}</div>
          <button onClick={addButton}>Click to Add</button>
          <button onClick={subtractButton}>Click to Subtract</button>
    </div>
  )
}