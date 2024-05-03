import { useRef, useState } from "react";
import { CloseIcon } from "../public/Svgs";

const AdminPanel = () => {
  const ref = useRef();
  const [images, setImages] = useState([]);
  const [homepics, setHomepics] = useState([
    //bring them from database too
    {
      id: 1,
      pic: "../src/Pics/makeup.jpg",
    },
    {
      id: 2,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 3,
      pic: "../src/Pics/wol.jpg",
    },
    {
      id: 4,
      pic: "../src/Pics/a.jpg",
    },
  ]);
  return (
    <div className="bg-white rounded-xl mx-5 p-3 w-calc(100% - 40px) mt-2">
      <h1 className="txt mb-2">Home Pictures :</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          ref.current.click();
        }}
        className="inputt uppercase my-2 hover:bg-gray-500 duration-1000"
      >
        Upload Image to the home page
      </button>
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          let pic = URL.createObjectURL(file);
          setImages([...images, { pic: pic, id: homepics.length + 1 }]);
        }}
        ref={ref}
        style={{ display: "none" }}
      />
      <div className="flex flex-row flex-wrap justify-start gap-2 items-center">
        {homepics.map((homepic) => (
          <div className="w-[290px] relative h-[200px]" key={homepic.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                //delete from database after confirmation
                setHomepics(homepics.filter((pic) => pic.id !== homepic.id));
              }}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              <CloseIcon />
            </button>

            <img
              src={homepic.pic}
              className="w-full h-full object-cover"
              alt="homepic"
            />
          </div>
        ))}
        {images.map((image) => (
          <div className="w-[300px] relative h-[200px]" key={image.id}>
            <img
              src={image.pic}
              className="w-full h-full object-cover"
              alt="homepic"
            />

<button
              onClick={(e) => {
                e.preventDefault();
                //dont delete it from database cause it's not saved to database yet
                setImages(images.filter((pic) => pic.id !== image.id));
              }}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              <CloseIcon />
            </button>

          </div>
        ))}
      </div>
      {
        (images && images.length > 0) &&
        <div className="flex flex-col gap-2 justify-center items-start">
            <button
                onClick={(e) => {
                e.preventDefault();
                //add to database images not homepics
                setHomepics([...homepics, ...images]);
                setImages([]);
                }}
                className="inputt uppercase mt-2 hover:bg-gray-500 duration-1000"
            >
                Save
            </button>
            <button
                onClick={(e) => {
                e.preventDefault();
                setImages([]);
                }}
                className="inputt uppercase hover:bg-gray-500 duration-1000"
            >
                Cancel
            </button>
        </div>
      }
    </div>
  );
};

export default AdminPanel;
