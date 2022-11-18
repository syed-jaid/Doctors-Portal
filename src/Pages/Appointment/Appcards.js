import React from 'react';

const Appcards = ({ Appointment, setAppoi }) => {

    return (
        <div className='app-all-card'>
            {
                Appointment.map(Appoi =>
                    <div className='app-card' key={Appoi._id}>
                        <div>
                            <p>{Appoi.name}</p>
                            <h6>{Appoi.slots[0]}</h6>
                            <span>{Appoi.slots.length} SPACES AVAILABLE</span>
                            {Appoi.slots.length === 0 ? <label disabled className="btn btn-info" onClick={() => { setAppoi(Appoi) }}>Book Appointment</label> : <label htmlFor="my-modal-3" className="btn btn-info" onClick={() => { setAppoi(Appoi) }}>Book Appointment</label>}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Appcards;