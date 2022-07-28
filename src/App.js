import React from "react";
//import ReactDom from "react-dom";
import Header from "./Pages/Header/Header";
// import "./index.css";
// import { Sweets } from "./Sweets";
// import { Cake } from "./Cakes/Cake";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
// function Sweetslist() {
//   return (
//     <section className="booklist">
//       {Sweets.map((sweet) => {
//         return <Cake key={sweet.id} sweet={sweet}></Cake>;
//       })}
//     </section>
//   );
// }

// ReactDom.render(<Sweetslist />, document.getElementById("root"));

// // const Book = (props) =>
// //   console.log(props);
// //   return (
// //     <article className="book">
// //       <img
// //         className="img"
// //         src="https://kidsbest.co.il/wp-content/uploads/2019/12/harie_sheahav_tut.jpg"
// //         alt=""
// //       />
// //       <h1>The Lion Who Loves Apple</h1>
// //       <h4>Tirza Atar</h4>
// //       <p>{props.job}</p>
// //       <p>{props.title}</p>
// //       <p>{props.number}</p>
// //     </article>
// //   );
// // };
