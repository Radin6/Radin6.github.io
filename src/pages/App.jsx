import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import Project from '../components/Projects/Project';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <AboutMe />
        <Projects>
          <Project
            title={'Web3 Bank Project v1'}
            href={'./src/pages/bank-project/index.html'}
            text={
              'This is a simple Smart contract and Webpage that simulate a Bank.\
              Back-End: Solidity, Javascript, Front-End: Javascript, HTML and CSS'
            }
            imgurl={'./web3-bank.png'}
            alt={'profile pic'}
          />
          <Project
            title={'Calculator'}
            href={'https://radin6.github.io/calculator-app/'}
            text={'It is a Calculator made with React JS'}
            imgurl={'./calculator.jpg'}
            alt={'profile pic'}
          />
        </Projects>
      </main>
    </>
  );
}

export default App;
