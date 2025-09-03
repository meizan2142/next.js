import { useState } from 'react';

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="relative w-[100px] h-[50px] border rounded-full border-white">
            <label className="absolute w-full h-[50px] bg-gray-800 rounded-[25px] cursor-pointer border-[3px] border-gray-800">
                <input
                    type="checkbox"
                    className="absolute opacity-0 w-0 h-0"
                    checked={isChecked}
                    onChange={handleToggle}
                />
                <span className={`absolute w-full h-full rounded-[25px] transition-all duration-300 ${isChecked ? 'bg-gray-200' : 'bg-gray-800'}`}>
                    <span
                        className={`absolute top-[10px] left-[10px] w-[25px] h-[25px] rounded-full transition-all duration-300 
            ${isChecked ?
                                'translate-x-[50px] bg-gray-800 shadow-none' :
                                'bg-gray-800 shadow-[inset_12px_-4px_0px_0px_#d8dbe0]'}`}
                    />
                </span>
            </label>
        </div>
    );
};

export default ToggleSwitch;
