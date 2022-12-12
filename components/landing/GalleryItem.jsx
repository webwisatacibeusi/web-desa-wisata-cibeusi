import {IconButton} from "@chakra-ui/react";
import {BiShow} from "react-icons/bi";
import Image from 'next/image';

export default function GalleryItem({img}){
    return (
        <div className="relative overflow-hidden rounded-tl-2xl rounded-br-2xl group">
            <div className="absolute z-10 flex space-x-4 top-4 left-4">
            </div>
            <img
                className="relative z-0 w-full transition-all duration-300 hover:scale-110"
                src={img}
                alt={"gallery imaages"}
            />
        </div>
    )
}