// Add this to your translation helper functions
const translateDynamic = async (text, targetLanguage) => {
    try {
      // Use a translation API (you'll need to implement or use a service)
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLanguage
        })
      });
      
      const data = await response.json();
      return data.translation || text; // Fallback to original if translation fails
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text if API fails
    }
  };
  
  // Modified translateName function
  const translateName = async (type, name) => {
    // First check static translations
    const staticTranslation = t(`${type}.${name}`);
    if (staticTranslation && staticTranslation !== name) return staticTranslation;
    
    // If no static translation, try dynamic translation
    if (i18n.language !== 'en') { // Don't translate if already English
      return await translateDynamic(name, i18n.language);
    }
    
    return name;
  };