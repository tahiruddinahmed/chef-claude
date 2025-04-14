import ReactMarkdown from 'react-markdown'

function cleanMarkdown(text) {
  return text.replace(/```(?:markdown)?\n?([\s\S]*?)\n?```/, '$1').trim();
}

export default function ClaudeRecipe(props) {
    const recipe = cleanMarkdown(props.recipe) 
    return (
      <section className='suggested-recipe-container' aria-live='polite'>
          <h2>Chef Claude Recommends: </h2>
          <ReactMarkdown>
            {recipe}
          </ReactMarkdown>
      </section>
    )
}