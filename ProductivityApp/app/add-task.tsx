import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Priority } from '../types';
import { insertTask } from '../services/tasks';
import { Page, Label, Button, Notice, inputClass } from '../components/UI';
export default function AddTask() {
 const [title,setTitle]=useState(''); const [description,setDescription]=useState(''); const [priority,setPriority]=useState<Priority>('Medium'); const [busy,setBusy]=useState(false); const [error,setError]=useState('');
 async function submit() {if(!title.trim()){setError('Please enter a task title.');return;} setBusy(true);try {const now=Date.now();await insertTask({id:`${now}-${Math.random().toString(36).slice(2)}`,title:title.trim(),description:description.trim(),priority,completed:false,createdAt:now});router.replace('/');} catch {setError('Could not save your task. Please try again.');} finally {setBusy(false);}}
 return <Page title="A little progress." subtitle="Give your next step a name."><Notice text={error}/><Label>Task title</Label><TextInput accessibilityLabel="Task title" className={inputClass} placeholder="What needs to get done?" placeholderTextColor="#64748b" maxLength={120} value={title} onChangeText={setTitle}/><Label>Description</Label><TextInput accessibilityLabel="Task description" className={inputClass} placeholder="Add a few helpful details" placeholderTextColor="#64748b" multiline style={{minHeight:120,textAlignVertical:'top'}} maxLength={2000} value={description} onChangeText={setDescription}/><Label>Priority</Label><View className="mb-8 flex-row gap-3">{(['High','Medium','Low'] as Priority[]).map(item=><Pressable key={item} accessibilityRole="radio" accessibilityState={{selected:priority===item}} onPress={()=>setPriority(item)} className={`flex-1 rounded-xl border p-4 ${priority===item?'border-indigo-600 bg-indigo-100':'border-slate-300 bg-white'}`}><Text className="text-center font-semibold text-slate-800">{item}</Text></Pressable>)}</View><Button title={busy?'Saving…':'Create task'} disabled={busy} onPress={()=>void submit()}/></Page>;
}
