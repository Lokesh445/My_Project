import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { Rating } from "@mui/material";

const ArtsCollegeDetails = () => {
    const { id } = useParams();
    const [dataDetails, setDataDetails] = useState(null);

    useEffect(() => {
        fetchDataDetails();
    }, []);

    const fetchDataDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:50/api/Artsdata/${id}`);
            setDataDetails(response.data);

        } catch (error) {
            console.error(error);
            console.log(dataDetails)
        }
    };

    return (
        <div>

            {dataDetails ? (
                <div className="card mb-3">
                    <h1 className="card-title p-3 text-center">{dataDetails.clg_name}</h1>
                    <img src={dataDetails.clg_image} classNameName="card-img-top" height="400px" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontWeight: "bolder" }}>{dataDetails.clg_name}</h5>
                        <p className="card-text">{dataDetails.clg_desc}</p>

                        <h6 className='text-center p-3' style={{ fontWeight: "bolder" }}>Course Fee  - <FontAwesomeIcon icon={faIndianRupee} /> {dataDetails.course_fee}/per year</h6>
                        <p className="card-text text-center p-3" style={{ fontWeight: "bolder" }}><span>AICTE (All India Institute of Technical Education)  -  </span>{dataDetails.ranking}</p>
                        <h6 className='text-center p-3' style={{ fontWeight: "bolder" }}>OverAll Review - <Rating name="size-small" defaultValue={4} size="small" /></h6>

                        <h4 className='text-center p-3'>Course and Eligibility</h4>
                        <table style={table}>
                            <th>Course</th>
                            <th>Fee</th>
                            <th>Eligibility</th>
                            <tr style={Tablerow}>
                                <td style={Header}>B.COM/M.COM</td>
                                <td style={Header}>1.12L per Year</td>
                                <td style={Header}>10,+12 With 75%</td>
                            </tr>
                            <tr style={Tablerow}>
                                <td style={Header}>B.Sc/M.Sc</td>
                                <td style={Header}>1.5L per Year</td>
                                <td style={Header}>Graduation with 60%</td>
                            </tr>
                            <tr style={Tablerow}>
                                <td style={Header}>MBA</td>
                                <td style={Header}>5L per Year</td>
                                <td style={Header}>Graduation with 75%</td>

                            </tr>
                        </table>
                    </div>
                </div>) : (
                <p>Loading data details...</p>
            )}
        </div>
    );
};
const Header = { border: "2px solid black" };
const Tablerow = { height: "60px", border: "2px solid black" }
const table = { height: "50px", width: "500px", border: "5px solid black", textAlign: "center", margin: "auto", backgroundColor: "LightGray", paddingTop: '50px' }

export default ArtsCollegeDetails;
