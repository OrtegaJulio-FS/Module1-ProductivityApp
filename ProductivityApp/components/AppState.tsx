import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'nativewind';
import { Settings } from '../types';
import { loadSettings, saveSettings } from '../services/settings';
const Context = createContext({settings: {name: '', theme: 'light'} as Settings, error: '', ready: false, save: async (_: Settings) => {}});
export function AppState({children}: {children: React.ReactNode}) {
 const [settings, setSettings] = useState<Settings>({name:'', theme:'light'});
 const [error, setError] = useState(''); const [ready, setReady] = useState(false);
 const {setColorScheme} = useColorScheme();
 useEffect(() => { loadSettings().then(value => {setSettings(value); setColorScheme(value.theme);}).catch(() => setError('Could not load saved preferences.')).finally(() => setReady(true)); }, []);
 async function save(value: Settings) { await saveSettings(value); setSettings(value); setColorScheme(value.theme); setError(''); }
 return <Context.Provider value={{settings, error, ready, save}}>{children}</Context.Provider>;
}
export const useAppState = () => useContext(Context);
