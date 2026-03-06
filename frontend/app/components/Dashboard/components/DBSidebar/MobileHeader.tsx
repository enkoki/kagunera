import Image from "next/image"
import siteLogo from "@/app/assets/images/anisync_dark.png"
import Hamburger from "@/app/assets/icons/Hamburger"

const MobileHeader = ({ onOpen }: { onOpen: () => void }) => (
    <div className="lg:hidden fixed top-0 left-0 w-full bg-neutral-900 border-b border-neutral-800 p-4 flex justify-between items-center z-40 h-[60px] sm:h-[65px] md:h-[70px]">
        <div className="flex items-center">
            <Image src={siteLogo} alt="site logo" width={32} height={32}/>
        </div>
        <button onClick={onOpen} className="text-white p-2 hover:bg-neutral-800 rounded-lg transition-all">
            <Hamburger width = {32} height ={32} className='xl:hidden cursor-pointer relative right-0' />
        </button>
    </div>
)
export default MobileHeader