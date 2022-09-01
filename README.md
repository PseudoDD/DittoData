<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- <img src="./public/homepage-ss.png"></img> -->

DittoData allows developers to create dummy data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<ul>
 <li> <a href="https://reactjs.org/">React.js</a></li>
  <li> <a href="https://v5.reactrouter.com/web/api/HashRouter">React Hash Router</a></li>
 <li> <a href="https://expressjs.com/">Express</a></li>
 <li> <a href="https://nodejs.org/en/">Node.js</a></li>
  <li> <a href="https://mui.com/">Material UI</a></li>
 <li> <a href="https://www.postgresql.org/">PostgreSQL</a></li>
 <li> <a href="https://www.passportjs.org/">Passport.js</a></li>
  <li> <a href="https://github.com/visionmedia/supertest">Supertest</a></li>

</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install
  ```

### Installation

1. Get a free ElephantSQL URI from [https://www.elephantsql.com/](https://www.elephantsql.com/) and Google OAuth Client ID / Client Secret from https://console.cloud.google.com/apis/credentials.
2. Clone the repo
   ```sh
   git clone https://github.com/PseudoDD/DittoData.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env` in the root directory and enter your Database URI, Google Client ID, and Google Client Secret

   ```js
   const DB_KEY = 'ENTER YOUR ELEPHANTSQL URI';
   const GOOGLE_CLIENT_ID = 'ENTER YOUR GOOGLE CLIENT ID';
   const GOOGLE_CLIENT_SECRET = 'ENTER YOUR GOOGLE CLIENT SECRET';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Creating database.
- [x] Implement OAuth.
- [x] Standardize field types.
- [x] Create mock data algos.
- [x] Implement testing with Supertest.
- [ ] Implement testing with Jest.

<!-- See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Bruno Albero - [LinkedIn](https://www.linkedin.com/in/alberobruno/) - alberobruno@gmail.com
<br>
Michael Negron - [LinkedIn](https://www.linkedin.com/in/michaelvnegron/) - michaelnegronaudio@gmail.com
<br>
Sinian Ma - [LinkedIn](https://www.linkedin.com/in/sinian-ma/) - nycsinian@gmail.com
<br>
Stanley Chen - [LinkedIn](https://www.linkedin.com/in/stanwchen/) - stanchenw@gmail.com

DittoData: [https://github.com/PseudoDD/DittoData.gita](https://github.com/PseudoDD/DittoData.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
