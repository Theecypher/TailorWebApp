import Navbar from "../navbar/Navbar";

type Props = {
  children: React.ReactNode;
};


const ViewPort = ({children}: Props) => {
    return ( 
        <div className="flex flex-col h-screen overflow-hidden  bg-borderThree">
            <Navbar />
            <main className="flex flex-1 overflow-auto px-5 py-5 p-3 lg:px-[50px]">
                {children}
            </main>
        </div>
     );
}
 
export default ViewPort;