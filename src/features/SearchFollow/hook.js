import { searchService } from "@/service/search/searchService";
import { useDispatch, useSelector } from "react-redux";

export const useAutoSearch = () => {
  const dispatch = useDispatch();
  const search = async () => {
    const result = await dispatch(searchService());
    console.log(result.payload);
    return result.payload;
  };
  return search;
};
export const useGetCurrentSearch = () => {
  const currentSearch = useSelector((state) => state.list.currentSearch);
  return currentSearch;
};
