import React from 'react'
import { Button, Textarea } from 'evergreen-ui'

export default function App() {

// State for our summary of poem
const [summary, setSummary] = React.useState('')

return (
	<div style={{
	display: 'block', width: 700, paddingLeft: 30
	}}>
	<h4>TEXT AREA FOR INTRODUCTION/BIO</h4>
	<Textarea
		onChange={(e) => setSummary(e.target.value.toUpperCase())}
    
		placeholder="Write Your Bio"
  
	/> <br></br>
	Summary: {summary}
	</div>
);
}
