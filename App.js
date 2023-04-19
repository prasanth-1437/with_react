import './App.css';

function App() {
  return (
    <div>

      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light   nav-style fixed-top">
        <a class="navbar-brand" href="#">Blessed Basket</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#!addToCart"><div class="cart-opt">Cart<span class="notification" id="24"></span></div></a>
                <a class="nav-item nav-link" href="#">Pricing</a>
                <a class="nav-item nav-link disabled" href="#">Disabled</a>
            </div>
        </div>
    </nav>
    </div>
   
   

    </div>
  );
}

export default App;
