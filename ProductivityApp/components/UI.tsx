import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
export function Button({title, onPress, disabled = false}: {title: string; onPress: () => void; disabled?: boolean}) {
 return <Pressable accessibilityRole="button" accessibilityState={{disabled}} disabled={disabled} onPress={onPress} className={`rounded-xl bg-indigo-600 px-5 py-3 ${disabled ? 'opacity-50' : ''}`}><Text className="text-center font-bold text-white">{title}</Text></Pressable>;
}
export function Page({title, subtitle, children}: {title: string; subtitle: string; children: React.ReactNode}) {
 return <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950" contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled"><View className="mx-auto w-full max-w-3xl p-6"><View className="mb-8 flex-row flex-wrap gap-5"><Link href="/" asChild><Pressable accessibilityRole="link"><Text className="font-bold text-indigo-600 dark:text-indigo-300">FOCUS / Tasks</Text></Pressable></Link><Link href="/add-task" asChild><Pressable accessibilityRole="link"><Text className="text-slate-600 dark:text-slate-300">New task</Text></Pressable></Link><Link href="/settings" asChild><Pressable accessibilityRole="link"><Text className="text-slate-600 dark:text-slate-300">Settings</Text></Pressable></Link><Link href="/verification" asChild><Pressable accessibilityRole="link"><Text className="text-slate-600 dark:text-slate-300">Setup tests</Text></Pressable></Link></View><Text accessibilityRole="header" className="text-4xl font-bold text-slate-900 dark:text-white">{title}</Text><Text className="mb-7 mt-2 text-base text-slate-500 dark:text-slate-400">{subtitle}</Text>{children}</View></ScrollView>;
}
export const inputClass = 'mb-5 rounded-xl border border-slate-300 bg-white p-4 text-base text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-white';
export function Label({children}: {children: React.ReactNode}) { return <Text className="mb-2 font-semibold text-slate-700 dark:text-slate-200">{children}</Text>; }
export function Notice({text}: {text: string}) { return text ? <Text accessibilityRole="alert" className="mb-4 rounded-xl bg-amber-100 p-4 text-amber-900">{text}</Text> : null; }
