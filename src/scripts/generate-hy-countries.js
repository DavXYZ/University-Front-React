// scripts/generate-hy-countries.js
import fs from 'fs';
import axios from 'axios';
import countries from 'world-countries';

async function fetchArmenianName(cca2) {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${cca2}?fields=translations`);
    // Armenian translation is under translations.arm.common
    return res.data[0].translations.arm.common;
  } catch (err) {
    console.warn(`  → no Armenian translation for ${cca2}`);
    return null;
  }
}

async function main() {
  const hy = {};
  console.log('Fetching Armenian country names...');
  for (const c of countries) {
    const eng = c.name.common;
    const arm = await fetchArmenianName(c.cca2);
    hy[eng] = arm || eng; // fallback to English if missing
    console.log(`  ${eng} → ${hy[eng]}`);
  }

  const output = {
    country: hy
  };

  fs.writeFileSync(
    'public/locales/hy.json',
    JSON.stringify(output, null, 2),
    'utf-8'
  );
  console.log('Written public/locales/hy.json');
}

main().catch(console.error);
