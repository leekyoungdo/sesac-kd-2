import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PhotoDtailPage () {

    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState("Loading...");
    const {id} = useParams()

    const getPhotos = async () => {
     try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`
        );
        if (res.ok) {
            const pho = await res.json();
            setPhoto(pho);
          } else {
            throw Error("존재하지 않는 이미지입니다.");
          }
    }catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
  
    useEffect(() => {
        getPhotos();
    }, []);

    return(
        <>
        <div>여기는 이미지 상세 페이지</div>
        {photo ? (
            <ul>
                <li>번호 : {photo.id}</li>
                <li>타이틀 : {photo.title}</li>
                <img src={`${photo.thumbnailUrl}`} />
            </ul>
        ): (
            <div>{error}</div>
        )}
        
        </>
    )
}