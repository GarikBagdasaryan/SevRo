import DocumentSlice from "../../components/Document-slice/DocumentSlice";
import Header from "../../components/Header/Header";
import NewsSlice from "../../components/NewsSlider/NewsSlider";

function Fighterspage() {
    return (
        <div className="Fighterspage">
            <Header />
            <DocumentSlice />
            <NewsSlice />
        </div>
    );
}

export default Fighterspage;
