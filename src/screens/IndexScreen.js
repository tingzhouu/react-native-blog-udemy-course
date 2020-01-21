import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button
        title="Add Blog Post"
        onPress={addBlogPost}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          )
        }}
        keyExtractor={(blogPost) => blogPost.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
})


export default IndexScreen
