import { useEffect } from 'react';
import './App.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const ExampleData = [
  {
    id: 1,
    name: 'John Smith',
    description: 'first text',
  },
  {
    id: 2,
    name: 'Watson',
    description: 'second text',
  },
  {
    id: 3,
    name: 'Maxwell',
    description: 'third text',
  },
]


function App() {

  useEffect(() => {
    for (const iterator of ExampleData) {
      const instances = tippy(`#tippy${iterator.id}`, {
        content: iterator.name,
        allowHTML: true,
        arrow: true,
        hideOnClick: false,
        placement: 'auto',
      })
      instances[0].show();
    }
  }, [])


  return (
    <div className="">
      {ExampleData.map((data) => (
        <p key={data.id} id={'tippy' + data.id} className='tip-head'>{data.description}</p>
      ))}
    </div>
  );
}

export default App;
