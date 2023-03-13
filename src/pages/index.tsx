import { useEffect, useRef } from 'react'

export default function Home() {
  const ruffleContainer = useRef(null);

  useEffect(() => {
    async function loadRuffle() {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@ruffle-rs/ruffle";
      script.type = "text/javascript";
      script.onload = () => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("container");
        container?.appendChild(player);
        player.load("raft-wars.swf");
      };
      document.body.appendChild(script);
    }

    loadRuffle();
  }, []);

  return (
    <>
      <h1>{"Flash Game"}</h1>
      <h3>{"Raft Wars"}</h3>
      <div ref={ruffleContainer} className="w-full h-full flex justify-center items-center"></div>
      <div>
        <object width="1200" height="900">
          <param name="movie" value="raft-wars.swf" />
        </object>
      </div>
    </>
  )
}
