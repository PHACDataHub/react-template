import { GcdsHeader } from "@cdssnc/gcds-components-react"
import { useTranslation } from "react-i18next"
import Navigation from './Navigation/Navigation.jsx'

function Header() {

    const { i18n } = useTranslation()

    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="Header">
            <GcdsHeader
                langHref="#"
                skipToHref="#"
                role="banner"
                class="hydrated"
            >
                <div slot="toggle">
                    {i18n.language === "en" ? (
                        <a href="#" onClick={(e) => { e.preventDefault(); changeLanguage("fr"); }}>
                            French
                        </a>
                    ) : (
                        <a href="#" onClick={() => changeLanguage("en")}>
                            English
                        </a>
                    )}
                </div>
            </GcdsHeader>
            <Navigation />
        </div>
    );
}

export default Header;