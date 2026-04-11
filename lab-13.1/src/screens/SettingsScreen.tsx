import React, { useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Alert,
} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type SettingsScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>;
};

interface SettingRowProps {
    label: string;
    description?: string;
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    onPress?: () => void;
    showArrow?: boolean;
}

function SettingRow({
    label,
    description,
    value,
    onValueChange,
    onPress,
    showArrow = false,
}: SettingRowProps) {
    const content = (
        <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
                <Text style={styles.settingLabel}>{label}</Text>
                {description && (
                    <Text style={styles.settingDescription}>{description}</Text>
                )}
            </View>
            {onValueChange !== undefined && value !== undefined && (
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    trackColor={{ false: '#e0e0e0', true: '#0066cc'}}
                    thumbColor={value ? '#ffffff' : '#f4f4f4'}
                />
            )}
            {showArrow && <Text style={styles.arrow}>{'\u203A'}</Text>}
        </View>
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                {content}
            </TouchableOpacity>
        );
    }

    return content;
}

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);
    const [analytics, setAnalytics] = useState(false);

    const handleLogout = () => {
        Alert.alert(
            'Log Out',
            'Вы уверены, что хотите выйти?',
            [
                { text: 'Отмена', style: 'cancel' },
                {
                    text: "Выход",
                    style: 'destructive',
                    onPress: () => {
                        Alert.alert('Успешный выход');
                    },
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Аккаунт</Text>
                    <View style={styles.sectionContent}>
                        <SettingRow
                            label='Редактировать профиль'
                            onPress={() => navigation.navigate('Profile', { userId: '123' })}
                            showArrow
                        />
                        <SettingRow
                            label="Сменить пароль"
                            onPress={() => Alert.alert('Смена пароля')}
                            showArrow
                        />
                        <SettingRow
                            label="Конфиденциальность"
                            onPress={() => Alert.alert('Настройки конфиденциальности')}
                            showArrow
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Персональные</Text>
                    <View style={styles.sectionContent}>
                        <SettingRow
                            label='Push уведомления'
                            description="Получать уведомления об активности"
                            value={notifications}
                            onValueChange={setNotifications}
                        />
                        <SettingRow
                            label='Темный режим'
                            description="Использовать темный режим"
                            value={darkMode}
                            onValueChange={setDarkMode}
                        />
                        <SettingRow
                            label="Автовоспроизведение"
                            description="Автоматически воспроизводить видео"
                            value={autoPlay}
                            onValueChange={setAutoPlay}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Информация</Text>
                    <View style={styles.sectionContent}>
                        <SettingRow
                            label="Аналитика"
                            description="Помогите улучшить приложение"
                            value={analytics}
                            onValueChange={setAnalytics}
                        />
                        <SettingRow
                            label="Очистить кэш"
                            onPress={() => Alert.alert('Кэш очищен')}
                            showArrow
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Поддержка</Text>
                    <View style={styles.sectionContent}>
                        <SettingRow
                            label="Центр поддержки"
                            onPress={() => Alert.alert('Центр поддержки')}
                            showArrow
                        />
                        <SettingRow
                            label="Связвться с нами"
                            onPress={() => Alert.alert('Связвться с нами')}
                            showArrow
                        />
                        <SettingRow
                            label="About"
                            onPress={() => Alert.alert('Версия 1.0.0')}
                            showArrow
                        />
                    </View>
                </View>

                <View style={styles.logoutSection}>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <Text style={styles.logoutButtonText}>Выход</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 20,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  sectionContent: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingInfo: {
    flex: 1,
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  settingDescription: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
  },
  logoutSection: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});