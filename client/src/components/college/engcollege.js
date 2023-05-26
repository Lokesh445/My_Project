import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Rating } from "@mui/material";



const Engcollege = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:50/engcollege');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const handleItemClick = (id) => {
    // Navigate to the new page with data details
    navigate(`/EngCollegeDetails/${id}`);
  };



  return (
    <>
      <div className="text-center pt-5 " style={{overflow:"hidden"}}>
        <h2>List of Top 10 Engineering Colleges in 2023</h2>
        <h2>Based on 2023 Ranking</h2>
        <div className="row justify-content-center pt-5" >
          {data.map((value, index) => (
            <div className="card shadow col-lg-3 p-3" style={{ margin: "50px", paddingBottom: "20px" }} >
              <img className="card-img-top p-2" height="300px" width="200px" src={value.clg_image} />
              <div className="card-body">
                <h5 style={{ color: "blue", padding: "10px" }}><Link to={`/EngCollegeDetails/${value.id}`} style={{ textDecoration: "none", color: "inherit" }} onClick={() => handleItemClick(value.id)} className="card-title">{value.clg_name}</Link></h5>
                <h5>{value.review}</h5>
              </div>
              <h5>{value.ranking}</h5>
              <p className='text-center'><Rating name="size-small" defaultValue={4} size="small" /></p>
              <Link to={`/EngCollegeDetails/${value.id}`} onClick={() => handleItemClick(value.id)} class="btn btn-warning ">View More...</Link>
              <br />

            </div>


          ))}
        </div>
      </div>
    </>
   
  );
};
// const inboxItemStyle = ({hover}) => ({
//  TransformStreamDefaultController
// })

export default Engcollege;