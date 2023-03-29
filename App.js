import { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./src/components/Card.js";
export default class App extends Component {
  state = {
    livros: [
      {
        id: 1,
        capa: "https://m.media-amazon.com/images/I/91r5G8RxqfL.jpg",
        titulo: "É Assim Que Acaba",
        preco: "R$ 33,90",
      },
      {
        id: 2,
        capa: "https://m.media-amazon.com/images/I/51jiQtSEwDL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        titulo: "É Assim Que Começa",
        preco: "R$ 33,90",
      },
      {
        id: 3,
        capa: "https://m.media-amazon.com/images/I/51qO3gsELvL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        titulo: "As Mil Partes Do Meu Coração",
        preco: "R$ 31,19",
      },
      {
        id: 4,
        capa: "https://m.media-amazon.com/images/I/51-A+gK197L._SY344_BO1,204,203,200_.jpg",
        titulo: "Novembro 9",
        preco: "R$ 36,90",
      },
      {
        id: 5,
        capa: "https://m.media-amazon.com/images/I/51ccTKC7y1L._SX324_BO1,204,203,200_.jpg",
        titulo: "Até o Verão Terminar",
        preco: "R$ 36,90",
      },
      {
        id: 6,
        capa: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDCK1_tYFiOffsI5IKczHYG1m1GZIl7BGCeJnkwQE7IrIP3jfCkeR3EphQDasVHrlzcJ_KaKUs86wMV6VIgK8f8JQu-S_8A2deRH-DmZs&usqp=CAE",
        titulo: "Todas As Suas Imperfeições",
        preco: "R$ 36,90",
      },
      {
        id: 7,
        capa: "https://m.media-amazon.com/images/I/51RT++oGS6L._SY344_BO1,204,203,200_.jpg",
        titulo: "O Lado Feio Do Amor",
        preco: "R$ 32,90",
      },
      {
        id: 8,
        capa: "https://m.media-amazon.com/images/I/51fMZPtkW+L.jpg",
        titulo: "Uma Segunda Chance",
        preco: "R$ 60,71",
      },
    ],
  };
  deletar(livro) {
    const indice = this.state.livros.indexOf(livro);
    if (indice !== -1) {
      this.state.livros.splice(indice, 1);
      this.setState({ livros: this.state.livros });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{ fontSize: 30, marginBottom: 20, textAlign: "center" }}>
            Livraria
          </Text>

          <View style={styles.content}>
            {this.state.livros.map((livro) => (
              <Card
                livro={livro}
                deletar={() => this.deletar(livro)}
                key={livro.id}
              />
            ))}
          </View>
        </ScrollView>
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
