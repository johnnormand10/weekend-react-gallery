
function GalleryItem({image, like, handleClick, idClicked}) {
    //PUT (likes)


    function likeImage(){
        console.log('Like button pressed');
        like({image});
    }

    return(
        <div>
            <img src={image.path}
                onClick={() => {
                    handleClick(image.id);
                }}
            />
            {image.id === idClicked ? (
                <div>
                    <h3>{image.title}</h3>
                    <div>{image.description}</div>
                </div>
            ): (
                <div></div>
            )}
            <button onClick = {likeImage}>Like</button>
            <p> {image.likes} people have liked this image.</p>  
        </div>
    );

    
}

export default GalleryItem;