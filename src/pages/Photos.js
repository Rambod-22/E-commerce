import React, {useContext} from "react"
import Image from "../components/image"
import {UserContext} from "../Context"
import { getClass } from "../utils"

function Photos() {
    const {photos} = useContext(UserContext)
    const mappedPhotos = photos.map((photo, i) => {
        return(
            <Image key={photo.id} img={photo} className={getClass(i)}/>
        )
    })
    return (
        <main className="photos">
            {mappedPhotos}
        </main>
    )
}

export default Photos