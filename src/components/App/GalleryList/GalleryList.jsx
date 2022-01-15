//importing the image
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, like, handleClick, idClicked}) {
    return(
        <div>
            {
                galleryList.map(image => (
                    <GalleryItem key = {image.id} image = {image} like = {like} handleClick= {handleClick} idClicked = {idClicked}/>
                ))
            }
        </div>
    );
}

export default GalleryList;