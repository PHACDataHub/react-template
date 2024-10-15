import { GcdsHeader } from "@cdssnc/gcds-components-react"
import { useTranslation } from "react-i18next"

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
                        <button className="astext" onClick={() => changeLanguage("fr")}>
                            French
                        </button>
                    ) : (
                        <button className="astext" onClick={() => changeLanguage("en")}>
                            English
                        </button>
                    )}
                </div>
            </GcdsHeader>
        </div>
    );
}

export default Header;