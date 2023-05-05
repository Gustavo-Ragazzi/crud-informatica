import AdvancedFilter from './components/AdvancedFilter/AdvancedFilter';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className='flex h-screen bg-gray-800'>
        <AdvancedFilter ></AdvancedFilter>
        <MainContainer></MainContainer>
    </div>
  );
}

export default App;
