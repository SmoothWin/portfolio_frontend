const Sidebar = (props)=>{
    return(
        <nav className="h-full w-60 fixed flex flex-col bg-grey text-blacktext">
            <div className="h-14 mb-2 flex items-center bg-gradient-to-r from-blue to-blue2 text-white"><div className="w-8"></div>Portfolio</div>
            <div className="flex flex-col">
                <div className="btn-sidebar">Item1</div>
                <div className="btn-sidebar">Item2</div>
                <div className="btn-sidebar">Item3</div>
            </div>
        </nav>
    )
}

export default Sidebar