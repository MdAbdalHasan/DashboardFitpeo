
const NavBar = () => {
    return (
        <div className='flex justify-between pl-[63px] mt-[40px]'>
            <div className="text-black text-2xl font-bold font-['Poppins']">Hello Shahrukh 👋🏼,</div>
            <div className="w-[216px] h-[38px] relative mr-0">
                <div className="w-[216px] h-[38px] absolute bg-white rounded-xl shadow" />
                <svg className="ml-[10px] mt-[8px] absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="ml-[40px] mt-[10px] absolute text-gray-400 text-sm font-normal font-['Poppins']">
                    <input placeholder="Search" className="border-white" />
                </div>
                <div className="w-6 h-6 absolute" />
            </div>
        </div>
    )
}

export default NavBar