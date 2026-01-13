import { useMemo } from "react";
import React from "react";
const List = React.memo(({ numbers, addItem }) => {
  const total = useMemo(() => {
    console.log("Calculating...");
    return numbers.reduce((sum,num) =>sum +num*1000,0);
  }, [numbers]);

  return (
<div className="li">
      <h3>Total: {total}</h3>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
});

export default List;
