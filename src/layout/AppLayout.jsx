import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "../UI/Loading";

export const AppLayout =()=>{
    const navigation = useNavigation();
    const isLoading = navigation.state==="loading";
    // if(isLoading) return<Loading/>

    return(
        <>
        <Header/>
        {(isLoading)?<Loading/>:<Outlet/>}   
        <Footer/>
        </>
    )
} 