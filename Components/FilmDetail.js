// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmDetail extends React.Component {
  render() {
    console.log(this.props)
    const{idFilm} = this.props.navigation.params;
    return (
      <View style={styles.main_container}>
        <Text>Détail du film ( idFilm {idFilm})</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

export default FilmDetail