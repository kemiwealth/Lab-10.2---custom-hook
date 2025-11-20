

import usePagination from "../hooks/usePagination";

interface PaginationDemoProps {
  totalItems: number;
  itemsPerPage: number;
}

function PaginationDemo({ totalItems, itemsPerPage }: PaginationDemoProps) {
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(totalItems, itemsPerPage);

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(i);
  }

  const items = [];
  for (let i = 1; i <= totalItems; i++) {
    items.push(`${i}. Item ${i}`);
  }

  return (
    <div>
      <ul className="mt-5 ml-3">
        {items.slice(startIndex, endIndex + 1).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex justify-around mt-5">
        <button
          className="border p-1 bg-blue-300 hover:bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={prevPage}
          disabled={!canPrevPage}
        >
          Previous
        </button>
        <div>
          Page
          <input
            className="ml-3 text-center hover:bg-green-200"
            type="number"
            name='page-number'
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(event) => setPage(Number(event.target.value))}
          />
          of {totalPages}
        </div>
        <button
          className="border p-1 bg-blue-300 hover:bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
      <div className="my-5 text-center">
        <h3 className="my-3">Choose the page:</h3>
        {pageButtons.map((pageButton, index) => (
          <button
            className="px-2 border bg-blue-300 hover:bg-blue-500 mx-2 my-1"
            key={index}
            onClick={() => setPage(pageButton)}
          >
            {pageButton}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginationDemo;