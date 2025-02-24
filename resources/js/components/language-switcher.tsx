import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

const LANGUAGES = {
    en: 'English',
    es: 'Español',
};

export function LanguageSwitcher() {
    const { props } = usePage();
    const currentLocale = typeof props.locale === 'string' ? props.locale : 'en';
    const [locale, setLocale] = useState<string>(currentLocale);

    const changeLanguage = (lang: string) => {
        setLocale(lang);
        console.log('Changing language to', lang);
        router.post(route('set-locale'), { locale: lang }, { preserveScroll: true });
    };

    return (
        <Select value={locale} onValueChange={changeLanguage}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecciona idioma" />
            </SelectTrigger>
            <SelectContent>
                {Object.entries(LANGUAGES).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                        {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
