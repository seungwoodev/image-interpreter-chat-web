import React, { useState } from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {


    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Unichat</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://legitimation.netlify.app">Chatting</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar