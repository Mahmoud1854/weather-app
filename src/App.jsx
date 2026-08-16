import Header from "./components/header/header"
import Card from "./components/card/card"
import "./index.css"
import { useTranslation } from "react-i18next"
export default function App() {
  const { i18n } = useTranslation();
  return (
    <main dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <Header />
      <Card />
    </main>
  )
}
