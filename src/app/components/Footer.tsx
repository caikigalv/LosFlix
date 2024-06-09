import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


export const Footer = () => {
    return (
        <div>
            <div className="bg-purple-600 dark:bg-red-600 h-[110] w-screen md:h-[150px] mt-8 flex flex-col justify-center pt-4 pb-4 items-center ">

                <div className="md:flex justify-center items-center w-full">

                    <div className="flex justify-center ">
                        <p className="text-white text-[20px]">Developed by <span className="text-black dark:text-white">Caiki Carlos &copy;</span> </p>
                    </div>


                    <div className="flex justify-center items-center flex-col">
                        <p className="text-white uppercase font-bold text-2xl text-center">Social Media </p>
                        <div className="flex justify-center items-center  text-center  gap-8 mt-4 w-[400px]">
                            <a href="https://github.com/caikigalv"><FaGithub className="text-black dark:text-white text-[40px]" title="GitHub" /></a>
                            <a href="https://www.linkedin.com/in/caiki-carlos-43372b284/"><FaLinkedin className="text-black dark:text-white text-[40px]" title="LinkedIn" /></a>
                            <a href="https://www.instagram.com/caikicarlosoficial/"><FaInstagram className="text-black dark:text-white text-[40px]" title="Instagram" /></a>
                        </div>
                    </div>
                    <div>
                        <div id="contato" className="flex justify-center items-center gap-2 mt-4">
                            <IoPhonePortraitOutline className="text-black dark:text-white text-[20px]" />
                            <p className="text-white  text-[20px]">+55 (11) 98207-9986</p>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <TfiEmail className="text-black dark:text-white text-[20px]" />
                            <p className="text-white text-[20px] ">caikigalv@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}