import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Settings } from '../types';
const KEY = 'focus.settings.v1';
export async function loadSettings(): Promise<Settings> {
 const raw = Platform.OS === 'web' ? await AsyncStorage.getItem(KEY) : await SecureStore.getItemAsync(KEY);
 if (!raw) return {name: '', theme: 'light'};
 const value = JSON.parse(raw);
 return {name: typeof value.name === 'string' ? value.name : '', theme: value.theme === 'dark' ? 'dark' : 'light'};
}
export async function saveSettings(settings: Settings) {
 const raw = JSON.stringify(settings);
 if (Platform.OS === 'web') await AsyncStorage.setItem(KEY, raw); else await SecureStore.setItemAsync(KEY, raw);
}
