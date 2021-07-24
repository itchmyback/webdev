import React from 'react'

class Child extends React.Component {
  render(){
    return (
		// probably going to need to enclose everything in top level element div
        <div>
			{/* step 4. add props to match parent handler function, called sendData; it will be inside an onChange attribute */}
            <input type="text" placeholder="Please Enter Your Name" onChange={ this.props.sendData }/>
        </div>
    )
  }
} 

export default Child