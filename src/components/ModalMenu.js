import React from 'react';

const ModalMenu = ({visible, onClose}) => {

    // close ModalMenu
    const handleOnClose = (e) => {
        if(e.target.id === 'container')
        onClose();
    };

    if(!visible) return null;

    return (
        <div 
            id = "container"
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
            onClick={handleOnClose}
        >
            <div className="bg-white p-2 rounded">
                <div className="modal-header">
                    <h4 className="modal-title">Menu</h4>
                </div>
                <div className="modal-body">
                    Body
                </div>
                <div className="modal-footer">
                    <button 
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalMenu;