const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    bn: () => import('./dictionaries/bn.json').then((module) => module.default),
    nl: () => import('./dictionaries/nl.json').then((module) => module.default),
};
interface test {
    'en': Promise<void>
}
export const getDictionary = async (locale: string): Promise<any> => {
    const language = dictionaries[locale as keyof test]
    if (language) {
        return language()
    }
    else {
        return await getDictionary('en')
    }
}
