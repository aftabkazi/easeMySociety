// import first from './Images/first.jpg';

const ImageGallery=()=>{
    return(
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./Images/first.jpg" className="d-block w-100" alt="..."/>
            </div>
            </div>
        </div>
    </div>
    )
}
export default ImageGallery;