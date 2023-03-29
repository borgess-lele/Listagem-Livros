import { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.Card}>
        <Image
          style={{
            resizeMode: "stretch",
            width: "100%",
            height: 200,
            marginBottom: 10,
          }}
          source={{ uri: this.props.livro.capa }}
        />
        <View style={styles.textodocard}>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            {this.props.livro.titulo}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            {this.props.livro.preco}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.deletar()}
        >
          <Text>Remover</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ec0000",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 50,
  },

  content: {
    flex: 1,
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Card: {
    backgroundColor: "darkgrey",
    width: "40%",
    minHeight: 270,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
    justifyContent: "space-between",
  },
  textodocard: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    margin: 10,
  },
});
