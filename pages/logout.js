import Cookies from "js-cookie"
import { useRouter } from "next/router";

export default function logout({token}) {
    const router = useRouter();
    const handleLogout =  ()=>{
        Cookies.remove("user");
        router.replace('/login');
    }

    return (
        <>
            <button onClick={handleLogout}>logout</button>
        </>
    )
}