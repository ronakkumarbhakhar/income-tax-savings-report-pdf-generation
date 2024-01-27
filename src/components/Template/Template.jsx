import { useEffect,useRef,useState } from "react";
import Header from "../Header/Header";
import './Template.css'
import Footer from "../Footer/Footer";
import Keypoints from "../Keypoints/Keypoints";

export default function Template(props){
    const templateRef = useRef(null);

    return (
        <div ref={templateRef} className="Template">
            <Header>{props.header}</Header>
            <Keypoints>
                {props.children}
            </Keypoints>
            <Footer></Footer>
        </div>
    )
}

