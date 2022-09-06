import React from "react";
import '../Pages/Home.css'

function Home() {
  return (
    <div>
      <h1>Kim's Krystal Healing App</h1>
      {/* Special FONT */}
      <span>
        <p>
          Learn the healing properties of Natural Krystals. To harness their
          energy, raise your vibrations, align your chakra and stay positive
          though the journey of life ...
        </p>
      </span>

      <h2>Chakra</h2>
      <p>
        In Sanskrit, the word “chakra” means “disk” or “wheel” and refers to the
        energy centers in your body. These wheels or disks of spinning energy
        each correspond to certain nerve bundles and major organs. To function
        at their best, your chakras need to stay open, or balanced. If they get
        blocked, you may experience physical or emotional symptoms related to a
        particular chakra. There are seven main chakras that run along your
        spine. They start at the Root, or base of your spine and extend upwards
        to the Sacral, Solar Plexus, Heart, Throat, Third Eye, and to the Crown
        of your head.{" "}
      </p>

      <img src="../Image4.jpeg" alt="Chakra" width={500} height={500} />

      <p>
        {" "}
        As chakra stones are believed to hold vibrational energy, they can
        balance out our emotional, physical, and spiritual energies. For that
        reason, having a crystal can help balance and re-tune your chakras.{" "}
      </p>

      <img src="../Image3.webp" alt="Chakra-stones" width={500} height={500} />

      <h2>Numerology</h2>
      <p>
        One of the most wonderful aspects of working with metaphysical tools
        such as numerology, astrology, and crystals is the fact that these tools
        can easily be used together — and when they are, their healing
        properties and clarifying abilities are more enhanced than ever!
      </p>
    </div>
  );
}

export default Home;
