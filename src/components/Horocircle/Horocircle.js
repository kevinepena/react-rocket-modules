import React, { Component } from "react";
import "./Horocircle.css";


export default class Horocircle extends Component {

    constructor(props) {
        super(props);
        this.spinny = this.spinny.bind(this);
    }

    componentDidMount() {
        this.spinny()
    }

    // Function for creating the icons' spin animation
    spinny() {
        console.log("begin spinny");

        let type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
            radius = '12em', //distance from center
            start = 0, //shift start from 0
            $elements = document.querySelectorAll(".signIcon"),
            numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
            slice = 360 * type / numberOfElements;



        $elements.forEach((elem, i) => {
            let $self = elem,
                rotate = slice * i + start,
                rotateReverse = rotate * -1;

            $self.style.transform = `rotate(${rotate}deg) translateY(-${radius}) rotate(${rotateReverse}deg)`;
            $self.style.opacity = '1';
            $self.style.WebkitTransition = 'all 5s cubic-bezier(0.25,1,0.2,1)';
            $self.style.MozTransition = 'all 5s cubic-bezier(0.25,1,0.2,1)';
            $self.style.MsTransition = 'all 5s cubic-bezier(0.25,1,0.2,1)';
            $self.style.OTransition = 'all 5s cubic-bezier(0.25,1,0.2,1)';
            $self.style.transition = 'all 5s cubic-bezier(0.25,1,0.2,1)';
        });
    }


    render() {
        return (
            <div>
                <ul id="signsList">
                    <li id="aries" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Aries" src="images/aries.png" />
                        </a>
                    </li>
                    <li id="taurus" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Taurus" src="images/taurus.png" />
                        </a>
                    </li>
                    <li id="gemini" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Gemini" src="images/gemini.png" />
                        </a>
                    </li>
                    <li id="cancer" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Cancer" src="images/cancer.png" />
                        </a>
                    </li>
                    <li id="leo" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Leo" src="images/leo.png" />
                        </a>
                    </li>
                    <li id="virgo" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Virgo" src="images/virgo.png" />
                        </a>
                    </li>
                    <li id="libra" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Libra" src="images/libra.png" />
                        </a>
                    </li>
                    <li id="scorpio" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Scorpio" src="images/scorpio.png" />
                        </a>
                    </li>
                    <li id="sagittarius" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Sagittarius" src="images/sagittarius.png" />
                        </a>
                    </li>
                    <li id="capricorn" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Capricorn" src="images/capricorn.png" />
                        </a>
                    </li>
                    <li id="aquarius" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Aquarius" src="images/aquarius.png" />
                        </a>
                    </li>
                    <li id="pisces" className="signIcon">
                        <a href="#">
                            <img className="signImg tooltipped" data-position="top" data-tooltip="Pisces" src="images/pisces.png" />
                        </a>
                    </li>
                    <li id="sun" className="menuIcon">
                        <a href="#">
                            <img className="tooltipped" data-position="right" data-tooltip="Find your Sign" id="sunImg" src="images/sun.png" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

