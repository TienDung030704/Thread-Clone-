import { fetchPosts, productService } from "@/service/product/productService";
import { useDispatch, useSelector } from "react-redux";

// Ben nay bắn dữ lieu đi nhưng ko có truyen 2 param page và  per_page nen  sang ben kia nó bị underfine
// Hàm dispatch cho danh sách bài feed fetch lần đầu
export const useProductList = () => {
  const dispatch = useDispatch();
  const product = async () => {
    const result = await dispatch(productService());
    return result.payload;
  };
  return product;
};
// Hàm dispatch dùng cho Infinity scroll fetch thêm khi scroll
export const useFetchProduct = () => {
  const dispatch = useDispatch();
  const fetch = async (page) => {
    const result = await dispatch(fetchPosts(page));
    return result.payload;
  };
  return fetch;
};

export const useGetCurrentProduct = () => {
  const currentProduct = useSelector((state) => state.post.currentProduct);
  console.log(currentProduct);
  return currentProduct;
};
export const useGetCurrentFetch = () => {
  const currentFetch = useSelector((state) => state.post.currentFetch);
  return currentFetch;
};
