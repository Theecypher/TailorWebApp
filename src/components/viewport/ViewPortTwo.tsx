

type Props = {
  children: React.ReactNode;
};


const ViewPortTwo = ({children}: Props) => {
    return ( 
        <div className="flex flex-col h-screen overflow-hidden pt-10 ">

            <div className=" lg:border-b border-border"></div>
           
            <main className="flex flex-1 overflow-auto">
                {children}
            </main>
        </div>
     );
}
 
export default ViewPortTwo;