import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function PhotosPage () {
    const [photo, setPhoto] = useState(null);
    const getPhotos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const photos = await res.json();
      setPhoto(photos);
    };
  
    useEffect(() => {
        getPhotos();
    }, []);
    return(
        <>
        <div>여기는 포토 페이지</div>
        {photo ? (
          <>
            {photo.map((value) => (
              <ul key={value.id}>
                <li>번호: {value.id}</li>
                <li>이미지명: {value.title}</li>
                <img src = {`${value.thumbnailUrl}`}/>
                <li>
                  <Link to={`/photo/${value.id}`}>상세페이지로 이동하기</Link>
                </li>
              </ul>
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }