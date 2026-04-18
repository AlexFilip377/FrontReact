// App.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';

export default function App() {
  const [screen, setScreen] = useState<'contacts' | 'registration'>('contacts');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, screen === 'contacts' && styles.activeTab]}
          onPress={() => setScreen('contacts')}
        >
          <Text style={styles.tabText}>Lab 14.1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, screen === 'registration' && styles.activeTab]}
          onPress={() => setScreen('registration')}
        >
          <Text style={styles.tabText}>Lab 14.2</Text>
        </TouchableOpacity>
      </View>

      {screen === 'contacts' ? <ContactsScreen /> : <RegistrationScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#0066cc',
    paddingTop: 50,
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});