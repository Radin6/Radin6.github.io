import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import Project from '../components/Projects/Project';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <AboutMe />
        <Projects>
          <Project
            title={'Servi'}
            href={'#'}
            text={
              'I am actually working in this project as Front End Dev. Servi connects freelancers to people or businesses looking to hire, with a wide range of services.'
            }
            imgurl={'./servi.png'}
            alt={'profile pic'}
          />
          <Project
            title={'Web3 Bank Project'}
            href={
              'https://radin6.github.io/portfolio-projects/bank-project/bank-project.html'
            }
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
      <Footer />
    </>
  );
}

export default App;
