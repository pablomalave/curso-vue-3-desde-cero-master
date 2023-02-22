<!-- Please update value in the {}  -->

<h1 align="center">Buscador de Perfiles de GITHUB</h1>

<div align="center">
     Ejercicio que forma parte del "Curso Vue 3 desde Cero" desarrollado por <a href="https://www.youtube.com/watch?v=ldMXgFlfmgk&list=PLM-Y_YQmMEqADwNySz6he0tkBr_awZ2tn" target="_blank">Juan Andrés Nuñez</a> en Youtube .
</div>

<div align="center">
  <h3>
    <a href="https://notifications-page-main-blond.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/pablomalave/notifications-page-main.git">
      Solution
    </a>
    <span> | </span>
    <a href="https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](./assets/imagesReadme/DesktopDesign.png)


This webpage shows a list of Notifications of an Application:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

![screenshot](./assets/imagesReadme/MobileDesign.png)

### What I learned

The use of forEach() method to calls a function for each element in an array.

```js
const notificationsUnread = document.querySelectorAll(".notification--unread");
    notificationsUnread.forEach(removeClass, "notification--unread");

 function removeClass(item) {
    item.classList.remove(this);
}   
```
With the second argument in the forEach() method, a value passed to the function as its this value.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- HTML, CSS, CSS Grid, CSS Flex.
- JavaScript.
- Mobile First Design.
- Responsive Design.

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [FrontEnd Mentor](https://www.frontendmentor.io/challenges) challenge. The [challenge](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC) was to build an application to complete the given user stories.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

- MDN Web Docs. [Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- W3 Schools. [JavaScript Array.from() method](https://www.w3schools.com/jsref/jsref_from.asp)
- W3 Schools. [JavaScript Maps](https://www.w3schools.com/js/js_object_maps.asp#)
- W3 Schools. [Window localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)


## Contact

- Website [Pablo Malave - GithubPages](https://pablomalave.github.io/CV/)
- GitHub [@pablomalave](https://github.com/pablomalave)