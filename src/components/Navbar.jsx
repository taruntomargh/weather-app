

function Navbar(){
    return (
        <div className="w-full flex justify-around p-2">
            <h1 className="text-2xl font-semibold ">Weather</h1>
            <div className="flex gap-2 items-center">
                    <p className="text-lg">Delhi</p>
                <div className="flex gap-2">
                <input type="text" placeholder="Enter location..." className="p-2 bg-slate-200 text-black w-72 rounded"/>
                <button className="p-2 bg-blue-500 text-white rounded">Search</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;