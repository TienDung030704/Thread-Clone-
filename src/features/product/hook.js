import { productService } from "@/service/product/productService";
import { useDispatch, useSelector } from "react-redux";

export const useProductList = () => {
  const dispatch = useDispatch();
  const product = async () => {
    const result = await dispatch(productService());
    return result.payload;
  };
  return product;
};
export const useGetCurrentProduct = () => {
  const currentProduct = useSelector((state) => state.list.currentProduct);
  return currentProduct;
};
