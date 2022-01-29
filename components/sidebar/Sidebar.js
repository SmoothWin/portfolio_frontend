import Head from "next/head"

const Sidebar = (prop)=>{
    return(
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true}/>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;300;500&display=swap" rel="stylesheet"/>
        </Head>
    
        <nav className="h-full fixed w-60 flex flex-col bg-grey text-black">
            
            <div className="flex flex-col">
                <div className="btn-sidebar">Item1</div>
                <div className="btn-sidebar">Item2</div>
                <div className="btn-sidebar">Item3</div>
            </div>
        </nav>
        </>
    )
}

export default Sidebar
