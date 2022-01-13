import React from "react"

const Navbar = (props)=>{
    return <div className="absolute px-8 py-5 z-10 w-full top-0">
        <ul className="text-white flex justify-center link-list">
            <li>
                <u>Home</u>
            </li>
            <li>
                Blogs
            </li>
            <li>
                Donate
            </li>
        </ul>
        <div className="absolute top-0 p-3 bg-white bg-opacity-40 text-white ">
            <p className="text-sm text-black">
                teams
            </p>
            <h3 className="text-center text-4xl font-bold text-black">
                A
            </h3>
        </div>
    </div>
}

export default Navbar