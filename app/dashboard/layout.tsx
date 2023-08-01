import RightMenu from "@components/RightMenu"
import LeftMenu from "@components/Leftmenu"

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <>
            
            <main className="px-8 pt-24 flex justify-around flex-col md:flex-row">
                <section className='left-0 w-[20%]'>
                    <LeftMenu />
                </section>
                <section className="w-[60%]">
                     {children}
                </section>
               
                <section className='right-0 w-[20%] border-l'>
                     <RightMenu/>
                </section>
               
            </main>
        </>
    )
}