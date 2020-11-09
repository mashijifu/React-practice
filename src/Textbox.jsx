const Textbox = ({ color, text, bgColor }) => {

  return (
    <div
        style={{
            backgroundColor: bgColor,
            border: '1px solid #000',
            borderRadius: '4px',
            margin: '12px',
            padding: '8px'
        }}
    >
    
        <h1>Textboxからです。</h1>
        <p style={{ color: color }}>{text}</p>
    </div>
  );
}

export default Textbox;