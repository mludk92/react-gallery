

function GalleryItem({ photo, getGallery }) {
    const [likeCount, setLikeCount] = useState(photo.likes);

    return (
        <div>
            <img src={photo.path} />
            <p>{photo.description}</p>
            <button onClick={likePhoto}>Like</button>
            <p>Likes: {likeCount}</p>
        </div>
    )
}

export default GalleryItem;