import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';

// const HomePage = () => {
//   let navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/topics");
//   }
//   console.log(navigate)
//   return (
//     <div>
//       <button onClick={handleClick}>TOPICS</button>
//       <h1>HOME PAGE</h1>
//     </div>
//   );
// };

// const TopicsList = () => {
//   return (
//     <div>
//       <nav>
//         <Link to='me'>Static component Me</Link> <br />
//         <Link to='12'>to topic 12</Link> <br />
//         <Link to='34'>to topic 34</Link>
//       </nav>

//       <Routes>
//         <Route path=':topicId' element={<TopicDetail />} />
//         <Route path='me' element={<OwnUserProf />} />
//       </Routes>
//     </div>
//   );
// };

// const TopicDetail = () => {
//   let { topicId } = useParams();
//   console.log(topicId);
//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE: {topicId}</h1>
//     </div>
//   );
// };

// const OwnUserProf = () => {
//   return (
//     <div>
//       <h1>User profile me</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
        {/* <Route path='/topics/*' element={<TopicsList />} /> */}
      </Routes>
    </div>
  );
};

export default App;
