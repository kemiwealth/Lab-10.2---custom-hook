


import { useState } from "react";

function usePagination(totalItems: number, itemsPerPage: number = 10, initialPage: number = 1) {
    const [currentPage, setCurrentPage] = useState(initialPage)
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    if (currentPage > totalPages) {
        setCurrentPage(totalPages)
    }
    const startIndex = (currentPage-1) * itemsPerPage
    const endIndex = Math.min(totalItems-1, startIndex + itemsPerPage - 1) 
    const itemsOnCurrentPage = endIndex - startIndex + 1;
    const setPage = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const canNextPage = currentPage < totalPages ? true : false;
    const canPrevPage = currentPage > 1 ? true : false;

    const nextPage = () => {
        if (canNextPage) {
           setCurrentPage(prev => prev+1) 
        }
    }
    const prevPage = () => {
        if (canPrevPage) {
            setCurrentPage(prev => prev - 1)
        }
    }

    return {currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, setPage, nextPage, prevPage, canNextPage, canPrevPage}
}

export default usePagination;