

const ColorForm: React.FunctionComponent = () => {
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const color = (event.currentTarget.elements[0] as HTMLInputElement).value
    localStorage.setItem('color', color)
  }
  
  return (
    <div>
      <form onSubmit={submitForm}>
          <h1>Choose color</h1>
          <input type="text" id='color' placeholder="Ex. green"></input>
          <br />
          <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default ColorForm;