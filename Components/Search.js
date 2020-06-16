// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItems'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

   
 
  _displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm),
    console.log(this.props.navigation ),
    this.props.navigation.navigate("Details", { idFilm: idFilm })
}
  

  constructor(props) {
    super(props)
    this.page = 0
    this.totalPages = 0
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: [],
      isLoading : false // Affiche temoin de chargement desactiver de base
    }
  }

  _loadFilms() {
    this.setState({ isLoading: true})
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({ 
            films: [...this.state.films , ...data.results ],
          isLoading : false 
        })
      })
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }

_searchFilms() {
  this.page = 0
  this.totalPages = 0
  this.setState({
    films: []
  }, ()=> {
    // J'utilise la paramètre length sur mon tableau de films pour vérifier qu'il y a bien 0 film
  console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
  this._loadFilms()
  })
  
}

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  render() {
    const { film, displayDetailForFilm } = this.props
    return (
        <View
            style={styles.main_container}
            onPress={() => displayDetailForFilm(film.id)}

          > 
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchFilms()}
        />
        <Button title='Rechercher' onPress={() => this._searchFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages) {
              this._loadFilms()
            }
          }}
       
          renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
        />
        {this._displayLoading()}
      </View>
      
    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)',
    paddingTop: 3
  },
  textinput: {
    marginLeft: 0,
    marginRight: 0,
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    paddingLeft: 5,
    color: '#FFFFFF'
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search ;
