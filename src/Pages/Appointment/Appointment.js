import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import banner from '../../assets/images/chair.png';
import { format } from 'date-fns';
import Appcards from './Appcards';
import BookingModal from '../BookingModal/BookingModal';

const Appointment = () => {
    const [selecteddate, setSelecteddate] = useState(new Date())

    const [Appointment, setAppointment] = useState([])

    const [Appoi, setAppoi] = useState(null)

    useEffect(() => {
        fetch('Serviecs.json')
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])

    return (
        <div>
            {/* 1 */}
            <div className="hero banner min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse text-start">
                    <img src={banner} alt="chair for sit" className="lg:max-w-[594px] rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selecteddate}
                            onSelect={setSelecteddate}
                        />
                    </div>
                </div>
            </div>
            <p className='services-t'>Your Selected Date is {format(selecteddate, 'PP')}.</p>
            <Appcards Appointment={Appointment} setAppoi={setAppoi}></Appcards>
            {Appoi && <BookingModal Appoi={Appoi} selecteddate={selecteddate} setAppoi={setAppoi}></BookingModal>}
        </div>
    );
};

export default Appointment;