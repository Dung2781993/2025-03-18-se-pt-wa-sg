// Call someone
// Call for pizza for setting up a dinner
// Call for a taxi for picking up both you and your friend

import { getSongByTheirDuration} from './services/songService.js';

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/comments/1'
];

const fetchAllData = async () => {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url).then(response => {
      if (!response.ok) { // Check the status is 200
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })));
    console.log(responses);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


const fetchSongs = async () => {
  try {
    const response = await fetch('https://taylor-swift-api.sarbo.workers.dev/songs');
    if (!response.status === 200) { // Check the status is 200
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let result = await response.json();
    getSongByTheirDuration(result, 200);
    //2. Sort the songs by their release date in descending order
    //3. Map the songs to an array of objects with only the title and release date properties

    //console.log(result);
  } catch (error) {
    console.error('Error fetching song:', error);
  } 
}

// Design patterns

const user = new User('John Doe', 'abc@gmai.com'); // Design pattern: Factory