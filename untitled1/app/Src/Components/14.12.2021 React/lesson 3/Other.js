import React from "react";

const Other = ({animal}) => {
    const photos = [
        "https://universe-tss.su/uploads/posts/2019-12/thumbs/1575496143_alfonso-de-la-torre-kongdynamic-pose-3-alf-013-1.jpg",
        "https://grandgames.net/puzzle/f1200/ribka_2.jpg",
        "https://101kote.ru/upload/medialibrary/46f/20.jpg",
        "https://agrovitex.ru/files/uploads/articles/korova-lug.jpg",
        "https://w-dog.ru/wallpapers/16/16/458098685630115/sobaka-vzglyad-drug.jpg"
    ]
    const PhotoSize = {
        width: 300 + "px"
    }

    let imageLink

    if (animal === "KINGKONG") imageLink = photos[0]
    if (animal === "Fish") imageLink = photos[1]
    if (animal === "cat") imageLink = photos[2]
    if (animal === "Cow") imageLink = photos[3]
    if (animal === "Dog") imageLink = photos[4]


    return (
        <div>
            <img style={PhotoSize} src={imageLink} alt=""/>
            <h1>Gyvunas yra {animal}</h1>
        </div>
    )
}

export default Other;