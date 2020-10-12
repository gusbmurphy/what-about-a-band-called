import React from "react";
import Container from "react-bootstrap/esm/Container";

export function About(): JSX.Element {
  return (
    <Container className={"mb-5"}>
      <h1>About</h1>
      <p>
        You'd think that when musicians gather together to talk about their trade, they might be talking about their favorite records, sharing chord voicings, or talking about vintage equipment. You'd be wrong. They are all sitting around saying "what about a band called" followed by a horrible pun. I would know—I have a degree in music, and this is the most prized skill of all.
      </p>
      <p>
        What About A Band Called was created by <a href="https://www.gusmurphy.computer/" target="_blank" rel="noopener noreferrer">Gus Murphy</a>, and has earned such praise as &ldquo;I think it looks alright.&rdquo; and &ldquo;That name is hard to say.&rdquo; If you're here, I'd love to know why, so please stop by <a href="https://www.gusmurphy.computer/" target="_blank" rel="noopener noreferrer">my site</a> and find my contact info there!
      </p>
    </Container>
  )
}