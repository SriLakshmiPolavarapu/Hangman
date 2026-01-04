export function HangmanDrawing()
{
    return <div style={
        {
            position: "relative"
        }
    }>
        <div style={
            {
                height: "50px",
                width: "10px",
                background: "blue",
                position: "absolute",
                top: 0,
                right:0,
            }
        }>
        </div>

        <div style={
            {
                height: "10px",
                width: "200px",
                background: "blue",
                marginLeft: "120px",
                
            }
        }>
        </div>

        <div style={
            {
                height: "400px",
                width: "10px",
                background: "blue",
                marginLeft: "120px" , //120px because it's the half of width: 250px
                
            }
        }>
        </div>
        <div style={
            {
                height: "10px",
                width: "250px",
                background: "blue"
            }
        }>

        </div>

    </div>

}