import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

function Home(){
    return(
        <div className="flex flex-col min-h-screen">
            <div className="">
               <Header /> 
            </div>
            <div className="flex-1">
               <Body /> 
            </div>
            <div>
               <Footer /> 
            </div>  
        </div>
    );
}

export default Home