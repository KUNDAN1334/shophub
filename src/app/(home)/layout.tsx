interface Props{
    children: React.ReactNode
}

const layout= ({children } : Props) =>{
    return (
        <div >
            <nav>
                This is the home layout
                
            </nav>
          {children}
        </div>
    );
}
export default layout;