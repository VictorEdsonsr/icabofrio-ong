import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

const WhatsappButton = () => {
    return (
        <Link className="bg-green-600 fixed bottom-5 right-7 text-3xl p-4 rounded-full shadow-lg transition-all hover:scale-110 " href="https://wa.me/5522998051770" >
            <FaWhatsapp size={40} className="text-white" />
        </Link>
    )
}


export default WhatsappButton;

