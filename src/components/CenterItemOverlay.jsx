function CenterItemOverlay({children}) {
    return (
        <>
            <div className=' fixed bg-black opacity-70 w-screen h-screen z-10 top-0 left-0'>

            </div>
            <div className='fixed flex justify-center items-center w-screen h-screen z-20 top-0 left-0'>
              {children}
            </div>
        </>
    );
}

export default CenterItemOverlay;