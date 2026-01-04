export function HangmanWord()
{
    const word = "Hello";
    return(
    <div style={
        {
            display: "flex",
            gap: "0.25rem",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace"
        }
    }>

    {word.split("").map((letter, index) =>
    <span> {letter} </span>
    )}    
    </div>
    )
}