import React,{ useEffect, useState } from 'react'
import Modal from 'react-modal';
import Image from './Image'
import {getTrendingImages, getSearchImages} from "../api/api"
import Masonry from 'react-masonry-component'

const modalStyle = {
    content : {
    border : "none",
    padding : "none",
    overflow : "none",
    background : "none",
},
};

const Gallery = ({query}) => {
    const [imageList , setImageList] = useState([]);
    const [currentImg,setcurrentImg]  =useState(null);

    useEffect(() =>{
        getTrendingImages().then((data) => {
            // console.log(data)
            setImageList(data);
        });
    },[])

    useEffect(async () =>{
        const data = await getSearchImages(query);
        if (query.trim() === ""){
            return;
        }
        setImageList(data);
        // console.log(data);
    },[query]);

    Modal.setAppElement('#app')
    return (
        <div>
        <Modal style={modalStyle} isOpen = {!!currentImg} onRequestClose={() => setcurrentImg(null)}>
            <img className="img-preview" src={currentImg} alt="image preview" />
        </Modal>
        {imageList.length === 0 ? <h2>No images found</h2> : null}
            <Masonry className="gird-Contaier" options={{ isFitWidth : true }}>
           {imageList.map((img) => {
               return (
                   <Image 
                   urls ={img.urls} 
                   handleClick = {setcurrentImg}
                   key={img.id}

                   />
                   );
           })}
           </Masonry>
        </div>
    )
}

export default Gallery
