# Simple Chat

This project is an example of a simple chat application using WebSockets.

<img src="https://live.staticflickr.com/65535/51097792273_9f24767bd0_b.jpg"/>

### Built With

- ReactJS
- Node.js

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" height="80"/>
<img src="https://www.luiztools.com.br/wp-content/uploads/2017/03/nodejs-logo.png" height="80"/>

<br/>

<img src="https://img.shields.io/badge/License-MIT-blue"/>
<img src="https://img.shields.io/badge/Pull%20Requests-Welcome-brightgreen"/>

<hr/>

<!-- GETTING STARTED -->

## Install instructions

### Prerequisites

You need to have Node.js installed on your machine. If you don't have it, get it [here]('https://nodejs.org/en/').

You will also need to have npm installed. With Node.js installed, you can run the following commando to get npm, if you don't already have it.

```sh
npm install npm@latest -g
```

### Installation

1. Clone chat
   ```sh
   git clone https://github.com/Dudu671/chat.git
   ```
2. Clone chat-backend
   ```sh
   git clone https://github.com/Dudu671/chat-backend.git
   ```
3. Get in chat directory
   ```
   cd chat
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Get in chat-backend directory
   ```
   cd ../chat-backend
   ```
6. Install NPM packages
   ```sh
   npm install
   ```
7. Run chat-backend
   ```
   node server.js
   ```
8. Get your IPv4 address by running the following command on the CMD:
   ```
   ipconfig
   ```
9. Create a file called .env at the root of the chat (NOT chat-backend) directory with the following content:
   ```
   REACT_APP_SERVER_ADDRESS=ws://your-ipv4-address-here:1350
   ```
10. Run chat
    ```
    npm start
    ```
11. Open your browser and enter the following address in the URL field:

    ```
    localhost:3000
    ```

    <!-- USAGE EXAMPLES -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Eduardo R. de Matos - eduardoooax@gmail.com
