

const AddProperty = () => {
    return (
        <div  style={{backgroundImage:'url(https://i.ibb.co/S0PRyFS/menu-bg.png)'}}>
           <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className=" px-4  ">
            <div className="p-8 px-4 bg-white dark:bg-gray-900">
                <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
                    <div>
                        <h2 className="px-4 text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">Your Information
                        </h2>
                        <p className="px-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Select your exact time of arrival and departure.
                        </p>
                    </div>
                    <div>
                        <form action="#" method="post">
                            <div className="px-4 mb-6">
                                <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Full Name</label>
                                <input
                                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                    type="text" name="" placeholder="Enter a name"/>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <div className="w-full px-4 mb-6 lg:w-2/4">
                                    <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Active
                                        From</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="date"
                                            className="border  rounded text-gray-900 sm:text-sm focus:outline-none dark:text-gray-400 dark:placeholder-gray-500 block w-full pl-10 p-2.5 dark:bg-gray-800 dark:border-gray-800 "
                                            placeholder="Select date"/>
                                    </div>
                                </div>
                                <div className="w-full px-4 mb-6 lg:w-2/4">
                                    <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Deactive
                                        After</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="date"
                                            className="border  rounded text-gray-900 sm:text-sm  dark:text-gray-400 dark:placeholder-gray-500 block w-full pl-10 p-2.5 dark:bg-gray-800 dark:border-gray-800 "
                                            placeholder="Select date"/>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    htmlFor="file_input">Upload file</label>
                                <input
                                    className="block w-full text-sm text-gray-600 border border-gray-200 rounded cursor-pointer file:hover:bg-gray-200 file:border-solid file:border-0 file:cursor-pointer dark:file:border-gray-700 dark:file:text-gray-300 dark:file:hover:bg-gray-500 dark:file:bg-gray-600 file:mr-5 file:px-5 file:py-3 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 file:border-r file:border-gray-300 file:bg-gray-100 "
                                    type="file"/>
                            </div>
                            <div className="px-4 mb-6">
                                <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Redirect in</label>
                                <input
                                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                    type="text" name="" placeholder="Redirect"/>
                            </div>
                            <div className="px-4 mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Photo
                                </label>
                                <div className="flex items-center mt-1">
                                    <span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                                        <svg className="w-full h-full text-gray-300" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z">
                                            </path>
                                        </svg>
                                    </span>
                                    <button type="button"
                                        className="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded shadow-sm dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-600 hover:bg-gray-100 ">Change</button>
                                </div>
                            </div>
                            <div className="px-4 mb-6">
                                <label className="block mb-2 text-sm font-medium dark:text-gray-400">Remark</label>
                                <textarea
                                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                    name="field-name" rows="5" placeholder="Write something..."></textarea>
                            </div>
                            <div className="px-4 ">
                                <div className="flex ">
                                    <button type="button"
                                        className="inline-block px-6 py-2.5 bg-blue-500  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg ">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </div>
    );
};

export default AddProperty;