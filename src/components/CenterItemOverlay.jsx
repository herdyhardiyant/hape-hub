

function CenterItemOverlay({ children, isShown, onBackdropClick }) {

    return isShown && (
        <>
            <div className=' flex justify-center items-center fixed bg-black opacity-70 w-screen h-screen z-10 top-0 left-0' onClick={onBackdropClick} >
            </div>
            <dialog className=' text-white flex flex-col justify-center items-center z-20 h-auto w-64 rounded-lg bg-stone-800'>
                {children}
            </dialog>
        </>

    );
}

export default CenterItemOverlay;