import { format } from 'date-fns';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const BookingModal = ({ Appoi, selecteddate, setAppoi }) => {
    const date = format(selecteddate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: Appoi.name,
            patient: name,
            slot,
            email,
            phone,
        }
        console.log(booking);
        setAppoi(null);
        toast.success("Success Notification !");
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form onSubmit={handleBooking}>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold text-start mb-[50px]"> {Appoi?.name}</h3>

                        <input type="text" value={date} className="input h-[48px] mb-[23px] w-full max-w-full p-[12px] text-black bg-[#E6E6E6]" />

                        <select className="select h-[48px] mb-[23px] w-full max-w-full p-[12px] text-black bg-[#E6E6E6]" name='slot'>
                            {
                                Appoi.slots.map((slot, i) => <option key={i}>{slot}</option>)
                            }
                        </select>

                        <input type="text" placeholder="Full Name" name='name' className="input h-[48px] mb-[23px] w-full max-w-full p-[12px] text-black input-bordered" />

                        <input type="text" placeholder="Phone Number" name='phone' className="input h-[48px] mb-[23px] w-full max-w-full p-[12px] text-black input-bordered" />

                        <input type="text" placeholder="Email" name='email' className="input h-[48px] mb-[23px] w-full max-w-full p-[12px] text-black input-bordered" />
                        <button className="btn btn-block" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookingModal;