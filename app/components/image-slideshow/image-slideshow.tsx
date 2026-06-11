"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import burgerImg from "../../../public/images/burger.jpg";
import curryImg from "../../../public/images/curry.jpg";
import dumplingsImg from "../../../public/images/dumplings.jpg";
import macncheeseImg from "../../../public/images/macncheese.jpg";
import pizzaImg from "../../../public/images/pizza.jpg";
import schnitzelImg from "../../../public/images/schnitzel.jpg";
import tomatoSaladImg from "../../../public/images/tomato-salad.jpg";

const imageArray = [
    {image: burgerImg, alt: "Food image"},
    {image: curryImg, alt: "Food image"},
    {image: dumplingsImg, alt: "Food image"},
    {image: macncheeseImg, alt: "Food image"},
    {image: pizzaImg, alt: "Food image"},
    {image: schnitzelImg, alt: "Food image"},
    {image: tomatoSaladImg, alt: "Food image"},
]

export default function ImageSliderShow() {
    let imageName = "burger.jpg";
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        let arrayIndex = 0;
        
        const interval = setInterval(()=> {
            setCurrentImageIndex(arrayIndex);
            if(arrayIndex<(imageArray.length-1)) {                
                arrayIndex++;
            } else {                
                arrayIndex = 0;
            }
        },2000)
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <Image 
        alt={imageArray[currentImageIndex].alt}
        src={imageArray[currentImageIndex].image}
        height={imageArray[currentImageIndex].image.height} 
        width={imageArray[currentImageIndex].image.width}/>
    )
}