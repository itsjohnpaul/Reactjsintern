import { useState } from "react";

export default function useSort(cart) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [category, setCategory] = useState("all");

  const filtersorted = cart.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter(item =>category === "all" ? true : item.category === category)
    .sort((a, b) => (sort ? a.price - b.price : 0));

  return {search,sort,category,filtersorted,setSearch,setSort,setCategory};
}
