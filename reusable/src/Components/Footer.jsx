import { GcdsFooter } from "@cdssnc/gcds-components-react"
import { useTranslation } from "react-i18next"

// THis is a temporary component
export default function Footer() {
    const { t, i18n } = useTranslation()
    return (
        <>
            <div style={{ backgroundColor: "rgb(38, 55, 74)", color: "white", margin: "0", padding: "0", marginTop: "50px" }}>
                <GcdsFooter
                    lang={i18n.language}
                />
            </div>
        </>
    )
}