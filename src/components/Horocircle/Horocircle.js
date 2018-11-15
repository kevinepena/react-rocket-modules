import React, { Component } from "react";
import "./Horocircle.css";


export default class Horocircle extends Component {

    state = {
        open: true
    }

    constructor(props) {
        super(props);
        this.spinny = this.spinny.bind(this);
        this.foldHoro = this.foldHoro.bind(this);
        this.menuClose = this.menuClose.bind(this);
        this.menuOpen = this.menuOpen.bind(this);
    }

    componentDidMount() {

        document.querySelectorAll('.signIcon').forEach(elem => {
            elem.addEventListener('click', this.foldHoro);
        });

        document.querySelector('.menuIcon').addEventListener('click', this.foldHoro);

        this.spinny();

    }

    // Function for creating the icons' spin animation
    spinny() {

        let type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
            radius = '200%', //distance from center
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
            $self.style.WebkitTransition = 'all 2s cubic-bezier(0.25,1,0.2,1)';
            $self.style.MozTransition = 'all 2s cubic-bezier(0.25,1,0.2,1)';
            $self.style.MsTransition = 'all 2s cubic-bezier(0.25,1,0.2,1)';
            $self.style.OTransition = 'all 2s cubic-bezier(0.25,1,0.2,1)';
            $self.style.transition = 'all 2s cubic-bezier(0.25,1,0.2,1)';
        });
    }

    foldHoro() {
        console.log('foolding');
        console.log(this.state.open);


        if (this.state.open) {
            this.menuClose();
        } else {
            this.menuOpen();
        }

    }

    menuClose() {
        console.log('closing');
        // Move icons to corner of page
        // $(".signIcon, .menuIcon").css({
        //     'transform': 'translate(-46vw, -44vh)',
        //     WebkitTransition: 'all 0.7s ease-in-out',
        //     MozTransition: 'all 0.7s ease-in-out',
        //     MsTransition: 'all 0.7s ease-in-out',
        //     OTransition: 'all 0.7s ease-in-out',
        //     transition: 'all 0.7s ease-in-out'
        // });
        let $elements = document.querySelectorAll(".signIcon");
        $elements.forEach(elem => {
            let $self = elem;
            $self.classList.add('closeHoro');
            $self.style.transform = `translateY(43vh) translateX(-40vw)`;
            $self.style.opacity = '1';
            $self.style.WebkitTransition = 'all 0.7s ease-in-out';
            $self.style.MozTransition = 'all 0.7s ease-in-out';
            $self.style.MsTransition = 'all 0.7s ease-in-out';
            $self.style.OTransition = 'all 0.7s ease-in-out';
            $self.style.transition = 'all 0.7s ease-in-out';
        });

        let menu = document.querySelector('.menuIcon');

        menu.classList.add('closeHoro')
        menu.style.transform = `translateY(43vh) translateX(-40vw)`;
        menu.style.opacity = '1';
        menu.style.WebkitTransition = 'all 0.7s ease-in-out';
        menu.style.MozTransition = 'all 0.7s ease-in-out';
        menu.style.MsTransition = 'all 0.7s ease-in-out';
        menu.style.OTransition = 'all 0.7s ease-in-out';
        menu.style.transition = 'all 0.7s ease-in-out';
        // Fade away sign icons, leave only sun icon
        // $(".signIcon").css("opacity", "0");
        // Change sun tooltip from "sign finder" to "open menu"
        // $("#sunImg").attr("data-tooltip", "Open Menu");
        this.setState({ open: false });
    }

    menuOpen() {
        console.log('opening');

        let $elements = document.querySelectorAll(".signIcon");
        $elements.forEach(elem => {
            let $self = elem;
            // $self.classList.add('closeHoro')
            $self.style.transform = `translate(calc(50% - 35px), calc(50% - 35px)`;
            $self.style.opacity = '1';
            $self.style.WebkitTransition = 'all 500ms ease-in-out';
            $self.style.MozTransition = 'all 500ms ease-in-out';
            $self.style.MsTransition = 'all 500ms ease-in-out';
            $self.style.OTransition = 'all 500ms ease-in-out';
            $self.style.transition = 'all 500ms ease-in-out';
        });

        let menu = document.querySelector('.menuIcon');

        menu.style.transform = `translate(calc(50% - 35px), calc(50% - 35px)`;
        menu.style.opacity = '1';
        menu.style.WebkitTransition = 'all 500ms ease-in-out';
        menu.style.MozTransition = 'all 500ms ease-in-out';
        menu.style.MsTransition = 'all 500ms ease-in-out';
        menu.style.OTransition = 'all 500ms ease-in-out';
        menu.style.transition = 'all 500ms ease-in-out';
        // Move icons back to center of page
        // $(".signIcon, .menuIcon").css({
        //     'transform': 'translate(calc(50% - 35px), calc(50% - 35px)',
        //     WebkitTransition: 'all 500ms ease-in-out',
        //     MozTransition: 'all 500ms ease-in-out',
        //     MsTransition: 'all 500ms ease-in-out',
        //     OTransition: 'all 500ms ease-in-out',
        //     transition: 'all 500ms ease-in-out'
        // });
        // Fade away previous horoscope box
        // $("#horoBox").css("opacity", "0");
        // Change sun tooltip from "open menu" to "sign finder"
        // $("#sunImg").attr("data-tooltip", "Find your Sign");
        // After icons have moved, run spin animation
        setTimeout(this.spinny, 500);
        this.setState({ open: true });
    }

    render() {
        return (
            <ul id="signsList">
                <li id="aries" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Aries" src="images/aries.png" />
                    </a>
                </li>
                <li id="taurus" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Taurus" src="images/taurus.png" />
                    </a>
                </li>
                <li id="gemini" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Gemini" src="images/gemini.png" />
                    </a>
                </li>
                <li id="cancer" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Cancer" src="images/cancer.png" />
                    </a>
                </li>
                <li id="leo" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Leo" src="images/leo.png" />
                    </a>
                </li>
                <li id="virgo" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Virgo" src="images/virgo.png" />
                    </a>
                </li>
                <li id="libra" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Libra" src="images/libra.png" />
                    </a>
                </li>
                <li id="scorpio" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Scorpio" src="images/scorpio.png" />
                    </a>
                </li>
                <li id="sagittarius" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Sagittarius" src="images/sagittarius.png" />
                    </a>
                </li>
                <li id="capricorn" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Capricorn" src="images/capricorn.png" />
                    </a>
                </li>
                <li id="aquarius" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Aquarius" src="images/aquarius.png" />
                    </a>
                </li>
                <li id="pisces" className="signIcon">
                    <a >
                        <img alt="" className="signImg tooltipped" data-position="top" data-tooltip="Pisces" src="images/pisces.png" />
                    </a>
                </li>
                <li id="sun" className="menuIcon">
                    <a >
                        <img alt="" className="tooltipped" data-position="right" data-tooltip="Find your Sign" id="sunImg" src="images/sun.png" />
                    </a>
                </li>
            </ul>
        )
    }
}

