export const supportedLanguages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'es', title: 'Español' },
    { id: 'pt', title: 'Portugues' }
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault);

export const getFieldsLanguage = () => {
    return supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'string',
        fieldset: lang.isDefault ? null : 'translations'
    }))
}
