import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import styled from "styled-components";
import Chair from "./Chair";

// const Desc = styled.div`
//   width: 210px;
//   height: 80px;
//   padding: 20px;
//   background-color: white;
//   border-radius: 10px;
//   position: absolute;
//   top: 200px;
//   right: 100px;
//   color: black;

//   @media only screen and (max-width: 768px) {
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//   }
// `;

const Development = () => {
    return (
        <>
            <Canvas >


                <Stage enviroment="city" intensity={0.6}>
                    <Chair />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />

            </Canvas>
            {/* <Desc>
                We design products with a strong focus on both world class design and
                ensuring your product is a market success.
            </Desc> */}
        </>
    );
};

export default Development;