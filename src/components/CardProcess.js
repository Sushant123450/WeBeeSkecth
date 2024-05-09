import { MdArrowOutward } from "react-icons/md";

function CardProcess ({ProcessCardData}) {
    return (
        <div>
            <div>
                <img src={ProcessCardData.img} alt="yesss"/>
            </div>
            <div>
                <p>{ProcessCardData.title}</p>
                <p>{ProcessCardData.desc}</p>
            </div>
            <div>
                <button className="card-btn">Explore More <MdArrowOutward /></button>
            </div>
        </div>
    );
}

export default CardProcess;