import "./CronoPage.css";

export default function CronoGallery({data}){

    return <div>
    <img src="../img/arrow-icon-dwn.png" alt="flecha"/>
    <hr className="line"></hr>
    <div className="crono-gallery">
            {data.map((item, index) => 
            <div key={item.id} className={index % 2 === 0 ? "crono-gallery-item first-column" : "crono-gallery-item second-column"}>
                <p className="crono-p-age">{item.age}</p>
                <p className="crono-p">{item.name.toUpperCase()}</p>
                <div className="div-img">
                    <img src={item.image} alt={item.name}/>
                </div>
            </div>)}
     </div>
</div>
}