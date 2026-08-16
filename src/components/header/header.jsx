
import { IoLanguage } from "react-icons/io5";

import { useTranslation, } from "react-i18next";
export default function Header() {
  const {t, i18n} = useTranslation();
  function handleLanguageClick(){
    const newLanguage = i18n.language === "ar" ? "en": "ar";
    i18n.changeLanguage(newLanguage)
  }

  return (
    <header className="bg-[#031427] rounded-lg border-b border-white/20 h-22 flex items-center justify-between" >
    <div className="logo px-15">
        <h1 className=" cursor-pointer text-[#89CEFF] text-2xl sm:text-4xl font-bold font-ibm ">{t("logo")}</h1>
    </div>
    {/* div of buttons */}
    <div className="flex justify-between gap-7 px-15">

          <button onClick={handleLanguageClick} className="cursor-pointer flex items-center justify-center gap-1.5 w-30 h-13">
            <IoLanguage className="text-white font-bold text-2xl"/>
            <h2 className="text-white text-1xl sm:text-2xl font-bold font-ibm">{t("language")}</h2>
          </button>
    </div>
   </header>
  )
}
