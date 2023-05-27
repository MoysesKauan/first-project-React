import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header class="header">
      <nav class="header-menu">
        <a
          class="header-menu-item"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >Comunit Computer</a
        >
        <a class="header-menu-item">Tutorial</a>
        <a class="header-menu-item">Open Source</a>
        <a class="header-menu-item">Commands</a>
      </nav>
    </header>

    <main class="contents">
      <section class="contents-main">
        <div class="contents-main-written">
          <h1 class="contents-main-written-title">Computer</h1>
          <h2 class="contents-main-written-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <button class="contents-main-written-button">Add here</button>
        </div>
        <img class="contents-main-image" src="main.avif" alt="logo main" />
      </section>

      <section class="contents-secondary">
        <h3 class="contents-secondary-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <p class="contents-secondary-paragraph">
          1. Lorem ipsum dolor sit amet consectetur.
        </p>
        <p class="contents-secondary-paragraph">
          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p class="contents-secondary-paragraph">
          3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
    </main>

    <footer class="footer">
      <h1>© 2023 Todos os direitos reservados.</h1>
    </footer>
    </>
  );
}

export default App;
