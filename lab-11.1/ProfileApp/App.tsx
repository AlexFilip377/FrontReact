import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, SafeAreaViewBase } from "react-native";
import { ProfileCard } from "./src/components/ProfileCard";
import { ContactSection } from "./src/components/ContactSection";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileCard
          name='Ivan Ivanov'
          role='student'
          avatar="https://randomuser.me/api/portraits/men/1.jpg"
          bio='Учучь, работаю и т.д.'
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  scrollContent: {
    paddingVertical: 20,
  },
});