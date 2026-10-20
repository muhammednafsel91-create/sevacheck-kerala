/**
 * SevaCheck Kerala — Central Service Registry
 * Initializes window.SevaRegistry and handles modular service registration
 * for all government services across category data modules.
 */

window.SevaRegistry = {
  services: [],
  register: function (items) {
    if (!Array.isArray(items)) {
      console.error("SevaRegistry: Expected array of services, got:", typeof items);
      return;
    }

    let added = false;

    items.forEach(item => {
      // Prevent duplicate service ID registration
      const exists = this.services.some(s => s.id === item.id);

      if (exists) {
        console.warn("SevaRegistry: Duplicate service ID ignored:", item.id);
      } else {
        this.services.push(item);
        added = true;
      }
    });

    // Notify the application whenever new services are registered
    if (added && typeof window.dispatchEvent === "function") {
      window.dispatchEvent(new CustomEvent("seva-registry-updated", {
        detail: { count: this.services.length }
      }));
    }
  }
};

/**
 * Global Category & Subcategory Taxonomy
 * Defines the subcategory structure for navigation and filtering.
 */
window.CATEGORIES_CONFIG = window.CATEGORIES_CONFIG || {};

window.CATEGORIES_CONFIG.education = {
  id: "education",
  name: "വിദ്യാഭ്യാസം",
  nameEn: "Education",
  icon: "🎓",
  desc: "സ്കോളർഷിപ്പുകൾ, സർവ്വകലാശാലകൾ, പ്രവേശന പരീക്ഷകൾ, ധനസഹായം",
  subcategories: [
    {
      id: "central-govt-education",
      name: "കേന്ദ്ര സർക്കാർ വിദ്യാഭ്യാസം",
      nameEn: "Central Government Education",
      icon: "🇮🇳"
    },
    {
      id: "kerala-govt-education",
      name: "കേരള സർക്കാർ വിദ്യാഭ്യാസം",
      nameEn: "Kerala Government Education",
      icon: "🏛️"
    },
    {
      id: "universities",
      name: "സർവ്വകലാശാലകൾ",
      nameEn: "Universities",
      icon: "🎓",
      children: [
        {
          id: "univ-kerala",
          name: "കേരളത്തിലെ സർവ്വകലാശാലകൾ",
          nameEn: "Kerala Universities",
          icon: "🎓"
        },
        {
          id: "univ-central",
          name: "കേന്ദ്ര സർവ്വകലാശാലകൾ",
          nameEn: "Central Universities",
          icon: "🇮🇳"
        },
        {
          id: "univ-other",
          name: "മറ്റ് സർവ്വകലാശാലകൾ",
          nameEn: "Other Universities",
          icon: "🏫"
        }
      ]
    },
    {
      id: "institutions",
      name: "വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ",
      nameEn: "Educational Institutions",
      icon: "🏛️"
    },
    {
      id: "entrance-admissions",
      name: "പ്രവേശന പരീക്ഷകൾ & അഡ്മിഷൻ",
      nameEn: "Entrance Exams & Admissions",
      icon: "🎯"
    },
    {
      id: "education-finance",
      name: "വിദ്യാഭ്യാസ വായ്പ & ധനസഹായം",
      nameEn: "Education Finance & Fee Support",
      icon: "💰"
    },
    {
      id: "education-grievances",
      name: "പരാതികളും അവകാശങ്ങളും",
      nameEn: "Education Complaints & Grievances",
      icon: "📝"
    }
  ]
};

// Backward compatibility bridge for script.js and existing data modules
window.services = window.SevaRegistry.services;
window.servicesData = window.SevaRegistry.services;
