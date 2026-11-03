import { useEffect, useState } from 'react';
import { Text, TextInput, View, Switch } from 'react-native';
import { useAppState } from '../components/AppState';
import { Page, Label, Button, Notice, inputClass } from '../components/UI';
export default function SettingsScreen() {
 const {settings,save,error:loadError,ready}=useAppState(); const [name,setName]=useState(settings.name); const [dark,setDark]=useState(settings.theme==='dark'); const [message,setMessage]=useState(''); const [busy,setBusy]=useState(false);
 useEffect(()=>{setName(settings.name);setDark(settings.theme==='dark');},[settings]);
 async function submit(){setBusy(true);try{await save({name:name.trim(),theme:dark?'dark':'light'});setMessage('Preferences saved.');}catch{setMessage('Could not save preferences. Please try again.');}finally{setBusy(false);}}
 return <Page title="Your space." subtitle="A few preferences to make Focus feel like you."><Notice text={loadError || message}/><Label>Your name</Label><TextInput accessibilityLabel="Your name" className={inputClass} value={name} maxLength={60} onChangeText={setName}/><View className="mb-8 flex-row items-center justify-between rounded-xl bg-white p-5 dark:bg-slate-800"><View><Text className="font-bold text-slate-900 dark:text-white">Dark mode</Text><Text className="mt-1 text-slate-500 dark:text-slate-300">A calmer view after hours</Text></View><Switch accessibilityLabel="Dark mode" value={dark} onValueChange={setDark}/></View><Button title={busy?'Saving…':'Save preferences'} disabled={busy || !ready} onPress={()=>void submit()}/><Text className="mt-6 text-sm text-slate-500 dark:text-slate-400">Tasks stay on this device. Native settings use SecureStore. Web settings use browser storage and are not encrypted.</Text></Page>;
}
