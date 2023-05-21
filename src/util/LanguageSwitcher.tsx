// language switcher component
// exports a list of languages with i18n locale change on select
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next"

interface Ilangauges {
    [lng: string]: {
        nativeName: string;
        name: string;
    }
}

// available languages
const languages: Ilangauges = {
    de: { nativeName: 'Deutsch', name: 'German' },
    en: { nativeName: 'English', name: 'English' },
}

const LanguageSwitcher = ({ fullDescription }: { fullDescription: boolean; }) => {
    const { i18n } = useTranslation()

    // forming options list fomr languages
    const lngOptions = Object.entries(languages).map((entry, index) => (
        <option key={index} value={entry[1].nativeName}>{fullDescription ? entry[1].nativeName : entry[0]}</option>
    ))

    // switching languages on item select
    const switchLanguage = async (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Object.keys(languages).find(lng => languages[lng].nativeName === event.target.value)
        i18n.changeLanguage(selectedValue)
    }

    return (
        <select
            value={languages[i18n.language.split(/-|_/)[0]].nativeName}
            onChange={(e) => switchLanguage(e)}
        >
            {lngOptions}
        </select>
    )
}

export default LanguageSwitcher