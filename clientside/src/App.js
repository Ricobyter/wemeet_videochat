import Nav from "./components/Nav";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
export default function App() {
  return (
    <main >
      <Nav/>
      <section>
        <VideoPlayer/>
         
        <Options>
          <div className="p-3"></div>
          <Notifications /> 
          
              
        </Options>   
      </section>
    </main>
  )
}