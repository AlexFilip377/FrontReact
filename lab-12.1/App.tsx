import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  AdaptiveLayout,
  FeatureCard,
  ResponsiveImage,
  StatsRow,
} from "./src/components/AdaptiveLayout";
import { Card, GridLayout } from "./src/components/GridLayout";
import {
  ResponsiveContainer,
  ResponsiveHeader,
} from "./src/components/ResponsiveHeader";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={appStyles.root}>
        <ResponsiveHeader
          title="Lab 12.1 — Flexbox"
          leftAction={{ icon: "☰", onPress: () => {} }}
          rightAction={{ icon: "⋯", onPress: () => {} }}
        />
        <ResponsiveContainer>
          <AdaptiveLayout
            content={
              <>
                <Text style={appStyles.sectionTitle}>Stats</Text>
                <StatsRow
                  stats={[
                    { label: "Items", value: "24" },
                    { label: "Done", value: "18" },
                    { label: "Left", value: "6" },
                  ]}
                />

                <Text style={appStyles.sectionTitle}>Features</Text>
                <FeatureCard
                  icon="📱"
                  title="Responsive"
                  description="Layouts adapt using Flexbox and useWindowDimensions."
                  variant="primary"
                />
                <FeatureCard
                  icon="🛡️"
                  title="Safe areas"
                  description="Header and insets respect notches and system UI."
                  variant="secondary"
                />
                <FeatureCard
                  icon="📐"
                  title="Grid"
                  description="GridLayout splits children into rows and columns."
                  variant="accent"
                />

                <ResponsiveImage
                  source={{ uri: "https://picsum.photos/800/450" }}
                />

                <Text style={appStyles.sectionTitle}>Card grid</Text>
                <GridLayout columns={2} spacing={12}>
                  <Card title="Alpha" subtitle="Row 1" />
                  <Card title="Beta" subtitle="Row 1" />
                  <Card title="Gamma" subtitle="Row 2" />
                  <Card title="Delta" subtitle="Row 2" />
                </GridLayout>
              </>
            }
            footer={
              <Text style={appStyles.footerText}>
                Rotate the device or resize the window to see responsive
                behavior. On wide screens (≥768), a sidebar appears.
              </Text>
            }
          />
        </ResponsiveContainer>
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

const appStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  footerText: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },
});
