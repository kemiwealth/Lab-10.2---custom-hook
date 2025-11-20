import { useState } from "react";
import PaginationDemo from "./PaginationDemo";

function Pagination() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(123);

  return (
    <div className="m-2">
      <h2 className="text-2xl font-bold text-center mb-5">Pagination Demo</h2>
      <label
        className="px-5 py-1 ml-5 text-center font-semibold"
        htmlFor="items-per-page"
      >
        Items Per Page:{" "}
      </label>
      <input
        id="items-per-page"
        className="border px-5 py-1 text-center font-semibold"
        type="number"
        step="1"
        min="5"
        max="20"
        value={itemsPerPage}
        onChange={(event) => {
            const value = Number(event.target.value)
            if (value >= 5 && value <= 20) {
                setItemsPerPage(value)
            }
        }
        }
      />
      <input
        id="total-items"
        className="border px-5 py-1 float-right mr-5 text-center font-semibold"
        type="number"
        step="1"
        min="20"
        max="150"
        value={totalItems}
        onChange={(event) => {
             const value = Number(event.target.value)
             if (value >= 20 && value <= 150) {
                setTotalItems(value)
             }
        } }
      />
      <label
        className="px-5 py-1 float-right mr-5 text-center font-semibold"
        htmlFor="total-items"
      >
        Total Items:{" "}
      </label>
      <PaginationDemo totalItems={totalItems} itemsPerPage={itemsPerPage} />
    </div>
  );
}

export default Pagination;