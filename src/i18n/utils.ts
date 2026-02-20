import { ui, defaultLang } from './ui';
import { getCollection, type CollectionEntry } from "astro:content";

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang && lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export async function getSortedCollection<T extends "experience" | "projects" | "education" | "courses">(collection: T, lang: string): Promise<CollectionEntry<T>[]> {
    const items = await getCollection(collection as any, ({ data }: any) => data.locale === lang);
    return items.sort((a: any, b: any) => (b.data.order || 0) - (a.data.order || 0)) as CollectionEntry<T>[];
}
