
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Footer/>
        <Content/>
        <Title/>
        <h1>hello world </h1>

    </div>
  );
}

function Title(){
    return(
        <p>
        Lorem ipsum dolor sit amet.</p>
    )


}

function Header(){
    return (
       <h1>i am header component</h1>

    )
}

function Footer(){
    return(
        <h1>i am footer component</h1>
    )
}

function Content(){
    return(
        <h2>i am content component</h2>
    )
}

export default App;
