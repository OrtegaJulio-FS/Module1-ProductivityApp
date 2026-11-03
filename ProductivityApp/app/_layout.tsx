import '../global.css';
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppState } from '../components/AppState';
export default function Layout() { return <SafeAreaProvider><AppState><SafeAreaView style={{flex:1}}><Stack screenOptions={{headerShown:false}} /></SafeAreaView></AppState></SafeAreaProvider>; }
