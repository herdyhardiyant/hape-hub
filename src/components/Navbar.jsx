
function Navbar() {

    return (
        <div className='flex flex-row items-center justify-between align-middle bg-stone-800 p-4 px-6 h-20 shadow-lg'>
            <h1 className='text-4xl '>Hape Hub_@</h1>
            <div className='flex flex-row gap-10'>
                <button>register</button>
                <button>login</button>
            </div>

        </div>
    );
}


export default Navbar
    ;