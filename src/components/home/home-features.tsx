import React from "react";

const features = [
  {
    id: 1,
    title: "Alltid här för dig",
    content: ` Vår kundtjänst finns här alla dagar 
    i veckan, mellan kl. 08.00 och 
    21.00. Oavsett om du har frågor, 
    vill boka eller behöver support 
    hjälper vi dig gärna, när det passar 
    dig bäst`,
    image: "/icons/icon_.png",
  },
  {
    id: 2,
    title: " Certifierade experter",
    content: ` Hos oss möter du yrkesutbildade 
    experter med SRY-certifiering. Vi 
    tar hand om varje uppdrag med 
    professionalism, kvalitet och 
    omtanke, så att du alltid kan 
    känna dig trygg`,
    image: "/icons/icon_.png",
  },
  {
    id: 3,
    title: " 7 dagars garanti",
    content: ` Vi står alltid bakom vårt arbete. 
    Skulle du inte vara helt nöjd med 
    din flyttstädning justerar vi inom 7 
    dagar, helt kostnadsfritt. Din 
    trygghet och tillfredsställelse är 
    alltid vår högsta prioritet`,
    image: "/icons/icon_.png",
  },
  {
    id: 4,
    title: "Skräddarsydda tjänster",
    content: `Vi skräddarsyr våra flytt och 
    städtjänster efter just dina 
    önskemål. Hos oss får du en 
    lösning som är lika unik som du, 
    effektiv, flexibel och med omtanke 
    i varje detal`,
    image: "/icons/icon_.png",
  },
];

const HomeFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className=" ">
        <div className=" flex flex-col gap-6 md:gap-8 md:grid md:grid-cols-2">
          {features.map((e) => (
            <div key={e.id} className="flex flex-row gap-2 items-start md:items-center">
              <img className=" w-8 h-8 md:w-24 md:h-24" alt="icon"  src={e.image} />
              <div className=" w-full">
                <h2 className=" text-primary  text-lg md:text-xl font-semibold">{e.title}</h2>
                <p className="md:text-sm text-xs text-gray-800">{e.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="  w-[200px] hidden md:block">
        <div className=" w-[200px] ">
          <img className=" w-full object-contain" src={"/images/home-features.png"} />
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures
