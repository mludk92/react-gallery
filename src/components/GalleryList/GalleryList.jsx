import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, getGallery }) {
    return (
        <>
            {galleryList.map((photo) => {
                return (
                    <GalleryItem
                    key={item.id}
                    title={item.title}
                    path={item.path}
                    likes={item.likes}
                    getGallery={getGallery}
                />
                )
            })}
        </>
    )
}

export default GalleryList;