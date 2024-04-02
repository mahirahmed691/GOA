import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const defaultAvatar = "https://example.com/default-avatar.png";

const EditProfileModal = ({ isVisible, onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSaveChanges = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Bio:", bio);
    console.log("Avatar:", avatar);

    onClose();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            marginTop: 20,
          }}
        >
          <View style={{ backgroundColor: "#fff", flex: 1, width: "100%" }}>
            <TouchableOpacity
              onPress={onClose}
              style={{ position: "absolute", left: 10, top: 30 }}
            >
              <View style={{ padding: 10 }}>
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSaveChanges}
              style={{ position: "absolute", right: 10, top: 30 }}
            >
              <View style={{ padding: 10 }}>
                <Text>Save</Text>
              </View>
            </TouchableOpacity>

            <Image
              source={{ uri: avatar || defaultAvatar }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
                marginBottom: 20,
              }}
            />
            <Button title="Edit" onPress={pickImage} />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                padding: 15,
                marginBottom: 20,
                marginHorizontal: 20,
              }}
              placeholder="Username"
              placeholderTextColor="#000"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                padding: 15,
                marginBottom: 20,
                marginHorizontal: 20,
              }}
              placeholder="Email"
              placeholderTextColor="#000"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                padding: 15,
                marginBottom: 20,
                marginHorizontal: 20,
                height: 150,
              }}
              placeholder="Bio"
              placeholderTextColor="#000"
              multiline
              value={bio}
              onChangeText={setBio}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default EditProfileModal;
