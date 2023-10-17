
const Product = () => {
    return (
        <div className="w-[968px] h-[472px] relative left-[71px] top-[490px] bg-white">
            <div className="left-[38px] top-[22px] absolute text-black text-[22px] font-semibold font-['Poppins']">Product Sell
            </div>
            <div className="w-[216px] h-[38px] left-[544px] top-[24px] absolute">
                <div className="w-[216px] h-[38px] left-0 top-0 absolute bg-slate-50 rounded-[10px] border" />
                <svg className="left-[5px] top-[8px] absolute cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="left-[40px] top-[10px] absolute text-gray-400 text-xs font-normal font-['Poppins']">
                    <input placeholder="Search" />
                </div>
                <div className="w-6 h-6 left-[8px] top-[7px] absolute" />
            </div>
            <div className="w-[135px] h-[38px] left-[785px] top-[24px] absolute">
                <div className="w-[135px] h-[38px] left-0 top-0 absolute bg-slate-50 rounded-[10px] border" />
                <div className="w-6 h-6 left-[100px] top-[7px] absolute" />
                <div className="left-[15px] top-[10px] absolute text-zinc-500 text-xs font-normal font-['Poppins']">Last 30 days</div>
                <svg className="left-[80px] top-[8px] absolute cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <div className="w-[968px] h-[35px] left-0 top-[83px] absolute">
                <div className="w-[863px] h-[21px] left-[38px] top-0 absolute">
                    <div className="left-0 top-0 absolute text-gray-400 text-sm font-medium font-['Poppins']">Product Name</div>
                    <div className="left-[524px] top-0 absolute text-gray-400 text-sm font-medium font-['Poppins']">Stock</div>
                    <div className="left-[677px] top-0 absolute text-gray-400 text-sm font-medium font-['Poppins']">Price</div>
                    <div className="left-[787px] top-0 absolute text-gray-400 text-sm font-medium font-['Poppins']">Total Sales</div>
                </div>
                <div className="w-[968px] h-[0px] left-0 top-[35px] absolute border border-zinc-100"></div>
            </div>

            <div className="w-[835px] h-14 left-[38px] top-[138px] absolute">
                <div className="left-[506px] top-[16px] absolute text-zinc-800 text-sm font-normal font-['Poppins']">32 in stock</div>
                <div className="left-[664px] top-[16px] absolute text-black text-base font-medium font-['Poppins']">$ 45.99</div>
                <div className="left-[815px] top-[16px] absolute text-zinc-800 text-base font-normal font-['Poppins']">20</div>
                <div className="w-[441px] h-14 left-0 top-0 absolute">
                    <div className="left-[116px] top-[4px] absolute text-black text-lg font-semibold font-['Poppins']">Abstract 3D</div>
                    <div className="left-[116px] top-[35px] absolute text-slate-400 text-xs font-normal font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <img className="w-[90px] h-14 left-0 top-0 absolute rounded-lg" src="abstract3D.jpg" alt="error Loading" />
                </div>
            </div>
            <div className="w-[835px] h-14 left-[38px] top-[218px] absolute">
                <div className="left-[116px] top-[4px] absolute text-black text-lg font-semibold font-['Poppins']">Sarphens Illustration</div>
                <div className="left-[506px] top-[16px] absolute text-zinc-800 text-sm font-normal font-['Poppins']">32 in stock</div>
                <div className="left-[664px] top-[16px] absolute text-black text-base font-medium font-['Poppins']">$ 45.99</div>
                <div className="left-[815px] top-[16px] absolute text-zinc-800 text-base font-normal font-['Poppins']">20</div>
                <div className="left-[116px] top-[35px] absolute text-slate-400 text-xs font-normal font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <img className="w-[90px] h-14 left-0 top-0 absolute rounded-lg" src="sarphans.jpg" />
            </div>



        </div>
    )
}

export default Product