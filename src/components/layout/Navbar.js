//import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
// export class Navbar extends Component {
//     static defaultProps = {
//         title:'Navbar',
//         icon:"fas fa-icons"
//     }
//     static propTypes = {
//         title:PropTypes.string.isRequired,
//         icon:PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <nav className = 'navbar bg-primary'>
//                 <h1><i className={this.props.icon}/> {this.props.title}
//                 </h1>
//             </nav>
//         )
//     }
// }

const Navbar =({icon, title})=> {
        return (
            <nav className = 'navbar bg-primary'>
                <h1><i className={icon}/> {title}
                </h1>
            </nav>
        )
    
}
Navbar.defaultProps = {
    title:'Navbar',
    icon:"fas fa-icons"
}
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar
