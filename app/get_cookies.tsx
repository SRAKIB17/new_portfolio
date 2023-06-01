import { useEffect, useState } from "react";

import { usePathname } from 'next/navigation'
type TmpCookiesObj = { [key: string]: string } | Partial<{ [key: string]: string }>;
const Get_cookies = () => {
    const [lang, setLang] = useState('')
    useEffect(() => {
        const _cookies: TmpCookiesObj = {}
        const documentCookies = document.cookie ? document.cookie.split('; ') : [];

        for (let i = 0, len = documentCookies.length; i < len; i++) {
            const cookieParts = documentCookies[i].split('=');

            const _cookie = cookieParts.slice(1).join('=');
            const name = cookieParts[0];
            _cookies[name] = _cookie;
        }
        setLang(_cookies.lang ? _cookies.lang : 'en')
        return () => {
            "rewrwerr"
        }
    }, [usePathname()])
    return lang
};

export default Get_cookies;