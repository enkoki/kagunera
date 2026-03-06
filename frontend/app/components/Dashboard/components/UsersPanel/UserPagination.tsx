interface UserPaginationProps {
    count: number;
}

const UserPagination: React.FC<UserPaginationProps> = ({ count }) => {
    return (
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <span className="order-2 sm:order-1 font-medium text-neutral-400">Showing {count} total members</span>
            <div className="flex gap-2 order-1 sm:order-2">
                <button className="px-4 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors">Prev</button>
                <button className="px-4 py-1.5 rounded-lg border border-neutral-700 bg-purple-500/20 text-purple-400 font-bold">1</button>
                <button className="px-4 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors">Next</button>
            </div>
        </div>
    );
};

export default UserPagination;