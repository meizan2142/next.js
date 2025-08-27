"use client"
import React, { useState } from 'react';
import { postDetails } from './actions';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        district: '',
        thana: '',
        address: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);

        try {
            // Create FormData from the form element
            const formDataObj = new FormData(e.target);

            // Send the data to your API
            const res = await postDetails(formDataObj);

            if (res.success) { // Assuming your API returns {success: true}
                console.log("Submission succeeded");
                // You might want to reset the form here
                setFormData({
                    name: '',
                    phone: '',
                    district: '',
                    thana: '',
                    address: ''
                });
            } else {
                console.log("Submission failed:", res.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-[#EDDCD9] border-2 border-[#264143] rounded-2xl shadow-[3px_4px_0px_1px_#E99F4C] p-6 w-full max-w-md">
                <p className="text-[#264143] font-black text-2xl mt-5 mb-6">Order Form</p>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start mb-4">
                        <label className="text-[#264143] font-semibold mb-1" htmlFor="name">Name</label>
                        <input
                            placeholder="Enter your full name"
                            className="w-full p-3 border-2 border-[#264143] rounded shadow-[3px_4px_0px_1px_#E99F4C] focus:shadow-[1px_2px_0px_0px_#E99F4C] focus:translate-y-1 transition-all duration-150 outline-none"
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col items-start mb-4">
                        <label className="text-[#264143] font-semibold mb-1" htmlFor="phone">Phone</label>
                        <input
                            placeholder="Type your mobile number"
                            id="phone"
                            className="w-full p-3 border-2 border-[#264143] rounded shadow-[3px_4px_0px_1px_#E99F4C] focus:shadow-[1px_2px_0px_0px_#E99F4C] focus:translate-y-1 transition-all duration-150 outline-none"
                            type="number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col items-start mb-4">
                        <label className="text-[#264143] font-semibold mb-1" htmlFor="district">District</label>
                        <input
                            placeholder="Enter your district"
                            id="district"
                            className="w-full p-3 border-2 border-[#264143] rounded shadow-[3px_4px_0px_1px_#E99F4C] focus:shadow-[1px_2px_0px_0px_#E99F4C] focus:translate-y-1 transition-all duration-150 outline-none"
                            type="text"
                            value={formData.district}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col items-start mb-4">
                        <label className="text-[#264143] font-semibold mb-1" htmlFor="thana">Thana</label>
                        <input
                            placeholder="Enter your thana"
                            id="thana"
                            className="w-full p-3 border-2 border-[#264143] rounded shadow-[3px_4px_0px_1px_#E99F4C] focus:shadow-[1px_2px_0px_0px_#E99F4C] focus:translate-y-1 transition-all duration-150 outline-none"
                            type="text"
                            value={formData.thana}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col items-start mb-4">
                        <label className="text-[#264143] font-semibold mb-1" htmlFor="Address">Address</label>
                        <input
                            placeholder="Enter your Address"
                            id="address"
                            className="w-full p-3 border-2 border-[#264143] rounded shadow-[3px_4px_0px_1px_#E99F4C] focus:shadow-[1px_2px_0px_0px_#E99F4C] focus:translate-y-1 transition-all duration-150 outline-none"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-2">
                        <button className="w-full py-3 bg-[#DE5499] rounded-xl font-extrabold shadow-[3px_3px_0px_0px_#E99F4C] hover:opacity-90 focus:shadow-[1px_2px_0px_0px_#E99F4C] focus:translate-y-1 transition-all duration-150 my-6">
                            Place an Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;