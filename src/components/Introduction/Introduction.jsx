import Footer from "../common/Footer";
import Header from "../common/Header";
import LearnMore from "../common/LearnMore";
import NavBar from "../common/Navbar";
import Resource from "../common/Resource";
import Goal from "./Goal";
import HowToWriteArticle from "./HowToWriteArticle";
import Guide from "./Guide";
import TryToWrite from "./TryToWrite";


function Introduction() {
    return (
        <>
            <Header />
            <NavBar />
            <Resource />
            <HowToWriteArticle />
            <Goal />
            <Guide />
            <TryToWrite />
            <LearnMore />
            <Footer />
        </>
    );
}

export default Introduction;
