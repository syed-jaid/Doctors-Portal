import React from 'react';
import './Home.css';
import banner from '../../assets/images/chair.png';
import clock from '../../assets/images/clock.png';
import location from '../../assets/images/location.png';
import phone from '../../assets/images/phone.png';
import services1 from '../../assets/images/fluoride.png';
import services2 from '../../assets/images/cavity.png';
import services3 from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import doctor from '../../assets/images/doctor-small.png';
import mark from '../../assets/images/Mask.png';
import person from '../../assets/images/people1.png';

const Home = () => {
    return (
        <>
            {/* 1 */}
            <div className="hero banner min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse text-start">
                    <img src={banner} alt="chair for sit" className="lg:max-w-[594px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold max-w-[541px]">Your New Smile Starts Here</h1>
                        <p className="py-6 lg:mr-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn border-0 text-white bg-black text-white">Take Appointment</button>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className='text-start px-[11px] all-card'>
                <div className='home-card'>
                    <img className='home-card-img' src={clock} alt="" />
                    <div>
                        <h6 className='card-t'>Opening Hours</h6>
                        <p className='card-d'>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                <div className='home-card-dark'>
                    <img className='home-card-img' src={location} alt="" />
                    <div>
                        <h6 className='card-t'>Visit our location</h6>
                        <p className='card-d'>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                <div className='home-card'>
                    <img className='home-card-img' src={phone} alt="" />
                    <div>
                        <h6 className='card-t'>Contact us now</h6>
                        <p className='card-d'>+000 123 456789</p>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className='lg:mt-[131px]'>
                <h6 className='services-t'>OUR SERVICES</h6>
                <h4 className='services-sub-t'>Services We Provide</h4>
                <div className='flex lg:mt-[70px]'>
                    <div className='services-card'>
                        <img src={services1} alt="" />
                        <p>Fluoride Treatment</p>
                        <h6>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</h6>
                    </div>
                    <div className='services-card'>
                        <img src={services2} alt="" />
                        <p>Fluoride Treatment</p>
                        <h6>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</h6>
                    </div>
                    <div className='services-card'>
                        <img src={services3} alt="" />
                        <p>Fluoride Treatment</p>
                        <h6>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</h6>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="hero min-h-screen mt-[50px]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl mr-[102px]" alt='' />
                    <div className='w-[40%] text-start'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
            {/* 5 */}
            <div className='doctor-part'>
                <div className='flex items-center '>
                    <img className='mt-[-120px]' src={doctor} alt="" />
                    <div className='text-start'>
                        <h6 className='services-t mb-[22px]'>Appointment</h6>
                        <p className='text-[36px] font-semibold mb-[22px] text-white'>Make an appointment Today</p>
                        <p className='max-w-[553px] text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <button className="btn btn-primary mt-[22px] text-white">Get Started</button>
                    </div>
                </div>
            </div>
            {/* 6 */}
            <div className='mt-[100px]'>
                <div className='flex justify-between items-center'>
                    <div className='text-start'>
                        <h6 className='services-t'>Testimonial</h6>
                        <p className='text-[36px]'>What Our Patients Says</p>
                    </div>
                    <img src={mark} alt="" />
                </div>
                <div className='mt-[100px] flex justify-evenly'>
                    <div className='review-card'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex justify-start items-center mt-[38px]'>
                            <img className='person-img' src={person} alt="" />
                            <div className='text-start'>
                                <h5 className='person-name'>Winson Herry</h5>
                                <h5 className='person-con'>California</h5>
                            </div>
                        </div>
                    </div>
                    <div className='review-card'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex justify-start items-center mt-[38px]'>
                            <img className='person-img' src={person} alt="" />
                            <div className='text-start'>
                                <h5 className='person-name'>Winson Herry</h5>
                                <h5 className='person-con'>California</h5>
                            </div>
                        </div>
                    </div>
                    <div className='review-card'>
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className='flex justify-start items-center mt-[38px]'>
                            <img className='person-img' src={person} alt="" />
                            <div className='text-start'>
                                <h5 className='person-name'>Winson Herry</h5>
                                <h5 className='person-con'>California</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;