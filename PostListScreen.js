
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function PostListScreen() {
  const [posts, setPosts] = useState([]);

  // Simulating API fetch
  useEffect(() => {
    const fakePosts = [
      { id: "1", title: "First Post" },
      { id: "2", title: "Second Post" },
      { id: "3", title: "Third Post" },
    ];
    setPosts(fakePosts);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Post List</Text>
      </View>

      {/* Middle (Posts) */}
      <View style={styles.listContainer}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postItem}>
              <Text style={styles.postText}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>End of List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen
    backgroundColor: "#f8f9fa",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 6, // Middle area bigger
    padding: 10,
  },
  postItem: {
    padding: 15,
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    marginBottom: 10,
  },
  postText: {
    fontSize: 18,
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#343a40",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
  },
});
