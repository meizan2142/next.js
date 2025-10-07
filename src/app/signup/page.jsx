"use client"
import React from "react";

const SignUp = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        const response = await fetch("http://localhost:3000/signup/new-user", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json",
            },
        });

        console.log(response);
    };

    return (
        <form
            onSubmit={handleRegister}
            className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md pt-20 mx-auto"
        >
            {/* Header */}
            <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
                <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                    Sign Up
                </h3>
            </div>

            {/* Form Inputs */}
            <div className="flex flex-col gap-4 p-6">
                {/* Full Name */}
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        name="name"
                        type="text"
                        placeholder=" "
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm text-blue-gray-700 outline-none transition-all 
              placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 
              focus:border-2 focus:border-cyan-500 focus:border-t-transparent disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label
                        className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] 
              font-normal leading-tight text-blue-gray-400 transition-all 
              peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 
              peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500"
                    >
                        Name
                    </label>
                </div>

                {/* Email */}
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        name="email"
                        type="email"
                        placeholder=" "
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm text-blue-gray-700 outline-none transition-all 
              placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 
              focus:border-2 focus:border-cyan-500 focus:border-t-transparent disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label
                        className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] 
              font-normal leading-tight text-blue-gray-400 transition-all 
              peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 
              peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500"
                    >
                        Email
                    </label>
                </div>

                {/* Password */}
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        name="password"
                        type="password"
                        placeholder=" "
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm text-blue-gray-700 outline-none transition-all 
              placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 
              focus:border-2 focus:border-cyan-500 focus:border-t-transparent disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label
                        className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] 
              font-normal leading-tight text-blue-gray-400 transition-all 
              peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 
              peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500"
                    >
                        Password
                    </label>
                </div>

                {/* Remember Me */}
                <div className="-ml-2.5">
                    <div className="inline-flex items-center">
                        <label
                            htmlFor="checkbox"
                            className="relative flex cursor-pointer items-center rounded-full p-3"
                        >
                            <input
                                id="checkbox"
                                type="checkbox"
                                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all 
                  checked:border-cyan-500 checked:bg-cyan-500"
                            />
                            <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="h-3.5 w-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 
                      1 0 01-1.414 0l-4-4a1 1 0 
                      011.414-1.414L8 12.586l7.293-7.293a1 
                      1 0 011.414 0z"
                                    />
                                </svg>
                            </span>
                        </label>
                        <label
                            htmlFor="checkbox"
                            className="mt-px cursor-pointer select-none font-light text-gray-700"
                        >
                            Remember Me
                        </label>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="p-6 pt-0">
                <button
                    type="submit"
                    className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 
            text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 
            transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-85 disabled:pointer-events-none 
            disabled:opacity-50 disabled:shadow-none"
                >
                    Sign Up
                </button>

                {/* Sign In link */}
                <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                    Already have an account?
                    <a
                        className="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
                        href="#signin"
                    >
                        Sign In
                    </a>
                </p>
            </div>
        </form>
    );
};

export default SignUp;
