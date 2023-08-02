import RightMenu from "@components/RightMenu"
import LeftMenu from "@components/Leftmenu"

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <>
            
            <main className="bg-gray-50 px-8 pt-24 flex justify-around flex-col md:flex-row">
                <section className='left-0 w-[20%]  hidden md:block '>
                    <LeftMenu />
                </section>
                <section className="w-[60%]">
                     {children}
                </section>
               
                <section className='bg-gray-100 rounded-md hidden md:block right-0 w-[20%]'>
                     <RightMenu/>
                </section>
               
            </main>
        </>
    )
}