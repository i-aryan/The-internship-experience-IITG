import React from 'react';
import Slider from './slider';
import { Col } from 'shards-react';

function App() {
  return (
    <React.Fragment>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark navbar-inverse navbar-fixed-top">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto navbar-right">
        <li class="nav-item active">
        <a class="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT</a>
      </li>
          </ul>
        </div>
        </div>
</nav>
      
      
        <div class="container-fluid" id="introduction">
         <h1 id="introduction">The Internship Experience IITG</h1>
          <p id="introduction" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam et ipsum at dui<br />aliquam aliquet vitae sed nunc. Aliquam pretium tellus sed risus condimentum,<br />eu faucibus nibh laoreet.</p>
         <br />
         <div class="btn-group" role="group">
            <button type="button" class="button1">2019</button>
            <button type="button" class="button2">2020</button>
         </div>
         </div>
         <br  />
      <Slider />
    </React.Fragment>
  );
}

export default App;