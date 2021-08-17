import React from 'react'
import PropTypes from 'prop-types'

//import React, { Component } from 'react'
//  class UserItem extends Component {
// //    constructor() {
// //      super();
// //      this.state={
// //          id:'id',
// //          login:'mojombo',
// //          avatar_url:'https://avatars.githubusercontent.com/u/1?v=4',
// //          html_url:'https://github.com/mojombo',
// //      }
// //    }
//     //   state={
//     //          id:'id',
//     //          login:'mojombo',
//     //          avatar_url:'https://avatars.githubusercontent.com/u/1?v=4',
//     //          html_url:'https://github.com/mojombo',
//     //      }
//     render() {
//         const {avatar_url, login, html_url} = this.props.user;
//         return (
//             <div className='card text-center'>
//                 <img src={avatar_url} 
//                 alt="" 
//                 className='round-img'
//                 style={{width:'60px'}}/>
//                 <h3>{login}</h3>
//                 <div>
//                     <a href={html_url} className="btn btn-dark btn-sm my-1">
//                         More
//                     </a>
//                 </div>
                
//             </div>
//         )
//     }
// }

const UserItem =({user:{avatar_url, login, html_url}})=> {
         
            // const {avatar_url, login, html_url} = props.user;
            return (
                <div className='card text-center'>
                    <img src={avatar_url} 
                    alt="" 
                    className='round-img'
                    style={{width:'60px'}}/>
                    <h3>{login}</h3>
                    <div>
                        <a href={html_url} className="btn btn-dark btn-sm my-1">
                            More
                        </a>
                    </div>
                    
                </div>
            )
        
    }
    
    UserItem.propTypes = {
        user:PropTypes.object.isRequired,
    }

export default UserItem
