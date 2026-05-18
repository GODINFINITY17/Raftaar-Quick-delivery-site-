import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose, MdMyLocation } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);
    const [countryList, setcountryList] = useState([]);
    const [isDetecting, setIsDetecting] = useState(false);

    const context = useContext(MyContext);

    const selectCountry = (index, country) => {
        setselectedTab(index);
        setisOpenModal(false);
        context.setselectedCountry(country);
        localStorage.setItem("location", country);
        window.location.href = "/";
    }

    useEffect(() => {
        setcountryList(context.countryList);
    }, [context.countryList]);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword !== "") {
            const list = context.countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });
            setcountryList(list);
        } else {
            setcountryList(context.countryList);
        }
    }

    const detectLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsDetecting(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                    const data = await response.json();
                    let locationName = "Unknown Location";
                    
                    if (data && data.address) {
                        const addr = data.address;
                        const mainArea = addr.city || addr.town || addr.village || addr.suburb || addr.county || addr.state;
                        locationName = addr.suburb && addr.city ? `${addr.suburb}, ${addr.city}` : mainArea;
                    }
                    
                    if (locationName) {
                        selectCountry(null, locationName);
                    }
                } catch (error) {
                    console.error("Failed to reverse geocode:", error);
                    alert("Failed to detect location address");
                } finally {
                    setIsDetecting(false);
                }
            },
            (error) => {
                console.error("Geolocation error:", error);
                alert("Failed to get your current location. Please ensure location permissions are granted.");
                setIsDetecting(false);
            }
        );
    };

    return (
        <>
            <Button className='countryDrop' onClick={() => {
                setisOpenModal(true);
                setcountryList(context.countryList);
            }}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>
                        {context.selectedCountry !== "" 
                            ? (context.selectedCountry.length > 15 
                                ? context.selectedCountry?.substr(0, 15) + '...' 
                                : context.selectedCountry) 
                            : 'Select Location'}
                    </span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={() => setisOpenModal(false)}><MdClose /></Button>

                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area...' onChange={filterList} />
                    <Button><IoIosSearch /></Button>
                </div>

                <Button 
                    className='btn-blue btn-lg btn-big w-100 mt-3 d-flex align-items-center justify-content-center bg-red' 
                    onClick={detectLocation}
                    disabled={isDetecting}
                >
                    <MdMyLocation className="mr-2" style={{ fontSize: "20px" }} /> 
                    {isDetecting ? 'Detecting...' : 'Detect My Location'}
                </Button>

                <ul className='countryList mt-3'>
                    <li><Button onClick={() => selectCountry(0, "All")}>All</Button></li>
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}>
                                  <Button
                                    onClick={() => selectCountry(index + 1, item.iso2)}
                                    className={`${selectedTab === (index + 1) ? 'active' : ''}`}
                                  >
                                    {item.flag && (
                                      <img
                                        src={item.flag}
                                        alt={`Flag of ${item.country}`}
                                        style={{ width: 20, height: 15, marginRight: 8 }}
                                      />
                                    )}
                                    {item.country}
                                  </Button>
                                </li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;