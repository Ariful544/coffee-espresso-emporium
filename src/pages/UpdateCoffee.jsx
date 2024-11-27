import React from 'react';
import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
    return (
        <div className='max-w-screen-xl px-4 md:px-0 min-h-screen mx-auto'>
            <button className='py-10 text-3xl text-shadow-lg text-[#374151]'><Link to="/">&#8592; Back to home</Link></button>
            <div className=' max-w-screen-lg mx-auto min-h-screen '>
                <div className='text-center'>
                    <h2 className='text-[45px] text-[#374151] text-shadow-xl'>Update Existing Coffee Details</h2>
                    <p className='text-lg text-[#374151]/70 font-raleway'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br></br> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed<br></br> to using Content here.</p>
                </div>
                <form className='mt-10 '>
                    <div className='grid font-raleway mb-6 md:grid-cols-2 grid-cols-1 gap-6'>
                        <div>
                            <label className='text-left text-[#1B1A1A]/80 text-xl font-semibold' htmlFor="">Name</label>
                            <input type="text" name='name' placeholder="Enter coffee name" className="input-container" />
                        </div>
                        <div>
                            <label className='text-left text-xl text-[#1B1A1A]/80 font-semibold' htmlFor="">Chef</label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input-container" />
                        </div>
                    </div>
                    <div className='grid font-raleway mb-6 md:grid-cols-2 grid-cols-1 gap-6'>
                        <div>
                            <label className='text-left text-[#1B1A1A]/80 text-xl font-semibold' htmlFor="">Supplier</label>
                            <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input-container" />
                        </div>
                        <div>
                            <label className='text-left text-xl text-[#1B1A1A]/80 font-semibold' htmlFor="">Taste</label>
                            <input type="text" name='taste' placeholder="Enter coffee Taste" className="input-container" />
                        </div>
                    </div>
                    <div className='grid font-raleway mb-6 md:grid-cols-2 grid-cols-1 gap-6'>
                        <div>
                            <label className='text-left text-[#1B1A1A]/80 text-xl font-semibold' htmlFor="">Category</label>
                            <input type="text" name='category' placeholder="Enter coffee Category" className="input-container" />
                        </div>
                        <div>
                            <label className='text-left text-xl text-[#1B1A1A]/80 font-semibold' htmlFor="">Details</label>
                            <input type="text" name='details' placeholder="Enter coffee Details" className="input-container" />
                        </div>
                    </div>
                    <div className='grid font-raleway mb-6 grid-cols-1 gap-6'>
                        <div>
                            <label className='text-left text-[#1B1A1A]/80 text-xl font-semibold' htmlFor="">Photo</label>
                            <input type="text" name='photo' placeholder="Enter photo URL" className="input-container" />
                        </div>
                    </div>
                    <div className='grid mb-6 grid-cols-1 gap-6'>
                       <button className='btn text-2xl bg-[#D2B48C] hover:bg-[#c6a271] text-[#331A15] border-2 border-[#331A15] hover:border-[#331A15]'>Update Coffee Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;