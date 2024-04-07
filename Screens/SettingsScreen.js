import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

export default function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.settingsContainer}>
      <Text style={[styles.settingsTitle, { color: '#333', marginBottom: 20 }]}>Settings</Text>

      {/* Settings Options */}
      <TouchableOpacity style={[styles.settingsOption, { backgroundColor: '#f7f7f7' }]}>
        <Ionicons name="notifications" size={24} color="#00CDBC" style={styles.settingsOptionIcon} />
        <Text style={[styles.settingsOptionText, { color: '#000' }]}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.settingsOption, { backgroundColor: '#f7f7f7' }]}>
        <Ionicons name="key" size={24} color="#00CDBC" style={styles.settingsOptionIcon} />
        <Text style={[styles.settingsOptionText, { color: '#000' }]}>Privacy & Security</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.settingsOption, { backgroundColor: '#f7f7f7' }]}>
        <Ionicons name="help-circle" size={24} color="#00CDBC" style={styles.settingsOptionIcon} />
        <Text style={[styles.settingsOptionText, { color: '#000' }]}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.settingsOption, { backgroundColor: '#f7f7f7' }]}>
        <Ionicons name="log-out" size={24} color="#00CDBC" style={styles.settingsOptionIcon} />
        <Text style={[styles.settingsOptionText, { color: '#000' }]}>Log Out</Text>
      </TouchableOpacity>

      {/* Additional Settings for Seller's Hub */}
      <TouchableOpacity style={[styles.settingsOption, { backgroundColor: '#f7f7f7' }]}>
        <Ionicons name="wallet" size={24} color="#00CDBC" style={styles.settingsOptionIcon} />
        <Text style={[styles.settingsOptionText, { color: '#000' }]}>Payment Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.settingsOption, { backgroundColor: '#f7f7f7' }]}>
        <Ionicons name="storefront" size={24} color="#00CDBC" style={styles.settingsOptionIcon} />
        <Text style={[styles.settingsOptionText, { color: '#000' }]}>Store Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.settingsOption, { backgroundColor: '#f7f7f7' }]}>
        <Ionicons name="analytics" size={24} color="#00CDBC" style={styles.settingsOptionIcon} />
        <Text style={[styles.settingsOptionText, { color: '#000' }]}>Analytics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.settingsOption, { backgroundColor: '#f7f7f7' }]}>
        <Ionicons name="settings" size={24} color="#00CDBC" style={styles.settingsOptionIcon} />
        <Text style={[styles.settingsOptionText, { color: '#000' }]}>Advanced Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
