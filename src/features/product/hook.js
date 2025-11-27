import { fetchPosts, productService } from "@/service/product/productService";
import { useDispatch, useSelector } from "react-redux";
// Hàm dispatch cho danh sách bài feed
export const useProductList = () => {
  const dispatch = useDispatch();
  const product = async () => {
    const result = await dispatch(productService());
    return result.payload;
  };
  return product;
};
// Hàm dispatch dùng cho Infinity scroll
export const useFetchProduct = () => {
  const dispatch = useDispatch();
  const fetch = async (page) => {
    const result = await dispatch(fetchPosts(page));
    return result.payload;
  };
  return fetch;
};
export const useGetCurrentProduct = () => {
  const currentProduct = useSelector((state) => state.list.currentProduct);
  return currentProduct;
};
