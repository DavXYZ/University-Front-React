import Footer from "../common/Footer";
import Header from "../common/Header";
import NavBar from "../common/Navbar";
import Resource from "../common/Resource";
import ImageTitle from "./ImageTitle";
import PresentationProgress from "./PresentationProgress";
import Main from "./Main";


function TitleSelection() {
    return (
        <>
            <>
                <Header />
                <NavBar />
                <Resource />
                <ImageTitle />
                <PresentationProgress />
                {/* <TitleNavigation /> */}
                <Main />
                <Footer />
            </>
        </>
    );
}

export default  TitleSelection;
