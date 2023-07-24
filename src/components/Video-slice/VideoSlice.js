function VideoSlice() {
    return (

        <div className="Video-slice">
            <video loop playsInline controls className="Video-slice__style">
                <source src="video/promo.mp4" type="video/mp4"></source>
            </video>
        </div>
    );
}

export default VideoSlice;