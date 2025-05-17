import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCars,
  selectPage,
  selectTotalPages,
} from "../../redux/cars/selectors";
import { nextPage } from "../../redux/cars/slice";
import s from "./LoadMoreBtn.module.css";

const LoardMoreBtn = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const loadMore = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage());
    }
  };
  const isLoadMore =
    cars.length > 0 &&
    currentPage < totalPages &&
    (cars.length >= 12 || currentPage === 1);

  return (
    <>
      {isLoadMore && (
        <button onClick={loadMore} className={s.loadMoreBtn}>
          Load more
        </button>
      )}
    </>
  );
};

export default LoardMoreBtn;
