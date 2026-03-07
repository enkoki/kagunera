interface UserHeaderProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    count: number;
    setCurrentPage: (value: number) => void;
}

const UserHeader: React.FC<UserHeaderProps> = ({ searchTerm, setSearchTerm, count, setCurrentPage}) => {
    return (
        <header className="mb-8 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">User Management</h1>
                <p className="text-neutral-400 mt-1 text-sm md:text-base">View and manage your community members.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
                <div className="relative flex-1 sm:w-80">
                    <input 
                        type="text" 
                        placeholder="Search users..." 
                        value={searchTerm}
                        onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 transition-all text-white"
                    />
                </div>
                <div className="bg-neutral-800 px-4 py-2.5 rounded-xl text-xs flex items-center justify-center text-neutral-300 border border-neutral-700">
                    {count} Users Found
                </div>
            </div>
        </header>
    );
};

export default UserHeader;