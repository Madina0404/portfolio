import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DynamicPage = () => {
  const params = useParams();
  const [wrap, setWrap] = useState({});


  let navigate = useNavigate()

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/clothes${params.id}`
        );
        setWrap(response.data);
      } catch (error) {
        console.log(error);
      }
    };


    fetchData();
  }, [params.id]);


  return (
    <div  className=' flex items-center justify-center max-w-[1200px] m-auto gap-16'>
      <div>
      <button className='bg-red-500 hover:scale-150 text-white px-7 rounded-lg' onClick={()=>navigate(-1)}>out</button>
      <img src={wrap.thumbnail}  className='h-[500px] w-[600px] my-10 rounded-[20px]' alt="" />
      <button className='text-bold text-white bg-green-500 w-72 h-[50px]  transition ease-in-out duration-150 hover:shadow-lg shadow-cyan-500/50 hover:text-white px-7 rounded-lg'>Buy it</button>
      </div>
      <div  className='h-[500px] mt-48'>
        <h2 className='text-bold text-[30px] text-purple-600'>{wrap.title}</h2>
        <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae a doloribus nihil molestias quaerat consectetur delectus blanditiis rem perferendis.</p>
        <b className='text-[24px]'>{wrap.price}$</b><br />
      </div>
    </div>
  );
};

export default DynamicPage;
