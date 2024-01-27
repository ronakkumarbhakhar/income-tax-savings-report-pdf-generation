import './Footer.css';

function Footer(props){
    let footer;
    // if("date" in props.data){
    //     let date=new Date(props.data.date)
    //     date=date.toDateString().split(" ");
    //     footer= <div className="First-footer">
    //     <p>{props.data.name}</p>
    //     <p>{date[1]}, {date[2]} {date[3]}</p>
    //     </div>
    // }

    return (
        <div className="First-footer">
            <p>Sampada Deshpande</p>
            <p>Dec 1, 2023</p>
        </div>
    );
};
export default Footer;