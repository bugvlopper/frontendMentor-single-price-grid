import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Join our community</h1>
        <p>30-day, hassle-free money back guarantee</p>
        <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
      </div>
      <div className='bottom-section'>
        <div className='price-section'>
          <h2>Monthly Subscription</h2>
          <div>
            <div className='price'>
              <p>$29 </p>
              <p>per month</p>
            </div>
            <p>Full access for less than &#36;1 a day</p>
          </div>
          
          <button>Sign Up</button>
        </div>
        <div className='footer'>
          <h2>Why Us</h2>
          <ul>
            <li><a href="/">Tutorials by industry experts</a></li>
            <li><a href="/">Perr &amp; expert code review</a></li>
            <li><a href="/">Coding exercises</a></li>
            <li><a href="/">Access to our Github repos</a></li>
            <li><a href="/">Community forum</a></li>
            <li><a href="/">Flashcard decks</a></li>
            <li><a href="/">New videos every week</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
