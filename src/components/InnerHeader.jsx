import React, {useCallback} from 'react'

import Image from 'next/image'

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


import Animated from './Animated';
 

const InnerHeader = ({title, para, subhead, image, buttonlink, buttonlabel, hasAnim = true}) => {
  const options =
    {
        background: {
            color: {
                // value: "#000",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        fullScreen: false,
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 4,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        }
    };
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <header className={`inner-header ${image?'':'grr'}`}>
        {
            hasAnim &&
            <div className="particle-container">
                <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
            </div>
        }
        {image && <Image src={image} alt="" />}
        <div className="container">
            <div className="inner-header-con">
                { subhead && <Animated variant="fadeUp" ><h3 className='sub-head'>{subhead}</h3></Animated> }
                <Animated variant="scale" delay="0.2" ><h1 className="sec-head">{title}</h1></Animated>
                {
                    para && <Animated variant="scale" delay="0.3" ><p className='para'>{para}</p></Animated>
                }
            </div>
        </div>
    </header>
  )
}

export default InnerHeader