import React from "react"

interface UserPaginationProps {
    count: number
    currentPage: number
    totalPages: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const UserPagination: React.FC<UserPaginationProps> = ({
    count,
    currentPage,
    totalPages,
    setCurrentPage
}) => {
    return (
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <span className="order-2 sm:order-1 font-medium text-neutral-400">
                Showing {count} total members
            </span>

            <div className="flex gap-2 order-1 sm:order-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-4 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 disabled:opacity-40"
                >
                    Prev
                </button>

                <span className="px-4 py-1.5 rounded-lg border border-neutral-700 bg-purple-500/20 text-purple-400 font-bold">
                    {currentPage} / {totalPages || 1}
                </span>

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-4 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 disabled:opacity-40"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default UserPagination