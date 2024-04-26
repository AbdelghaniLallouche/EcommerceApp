
const About = () => {
  const about = [
    {
      title: "Mission",
      icon: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      title: "Vision",
      icon: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      title: "History",
      icon: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
  ];
  return (
    <div className="mx-4 mt-4 p-4 bg-[#EADED7] flex flex-col justify-start items-center lil:items-start">
      <div className="flex flex-col lil:flex-row justify-between lil:gap-20 gap-10 items-center">
        <h1 className="text-2xl text-center font-bold w-full text-[#563227]">
          Costum Forniture Built Only for You
        </h1>
        <p className="text-sm text-[#563227]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius atque
          amet dignissimos sint odit voluptate molestias quo in fugiat.
          Obcaecati libero soluta dolores asperiores veniam at accusantium neque
          sequi mollitia minus. Beatae eius excepturi molestiae voluptas fuga
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly w-full gap-5 mt-10 items-center">
        {about.map((item) => (
          <div className="flex flex-col rounded-sm p-4 h-72 w-78 bg-[#C5A491] justify-evenly items-center">
            <div className="flex flex-col items-center">
              <div className="bg-[#EADED7] w-12 h-12 rounded-full">
                
              </div>
              <h1 className="text-xl font-bold mt-1 text-[#563227]">{item.title}</h1>
            </div>
            <p className="text-sm text-[#563227]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
