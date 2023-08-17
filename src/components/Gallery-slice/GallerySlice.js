import AlbumCard from "../AlbumCard/AlbumCard";
import "../Gallery-slice/GallerySlice.scss";

function GallerySlice() {
	const ActionGallery = (event) => {
		let htmlElements = document.getElementsByClassName("AlbumCard__photo");
		console.log(htmlElements.length);
		for (let i = 0; i < htmlElements.length; i = i + 5) {
			htmlElements[i].style.width = "580px";
			htmlElements[i].style.height = "580px";
		}
	};
	return (
		<div className="Gallery-slice">
			<div className="container Gallery-slice-container">
				<div className="Gallery-slice__title">галерея</div>
				<div className="Gallery-slice__albums" onLoad={ActionGallery}>
					<div className="Gallery-slice__albums_row">
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
					</div>
					<div className="Gallery-slice__albums_row">
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
					</div>
					<div className="Gallery-slice__albums_row">
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
					</div>
					<div className="Gallery-slice__albums_row">
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
						<AlbumCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default GallerySlice;
